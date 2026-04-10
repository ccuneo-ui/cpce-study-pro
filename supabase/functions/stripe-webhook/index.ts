import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import Stripe from "https://esm.sh/stripe@13.10.0?target=deno";

const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY")!, {
  apiVersion: "2023-10-16",
});

const endpointSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET")!;

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

// Safely convert Stripe timestamp (unix seconds or string) to ISO string
function toISO(val: any): string | null {
  if (!val) return null;
  if (typeof val === "number") return new Date(val * 1000).toISOString();
  if (typeof val === "string") return new Date(val).toISOString();
  return null;
}

function buildSubRecord(userId: string, subscription: any, customerId: string) {
  return {
    user_id: userId,
    stripe_subscription_id: subscription.id,
    stripe_customer_id: customerId,
    status: subscription.status,
    price_id: subscription.items?.data?.[0]?.price?.id || null,
    current_period_start: toISO(subscription.current_period_start),
    current_period_end: toISO(subscription.current_period_end),
    cancel_at_period_end: subscription.cancel_at_period_end || false,
  };
}

serve(async (req) => {
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response("Missing signature", { status: 400 });
  }

  const body = await req.text();

  let event: any;
  try {
    event = await stripe.webhooks.constructEventAsync(body, signature, endpointSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return new Response(`Webhook Error: ${err.message}`, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        if (session.mode === "subscription" && session.subscription) {
          const subscription = await stripe.subscriptions.retrieve(
            typeof session.subscription === "string" ? session.subscription : session.subscription.id
          );
          const userId = subscription.metadata.supabase_user_id;
          if (userId) {
            const customerId = typeof session.customer === "string" ? session.customer : session.customer?.id;
            await supabase.from("subscriptions").upsert(
              buildSubRecord(userId, subscription, customerId),
              { onConflict: "user_id" }
            );
          }
        }
        break;
      }

      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const subscription = event.data.object;
        const userId = subscription.metadata?.supabase_user_id;
        if (userId) {
          const customerId = typeof subscription.customer === "string" ? subscription.customer : subscription.customer?.id;
          await supabase.from("subscriptions").upsert(
            buildSubRecord(userId, subscription, customerId),
            { onConflict: "user_id" }
          );
        }
        break;
      }

      case "invoice.payment_succeeded": {
        const invoice = event.data.object;
        const subId = typeof invoice.subscription === "string" ? invoice.subscription : invoice.subscription?.id;
        if (subId) {
          const subscription = await stripe.subscriptions.retrieve(subId);
          const userId = subscription.metadata.supabase_user_id;
          if (userId) {
            const customerId = typeof invoice.customer === "string" ? invoice.customer : invoice.customer?.id;
            await supabase.from("subscriptions").upsert(
              buildSubRecord(userId, subscription, customerId),
              { onConflict: "user_id" }
            );
          }
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object;
        const subId = typeof invoice.subscription === "string" ? invoice.subscription : invoice.subscription?.id;
        if (subId) {
          const subscription = await stripe.subscriptions.retrieve(subId);
          const userId = subscription.metadata.supabase_user_id;
          if (userId) {
            await supabase.from("subscriptions").update({
              status: "past_due",
            }).eq("user_id", userId);
          }
        }
        break;
      }
    }
  } catch (err) {
    console.error("Webhook processing error:", err);
    return new Response(`Processing error: ${err.message}`, { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
});

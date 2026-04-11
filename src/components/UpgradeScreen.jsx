import { useState } from "react";
import { C, sCard, sBtn, globalCSS } from "../lib/constants";
import { useAuth } from "../lib/AuthContext";
import { supabase } from "../lib/supabase";

const PLANS = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$6.99",
    period: "/month",
    description: "Cancel anytime",
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_MONTHLY || "",
  },
  {
    id: "annual",
    name: "Annual",
    price: "$49.99",
    period: "/year",
    badge: "Save 40%",
    description: "Best value — just $4.17/month",
    stripePriceId: import.meta.env.VITE_STRIPE_PRICE_ANNUAL || "",
  },
];

const FEATURES = [
  "All 943 practice questions across 8 CACREP domains",
  "Unlimited timed challenges",
  "Full domain score tracking",
  "New questions added regularly",
  "Study for CPCE, NCE, NCMHCE & school comps",
];

export default function UpgradeScreen({ onBack, questionsUsed, freeLimit }) {
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheckout = async () => {
    if (!user) {
      setError("Please sign in first to subscribe.");
      return;
    }

    const plan = PLANS.find(p => p.id === selectedPlan);
    if (!plan?.stripePriceId) {
      setError("Subscription not yet available. Check back soon!");
      return;
    }

    setCheckoutLoading(true);
    setError(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
            apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
          },
          body: JSON.stringify({
            priceId: plan.stripePriceId,
            successUrl: window.location.origin + "/?upgraded=true",
            cancelUrl: window.location.origin + "/?cancelled=true",
          }),
        }
      );

      const result = await response.json();
      if (result.url) {
        window.location.href = result.url;
      } else {
        setError(result.error || "Could not start checkout. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
    setCheckoutLoading(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <style>{globalCSS}</style>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>Upgrade to Pro</h2>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Back</button>
      </div>

      {/* Usage Banner */}
      {questionsUsed !== undefined && (
        <div style={{
          ...sCard,
          marginBottom: 20,
          background: `${C.gold}11`,
          borderColor: `${C.gold}44`,
          textAlign: "center",
        }}>
          <div style={{ fontSize: 14, color: C.gold, fontWeight: 600, marginBottom: 4 }}>
            You've used {questionsUsed} of {freeLimit} free questions
          </div>
          <div style={{
            height: 6, borderRadius: 3, background: C.bdr, marginTop: 10, overflow: "hidden",
          }}>
            <div style={{
              height: "100%",
              width: `${Math.min(100, (questionsUsed / freeLimit) * 100)}%`,
              background: questionsUsed >= freeLimit ? C.wrong : C.gold,
              borderRadius: 3,
              transition: "width 0.3s",
            }} />
          </div>
        </div>
      )}

      {/* Plan Cards */}
      <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
        {PLANS.map(plan => (
          <button
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className="hoverable"
            style={{
              ...sCard,
              flex: 1,
              cursor: "pointer",
              textAlign: "center",
              fontFamily: "inherit",
              position: "relative",
              borderColor: selectedPlan === plan.id ? C.accent : C.bdr,
              background: selectedPlan === plan.id ? `${C.accent}11` : C.card,
            }}
          >
            {plan.badge && (
              <div style={{
                position: "absolute", top: -10, right: -6,
                background: C.correct, color: "#fff",
                fontSize: 11, fontWeight: 700, padding: "3px 8px",
                borderRadius: 6,
              }}>
                {plan.badge}
              </div>
            )}
            <div style={{ fontSize: 13, color: C.dim, fontWeight: 600, marginBottom: 8 }}>{plan.name}</div>
            <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Space Mono'" }}>
              {plan.price}
              <span style={{ fontSize: 14, fontWeight: 400, color: C.dim }}>{plan.period}</span>
            </div>
            <div style={{ fontSize: 12, color: C.dim, marginTop: 6 }}>{plan.description}</div>
          </button>
        ))}
      </div>

      {/* Features */}
      <div style={{ ...sCard, marginBottom: 20 }}>
        <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>What's included</div>
        {FEATURES.map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 10 }}>
            <span style={{ color: C.correct, fontSize: 16, lineHeight: 1 }}>✓</span>
            <span style={{ fontSize: 14, color: C.dim, lineHeight: 1.4 }}>{f}</span>
          </div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div style={{ ...sCard, background: `${C.wrong}11`, borderColor: `${C.wrong}44`, marginBottom: 16, fontSize: 14, color: C.wrong, textAlign: "center" }}>
          {error}
        </div>
      )}

      {/* Checkout Button */}
      <button
        className="hoverable"
        onClick={handleCheckout}
        disabled={checkoutLoading}
        style={{
          ...sBtn,
          opacity: checkoutLoading ? 0.7 : 1,
          fontSize: 17,
          padding: "16px 28px",
        }}
      >
        {checkoutLoading ? "Loading..." : `Start Pro — ${PLANS.find(p => p.id === selectedPlan).price}${PLANS.find(p => p.id === selectedPlan).period}`}
      </button>

      <div style={{ textAlign: "center", marginTop: 12, fontSize: 12, color: C.dim }}>
        Secure checkout powered by Stripe. Cancel anytime.
      </div>
    </div>
  );
}

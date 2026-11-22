import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./AuthContext";

// Free accounts get the questions marked free in the bank (five per content area).
// Pro status comes from the subscriptions table, which only the Stripe webhook can write.
const SubscriptionContext = createContext({ isPro: false, subscription: null, loading: true });

export function SubscriptionProvider({ children }) {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !supabase) { setSubscription(null); setLoading(false); return; }
    const check = async () => {
      try {
        const { data, error } = await supabase.from("subscriptions").select("*").eq("user_id", user.id).in("status", ["active", "trialing"]).maybeSingle();
        setSubscription(!error && data ? data : null);
      } catch { setSubscription(null); }
      setLoading(false);
    };
    check();
    // Re-check when the tab regains focus, which covers the return from Stripe checkout.
    window.addEventListener("focus", check);
    return () => window.removeEventListener("focus", check);
  }, [user]);

  // Local preview of Pro, available only when running `npm run dev`.
  const devPro = import.meta.env.DEV && typeof localStorage !== "undefined" && localStorage.getItem("dev-pro") === "1";
  return <SubscriptionContext.Provider value={{ isPro: !!subscription || devPro, subscription, loading }}>{children}</SubscriptionContext.Provider>;
}

export const useSubscription = () => useContext(SubscriptionContext);

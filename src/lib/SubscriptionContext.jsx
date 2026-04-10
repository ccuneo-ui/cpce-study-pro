import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./AuthContext";

const FREE_QUESTION_LIMIT = 25;

const SubscriptionContext = createContext({
  isPro: false,
  subscription: null,
  loading: true,
  questionsUsed: 0,
  questionsRemaining: FREE_QUESTION_LIMIT,
  canAnswer: true,
  recordQuestionAnswered: () => {},
  FREE_QUESTION_LIMIT,
});

export function SubscriptionProvider({ children }) {
  const { user } = useAuth();
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [questionsUsed, setQuestionsUsed] = useState(0);

  // Load questions used from localStorage
  useEffect(() => {
    try {
      const key = user ? `compexampro-qu-${user.id}` : "compexampro-qu-anon";
      const saved = localStorage.getItem(key);
      if (saved) setQuestionsUsed(parseInt(saved, 10) || 0);
    } catch {}
  }, [user]);

  // Check subscription status from Supabase
  useEffect(() => {
    if (!user || !supabase) {
      setSubscription(null);
      setLoading(false);
      return;
    }

    const checkSubscription = async () => {
      try {
        const { data, error } = await supabase
          .from("subscriptions")
          .select("*")
          .eq("user_id", user.id)
          .eq("status", "active")
          .maybeSingle();

        if (!error && data) {
          setSubscription(data);
        } else {
          setSubscription(null);
        }
      } catch {
        setSubscription(null);
      }
      setLoading(false);
    };

    checkSubscription();

    // Re-check subscription when window regains focus (after Stripe redirect)
    const handleFocus = () => checkSubscription();
    window.addEventListener("focus", handleFocus);
    return () => window.removeEventListener("focus", handleFocus);
  }, [user]);

  const isPro = !!subscription;
  const questionsRemaining = isPro ? Infinity : Math.max(0, FREE_QUESTION_LIMIT - questionsUsed);
  const canAnswer = isPro || questionsUsed < FREE_QUESTION_LIMIT;

  const recordQuestionAnswered = () => {
    if (isPro) return;
    const newCount = questionsUsed + 1;
    setQuestionsUsed(newCount);
    try {
      const key = user ? `compexampro-qu-${user.id}` : "compexampro-qu-anon";
      localStorage.setItem(key, String(newCount));
    } catch {}
  };

  return (
    <SubscriptionContext.Provider value={{
      isPro,
      subscription,
      loading,
      questionsUsed,
      questionsRemaining,
      canAnswer,
      recordQuestionAnswered,
      FREE_QUESTION_LIMIT,
    }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export const useSubscription = () => useContext(SubscriptionContext);

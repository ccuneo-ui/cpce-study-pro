import { useState } from "react";
import { useAuth } from "../lib/AuthContext";
import { supabase } from "../lib/supabase";
import { QUESTIONS, FREE_COUNT } from "../data/questions";
import { go } from "../ui";

const PLANS = [
  { id: "annual", name: "Annual", price: "$49.99", per: "a year", note: "Works out to $4.17 a month", priceId: import.meta.env.VITE_STRIPE_PRICE_ANNUAL || "" },
  { id: "monthly", name: "Monthly", price: "$6.99", per: "a month", note: "Billed every month until you cancel", priceId: import.meta.env.VITE_STRIPE_PRICE_MONTHLY || "" },
];

export default function Upgrade({ isPro }) {
  const { user } = useAuth();
  const [plan, setPlan] = useState("annual");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const chosen = PLANS.find((p) => p.id === plan);

  const checkout = async () => {
    if (!user) return go("/signin");
    if (!chosen.priceId || !supabase) return setError("Checkout is not available right now. Email support@compexampro.com and we will sort it out.");
    setBusy(true); setError(null);
    try {
      const { data, error: fnError } = await supabase.functions.invoke("create-checkout", {
        body: { priceId: chosen.priceId, successUrl: window.location.origin + "/?upgraded=true", cancelUrl: window.location.origin + "/?cancelled=true" },
      });
      if (fnError) setError(fnError.message || "Checkout could not start. Try again in a minute.");
      else if (data?.url) { window.location.href = data.url; return; }
      else setError(data?.error || "Checkout could not start. Try again in a minute.");
    } catch { setError("Checkout could not start. Check your connection and try again."); }
    setBusy(false);
  };

  if (isPro) return <div className="narrow page stack"><h2>You have Pro</h2><p className="muted">All {QUESTIONS.length} questions and both full-length exams are unlocked.</p><div><button className="btn" onClick={() => go("/")}>Back to home</button></div></div>;

  return (
    <div className="narrow page stack" style={{ "--gap": "22px" }}>
      <h2>Upgrade to Pro</h2>
      <div className="card stack">
        <h3>What Pro adds</h3>
        <table className="sheet"><tbody>
          <tr><td>Practice questions with explanations</td><td className="n">{FREE_COUNT} free</td><td className="n"><b>{QUESTIONS.length} with Pro</b></td></tr>
          <tr><td>Full-length timed exams (160 questions)</td><td className="n">–</td><td className="n"><b>2</b></td></tr>
          <tr><td>Missed-question review across the whole bank</td><td className="n">–</td><td className="n"><b>Included</b></td></tr>
        </tbody></table>
      </div>
      <div className="grid2" role="group" aria-label="Plan">
        {PLANS.map((p) => (
          <button key={p.id} className="card stack" style={{ textAlign: "left", borderWidth: 2, borderColor: plan === p.id ? "var(--ink)" : "var(--line)", background: plan === p.id ? "var(--tint)" : "#fff" }} aria-pressed={plan === p.id} onClick={() => setPlan(p.id)}>
            <span style={{ fontWeight: 700 }}>{p.name}</span>
            <span className="price">{p.price}<span style={{ fontSize: "1rem", fontWeight: 600 }}> {p.per}</span></span>
            <span className="small muted">{p.note}</span>
          </button>
        ))}
      </div>
      {error && <p className="note bad" role="alert">{error}</p>}
      <button className="btn go block" disabled={busy} onClick={checkout}>{busy ? "Opening checkout" : user ? "Continue to checkout, " + chosen.price + " " + chosen.per : "Create an account to continue"}</button>
      <p className="small muted">Payment is handled by Stripe. This is a subscription that renews until you cancel. To cancel, email support@compexampro.com from your account address.</p>
    </div>
  );
}

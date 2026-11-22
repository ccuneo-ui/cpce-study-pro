import { useState } from "react";
import { useAuth } from "../lib/AuthContext";
import { useProgress } from "../lib/ProgressContext";
import { SUPPORT, go } from "../ui";

export default function Account({ isPro }) {
  const { user, signOut } = useAuth();
  const { hist, reset } = useProgress();
  const [confirming, setConfirming] = useState(false);
  const answered = Object.values(hist).reduce((a, h) => a + h.n, 0);
  if (!user) return <div className="narrow page stack"><h2>Account</h2><p className="muted">You are not signed in.</p><div><button className="btn" onClick={() => go("/signin")}>Sign in or create an account</button></div></div>;
  return (
    <div className="narrow page stack" style={{ "--gap": "20px" }}>
      <h2>Account</h2>
      <div className="card stack">
        <div className="row between"><span className="muted">Email</span><span>{user.email}</span></div>
        <div className="row between"><span className="muted">Plan</span><span>{isPro ? "Pro" : "Free"}</span></div>
        <div className="row between"><span className="muted">Answers recorded</span><span className="num">{answered}</span></div>
        {!isPro && <div><button className="btn go" onClick={() => go("/upgrade")}>Upgrade to Pro</button></div>}
        {isPro && <p className="small muted">To cancel or change your subscription, email <a href={"mailto:" + SUPPORT + "?subject=Cancel%20my%20subscription"}>{SUPPORT}</a> from this address. You keep access through the period you paid for.</p>}
      </div>
      <div className="card stack">
        <h3>Reset progress</h3>
        <p className="muted">Clears your answer history, saved questions, exam scores, and flashcard marks. This cannot be undone.</p>
        {!confirming ? <div><button className="btn ghost" onClick={() => setConfirming(true)}>Reset my progress</button></div> : (
          <div className="row"><button className="btn" style={{ background: "var(--red)", borderColor: "var(--red)" }} onClick={() => { reset(); setConfirming(false); }}>Yes, erase everything</button><button className="btn ghost" onClick={() => setConfirming(false)}>Keep my progress</button></div>
        )}
      </div>
      <div><button className="btn ghost" onClick={async () => { await signOut(); go("/"); }}>Sign out</button></div>
    </div>
  );
}

import { useState } from "react";
import { useAuth } from "../lib/AuthContext";
import { supabase } from "../lib/supabase";
import { go } from "../ui";

export default function Auth() {
  const { signIn, signUp, resetPassword, updatePassword, recovering } = useAuth();
  const [mode, setMode] = useState("signup"); // signup | login | forgot
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState(null); // { bad, text }
  const [busy, setBusy] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setMsg(null);
    if ((mode === "signup" || recovering) && password.length < 8) return setMsg({ bad: true, text: "Use a password of at least 8 characters." });
    setBusy(true);
    let res;
    if (recovering) res = await updatePassword(password);
    else if (mode === "forgot") res = await resetPassword(email);
    else if (mode === "signup") res = await signUp(email, password);
    else res = await signIn(email, password);
    setBusy(false);
    if (res?.error) return setMsg({ bad: true, text: res.error.message });
    if (recovering) { setMsg({ text: "Password updated." }); go("/"); }
    else if (mode === "forgot") setMsg({ text: "If that address has an account, a reset link is on its way." });
    else if (mode === "signup" && !res?.data?.session) setMsg({ text: "Check your email for a confirmation link, then sign in." });
    else go("/");
  };

  const title = recovering ? "Choose a new password" : mode === "signup" ? "Create your account" : mode === "login" ? "Sign in" : "Reset your password";
  return (
    <div className="narrow page" style={{ maxWidth: 460 }}>
      <form className="card stack" onSubmit={submit}>
        <h2>{title}</h2>
        {!supabase && <p className="note bad">Accounts are not configured in this build. You can still use the free questions without one.</p>}
        {mode === "signup" && !recovering && <p className="muted">An account saves your progress across devices. It is free, and you only need one to upgrade.</p>}
        {!recovering && (
          <div><label className="f" htmlFor="em">Email</label><input id="em" className="in" type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
        )}
        {mode !== "forgot" && (
          <div><label className="f" htmlFor="pw">{recovering ? "New password" : "Password"}</label><input id="pw" className="in" type="password" required autoComplete={mode === "login" ? "current-password" : "new-password"} value={password} onChange={(e) => setPassword(e.target.value)} /></div>
        )}
        {msg && <p className={"note" + (msg.bad ? " bad" : "")} role="status">{msg.text}</p>}
        <button className="btn go block" disabled={busy}>{busy ? "Working" : recovering ? "Save new password" : mode === "signup" ? "Create account" : mode === "login" ? "Sign in" : "Email me a reset link"}</button>
        {!recovering && (
          <p className="row small">
            {mode !== "login" && <button type="button" className="link small" onClick={() => { setMode("login"); setMsg(null); }}>I already have an account</button>}
            {mode !== "signup" && <button type="button" className="link small" onClick={() => { setMode("signup"); setMsg(null); }}>Create an account</button>}
            {mode === "login" && <button type="button" className="link small" onClick={() => { setMode("forgot"); setMsg(null); }}>Forgot password</button>}
          </p>
        )}
      </form>
    </div>
  );
}

import { useState } from "react";
import { C, sCard, sBtn, globalCSS } from "../lib/constants";

export default function AuthScreen({ onSignUp, onSignIn, onSkip }) {
  const [mode, setMode] = useState("login"); // "login" or "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    fontSize: 15,
    fontFamily: "inherit",
    background: C.bg,
    border: `1px solid ${C.bdr}`,
    borderRadius: 12,
    color: C.text,
    outline: "none",
    transition: "border-color 0.15s",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    if (mode === "signup") {
      if (password !== confirmPassword) {
        setError("Passwords don't match");
        setLoading(false);
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters");
        setLoading(false);
        return;
      }
      const { error } = await onSignUp(email, password);
      if (error) {
        setError(error.message);
      } else {
        setSuccess("Check your email for a confirmation link!");
      }
    } else {
      const { error } = await onSignIn(email, password);
      if (error) {
        setError(error.message);
      }
    }
    setLoading(false);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 440, margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <style>{globalCSS}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 3, marginBottom: 6 }}>CompExamPro</div>
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2, marginBottom: 8 }}>Counselor Exam Prep</h1>
        <p style={{ color: C.dim, fontSize: 14 }}>
          {mode === "login" ? "Sign in to track your progress" : "Create an account to get started"}
        </p>
      </div>

      {/* Auth Card */}
      <div style={{ ...sCard, padding: 28 }}>
        {/* Tab Toggle */}
        <div style={{ display: "flex", marginBottom: 24, background: C.bg, borderRadius: 10, padding: 4 }}>
          <button
            onClick={() => { setMode("login"); setError(""); setSuccess(""); }}
            style={{
              flex: 1, padding: "10px 0", fontSize: 14, fontWeight: 600, fontFamily: "inherit",
              border: "none", borderRadius: 8, cursor: "pointer",
              background: mode === "login" ? C.accent : "transparent",
              color: mode === "login" ? "#fff" : C.dim,
              transition: "all 0.15s",
            }}
          >
            Log In
          </button>
          <button
            onClick={() => { setMode("signup"); setError(""); setSuccess(""); }}
            style={{
              flex: 1, padding: "10px 0", fontSize: 14, fontWeight: 600, fontFamily: "inherit",
              border: "none", borderRadius: 8, cursor: "pointer",
              background: mode === "signup" ? C.accent : "transparent",
              color: mode === "signup" ? "#fff" : C.dim,
              transition: "all 0.15s",
            }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: C.dim, display: "block", marginBottom: 6 }}>Email</label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              style={inputStyle}
            />
          </div>
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 13, fontWeight: 600, color: C.dim, display: "block", marginBottom: 6 }}>Password</label>
            <input
              type="password"
              name="password"
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              required
              style={inputStyle}
            />
          </div>
          {mode === "signup" && (
            <div style={{ marginBottom: 14 }}>
              <label style={{ fontSize: 13, fontWeight: 600, color: C.dim, display: "block", marginBottom: 6 }}>Confirm Password</label>
              <input
                type="password"
                name="confirm-password"
                autoComplete="new-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter your password"
                required
                style={inputStyle}
              />
            </div>
          )}

          {error && (
            <div style={{ padding: "10px 14px", borderRadius: 8, background: `${C.wrong}15`, border: `1px solid ${C.wrong}33`, color: C.wrong, fontSize: 13, marginBottom: 14 }}>
              {error}
            </div>
          )}
          {success && (
            <div style={{ padding: "10px 14px", borderRadius: 8, background: `${C.correct}15`, border: `1px solid ${C.correct}33`, color: C.correct, fontSize: 13, marginBottom: 14 }}>
              {success}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="hoverable"
            style={{ ...sBtn, opacity: loading ? 0.7 : 1, marginTop: 4 }}
          >
            {loading ? "..." : mode === "login" ? "Log In" : "Create Account"}
          </button>
        </form>
      </div>

      {/* Skip Option */}
      <button
        onClick={onSkip}
        style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: 14, fontFamily: "inherit", marginTop: 20, textAlign: "center", padding: 8 }}
      >
        Continue without an account →
      </button>

      <div style={{ textAlign: "center", fontSize: 11, color: C.dim, opacity: 0.6, marginTop: 16, lineHeight: 1.6 }}>
        By creating an account you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  );
}

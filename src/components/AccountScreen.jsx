import { C, sCard, sBtn, globalCSS } from "../lib/constants";

export default function AccountScreen({ user, stats, isPro, questionsUsed, freeLimit, onSignOut, onUpgrade, onBack }) {
  const pct = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;
  const memberSince = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("en-US", { month: "long", year: "numeric" })
    : "Unknown";

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <style>{globalCSS}</style>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>👤 Account</h2>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Back</button>
      </div>

      {/* Profile Card */}
      <div style={{ ...sCard, marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: C.dim, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Profile</div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: "50%",
            background: `linear-gradient(135deg, ${C.accent}, ${C.al})`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 700, color: "#fff",
          }}>
            {(user?.email?.[0] || "?").toUpperCase()}
          </div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{user?.email || "Unknown"}</div>
            <div style={{ fontSize: 13, color: C.dim }}>Member since {memberSince}</div>
          </div>
        </div>
      </div>

      {/* Subscription Status */}
      <div style={{ ...sCard, marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: C.dim, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Subscription</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            {isPro ? (
              <>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.correct }}>Pro Plan</div>
                <div style={{ fontSize: 13, color: C.dim, marginTop: 4 }}>All 943 questions unlocked</div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 16, fontWeight: 600, color: C.gold }}>Free Plan</div>
                <div style={{ fontSize: 13, color: C.dim, marginTop: 4 }}>
                  {questionsUsed !== undefined ? `${questionsUsed} of ${freeLimit} free questions used` : `${freeLimit} practice questions included`}
                </div>
              </>
            )}
          </div>
          {!isPro && (
            <button className="hoverable" onClick={onUpgrade} style={{
              background: C.accent, color: "#fff", border: "none", borderRadius: 10,
              padding: "10px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
            }}>
              Upgrade
            </button>
          )}
        </div>
      </div>

      {/* Stats Summary */}
      <div style={{ ...sCard, marginBottom: 16 }}>
        <div style={{ fontSize: 13, color: C.dim, fontWeight: 600, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Your Stats</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div>
            <div style={{ fontFamily: "'Space Mono'", fontSize: 24, fontWeight: 700 }}>{stats.total}</div>
            <div style={{ fontSize: 12, color: C.dim }}>Questions Answered</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Mono'", fontSize: 24, fontWeight: 700, color: pct >= 70 ? C.correct : pct > 0 ? C.gold : C.dim }}>{pct}%</div>
            <div style={{ fontSize: 12, color: C.dim }}>Accuracy</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Mono'", fontSize: 24, fontWeight: 700 }}>{stats.points}</div>
            <div style={{ fontSize: 12, color: C.dim }}>Points</div>
          </div>
          <div>
            <div style={{ fontFamily: "'Space Mono'", fontSize: 24, fontWeight: 700 }}>{stats.bestStreak}🔥</div>
            <div style={{ fontSize: 12, color: C.dim }}>Best Streak</div>
          </div>
        </div>
      </div>

      {/* Sign Out */}
      <button
        className="hoverable"
        onClick={onSignOut}
        style={{ ...sBtn, background: "transparent", border: `2px solid ${C.wrong}44`, color: C.wrong }}
      >
        Sign Out
      </button>
    </div>
  );
}

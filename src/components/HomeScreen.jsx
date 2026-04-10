import { Analytics } from "@vercel/analytics/react";
import { C, sCard, sBtn, globalCSS, DOMAIN_ICONS } from "../lib/constants";

export default function HomeScreen({ questions, flashcards, domains, stats, onStartQuiz, onStartFlashcards, onStartTimed, onShowDomainScores }) {
  const pct = stats.total ? Math.round((stats.correct / stats.total) * 100) : 0;

  const statCards = [
    { label: "Accuracy", value: `${pct}%` },
    { label: "Questions", value: stats.total },
    { label: "Points", value: stats.points },
    { label: "Best Streak", value: `${stats.bestStreak}🔥` },
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <style>{globalCSS}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 28, animation: "fi 0.4s ease-out" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 3, marginBottom: 6 }}>CompExamPro</div>
        <h1 style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>Counselor Exam Prep</h1>
        <p style={{ color: C.dim, fontSize: 14, marginTop: 6 }}>
          {questions.length} practice questions · {flashcards.length} flashcards · 8 domains
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 20 }}>
        {statCards.map((s, i) => (
          <div key={i} style={{ ...sCard, textAlign: "center", padding: 12 }}>
            <div style={{ fontFamily: "'Space Mono'", fontSize: 20, fontWeight: 700 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: C.dim, marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
        <button className="hoverable" onClick={() => onStartQuiz("All")} style={{ ...sCard, background: C.accent, border: "none", cursor: "pointer", fontFamily: "inherit", padding: 20, textAlign: "left", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 26 }}>📝</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>Practice Questions</span>
          <span style={{ fontSize: 12, opacity: 0.8, color: "#e0e0ff" }}>10-question sets</span>
        </button>
        <button className="hoverable" onClick={() => onStartFlashcards("All")} style={{ ...sCard, color: C.text, cursor: "pointer", fontFamily: "inherit", textAlign: "left", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 26 }}>🗂️</span>
          <span style={{ fontSize: 16, fontWeight: 700 }}>Flashcards</span>
          <span style={{ fontSize: 12, color: C.dim }}>Flip to reveal</span>
        </button>
        <button className="hoverable" onClick={() => onStartTimed("All")} style={{ ...sCard, color: C.text, cursor: "pointer", fontFamily: "inherit", textAlign: "left", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 26 }}>⚡</span>
          <span style={{ fontSize: 16, fontWeight: 700 }}>Timed Challenge</span>
          <span style={{ fontSize: 12, color: C.dim }}>30s per question</span>
        </button>
        <button className="hoverable" onClick={onShowDomainScores} style={{ ...sCard, color: C.text, cursor: "pointer", fontFamily: "inherit", textAlign: "left", display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 26 }}>📊</span>
          <span style={{ fontSize: 16, fontWeight: 700 }}>Domain Scores</span>
          <span style={{ fontSize: 12, color: C.dim }}>Track progress</span>
        </button>
      </div>

      {/* Domain Select */}
      <div style={{ ...sCard, marginBottom: 16 }}>
        <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Study by Domain</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {domains.map(d => {
            const ds = stats.domainStats[d];
            const dp = ds ? Math.round((ds.correct / ds.total) * 100) : 0;
            const qCount = questions.filter(q => q.domain === d).length;
            return (
              <button key={d} className="hoverable" onClick={() => onStartQuiz(d)} style={{ background: C.cardHover, border: `1px solid ${C.bdr}`, borderRadius: 10, padding: "10px 14px", cursor: "pointer", fontFamily: "inherit", color: C.text, display: "flex", alignItems: "center", gap: 10, textAlign: "left" }}>
                <span style={{ fontSize: 20 }}>{DOMAIN_ICONS[d]}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{d}</div>
                  <div style={{ fontSize: 11, color: C.dim }}>{qCount} questions{ds ? ` · ${dp}%` : ""}</div>
                </div>
                {ds && <div style={{ width: 40, height: 40, borderRadius: "50%", border: `3px solid ${dp >= 70 ? C.correct : dp > 0 ? C.gold : C.bdr}`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Space Mono'", fontSize: 11, fontWeight: 700, color: dp >= 70 ? C.correct : C.gold }}>{dp}%</div>}
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: 16, fontSize: 12, color: C.dim, lineHeight: 1.6 }}>
        <div>{questions.length} practice questions across all 8 CACREP domains</div>
        <div style={{ marginTop: 6, fontSize: 11, color: C.dim, opacity: 0.7 }}>
          CompExamPro is not affiliated with, endorsed by, or associated with NBCC, CCE, CACREP, or any licensing body. CPCE, NCE, and NCMHCE are trademarks of their respective owners.
        </div>
      </div>
      <Analytics />
    </div>
  );
}

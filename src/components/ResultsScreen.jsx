import { C, sCard, sBtn, globalCSS, DOMAIN_ICONS } from "../lib/constants";

export default function ResultsScreen({ sessionResults, timedMode, selectedDomain, onHome, onPlayAgain }) {
  const sessionCorrect = sessionResults.filter(r => r.correct).length;
  const domainBreakdown = {};
  sessionResults.forEach(r => {
    if (!domainBreakdown[r.domain]) domainBreakdown[r.domain] = { c: 0, t: 0 };
    domainBreakdown[r.domain].t++;
    if (r.correct) domainBreakdown[r.domain].c++;
  });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <style>{globalCSS}</style>
      <div style={{ textAlign: "center", marginBottom: 32, animation: "fi 0.4s ease-out" }}>
        <div style={{ fontSize: 56, marginBottom: 8 }}>{sessionCorrect >= 8 ? "🎉" : sessionCorrect >= 5 ? "💪" : "📚"}</div>
        <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Session Complete!</h2>
        <div style={{ fontFamily: "'Space Mono'", fontSize: 36, fontWeight: 700, color: sessionCorrect >= 7 ? C.correct : sessionCorrect >= 5 ? C.gold : C.wrong }}>{sessionCorrect}/10</div>
        <div style={{ color: C.dim, marginTop: 4 }}>{timedMode ? "⚡ Timed Challenge" : "Practice Session"}</div>
      </div>
      <div style={{ ...sCard, marginBottom: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Domain Breakdown</h3>
        {Object.entries(domainBreakdown).map(([d, v]) => (
          <div key={d} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>{DOMAIN_ICONS[d] || "📖"}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{d}</div>
              <div style={{ height: 8, borderRadius: 4, background: C.bdr, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${(v.c/v.t)*100}%`, background: v.c/v.t >= 0.7 ? C.correct : C.wrong, borderRadius: 4, transition: "width 0.5s" }} />
              </div>
            </div>
            <span style={{ fontFamily: "'Space Mono'", fontSize: 14, fontWeight: 700, color: v.c/v.t >= 0.7 ? C.correct : C.wrong }}>{v.c}/{v.t}</span>
          </div>
        ))}
      </div>
      <div style={{ ...sCard, marginBottom: 16 }}>
        <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>Missed Questions</h3>
        {sessionResults.filter(r => !r.correct).length === 0
          ? <p style={{ color: C.correct, fontSize: 14 }}>Perfect score! 🎯</p>
          : sessionResults.filter(r => !r.correct).map((r, i) => (
              <div key={i} style={{ padding: 10, borderRadius: 8, background: `${C.wrong}11`, marginBottom: 8, fontSize: 13, color: C.dim, borderLeft: `3px solid ${C.wrong}` }}>{r.question}</div>
            ))
        }
      </div>
      <button className="hoverable" onClick={onHome} style={sBtn}>Back to Home</button>
      <button className="hoverable" onClick={onPlayAgain} style={{ ...sBtn, background: "transparent", border: `2px solid ${C.accent}`, marginTop: 10 }}>Play Again</button>
    </div>
  );
}

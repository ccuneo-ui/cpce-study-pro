import { C, sCard, sBtn, globalCSS, DOMAIN_ICONS } from "../lib/constants";

export default function DomainScores({ domains, stats, questions, onBack, onReset }) {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <style>{globalCSS}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700 }}>📊 Domain Scores</h2>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Back</button>
      </div>
      {domains.map(d => {
        const ds = stats.domainStats[d];
        const dp = ds ? Math.round((ds.correct / ds.total) * 100) : 0;
        const color = dp >= 80 ? C.correct : dp >= 60 ? C.gold : dp > 0 ? C.wrong : C.dim;
        const qCount = questions.filter(q => q.domain === d).length;
        return (
          <div key={d} style={{ ...sCard, marginBottom: 10, animation: "fi 0.3s ease-out" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 22 }}>{DOMAIN_ICONS[d]}</span>
                <span style={{ fontWeight: 600, fontSize: 15 }}>{d}</span>
              </div>
              <span style={{ fontFamily: "'Space Mono'", fontWeight: 700, color, fontSize: 16 }}>{ds ? `${dp}%` : "—"}</span>
            </div>
            <div style={{ height: 8, borderRadius: 4, background: C.bdr, overflow: "hidden" }}>
              <div style={{ height: "100%", width: `${dp}%`, background: color, borderRadius: 4, transition: "width 0.5s" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              <span style={{ fontSize: 12, color: C.dim }}>{ds ? `${ds.correct}/${ds.total} correct` : "Not started"} · {qCount} questions</span>
              {ds && dp < 70 && <span style={{ fontSize: 11, color: C.wrong, fontWeight: 600 }}>⚠ Needs study</span>}
            </div>
          </div>
        );
      })}
      <button className="hoverable" onClick={onReset} style={{ ...sBtn, background: "transparent", border: `2px solid ${C.wrong}44`, color: C.wrong, marginTop: 16 }}>
        Reset All Progress
      </button>
    </div>
  );
}

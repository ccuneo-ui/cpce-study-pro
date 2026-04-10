import { useState } from "react";
import { C, sCard, sBtn, globalCSS, DOMAIN_ICONS } from "../lib/constants";

export default function FlashcardScreen({ flashcards, selectedDomain, onBack }) {
  const [flipped, setFlipped] = useState(false);
  const [idx, setIdx] = useState(0);

  const filtered = selectedDomain === "All" ? flashcards : flashcards.filter(f => f.domain === selectedDomain);
  const fc = filtered[idx];

  if (!fc) {
    return (
      <div style={{ fontFamily: "'DM Sans'", color: C.text, padding: 40, textAlign: "center" }}>
        No flashcards for this domain.<br />
        <button onClick={onBack} style={{ ...sBtn, marginTop: 20, width: "auto" }}>Back</button>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <style>{globalCSS}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Back</button>
        <span style={{ fontFamily: "'Space Mono'", fontSize: 13, color: C.dim }}>{idx + 1}/{filtered.length}</span>
      </div>
      <div style={{ fontSize: 12, color: C.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 12 }}>{DOMAIN_ICONS[fc.domain]} {fc.domain}</div>
      <div
        onClick={() => setFlipped(!flipped)}
        className="hoverable"
        style={{ ...sCard, minHeight: 260, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", cursor: "pointer", textAlign: "center", padding: 32, animation: "flip 0.3s ease-out", border: `2px solid ${flipped ? C.correct + "66" : C.accent + "44"}` }}
      >
        <div style={{ fontSize: 12, color: C.dim, marginBottom: 12, textTransform: "uppercase", letterSpacing: 1 }}>{flipped ? "Answer" : "Question"}</div>
        <div style={{ fontSize: flipped ? 16 : 20, lineHeight: 1.5, fontWeight: flipped ? 400 : 600 }}>{flipped ? fc.back : fc.front}</div>
        <div style={{ fontSize: 12, color: C.dim, marginTop: 20 }}>Tap to {flipped ? "see question" : "reveal answer"}</div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button className="hoverable" disabled={idx === 0} onClick={() => { setIdx(i => i - 1); setFlipped(false); }} style={{ ...sBtn, background: "transparent", border: `2px solid ${C.bdr}`, opacity: idx === 0 ? 0.4 : 1 }}>← Prev</button>
        <button className="hoverable" disabled={idx >= filtered.length - 1} onClick={() => { setIdx(i => i + 1); setFlipped(false); }} style={{ ...sBtn, opacity: idx >= filtered.length - 1 ? 0.4 : 1 }}>Next →</button>
      </div>
    </div>
  );
}

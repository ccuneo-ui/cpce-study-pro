// ─── COLOR SYSTEM ────────────────────────────────────────────────────────
export const C = {
  bg: "#0a0e17",
  card: "#111827",
  bdr: "#1e293b",
  text: "#f1f5f9",
  dim: "#94a3b8",
  accent: "#6366f1",
  al: "#818cf8",
  correct: "#10b981",
  wrong: "#ef4444",
  gold: "#f59e0b",
  cardHover: "#1a2332",
};

// ─── DOMAIN ICONS ────────────────────────────────────────────────────────
export const DOMAIN_ICONS = {
  "Professional Orientation & Ethics": "⚖️",
  "Social & Cultural Diversity": "🌍",
  "Human Growth & Development": "🌱",
  "Career Development": "💼",
  "Helping Relationships": "🤝",
  "Group Counseling": "👥",
  "Assessment & Testing": "📊",
  "Research & Program Evaluation": "🔬",
};

// ─── SHARED STYLES ───────────────────────────────────────────────────────
export const sCard = {
  background: C.card,
  borderRadius: 16,
  border: `1px solid ${C.bdr}`,
  padding: 20,
};

export const sBtn = {
  background: C.accent,
  color: "#fff",
  border: "none",
  borderRadius: 12,
  padding: "14px 28px",
  fontSize: 16,
  fontWeight: 700,
  cursor: "pointer",
  width: "100%",
  fontFamily: "inherit",
  transition: "all 0.15s",
};

// ─── GLOBAL CSS ──────────────────────────────────────────────────────────
export const globalCSS = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${C.bg}; }
  .hoverable { transition: all 0.15s ease !important; }
  .hoverable:hover { transform: translateY(-2px); filter: brightness(1.1); }
  .hoverable:active { transform: translateY(0); }
  @keyframes fi { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
  @keyframes flip { from { transform: rotateY(90deg); } to { transform: rotateY(0deg); } }
  .option-btn { transition: all 0.15s; border: 2px solid ${C.bdr}; cursor: pointer; }
  .option-btn:hover:not(:disabled) { border-color: ${C.accent}; background: ${C.accent}11; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: ${C.bdr}; border-radius: 3px; }
`;

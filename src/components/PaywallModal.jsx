import { C, sCard, sBtn, globalCSS } from "../lib/constants";

export default function PaywallModal({ questionsUsed, freeLimit, onUpgrade, onClose }) {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 1000,
      background: "rgba(0,0,0,0.8)", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }}>
      <div style={{
        ...sCard,
        maxWidth: 420,
        width: "100%",
        textAlign: "center",
        animation: "fi 0.3s ease-out",
      }}>
        <div style={{ fontSize: 48, marginBottom: 12 }}>🔒</div>
        <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: C.text }}>
          Free questions used up
        </h3>
        <p style={{ fontSize: 14, color: C.dim, lineHeight: 1.6, marginBottom: 20 }}>
          You've answered all {freeLimit} free practice questions.
          Upgrade to Pro to unlock all {943} questions across every CACREP domain.
        </p>

        <div style={{
          background: `${C.accent}11`, border: `1px solid ${C.accent}33`,
          borderRadius: 12, padding: 14, marginBottom: 20,
        }}>
          <div style={{ fontSize: 13, color: C.dim, marginBottom: 4 }}>Starting at</div>
          <div style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Space Mono'", color: C.text }}>
            $6.99<span style={{ fontSize: 14, fontWeight: 400, color: C.dim }}>/month</span>
          </div>
          <div style={{ fontSize: 12, color: C.correct, marginTop: 4 }}>
            or $49.99/year (save 40%)
          </div>
        </div>

        <button
          className="hoverable"
          onClick={onUpgrade}
          style={{ ...sBtn, marginBottom: 10 }}
        >
          Upgrade to Pro
        </button>
        <button
          onClick={onClose}
          style={{
            background: "none", border: "none", color: C.dim,
            cursor: "pointer", fontSize: 13, fontFamily: "inherit", padding: 8,
          }}
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}

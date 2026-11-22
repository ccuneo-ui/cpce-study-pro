import { LETTERS, keyPos } from "./lib/engine";
import { BY_ID, DOMAIN_BY_KEY } from "./data/questions";

export const SUPPORT = "support@compexampro.com";
export const go = (path) => { window.location.hash = path; window.scrollTo(0, 0); };

export function Bar({ route, signedIn, isPro, app }) {
  const tabs = [["/", "Home"], ["/practice", "Practice"], ["/exam", "Exams"], ["/cards", "Flashcards"]];
  return (
    <header className="bar">
      <div className="wrap">
        <button className="brand" onClick={() => go("/")}><i aria-hidden="true" />CompExamPro</button>
        <nav aria-label="Main">
          {app && tabs.map(([p, label]) => (
            <button key={p} onClick={() => go(p)} aria-current={route === p ? "page" : undefined}>{label}</button>
          ))}
          {app && !isPro && <button onClick={() => go("/upgrade")} aria-current={route === "/upgrade" ? "page" : undefined}>Upgrade</button>}
          <button onClick={() => go(signedIn ? "/account" : "/signin")} aria-current={route === "/account" || route === "/signin" ? "page" : undefined}>{signedIn ? "Account" : "Sign in"}</button>
        </nav>
      </div>
    </header>
  );
}

// Ten dots filled in proportion to pct. tone: g (green), y (pencil), r (red), or none (ink).
export function Dots({ pct, tone = "" }) {
  const n = pct == null ? 0 : Math.round(pct / 10);
  return <span className={"dots " + tone} role="img" aria-label={pct == null ? "not started" : pct + " percent"}>{Array.from({ length: 10 }, (_, i) => <i key={i} className={i < n ? "f" : ""} />)}</span>;
}
export const toneFor = (pct) => (pct == null ? "" : pct >= 75 ? "g" : pct >= 60 ? "y" : "r");

// One question. reveal=false: answering (selection only). reveal=true: show right and wrong.
export function Question({ item, onPick, reveal, locked }) {
  const q = BY_ID[item.id];
  const key = keyPos(item);
  return (
    <div className="stack" style={{ "--gap": "18px" }}>
      <p className="stem">{q.q}</p>
      <div className="stack" style={{ "--gap": "10px" }} role="group" aria-label="Answer choices">
        {item.order.map((oi, pos) => {
          let cls = "opt";
          if (reveal) { if (pos === key) cls += " right"; else if (pos === item.pick) cls += " wrong"; }
          else if (pos === item.pick) cls += " sel";
          return (
            <button key={pos} className={cls} disabled={locked || reveal} onClick={() => onPick(pos)} aria-pressed={pos === item.pick}>
              <span className="bubble" aria-hidden="true">{LETTERS[pos]}</span>
              <span className="txt"><span className="vh">{LETTERS[pos]}. </span>{q.o[oi]}{reveal && pos === key ? "  (correct)" : ""}{reveal && pos === item.pick && pos !== key ? "  (your answer)" : ""}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function Rationale({ item, flagged, onFlag }) {
  const q = BY_ID[item.id];
  const right = item.pick !== null && item.order[item.pick] === 0;
  const subject = encodeURIComponent("Question " + q.id + " looks wrong");
  return (
    <div className={"note" + (right ? "" : " bad")} style={right ? { borderColor: "var(--green)", background: "var(--green-soft)" } : undefined}>
      <p style={{ fontWeight: 700, marginBottom: 6 }}>{item.pick === null ? "Not answered" : right ? "Correct" : "Not quite"}. The answer is {LETTERS[keyPos(item)]}.</p>
      <p className="rationale">{q.r}</p>
      <p className="small muted" style={{ marginTop: 10 }}>
        {DOMAIN_BY_KEY[q.d].short}, {q.t}. Question {q.id}.{" "}
        {onFlag && <button className="link small" onClick={onFlag}>{flagged ? "Remove from my saved list" : "Save to review later"}</button>}{" "}
        <a className="small" href={"mailto:" + SUPPORT + "?subject=" + subject}>Report a problem</a>
      </p>
    </div>
  );
}

export function Disclaimer() {
  return (
    <footer className="foot">
      <div className="wrap stack" style={{ "--gap": "10px" }}>
        <p>CompExamPro is an independent study tool. It is not affiliated with, endorsed by, or sponsored by NBCC, CCE, CACREP, or any university or licensing board. CPCE, NCE, and NCMHCE are trademarks of their respective owners. All questions are original and none are taken from any actual examination.</p>
        <p className="row">
          <button className="link small" onClick={() => go("/privacy")}>Privacy</button>
          <button className="link small" onClick={() => go("/terms")}>Terms</button>
          <a className="small" href={"mailto:" + SUPPORT}>{SUPPORT}</a>
        </p>
      </div>
    </footer>
  );
}

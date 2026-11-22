import { useState, useMemo } from "react";
import { DOMAINS, QUESTIONS, FREE_COUNT } from "../data/questions";
import { useProgress } from "../lib/ProgressContext";
import { poolFor, buildPractice, isRight } from "../lib/engine";
import { Question, Rationale, go } from "../ui";

const FILTERS = [["all", "All questions"], ["unseen", "Not yet seen"], ["missed", "Missed last time"], ["flagged", "Saved for later"]];

export default function Practice({ isPro, query }) {
  const { hist, flags, record, toggleFlag } = useProgress();
  const [domains, setDomains] = useState(() => (query.get("d") ? [query.get("d")] : []));
  const [filter, setFilter] = useState(() => query.get("filter") || "all");
  const [count, setCount] = useState(10);
  const [session, setSession] = useState(null);
  const [done, setDone] = useState(false);

  const opts = { domains, filter, hist, flags, isPro };
  const pool = useMemo(() => poolFor(opts), [domains, filter, hist, flags, isPro]);

  if (!session) {
    const toggle = (k) => setDomains((d) => (d.includes(k) ? d.filter((x) => x !== k) : [...d, k]));
    return (
      <div className="narrow page stack" style={{ "--gap": "24px" }}>
        <h2>Practice</h2>
        <p className="muted">You see the explanation right after each answer. Nothing here is timed.</p>
        <div className="card stack" style={{ "--gap": "20px" }}>
          <div>
            <p className="f" id="areas">Content areas</p>
            <div className="chips" role="group" aria-labelledby="areas">
              <button className="chip" aria-pressed={!domains.length} onClick={() => setDomains([])}>All eight</button>
              {DOMAINS.map((d) => <button key={d.key} className="chip" aria-pressed={domains.includes(d.key)} onClick={() => toggle(d.key)}>{d.short}</button>)}
            </div>
          </div>
          <div>
            <p className="f" id="which">Which questions</p>
            <div className="chips" role="group" aria-labelledby="which">
              {FILTERS.map(([k, label]) => <button key={k} className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>{label}</button>)}
            </div>
          </div>
          <div>
            <p className="f" id="len">Length</p>
            <div className="chips" role="group" aria-labelledby="len">
              {[10, 20, 40].map((n) => <button key={n} className="chip" aria-pressed={count === n} onClick={() => setCount(n)}>{n} questions</button>)}
            </div>
          </div>
          <p className="small muted num">{pool.length} {pool.length === 1 ? "question matches" : "questions match"}.{pool.length > 0 && pool.length < count ? " This session will use all of them." : ""}</p>
          <button className="btn go" disabled={!pool.length} onClick={() => { setDone(false); setSession(buildPractice(opts, count)); }}>Start practice</button>
          {!pool.length && <p className="note">{filter === "missed" ? "Nothing on your missed list for this selection. That is a good sign." : filter === "flagged" ? "You have not saved any questions here yet. Use \"Save to review later\" under an explanation." : filter === "unseen" ? "You have seen every question in this selection. Switch to \"All questions\" to repeat them." : "No questions match."}</p>}
        </div>
        {!isPro && <p className="note">You are practicing with the {FREE_COUNT} free questions. <button className="link" onClick={() => go("/upgrade")}>Pro unlocks all {QUESTIONS.length}</button>.</p>}
      </div>
    );
  }

  const items = session.items;
  if (done) {
    const right = items.filter(isRight).length;
    return (
      <div className="narrow page stack" style={{ "--gap": "20px" }}>
        <h2 className="num">{right} of {items.length} correct</h2>
        <div className="row">
          <button className="btn go" onClick={() => { setDone(false); setSession(buildPractice(opts, count)); }} disabled={!pool.length}>Another round</button>
          <button className="btn ghost" onClick={() => setSession(null)}>Change settings</button>
          <button className="btn ghost" onClick={() => go("/")}>Home</button>
        </div>
        {items.filter((it) => !isRight(it)).length > 0 && <h3>Questions to revisit</h3>}
        {items.filter((it) => !isRight(it)).map((it) => (
          <div key={it.id} className="card stack">
            <Question item={it} reveal />
            <Rationale item={it} flagged={!!flags[it.id]} onFlag={() => toggleFlag(it.id)} />
          </div>
        ))}
      </div>
    );
  }

  const item = items[session.at];
  const answered = item.pick !== null;
  const pick = (pos) => {
    const next = { ...item, pick: pos };
    record(item.id, next.order[pos] === 0);
    setSession({ ...session, items: items.map((x, i) => (i === session.at ? next : x)) });
  };
  const last = session.at === items.length - 1;
  return (
    <div className="narrow page stack" style={{ "--gap": "18px" }}>
      <div className="row between small">
        <span className="muted num">Question {session.at + 1} of {items.length}</span>
        <button className="link small" onClick={() => (window.confirm("End this practice round?") ? setDone(true) : null)}>End round</button>
      </div>
      <div className="track" aria-hidden="true"><div style={{ width: ((session.at + (answered ? 1 : 0)) / items.length) * 100 + "%" }} /></div>
      <Question item={item} reveal={answered} onPick={pick} />
      {answered && <Rationale item={item} flagged={!!flags[item.id]} onFlag={() => toggleFlag(item.id)} />}
      {answered && <div><button className="btn" autoFocus onClick={() => { if (last) setDone(true); else { setSession({ ...session, at: session.at + 1 }); window.scrollTo(0, 0); } }}>{last ? "See results" : "Next question"}</button></div>}
    </div>
  );
}

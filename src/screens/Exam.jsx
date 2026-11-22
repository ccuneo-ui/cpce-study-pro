import { useEffect, useRef, useState } from "react";
import { BY_ID, DOMAINS } from "../data/questions";
import { useProgress } from "../lib/ProgressContext";
import { EXAMS, buildExam, isRight, scoreByDomain, fmtTime, SECONDS_PER_ITEM } from "../lib/engine";
import { Question, Rationale, Dots, toneFor, go } from "../ui";

function Chooser({ isPro }) {
  const { activeExam, setActiveExam, exams } = useProgress();
  const start = (key) => { setActiveExam(buildExam(key)); go("/exam/run"); };
  return (
    <div className="narrow page stack" style={{ "--gap": "24px" }}>
      <h2>Timed exams</h2>
      <p className="muted">No explanations until you finish, just like the real thing. You can move between questions, mark any for review, and pause if you have to. The clock allows {SECONDS_PER_ITEM} seconds a question, which is the CPCE's pace.</p>
      {activeExam && (
        <div className="card ink stack">
          <h3>Exam in progress</h3>
          <p className="muted">{activeExam.name}. Question {activeExam.at + 1} of {activeExam.items.length}, {fmtTime(activeExam.secsLeft)} left.</p>
          <div className="row">
            <button className="btn go" onClick={() => go("/exam/run")}>Resume</button>
            <button className="link" style={{ color: "#fff" }} onClick={() => setActiveExam(null)}>Discard it</button>
          </div>
        </div>
      )}
      {EXAMS.map((e) => {
        const n = e.pick().length;
        const locked = !e.free && !isPro;
        const best = exams.filter((x) => x.key === e.key).reduce((m, x) => Math.max(m, x.score), -1);
        return (
          <div key={e.key} className="card stack">
            <div className="row between">
              <h3>{e.name}</h3>
              {locked ? <span className="tag lock">Pro</span> : best >= 0 ? <span className="tag num">Best {best}/{n}</span> : null}
            </div>
            <p className="muted">{e.blurb}</p>
            <p className="small num">{n} questions, {fmtTime(n * SECONDS_PER_ITEM)} on the clock</p>
            <div>
              {locked
                ? <button className="btn ghost" onClick={() => go("/upgrade")}>Upgrade to unlock</button>
                : <button className="btn" disabled={!!activeExam} onClick={() => start(e.key)}>Start {e.key === "diagnostic" ? "the diagnostic" : "this exam"}</button>}
            </div>
          </div>
        );
      })}
      {activeExam && <p className="small muted">Finish or discard the exam in progress before starting another.</p>}
    </div>
  );
}

function Report({ report, onClose }) {
  const { flags, toggleFlag } = useProgress();
  const [show, setShow] = useState("missed");
  const { items, score, total, byDomain, secs, name } = report;
  const pct = Math.round((score / total) * 100);
  const list = items.map((it, i) => [it, i]).filter(([it]) => show === "all" || !isRight(it));
  return (
    <div className="narrow page stack" style={{ "--gap": "24px" }}>
      <div className="stack" style={{ "--gap": "6px" }}>
        <p className="muted">{name}</p>
        <h1 className="num">{score} of {total}</h1>
        <p className="muted num">{pct}% correct in {fmtTime(secs)}</p>
      </div>
      <div className="card">
        <h3 style={{ marginBottom: 8 }}>Score by content area</h3>
        <table className="sheet">
          <tbody>
            {DOMAINS.map((d) => {
              const [c, t] = byDomain[d.key];
              const p = t ? Math.round((c / t) * 100) : null;
              return <tr key={d.key}><td>{d.name}</td><td className="hide-sm"><Dots pct={p} tone={toneFor(p)} /></td><td className="n">{c}/{t}</td></tr>;
            })}
          </tbody>
        </table>
        <p className="small muted" style={{ marginTop: 12 }}>The real CPCE reports a score for each area and a total to your program, which sets its own passing score. A practice score is a guide to where to study, not a prediction.</p>
      </div>
      <div className="row">
        <button className="btn go" onClick={() => go("/practice?filter=missed")}>Practice missed questions</button>
        <button className="btn ghost" onClick={onClose}>Back to exams</button>
      </div>
      <div className="row between">
        <h3>Review your answers</h3>
        <div className="chips">
          <button className="chip" aria-pressed={show === "missed"} onClick={() => setShow("missed")}>Missed ({total - score})</button>
          <button className="chip" aria-pressed={show === "all"} onClick={() => setShow("all")}>All ({total})</button>
        </div>
      </div>
      {!list.length && <p className="note">Nothing missed. Every answer was correct.</p>}
      {list.map(([it, i]) => (
        <div key={it.id} className="card stack">
          <p className="small muted num">Question {i + 1}</p>
          <Question item={it} reveal />
          <Rationale item={it} flagged={!!flags[it.id]} onFlag={() => toggleFlag(it.id)} />
        </div>
      ))}
    </div>
  );
}

function Run({ onFinish }) {
  const { activeExam, setActiveExam } = useProgress();
  const [exam, setExam] = useState(activeExam);
  const [paused, setPaused] = useState(false);
  const [nav, setNav] = useState(false);
  const [confirming, setConfirming] = useState(false);
  const ref = useRef(exam);
  ref.current = exam;

  const finish = () => onFinish(ref.current);

  useEffect(() => {
    if (!exam || paused) return;
    const t = setInterval(() => {
      const cur = ref.current;
      const next = { ...cur, secsLeft: cur.secsLeft - 1 };
      setExam(next);
      if (next.secsLeft % 5 === 0) setActiveExam(next);
      if (next.secsLeft <= 0) { clearInterval(t); onFinish(next); }
    }, 1000);
    return () => clearInterval(t);
  }, [paused, !!exam]);

  if (!exam) return <div className="narrow page stack"><h2>No exam in progress</h2><div><button className="btn" onClick={() => go("/exam")}>Choose an exam</button></div></div>;

  const save = (next) => { setExam(next); setActiveExam(next); };
  const item = exam.items[exam.at];
  const setItem = (patch) => save({ ...exam, items: exam.items.map((x, i) => (i === exam.at ? { ...x, ...patch } : x)) });
  const jump = (i) => { save({ ...exam, at: i }); setNav(false); setConfirming(false); window.scrollTo(0, 0); };
  const answered = exam.items.filter((x) => x.pick !== null).length;
  const marked = exam.items.filter((x) => x.marked).length;
  const last = exam.at === exam.items.length - 1;

  return (
    <>
      <div className="bar" style={{ position: "sticky", top: 0, zIndex: 5, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
        <div className="wrap">
          <span className="num small">Question {exam.at + 1} of {exam.items.length}</span>
          <span className={"timer" + (exam.secsLeft < 300 ? " low" : "")} role="timer" aria-label="Time remaining">{fmtTime(exam.secsLeft)}</span>
          <nav aria-label="Exam controls">
            <button onClick={() => setPaused(true)}>Pause</button>
            <button onClick={() => setNav(!nav)} aria-expanded={nav}>All questions</button>
          </nav>
        </div>
      </div>
      <div className="narrow page stack" style={{ "--gap": "18px", paddingTop: 24 }}>
        {paused ? (
          <div className="card stack">
            <h3>Paused</h3>
            <p className="muted">The clock is stopped and the question is hidden. The real exam has no pause, so use this sparingly.</p>
            <div><button className="btn go" onClick={() => setPaused(false)}>Resume exam</button></div>
          </div>
        ) : nav ? (
          <div className="card stack">
            <div className="row between"><h3>All questions</h3><span className="small muted num">{answered} answered, {marked} marked for review</span></div>
            <div className="navgrid">
              {exam.items.map((x, i) => (
                <button key={i} className={(x.pick !== null ? "done" : "") + (i === exam.at ? " cur" : "") + (x.marked ? " mark" : "")} onClick={() => jump(i)} aria-label={"Question " + (i + 1) + (x.pick !== null ? ", answered" : ", not answered") + (x.marked ? ", marked" : "")}>{i + 1}</button>
              ))}
            </div>
            <p className="small muted">Filled squares are answered. A yellow dot means marked for review.</p>
            <div><button className="btn ghost sm" onClick={() => setNav(false)}>Back to question {exam.at + 1}</button></div>
          </div>
        ) : (
          <>
            <Question item={item} reveal={false} onPick={(pos) => setItem({ pick: pos })} />
            <div className="row between">
              <div className="row">
                <button className="btn ghost" disabled={exam.at === 0} onClick={() => jump(exam.at - 1)}>Previous</button>
                {!last && <button className="btn" onClick={() => jump(exam.at + 1)}>Next</button>}
                {last && <button className="btn go" onClick={() => setConfirming(true)}>Finish exam</button>}
              </div>
              <button className="chip" aria-pressed={item.marked} onClick={() => setItem({ marked: !item.marked })}>{item.marked ? "Marked for review" : "Mark for review"}</button>
            </div>
            {!last && <div><button className="link small" onClick={() => setConfirming(true)}>Finish exam early</button></div>}
            {confirming && (
              <div className="note stack" style={{ "--gap": "10px" }}>
                <p><b>Finish and score this exam?</b> {exam.items.length - answered ? (exam.items.length - answered) + " unanswered questions will be scored as incorrect." : "You have answered every question."}{marked ? " " + marked + " still marked for review." : ""}</p>
                <div className="row"><button className="btn sm" onClick={finish}>Finish and see my score</button><button className="btn ghost sm" onClick={() => setConfirming(false)}>Keep working</button></div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default function Exam({ isPro, run }) {
  const { activeExam, setActiveExam, recordMany } = useProgress();
  const [report, setReport] = useState(null);

  // Starting a new exam clears the previous score report.
  useEffect(() => { if (run && activeExam && report) setReport(null); }, [run]);

  const onFinish = (exam) => {
    const total = exam.items.length;
    const score = exam.items.filter(isRight).length;
    const byDomain = scoreByDomain(exam.items, BY_ID);
    const secs = total * SECONDS_PER_ITEM - Math.max(0, exam.secsLeft);
    recordMany(exam.items.filter((x) => x.pick !== null).map((x) => [x.id, isRight(x)]), { key: exam.key, ts: Date.now(), score, total, byDomain, secs });
    setActiveExam(null);
    setReport({ items: exam.items, score, total, byDomain, secs, name: exam.name });
    go("/exam");
  };

  if (run && !report) return <Run onFinish={onFinish} />;
  if (report) return <Report report={report} onClose={() => { setReport(null); go("/exam"); }} />;
  return <Chooser isPro={isPro} />;
}

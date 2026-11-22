import { QUESTIONS, FREE_COUNT } from "../data/questions";
import { useProgress } from "../lib/ProgressContext";
import { domainStats, EXAMS } from "../lib/engine";
import { Dots, toneFor, go } from "../ui";

export default function Dashboard({ isPro, signedIn }) {
  const { hist, flags, exams, examDate, setExamDate, activeExam } = useProgress();
  const stats = domainStats(hist, isPro);
  const seen = stats.reduce((a, s) => a + s.seen, 0);
  const ok = stats.reduce((a, s) => a + s.ok, 0);
  const avail = isPro ? QUESTIONS.length : FREE_COUNT;
  const missed = Object.values(hist).filter((h) => h.ok === false).length;
  const started = stats.filter((s) => s.pct != null);
  const weakest = started.length ? started.slice().sort((a, b) => a.pct - b.pct)[0] : null;
  const days = examDate ? Math.ceil((new Date(examDate + "T00:00:00") - new Date(new Date().toDateString())) / 86400000) : null;

  let next;
  if (activeExam) next = { h: "You have an exam in progress", p: activeExam.name + ", question " + (activeExam.at + 1) + " of " + activeExam.items.length + ".", label: "Resume exam", to: "/exam/run" };
  else if (!seen) next = { h: "Start with the diagnostic", p: "Forty questions, five from each area, about 55 minutes. It shows which areas need work before you spend time studying.", label: "Start the diagnostic", to: "/exam" };
  else if (missed >= 5) next = { h: "Clear your missed questions", p: "You have " + missed + " questions you got wrong on your last attempt. They stay on this list until you answer them correctly.", label: "Review missed questions", to: "/practice?filter=missed" };
  else if (weakest && weakest.pct < 75) next = { h: "Work on " + weakest.short, p: "It is your lowest area at " + weakest.pct + "%. Practice it with explanations after each answer.", label: "Practice " + weakest.short, to: "/practice?d=" + weakest.key };
  else if (isPro) next = { h: "Sit a full-length exam", p: "160 questions in 3 hours 45 minutes. Set aside the time and take it in one sitting if you can.", label: "Choose an exam", to: "/exam" };
  else next = { h: "You have covered the free questions", p: "Pro adds " + (QUESTIONS.length - FREE_COUNT) + " more questions and two full-length timed exams.", label: "See Pro", to: "/upgrade" };

  return (
    <div className="wrap page stack" style={{ "--gap": "24px" }}>
      <div className="row between">
        <h2>Your readiness</h2>
        <label className="row small" style={{ gap: 8 }}>
          <span className="muted">{days == null ? "Exam date" : days > 0 ? days + " days to your exam" : days === 0 ? "Exam day" : "Exam date passed"}</span>
          <input className="in" style={{ width: "auto", padding: "6px 10px" }} type="date" value={examDate || ""} onChange={(e) => setExamDate(e.target.value)} aria-label="Exam date" />
        </label>
      </div>

      <div className="card ink stack">
        <h3>{next.h}</h3>
        <p className="muted" style={{ maxWidth: "62ch" }}>{next.p}</p>
        <div><button className="btn go" onClick={() => go(next.to)}>{next.label}</button></div>
      </div>

      <div className="card">
        <div className="row between" style={{ marginBottom: 8 }}>
          <h3>By content area</h3>
          <span className="small muted num">{seen ? Math.round((ok / seen) * 100) + "% correct on " + seen + " of " + avail + " questions" : "No questions answered yet"}</span>
        </div>
        <table className="sheet">
          <thead><tr><th>Area</th><th className="hide-sm">Latest attempts</th><th className="n">Correct</th><th className="n hide-sm">Seen</th><th></th></tr></thead>
          <tbody>
            {stats.map((s) => (
              <tr key={s.key}>
                <td>{s.name}</td>
                <td className="hide-sm"><Dots pct={s.pct} tone={toneFor(s.pct)} /></td>
                <td className="n">{s.pct == null ? "–" : s.pct + "%"}</td>
                <td className="n hide-sm">{s.seen}/{s.avail}</td>
                <td className="n"><button className="btn ghost sm" onClick={() => go("/practice?d=" + s.key)}>Practice</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="small muted" style={{ marginTop: 12 }}>Percent correct counts your most recent attempt at each question. Green is 75% or higher, yellow 60 to 74%, red below 60%. These bands are study guides, not a passing score. Your program sets that.</p>
      </div>

      <div className="grid2">
        <div className="card stack">
          <h3>Review lists</h3>
          <div className="row between"><span>Missed on last attempt</span><button className="btn ghost sm" disabled={!missed} onClick={() => go("/practice?filter=missed")}>{missed} to review</button></div>
          <div className="row between"><span>Saved for later</span><button className="btn ghost sm" disabled={!Object.keys(flags).length} onClick={() => go("/practice?filter=flagged")}>{Object.keys(flags).length} saved</button></div>
        </div>
        <div className="card stack">
          <h3>Exam history</h3>
          {!exams.length && <p className="muted">No exams finished yet. Your scores will appear here.</p>}
          {exams.slice(-4).reverse().map((e, i) => (
            <div key={i} className="row between">
              <span>{(EXAMS.find((x) => x.key === e.key) || {}).name || e.key}<span className="small muted"> on {new Date(e.ts).toLocaleDateString()}</span></span>
              <b className="num">{e.score}/{e.total}</b>
            </div>
          ))}
        </div>
      </div>

      {!signedIn && <p className="note">Your progress is saved on this device only. <button className="link" onClick={() => go("/signin")}>Create a free account</button> to keep it if you switch devices or clear your browser.</p>}
    </div>
  );
}

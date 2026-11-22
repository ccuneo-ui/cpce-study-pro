import { useState } from "react";
import { QUESTIONS, DOMAINS, FREE_COUNT, BY_ID } from "../data/questions";
import { FLASHCARDS } from "../data/flashcards";
import { present } from "../lib/engine";
import { Question, Rationale, Disclaimer, go } from "../ui";

const TOTAL = QUESTIONS.length;
const PER_AREA = TOTAL / DOMAINS.length;

function Sample() {
  const [item, setItem] = useState(() => present(BY_ID.E03));
  const answered = item.pick !== null;
  return (
    <div className="card stack">
      <p className="small muted">Sample question from Ethics. Pick an answer.</p>
      <Question item={item} reveal={answered} onPick={(pos) => setItem({ ...item, pick: pos })} />
      {answered && <Rationale item={item} />}
      {answered && <button className="btn go block" onClick={() => go("/exam")}>Take the free {FREE_COUNT}-question diagnostic</button>}
    </div>
  );
}

export default function Landing({ onStart }) {
  return (
    <>
      <section className="hero">
        <div className="wrap cols">
          <div className="stack" style={{ "--gap": "22px" }}>
            <h1>Practice the way the counseling comps actually ask.</h1>
            <p className="lede">{TOTAL} original questions for the CPCE and program comprehensive exams. Most are short client scenarios, and every one comes with a written explanation of the answer.</p>
            <div className="row">
              <button className="btn go" onClick={onStart}>Start the free diagnostic</button>
              <button className="link on-dark" style={{ color: "#fff" }} onClick={() => go("/signin")}>I have an account</button>
            </div>
            <p className="small" style={{ color: "#b7c7bf" }}>{FREE_COUNT} questions, about 55 minutes. No account or card needed.</p>
          </div>
          <Sample />
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ "--gap": "28px" }}>
          <div className="facts">
            <div><b className="num">{TOTAL}</b>practice questions, {PER_AREA} in each of the eight content areas</div>
            <div><b className="num">2</b>full-length timed exams of 160 questions, with no overlap between them</div>
            <div><b className="num">{FLASHCARDS.length}</b>flashcards for terms, theorists, and models</div>
            <div><b className="num">8</b>content areas scored separately, the way your program will see them</div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap stack" style={{ "--gap": "24px" }}>
          <h2>Built to the CPCE's shape</h2>
          <p className="lead">The CPCE has 160 multiple-choice questions, 20 from each of eight content areas, and a time limit of 3 hours 45 minutes. Each full-length practice exam here uses the same count, the same split, and the same clock, and reports your score by area.</p>
          <div className="grid2">
            {DOMAINS.map((d) => (
              <div key={d.key} className="row" style={{ borderBottom: "1px solid var(--line)", paddingBottom: 12, flexWrap: "nowrap", alignItems: "baseline" }}>
                <span className="num" style={{ fontWeight: 700, minWidth: 28 }}>{d.items.length}</span><span>{d.name}</span>
              </div>
            ))}
          </div>
          <p className="muted" style={{ maxWidth: "70ch" }}>There is no national passing score for the CPCE. Each program sets its own, so check your student handbook for the number you need.</p>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ "--gap": "24px" }}>
          <h2>Which exam is this for?</h2>
          <div className="grid2">
            <div className="card stack"><h3>CPCE</h3><p className="muted">The closest fit. Same eight areas, same question count per area, same pacing.</p></div>
            <div className="card stack"><h3>Program comps, such as the CECE</h3><p className="muted">A good fit when your school writes its own exam on the eight CACREP core areas. Ask your program what format it uses.</p></div>
            <div className="card stack"><h3>NCE</h3><p className="muted">Useful for reviewing the eight content areas the NCE draws on. The NCE is organized by work behaviors and its format changes in July 2027, so pair this with NCE-specific material.</p></div>
            <div className="card flat stack"><h3>Not the NCMHCE</h3><p className="muted">The NCMHCE is built from clinical case studies. This question bank does not cover that format.</p></div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="wrap stack" style={{ "--gap": "24px" }}>
          <h2>How it works</h2>
          <div className="grid2">
            <div className="stack"><h3>Take the diagnostic</h3><p className="muted">Five questions from each area under a clock. You get a score for every area, so you know where to spend your time.</p></div>
            <div className="stack"><h3>Practice your weak areas</h3><p className="muted">Choose areas and a length. You see the explanation after each answer, and missed questions come back until you get them right.</p></div>
            <div className="stack"><h3>Sit a full-length exam</h3><p className="muted">160 questions in 3 hours 45 minutes, with a question navigator and mark-for-review, then a full review of every answer.</p></div>
            <div className="stack"><h3>Answer order changes every time</h3><p className="muted">Choices are shuffled on each attempt, so you cannot learn that an answer was "the second one." You have to know it.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack" style={{ "--gap": "24px" }}>
          <h2>Pricing</h2>
          <div className="grid2" style={{ maxWidth: 760 }}>
            <div className="card stack">
              <h3>Free</h3>
              <p className="price">$0</p>
              <p className="muted">The {FREE_COUNT}-question diagnostic with explanations, practice on those questions, and all {FLASHCARDS.length} flashcards.</p>
              <button className="btn ghost block" onClick={onStart}>Start the free diagnostic</button>
            </div>
            <div className="card ink stack">
              <h3>Pro</h3>
              <p className="price">$6.99<span style={{ fontSize: "1rem", fontWeight: 600 }}> a month</span></p>
              <p className="muted">or $49.99 a year. All {TOTAL} questions, both full-length exams, and missed-question review.</p>
              <button className="btn go block" onClick={() => go("/signin")}>Create an account to upgrade</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="narrow">
          <h2 style={{ marginBottom: 16 }}>Questions people ask</h2>
          <details><summary>Are these real exam questions?</summary><p>No. Real exam questions are confidential and copyrighted. Every question here is original, written against the public CPCE content outline, the ACA Code of Ethics, and standard counselor-education textbooks.</p></details>
          <details><summary>Who writes the questions?</summary><p>Questions are drafted with AI assistance and checked against those sources. If one looks wrong or unclear, use the "Report a problem" link under its explanation and we will review it.</p></details>
          <details><summary>Is this affiliated with CCE or NBCC?</summary><p>No. CompExamPro is an independent study tool and is not endorsed by any exam owner, university, or licensing board.</p></details>
          <details><summary>What score do I need to pass?</summary><p>For the CPCE, each program sets its own minimum. CCE does not set one. Your program handbook or advisor will have the number.</p></details>
          <details><summary>How do I cancel Pro?</summary><p>Email support@compexampro.com from your account address and we will cancel it. You keep access through the end of the period you paid for.</p></details>
        </div>
      </section>
      <Disclaimer />
    </>
  );
}

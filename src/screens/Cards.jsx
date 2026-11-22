import { useMemo, useState } from "react";
import { FLASHCARDS } from "../data/flashcards";
import { DOMAINS } from "../data/questions";
import { useProgress } from "../lib/ProgressContext";

const OLD = ["Professional Orientation & Ethics", "Social & Cultural Diversity", "Human Growth & Development", "Career Development", "Helping Relationships", "Group Counseling", "Assessment & Testing", "Research & Program Evaluation"];
const ALL = FLASHCARDS.map((c, i) => ({ ...c, i, d: DOMAINS[Math.max(0, OLD.indexOf(c.domain))].key }));

export default function Cards() {
  const { cards, setCard } = useProgress();
  const [d, setD] = useState("");
  const [onlyUnknown, setOnlyUnknown] = useState(false);
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const deck = useMemo(() => ALL.filter((c) => (!d || c.d === d) && (!onlyUnknown || cards[c.i] !== true)), [d, onlyUnknown, onlyUnknown ? cards : null]);
  const card = deck[Math.min(pos, deck.length - 1)];
  const known = ALL.filter((c) => (!d || c.d === d) && cards[c.i] === true).length;
  const total = ALL.filter((c) => !d || c.d === d).length;
  const move = (n) => { setFlipped(false); setPos((p) => Math.max(0, Math.min(deck.length - 1, p + n))); };
  const mark = (v) => { setCard(card.i, v); setFlipped(false); if (!onlyUnknown || !v) setPos((p) => Math.min(deck.length - 1, p + 1)); };

  return (
    <div className="narrow page stack" style={{ "--gap": "20px" }}>
      <div className="row between"><h2>Flashcards</h2><span className="small muted num">{known} of {total} marked known</span></div>
      <div className="chips" role="group" aria-label="Content area">
        <button className="chip" aria-pressed={!d} onClick={() => { setD(""); setPos(0); }}>All</button>
        {DOMAINS.map((x) => <button key={x.key} className="chip" aria-pressed={d === x.key} onClick={() => { setD(x.key); setPos(0); setFlipped(false); }}>{x.short}</button>)}
      </div>
      <label className="row small"><input type="checkbox" checked={onlyUnknown} onChange={(e) => { setOnlyUnknown(e.target.checked); setPos(0); }} /> Hide cards I marked as known</label>
      {!card ? <p className="note">Every card in this set is marked known. Untick the box above to see them again.</p> : (
        <>
          <button className="card flash" onClick={() => setFlipped(!flipped)} aria-label={flipped ? "Answer. Select to show the prompt" : "Prompt. Select to show the answer"}>
            <p className="small muted" style={{ marginBottom: 12 }}>{flipped ? "Answer" : "Card " + (Math.min(pos, deck.length - 1) + 1) + " of " + deck.length}</p>
            <p className="serif" style={{ fontWeight: flipped ? 400 : 600 }}>{flipped ? card.back : card.front}</p>
            {!flipped && <p className="small muted" style={{ marginTop: 16 }}>Tap to show the answer</p>}
          </button>
          {flipped ? (
            <div className="row"><button className="btn" onClick={() => mark(true)}>I knew it</button><button className="btn ghost" onClick={() => mark(false)}>Still learning</button></div>
          ) : (
            <div className="row"><button className="btn ghost" disabled={pos === 0} onClick={() => move(-1)}>Previous</button><button className="btn ghost" disabled={pos >= deck.length - 1} onClick={() => move(1)}>Skip</button></div>
          )}
        </>
      )}
    </div>
  );
}

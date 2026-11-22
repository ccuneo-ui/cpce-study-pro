import { QUESTIONS, DOMAINS } from "../data/questions";

export const SECONDS_PER_ITEM = 84; // CPCE pace: 160 items in 3 h 45 min
export const LETTERS = ["A", "B", "C", "D"];

export function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// A presented item: the question id plus the display order of its options.
// order[k] is the index into q.o shown in position k; q.o[0] is always the key.
export function present(q) {
  return { id: q.id, order: shuffle([0, 1, 2, 3]), pick: null, marked: false };
}
export const keyPos = (item) => item.order.indexOf(0);
export const isRight = (item) => item.pick !== null && item.order[item.pick] === 0;

export const EXAMS = [
  { key: "diagnostic", name: "Diagnostic", blurb: "40 questions, 5 from each area. A quick read on where you stand.", free: true, pick: () => QUESTIONS.filter((q) => q.free) },
  { key: "formA", name: "Full-length practice exam A", blurb: "160 questions, 20 from each area, at the real exam's pace.", free: false, pick: () => QUESTIONS.filter((q) => q.form === "A") },
  { key: "formB", name: "Full-length practice exam B", blurb: "A second 160 questions with no overlap with exam A.", free: false, pick: () => QUESTIONS.filter((q) => q.form === "B") },
];

export function buildExam(key) {
  const def = EXAMS.find((e) => e.key === key);
  const qs = shuffle(def.pick());
  return { kind: "exam", key, name: def.name, items: qs.map(present), at: 0, secsLeft: qs.length * SECONDS_PER_ITEM, startedAt: Date.now() };
}

// filter: "all" | "unseen" | "missed" | "flagged"
export function poolFor({ domains, filter, hist, flags, isPro }) {
  return QUESTIONS.filter((q) => {
    if (!isPro && !q.free) return false;
    if (domains.length && !domains.includes(q.d)) return false;
    const h = hist[q.id];
    if (filter === "unseen") return !h;
    if (filter === "missed") return h && h.ok === false;
    if (filter === "flagged") return !!flags[q.id];
    return true;
  });
}

export function buildPractice(opts, count) {
  const pool = poolFor(opts);
  // Unseen first, then least recently seen, so repeat sessions keep moving through the bank.
  const ranked = shuffle(pool).sort((a, b) => (opts.hist[a.id]?.last || 0) - (opts.hist[b.id]?.last || 0));
  const chosen = shuffle(ranked.slice(0, count));
  return { kind: "practice", name: "Practice", items: chosen.map(present), at: 0 };
}

export function scoreByDomain(items, byId) {
  const out = {};
  for (const d of DOMAINS) out[d.key] = [0, 0];
  for (const it of items) {
    const q = byId[it.id];
    out[q.d][1]++;
    if (isRight(it)) out[q.d][0]++;
  }
  return out;
}

// Readiness for one area from question history: accuracy on the latest attempt at each item seen.
export function domainStats(hist, isPro) {
  return DOMAINS.map((d) => {
    const all = QUESTIONS.filter((q) => q.d === d.key);
    const avail = all.filter((q) => isPro || q.free);
    const seen = avail.filter((q) => hist[q.id]);
    const ok = seen.filter((q) => hist[q.id].ok).length;
    return { key: d.key, name: d.name, short: d.short, total: all.length, avail: avail.length, seen: seen.length, ok, pct: seen.length ? Math.round((ok / seen.length) * 100) : null };
  });
}

export function fmtTime(secs) {
  const s = Math.max(0, Math.floor(secs));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  return (h ? h + ":" + String(m).padStart(2, "0") : String(m)) + ":" + String(r).padStart(2, "0");
}

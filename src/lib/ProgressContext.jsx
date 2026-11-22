import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./AuthContext";

const KEY = "compexampro-v2";
const EXAM_KEY = "compexampro-v2-exam";
const EMPTY = { v: 2, at: 0, hist: {}, flags: {}, exams: [], examDate: null, cards: {} };

const read = (k, fallback) => { try { const s = localStorage.getItem(k); return s ? JSON.parse(s) : fallback; } catch { return fallback; } };
const write = (k, v) => { try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, JSON.stringify(v)); } catch {} };

const Ctx = createContext(null);

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [state, setState] = useState(() => ({ ...EMPTY, ...read(KEY, {}) }));
  const [activeExam, setActiveExamState] = useState(() => read(EXAM_KEY, null));
  const timer = useRef(null);

  // Cloud sync. Progress is stored inside the existing user_progress.domain_stats JSON column
  // (under the key "v2"), so no database change is needed for cross-device sync.
  useEffect(() => {
    if (!user || !supabase) return;
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase.from("user_progress").select("domain_stats").eq("user_id", user.id).maybeSingle();
        const cloud = data?.domain_stats?.v2;
        if (!cancelled && cloud && (cloud.at || 0) > (read(KEY, EMPTY).at || 0)) {
          const merged = { ...EMPTY, ...cloud };
          setState(merged); write(KEY, merged);
        }
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [user]);

  const push = useCallback((s) => {
    if (!user || !supabase) return;
    clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      try {
        const vals = Object.values(s.hist);
        await supabase.from("user_progress").upsert({
          user_id: user.id,
          total: vals.reduce((a, h) => a + h.n, 0),
          correct: vals.reduce((a, h) => a + h.c, 0),
          domain_stats: { v2: s },
          updated_at: new Date().toISOString(),
        }, { onConflict: "user_id" });
      } catch {}
    }, 1500);
  }, [user]);

  const update = useCallback((fn) => {
    setState((prev) => {
      const next = { ...fn(prev), at: Date.now() };
      write(KEY, next); push(next);
      return next;
    });
  }, [push]);

  const record = useCallback((id, right) => update((s) => {
    const h = s.hist[id] || { n: 0, c: 0 };
    return { ...s, hist: { ...s.hist, [id]: { n: h.n + 1, c: h.c + (right ? 1 : 0), ok: right, last: Date.now() } } };
  }), [update]);

  const recordMany = useCallback((results, examEntry) => update((s) => {
    const hist = { ...s.hist };
    const now = Date.now();
    for (const [id, right] of results) {
      const h = hist[id] || { n: 0, c: 0 };
      hist[id] = { n: h.n + 1, c: h.c + (right ? 1 : 0), ok: right, last: now };
    }
    return { ...s, hist, exams: examEntry ? [...s.exams, examEntry].slice(-30) : s.exams };
  }), [update]);

  const toggleFlag = useCallback((id) => update((s) => {
    const flags = { ...s.flags };
    if (flags[id]) delete flags[id]; else flags[id] = true;
    return { ...s, flags };
  }), [update]);

  const setExamDate = useCallback((d) => update((s) => ({ ...s, examDate: d || null })), [update]);
  const setCard = useCallback((i, known) => update((s) => ({ ...s, cards: { ...s.cards, [i]: known } })), [update]);
  const reset = useCallback(() => { update(() => ({ ...EMPTY })); write(EXAM_KEY, null); setActiveExamState(null); }, [update]);
  const setActiveExam = useCallback((e) => { setActiveExamState(e); write(EXAM_KEY, e); }, []);

  return <Ctx.Provider value={{ ...state, record, recordMany, toggleFlag, setExamDate, setCard, reset, activeExam, setActiveExam }}>{children}</Ctx.Provider>;
}

export const useProgress = () => useContext(Ctx);

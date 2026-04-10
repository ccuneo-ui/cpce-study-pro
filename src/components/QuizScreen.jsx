import { useState, useEffect, useRef } from "react";
import { C, sCard, sBtn, globalCSS, DOMAIN_ICONS } from "../lib/constants";

export default function QuizScreen({
  questions,
  selectedDomain,
  timedMode,
  onFinish,
  onQuit,
  onStatsUpdate,
  stats,
  canAnswer,
  onPaywall,
  onQuestionAnswered,
  isPro,
  questionsRemaining,
}) {
  const [currentQ, setCurrentQ] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [questionNum, setQuestionNum] = useState(0);
  const [sessionResults, setSessionResults] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);
  const usedQs = useRef(new Set());

  const pickQuestion = () => {
    const pool = selectedDomain === "All" ? questions : questions.filter(q => q.domain === selectedDomain);
    const available = pool.map((q, i) => ({ q, idx: questions.indexOf(q) })).filter(x => !usedQs.current.has(x.idx));
    if (available.length === 0) {
      usedQs.current.clear();
      return pickQuestion();
    }
    const pick = available[Math.floor(Math.random() * available.length)];
    usedQs.current.add(pick.idx);
    return pick.q;
  };

  const nextQuestion = () => {
    const q = pickQuestion();
    setCurrentQ(q);
    setSelected(null);
    setShowExplanation(false);
    if (timedMode) setTimeLeft(30);
    setQuestionNum(n => n + 1);
  };

  // Start first question
  useEffect(() => {
    nextQuestion();
  }, []);

  // Timer
  useEffect(() => {
    if (timedMode && !showExplanation && timeLeft > 0 && currentQ) {
      timerRef.current = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    }
    if (timedMode && timeLeft === 0 && !showExplanation && currentQ) {
      handleAnswer(-1);
    }
    return () => clearTimeout(timerRef.current);
  }, [timedMode, timeLeft, showExplanation, currentQ]);

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setShowExplanation(true);
    clearTimeout(timerRef.current);
    const isCorrect = idx === currentQ.correct;

    const newStats = { ...stats };
    newStats.total++;
    if (isCorrect) {
      newStats.correct++;
      newStats.streak++;
      newStats.points += timedMode ? 20 : 10;
      if (newStats.streak > newStats.bestStreak) newStats.bestStreak = newStats.streak;
    } else {
      newStats.streak = 0;
    }
    if (!newStats.domainStats[currentQ.domain]) newStats.domainStats[currentQ.domain] = { correct: 0, total: 0 };
    newStats.domainStats[currentQ.domain].total++;
    if (isCorrect) newStats.domainStats[currentQ.domain].correct++;
    onStatsUpdate(newStats);
    if (onQuestionAnswered) onQuestionAnswered();

    setSessionResults(r => [...r, { question: currentQ.question, correct: isCorrect, domain: currentQ.domain }]);
  };

  const handleNext = () => {
    if (questionNum >= 10) {
      onFinish(sessionResults.concat([{ question: currentQ.question, correct: selected === currentQ.correct, domain: currentQ.domain }]).slice(-10));
      return;
    }
    // Check if free user hit their limit
    if (!isPro && onPaywall && !canAnswer) {
      onPaywall();
      return;
    }
    nextQuestion();
  };

  if (!currentQ) return null;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg, padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <style>{globalCSS}</style>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <button onClick={onQuit} style={{ background: "none", border: "none", color: C.dim, cursor: "pointer", fontSize: 14, fontFamily: "inherit" }}>← Quit</button>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontFamily: "'Space Mono'", fontSize: 13, color: C.dim }}>Q {questionNum}/10</span>
          {!isPro && questionsRemaining !== undefined && questionsRemaining < 10 && (
            <div style={{ fontSize: 11, color: C.gold, marginTop: 2 }}>{questionsRemaining} free left</div>
          )}
        </div>
        {timedMode && (
          <span style={{ fontFamily: "'Space Mono'", fontSize: 16, fontWeight: 700, color: timeLeft <= 10 ? C.wrong : C.al, animation: timeLeft <= 10 ? "pulse 0.5s infinite" : "none" }}>
            ⏱ {timeLeft}s
          </span>
        )}
      </div>
      <div style={{ height: 4, borderRadius: 2, background: C.bdr, marginBottom: 20, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${(questionNum / 10) * 100}%`, background: `linear-gradient(90deg, ${C.accent}, ${C.al})`, borderRadius: 2, transition: "width 0.3s" }} />
      </div>
      <div style={{ fontSize: 12, color: C.accent, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 10 }}>{DOMAIN_ICONS[currentQ.domain]} {currentQ.domain}</div>
      <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.4, marginBottom: 24 }}>{currentQ.question}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
        {currentQ.options.map((opt, i) => {
          let bg = C.card, border = C.bdr, col = C.text;
          if (selected !== null) {
            if (i === currentQ.correct) { bg = `${C.correct}18`; border = C.correct; col = C.correct; }
            else if (i === selected && i !== currentQ.correct) { bg = `${C.wrong}18`; border = C.wrong; col = C.wrong; }
          }
          return (
            <button key={i} className="option-btn" disabled={selected !== null} onClick={() => handleAnswer(i)} style={{ background: bg, borderColor: border, color: col, borderRadius: 12, padding: "14px 16px", fontSize: 15, textAlign: "left", fontFamily: "inherit", lineHeight: 1.4 }}>
              {opt}
            </button>
          );
        })}
      </div>
      {showExplanation && (
        <div style={{ animation: "fi 0.3s ease-out" }}>
          <div style={{ ...sCard, background: selected === currentQ.correct ? `${C.correct}11` : `${C.wrong}11`, borderColor: selected === currentQ.correct ? `${C.correct}44` : `${C.wrong}44`, marginBottom: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8, color: selected === currentQ.correct ? C.correct : C.wrong }}>
              {selected === currentQ.correct ? "✓ Correct!" : selected === -1 ? "⏱ Time's up!" : "✗ Incorrect"}
              {selected === currentQ.correct && <span style={{ marginLeft: 8, color: C.gold }}>+{timedMode ? 20 : 10} pts</span>}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.6, color: C.dim }}>{currentQ.explanation}</p>
          </div>
          <button className="hoverable" onClick={handleNext} style={sBtn}>{questionNum >= 10 ? "See Results" : "Next Question →"}</button>
        </div>
      )}
    </div>
  );
}

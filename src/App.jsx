import { useState, useEffect, useCallback } from "react";
import { QUESTIONS } from "./data/questions";
import { FLASHCARDS } from "./data/flashcards";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import FlashcardScreen from "./components/FlashcardScreen";
import ResultsScreen from "./components/ResultsScreen";
import DomainScores from "./components/DomainScores";

const DOMAINS = [...new Set(QUESTIONS.map(q => q.domain))];
const STORAGE_KEY = "compexampro-stats";
const DEFAULT_STATS = { correct: 0, total: 0, streak: 0, bestStreak: 0, points: 0, domainStats: {}, userName: "Student" };

export default function CompExamProApp() {
  const [screen, setScreen] = useState("home");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [timedMode, setTimedMode] = useState(false);
  const [sessionResults, setSessionResults] = useState([]);
  const [stats, setStats] = useState(DEFAULT_STATS);

  // Load stats from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) setStats(JSON.parse(saved));
    } catch {}
  }, []);

  // Save stats
  const saveStats = useCallback((s) => {
    setStats(s);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
  }, []);

  // ── Navigation handlers ──

  const startQuiz = (domain) => {
    setSelectedDomain(domain);
    setTimedMode(false);
    setScreen("quiz");
  };

  const startTimed = (domain) => {
    setSelectedDomain(domain);
    setTimedMode(true);
    setScreen("quiz");
  };

  const startFlashcards = (domain) => {
    setSelectedDomain(domain);
    setScreen("flashcards");
  };

  const handleQuizFinish = (results) => {
    setSessionResults(results);
    setScreen("results");
  };

  const handleReset = () => {
    const fresh = { ...DEFAULT_STATS, userName: stats.userName };
    saveStats(fresh);
  };

  const goHome = () => setScreen("home");

  // ── Screen routing ──

  if (screen === "quiz") {
    return (
      <QuizScreen
        questions={QUESTIONS}
        selectedDomain={selectedDomain}
        timedMode={timedMode}
        stats={stats}
        onStatsUpdate={saveStats}
        onFinish={handleQuizFinish}
        onQuit={goHome}
      />
    );
  }

  if (screen === "flashcards") {
    return (
      <FlashcardScreen
        flashcards={FLASHCARDS}
        selectedDomain={selectedDomain}
        onBack={goHome}
      />
    );
  }

  if (screen === "results") {
    return (
      <ResultsScreen
        sessionResults={sessionResults}
        timedMode={timedMode}
        selectedDomain={selectedDomain}
        onHome={goHome}
        onPlayAgain={() => timedMode ? startTimed(selectedDomain) : startQuiz(selectedDomain)}
      />
    );
  }

  if (screen === "domainScores") {
    return (
      <DomainScores
        domains={DOMAINS}
        stats={stats}
        questions={QUESTIONS}
        onBack={goHome}
        onReset={handleReset}
      />
    );
  }

  // Default: home
  return (
    <HomeScreen
      questions={QUESTIONS}
      flashcards={FLASHCARDS}
      domains={DOMAINS}
      stats={stats}
      onStartQuiz={startQuiz}
      onStartFlashcards={startFlashcards}
      onStartTimed={startTimed}
      onShowDomainScores={() => setScreen("domainScores")}
    />
  );
}

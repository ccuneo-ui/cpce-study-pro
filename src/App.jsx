import { useState, useEffect, useCallback } from "react";
import { QUESTIONS } from "./data/questions";
import { FLASHCARDS } from "./data/flashcards";
import { useAuth } from "./lib/AuthContext";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import FlashcardScreen from "./components/FlashcardScreen";
import ResultsScreen from "./components/ResultsScreen";
import DomainScores from "./components/DomainScores";
import AuthScreen from "./components/AuthScreen";
import AccountScreen from "./components/AccountScreen";

const DOMAINS = [...new Set(QUESTIONS.map(q => q.domain))];
const STORAGE_KEY = "compexampro-stats";
const DEFAULT_STATS = { correct: 0, total: 0, streak: 0, bestStreak: 0, points: 0, domainStats: {}, userName: "Student" };

export default function CompExamProApp() {
  const { user, loading, signUp, signIn, signOut } = useAuth();
  const [screen, setScreen] = useState("home");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [timedMode, setTimedMode] = useState(false);
  const [sessionResults, setSessionResults] = useState([]);
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [skippedAuth, setSkippedAuth] = useState(false);

  // Check if user previously skipped auth
  useEffect(() => {
    try {
      const skipped = localStorage.getItem("compexampro-skipped-auth");
      if (skipped) setSkippedAuth(true);
    } catch {}
  }, []);

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

  const handleSkipAuth = () => {
    setSkippedAuth(true);
    try { localStorage.setItem("compexampro-skipped-auth", "true"); } catch {}
  };

  const handleSignOut = async () => {
    await signOut();
    setSkippedAuth(false);
    try { localStorage.removeItem("compexampro-skipped-auth"); } catch {}
    setScreen("home");
  };

  const goHome = () => setScreen("home");

  // ── Loading state ──
  if (loading) {
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#f1f5f9", minHeight: "100vh", background: "#0a0e17", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: "#6366f1", textTransform: "uppercase", letterSpacing: 3, marginBottom: 8 }}>CompExamPro</div>
          <div style={{ color: "#94a3b8", fontSize: 14 }}>Loading...</div>
        </div>
      </div>
    );
  }

  // ── Auth screen (show if not logged in and hasn't skipped) ──
  if (!user && !skippedAuth) {
    return (
      <AuthScreen
        onSignUp={signUp}
        onSignIn={signIn}
        onSkip={handleSkipAuth}
      />
    );
  }

  // ── Screen routing ──

  if (screen === "account") {
    return (
      <AccountScreen
        user={user}
        stats={stats}
        onSignOut={handleSignOut}
        onBack={goHome}
      />
    );
  }

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
      user={user}
      onStartQuiz={startQuiz}
      onStartFlashcards={startFlashcards}
      onStartTimed={startTimed}
      onShowDomainScores={() => setScreen("domainScores")}
      onShowAccount={() => setScreen("account")}
      onShowAuth={() => { setSkippedAuth(false); setScreen("home"); }}
    />
  );
}

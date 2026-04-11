import { useState, useEffect, useCallback, useRef } from "react";
import { QUESTIONS } from "./data/questions";
import { FLASHCARDS } from "./data/flashcards";
import { useAuth } from "./lib/AuthContext";
import { useSubscription } from "./lib/SubscriptionContext";
import { supabase } from "./lib/supabase";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/QuizScreen";
import FlashcardScreen from "./components/FlashcardScreen";
import ResultsScreen from "./components/ResultsScreen";
import DomainScores from "./components/DomainScores";
import AuthScreen from "./components/AuthScreen";
import AccountScreen from "./components/AccountScreen";
import UpgradeScreen from "./components/UpgradeScreen";
import PaywallModal from "./components/PaywallModal";
import LegalScreen from "./components/LegalScreen";
import LandingPage from "./components/LandingPage";

const DOMAINS = [...new Set(QUESTIONS.map(q => q.domain))];
const STORAGE_KEY = "compexampro-stats";
const DEFAULT_STATS = { correct: 0, total: 0, streak: 0, bestStreak: 0, points: 0, domainStats: {}, userName: "Student" };

export default function CompExamProApp() {
  const { user, loading, signUp, signIn, signOut } = useAuth();
  const { isPro, questionsUsed, questionsRemaining, canAnswer, recordQuestionAnswered, FREE_QUESTION_LIMIT } = useSubscription();
  const [screen, setScreen] = useState("home");
  const [selectedDomain, setSelectedDomain] = useState("All");
  const [timedMode, setTimedMode] = useState(false);
  const [sessionResults, setSessionResults] = useState([]);
  const [stats, setStats] = useState(DEFAULT_STATS);
  const [skippedAuth, setSkippedAuth] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const syncTimer = useRef(null);

  // Check if user previously skipped auth
  useEffect(() => {
    try {
      const skipped = localStorage.getItem("compexampro-skipped-auth");
      if (skipped) setSkippedAuth(true);
    } catch {}
  }, []);

  // Check for upgrade success redirect
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("upgraded") === "true") {
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  // Load stats: try Supabase first for logged-in users, fall back to localStorage
  useEffect(() => {
    const loadStats = async () => {
      // Always load localStorage first as baseline
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) setStats(JSON.parse(saved));
      } catch {}

      // If logged in, try to load from Supabase (cloud takes priority)
      if (user && supabase) {
        try {
          const { data, error } = await supabase
            .from("user_progress")
            .select("*")
            .eq("user_id", user.id)
            .maybeSingle();

          if (!error && data) {
            const cloudStats = {
              correct: data.correct || 0,
              total: data.total || 0,
              streak: data.streak || 0,
              bestStreak: data.best_streak || 0,
              points: data.points || 0,
              domainStats: data.domain_stats || {},
              userName: "Student",
            };
            // Use whichever has more progress
            setStats(prev => {
              const use = cloudStats.total >= prev.total ? cloudStats : prev;
              try { localStorage.setItem(STORAGE_KEY, JSON.stringify(use)); } catch {}
              return use;
            });
          }
        } catch {}
      }
    };
    loadStats();
  }, [user]);

  // Sync stats to Supabase (debounced)
  const syncToSupabase = useCallback((s) => {
    if (!user || !supabase) return;
    clearTimeout(syncTimer.current);
    syncTimer.current = setTimeout(async () => {
      try {
        await supabase.from("user_progress").upsert({
          user_id: user.id,
          correct: s.correct,
          total: s.total,
          streak: s.streak,
          best_streak: s.bestStreak,
          points: s.points,
          domain_stats: s.domainStats,
          updated_at: new Date().toISOString(),
        }, { onConflict: "user_id" });
      } catch {}
    }, 1000);
  }, [user]);

  // Save stats to localStorage + Supabase
  const saveStats = useCallback((s) => {
    setStats(s);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(s)); } catch {}
    syncToSupabase(s);
  }, [syncToSupabase]);

  // ── Navigation handlers ──

  const startQuiz = (domain) => {
    if (!canAnswer) {
      setShowPaywall(true);
      return;
    }
    setSelectedDomain(domain);
    setTimedMode(false);
    setScreen("quiz");
  };

  const startTimed = (domain) => {
    if (!canAnswer) {
      setShowPaywall(true);
      return;
    }
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
    // Also reset in Supabase immediately
    if (user && supabase) {
      supabase.from("user_progress").upsert({
        user_id: user.id, correct: 0, total: 0, streak: 0,
        best_streak: 0, points: 0, domain_stats: {},
        updated_at: new Date().toISOString(),
      }, { onConflict: "user_id" }).catch(() => {});
    }
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

  // ── Auth screen ──
  if (!user && !skippedAuth && screen === "auth") {
    return (
      <AuthScreen
        onSignUp={signUp}
        onSignIn={signIn}
        onSkip={handleSkipAuth}
      />
    );
  }

  // ── Landing page (show to non-authenticated visitors) ──
  if (!user && !skippedAuth) {
    return (
      <LandingPage
        onGetStarted={() => setScreen("auth")}
        onSignIn={() => setScreen("auth")}
      />
    );
  }

  // ── Screen routing ──

  if (screen === "privacy" || screen === "terms") {
    return <LegalScreen page={screen} onBack={goHome} />;
  }

  if (screen === "upgrade") {
    return (
      <UpgradeScreen
        onBack={goHome}
        questionsUsed={questionsUsed}
        freeLimit={FREE_QUESTION_LIMIT}
      />
    );
  }

  if (screen === "account") {
    return (
      <AccountScreen
        user={user}
        stats={stats}
        isPro={isPro}
        questionsUsed={questionsUsed}
        freeLimit={FREE_QUESTION_LIMIT}
        onSignOut={handleSignOut}
        onUpgrade={() => setScreen("upgrade")}
        onBack={goHome}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <>
        <QuizScreen
          questions={QUESTIONS}
          selectedDomain={selectedDomain}
          timedMode={timedMode}
          stats={stats}
          onStatsUpdate={saveStats}
          onFinish={handleQuizFinish}
          onQuit={goHome}
          canAnswer={canAnswer}
          onPaywall={() => setShowPaywall(true)}
          onQuestionAnswered={recordQuestionAnswered}
          isPro={isPro}
          questionsRemaining={questionsRemaining}
        />
        {showPaywall && (
          <PaywallModal
            questionsUsed={questionsUsed}
            freeLimit={FREE_QUESTION_LIMIT}
            onUpgrade={() => { setShowPaywall(false); setScreen("upgrade"); }}
            onClose={() => { setShowPaywall(false); goHome(); }}
          />
        )}
      </>
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
    <>
      <HomeScreen
        questions={QUESTIONS}
        flashcards={FLASHCARDS}
        domains={DOMAINS}
        stats={stats}
        user={user}
        isPro={isPro}
        questionsRemaining={questionsRemaining}
        freeLimit={FREE_QUESTION_LIMIT}
        onStartQuiz={startQuiz}
        onStartFlashcards={startFlashcards}
        onStartTimed={startTimed}
        onShowDomainScores={() => setScreen("domainScores")}
        onShowAccount={() => setScreen("account")}
        onShowAuth={() => { setSkippedAuth(false); setScreen("home"); }}
        onUpgrade={() => setScreen("upgrade")}
        onShowPrivacy={() => setScreen("privacy")}
        onShowTerms={() => setScreen("terms")}
      />
      {showPaywall && (
        <PaywallModal
          questionsUsed={questionsUsed}
          freeLimit={FREE_QUESTION_LIMIT}
          onUpgrade={() => { setShowPaywall(false); setScreen("upgrade"); }}
          onClose={() => setShowPaywall(false)}
        />
      )}
    </>
  );
}

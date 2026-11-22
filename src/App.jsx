import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { useAuth } from "./lib/AuthContext";
import { useSubscription } from "./lib/SubscriptionContext";
import { Bar, Disclaimer, go } from "./ui";
import Landing from "./screens/Landing";
import Dashboard from "./screens/Dashboard";
import Practice from "./screens/Practice";
import Exam from "./screens/Exam";
import Cards from "./screens/Cards";
import Auth from "./screens/Auth";
import Upgrade from "./screens/Upgrade";
import Account from "./screens/Account";
import Legal from "./screens/Legal";

const GUEST_KEY = "compexampro-guest";
const KNOWN = ["/", "/practice", "/exam", "/exam/run", "/cards", "/signin", "/upgrade", "/account", "/privacy", "/terms"];

function parseHash() {
  const raw = window.location.hash.replace(/^#/, "") || "/";
  const [path, qs] = raw.split("?");
  return { path: KNOWN.includes(path) ? path : "/", query: new URLSearchParams(qs || "") };
}

export default function App() {
  const { user, loading, recovering } = useAuth();
  const { isPro } = useSubscription();
  const [loc, setLoc] = useState(parseHash);
  const [guest, setGuest] = useState(() => { try { return localStorage.getItem(GUEST_KEY) === "1"; } catch { return false; } });

  useEffect(() => {
    const onHash = () => setLoc(parseHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const startGuest = () => { try { localStorage.setItem(GUEST_KEY, "1"); } catch {} setGuest(true); go("/exam"); };

  if (loading) return <div className="narrow page"><p className="muted">Loading</p></div>;

  const inApp = !!user || guest;
  const { path, query } = loc;
  const appRoutes = ["/practice", "/exam", "/exam/run", "/cards", "/upgrade", "/account"];
  // Visiting an app page from the landing page (for example the sample question's button) starts a guest session.
  if (!inApp && appRoutes.includes(path)) { try { localStorage.setItem(GUEST_KEY, "1"); } catch {} setGuest(true); return null; }

  let screen;
  if (recovering) screen = <Auth />;
  else if (path === "/privacy" || path === "/terms") screen = <Legal page={path.slice(1)} />;
  else if (path === "/signin") screen = user ? <Account isPro={isPro} /> : <Auth />;
  else if (!inApp) screen = <Landing onStart={startGuest} />;
  else if (path === "/practice") screen = <Practice key={query.toString()} isPro={isPro} query={query} />;
  else if (path === "/exam" || path === "/exam/run") screen = <Exam isPro={isPro} run={path === "/exam/run"} />;
  else if (path === "/cards") screen = <Cards />;
  else if (path === "/upgrade") screen = <Upgrade isPro={isPro} />;
  else if (path === "/account") screen = <Account isPro={isPro} />;
  else screen = <Dashboard isPro={isPro} signedIn={!!user} />;

  const running = path === "/exam/run";
  return (
    <>
      {!running && <Bar route={path} signedIn={!!user} isPro={isPro} app={inApp} />}
      <main>{screen}</main>
      {inApp && !running && path !== "/privacy" && path !== "/terms" && <Disclaimer />}
      <Analytics />
    </>
  );
}

import { C, globalCSS } from "../lib/constants";

const EXAMS = [
  { name: "CPCE", full: "Counselor Preparation Comprehensive Examination", desc: "The exit exam required by most CACREP-accredited counseling programs" },
  { name: "NCE", full: "National Counselor Examination", desc: "Required for the NCC credential and licensure in most states" },
  { name: "NCMHCE", full: "National Clinical Mental Health Counseling Examination", desc: "For clinical mental health counselors seeking CCMHC or state licensure" },
  { name: "CECE & School Comps", full: "Comprehensive Exams", desc: "School-specific comprehensive exams covering the same CACREP content" },
];

const DOMAINS = [
  { icon: "⚖️", name: "Professional Orientation & Ethics" },
  { icon: "🌍", name: "Social & Cultural Diversity" },
  { icon: "🌱", name: "Human Growth & Development" },
  { icon: "💼", name: "Career Development" },
  { icon: "🤝", name: "Helping Relationships" },
  { icon: "👥", name: "Group Counseling" },
  { icon: "📊", name: "Assessment & Testing" },
  { icon: "🔬", name: "Research & Program Evaluation" },
];

const FEATURES = [
  { icon: "📝", title: "943 Practice Questions", desc: "Original, graduate-level questions with detailed explanations for every answer" },
  { icon: "⚡", title: "Timed Challenges", desc: "Build speed and confidence with 30-second timed rounds" },
  { icon: "📊", title: "Domain Score Tracking", desc: "See exactly where you're strong and where you need more work" },
  { icon: "🗂️", title: "Flashcards", desc: "Key terms and concepts across all 8 CACREP domains" },
  { icon: "📱", title: "Study Anywhere", desc: "Works on your phone, tablet, or laptop with no app download needed" },
  { icon: "🔄", title: "Progress Sync", desc: "Your stats follow you across devices when you sign in" },
];

export default function LandingPage({ onGetStarted, onSignIn }) {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: C.text, minHeight: "100vh", background: C.bg }}>
      <style>{globalCSS}</style>

      {/* Nav */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 3 }}>CompExamPro</div>
        <div style={{ display: "flex", gap: 12 }}>
          <button onClick={onSignIn} className="hoverable" style={{
            background: "transparent", border: `1px solid ${C.bdr}`, borderRadius: 10,
            padding: "8px 16px", cursor: "pointer", fontFamily: "inherit",
            color: C.text, fontSize: 13, fontWeight: 600,
          }}>Sign In</button>
          <button onClick={onGetStarted} className="hoverable" style={{
            background: C.accent, border: "none", borderRadius: 10,
            padding: "8px 16px", cursor: "pointer", fontFamily: "inherit",
            color: "#fff", fontSize: 13, fontWeight: 600,
          }}>Get Started Free</button>
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 20px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", padding: "60px 0 40px", animation: "fi 0.5s ease-out" }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
            Counselor Exam Prep
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 700, lineHeight: 1.2, marginBottom: 16, maxWidth: 600, margin: "0 auto 16px" }}>
            Pass your CPCE, NCE, or NCMHCE with confidence
          </h1>
          <p style={{ fontSize: 18, color: C.dim, lineHeight: 1.6, maxWidth: 520, margin: "0 auto 32px" }}>
            943 practice questions across all 8 CACREP domains. Built by counseling students, for counseling students.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={onGetStarted} className="hoverable" style={{
              background: C.accent, color: "#fff", border: "none", borderRadius: 12,
              padding: "14px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
            }}>Start Studying Free</button>
            <div style={{ display: "flex", alignItems: "center", gap: 6, color: C.dim, fontSize: 14 }}>
              <span style={{ color: C.correct }}>✓</span> 25 free questions, no credit card needed
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div style={{ textAlign: "center", padding: "20px 0 40px", borderTop: `1px solid ${C.bdr}`, borderBottom: `1px solid ${C.bdr}`, margin: "0 0 40px" }}>
          <p style={{ fontSize: 14, color: C.dim }}>
            Covers the same 8 CACREP core areas tested on every major counseling certification exam
          </p>
        </div>

        {/* Exam Coverage */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>One app. Every exam.</h2>
          <p style={{ fontSize: 15, color: C.dim, textAlign: "center", marginBottom: 24, maxWidth: 500, margin: "0 auto 24px" }}>
            Whether you're taking the CPCE at graduation, the NCE for licensure, or the NCMHCE for clinical certification, the content is the same 8 CACREP domains.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
            {EXAMS.map((e, i) => (
              <div key={i} style={{
                background: C.card, borderRadius: 16, border: `1px solid ${C.bdr}`,
                padding: 20,
              }}>
                <div style={{ fontSize: 20, fontWeight: 700, color: C.accent, marginBottom: 4 }}>{e.name}</div>
                <div style={{ fontSize: 12, color: C.dim, marginBottom: 8 }}>{e.full}</div>
                <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{e.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 8 Domains */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>All 8 CACREP domains covered</h2>
          <p style={{ fontSize: 15, color: C.dim, textAlign: "center", marginBottom: 24 }}>
            Questions written at the graduate level with detailed explanations for every answer
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 8 }}>
            {DOMAINS.map((d, i) => (
              <div key={i} style={{
                background: C.card, borderRadius: 12, border: `1px solid ${C.bdr}`,
                padding: "12px 16px", display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 20 }}>{d.icon}</span>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{d.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 24 }}>Everything you need to study smarter</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
            {FEATURES.map((f, i) => (
              <div key={i} style={{
                background: C.card, borderRadius: 16, border: `1px solid ${C.bdr}`,
                padding: 20,
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 6 }}>{f.title}</div>
                <div style={{ fontSize: 13, color: C.dim, lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, textAlign: "center", marginBottom: 8 }}>Simple, affordable pricing</h2>
          <p style={{ fontSize: 15, color: C.dim, textAlign: "center", marginBottom: 24 }}>
            Start free. Upgrade when you're ready to go all in.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, maxWidth: 560, margin: "0 auto" }}>
            <div style={{
              background: C.card, borderRadius: 16, border: `1px solid ${C.bdr}`,
              padding: 24, textAlign: "center",
            }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.dim, marginBottom: 8 }}>Free</div>
              <div style={{ fontSize: 36, fontWeight: 700, fontFamily: "'Space Mono'", marginBottom: 8 }}>$0</div>
              <div style={{ fontSize: 13, color: C.dim, marginBottom: 16, lineHeight: 1.5 }}>
                25 practice questions across all domains. No credit card required.
              </div>
              <button onClick={onGetStarted} className="hoverable" style={{
                background: "transparent", border: `2px solid ${C.bdr}`, borderRadius: 12,
                padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                width: "100%", fontFamily: "inherit", color: C.text,
              }}>Get Started</button>
            </div>
            <div style={{
              background: `${C.accent}11`, borderRadius: 16, border: `2px solid ${C.accent}`,
              padding: 24, textAlign: "center", position: "relative",
            }}>
              <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: C.accent, color: "#fff", fontSize: 11, fontWeight: 700,
                padding: "4px 12px", borderRadius: 6,
              }}>Most Popular</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.accent, marginBottom: 8 }}>Pro</div>
              <div style={{ fontSize: 36, fontWeight: 700, fontFamily: "'Space Mono'", marginBottom: 4 }}>
                $6.99<span style={{ fontSize: 14, fontWeight: 400, color: C.dim }}>/mo</span>
              </div>
              <div style={{ fontSize: 13, color: C.correct, marginBottom: 12 }}>or $49.99/year (save 40%)</div>
              <div style={{ fontSize: 13, color: C.dim, marginBottom: 16, lineHeight: 1.5 }}>
                All 943 questions, unlimited practice, full progress tracking.
              </div>
              <button onClick={onGetStarted} className="hoverable" style={{
                background: C.accent, border: "none", borderRadius: 12,
                padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer",
                width: "100%", fontFamily: "inherit", color: "#fff",
              }}>Start Free Trial</button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{
          textAlign: "center", padding: "48px 20px", marginBottom: 40,
          background: C.card, borderRadius: 20, border: `1px solid ${C.bdr}`,
        }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>Ready to start studying?</h2>
          <p style={{ fontSize: 15, color: C.dim, marginBottom: 24, maxWidth: 400, margin: "0 auto 24px" }}>
            Join counseling students who are preparing smarter for their certification exams.
          </p>
          <button onClick={onGetStarted} className="hoverable" style={{
            background: C.accent, color: "#fff", border: "none", borderRadius: 12,
            padding: "14px 32px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
          }}>Get Started Free</button>
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", padding: "24px 0 40px", fontSize: 12, color: C.dim, lineHeight: 1.8 }}>
          <div style={{ fontWeight: 700, color: C.accent, letterSpacing: 2, textTransform: "uppercase", fontSize: 11, marginBottom: 8 }}>CompExamPro</div>
          <div>Practice questions for CPCE, NCE, NCMHCE, and counseling comprehensive exams</div>
          <div style={{ marginTop: 8, opacity: 0.7, fontSize: 11 }}>
            CompExamPro is not affiliated with, endorsed by, or associated with NBCC, CCE, CACREP, or any licensing body. CPCE, NCE, and NCMHCE are trademarks of their respective owners.
          </div>
          <div style={{ marginTop: 12, fontSize: 12 }}>
            &copy; {new Date().getFullYear()} CompExamPro. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

import { go } from "../ui";

const PRIVACY_POLICY = {
  title: "Privacy Policy",
  lastUpdated: "November 21, 2026",
  sections: [
    {
      heading: "Information We Collect",
      text: "When you create an account, we collect your email address and an encrypted password. When you use CompExamPro, we collect your quiz responses, scores, and study progress to provide personalized performance tracking. We also collect basic usage analytics (pages visited, features used) through Vercel Analytics to improve the product."
    },
    {
      heading: "How We Use Your Information",
      text: "We use your information to provide and improve CompExamPro, including authenticating your account, tracking your study progress across devices, processing subscription payments through Stripe, and analyzing aggregate usage patterns to improve the product. We do not sell your personal information to third parties."
    },
    {
      heading: "Payment Processing",
      text: "Subscription payments are processed by Stripe. We do not store your credit card number, bank account details, or other payment credentials on our servers. Stripe handles all payment data in accordance with PCI-DSS standards. Please review Stripe's privacy policy at stripe.com/privacy for details on how they handle your payment information."
    },
    {
      heading: "Data Storage and Security",
      text: "Your account data and study progress are stored securely using Supabase, which provides encryption at rest and in transit. We implement industry-standard security measures to protect your information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security."
    },
    {
      heading: "Your Rights",
      text: "You may access, update, or delete your account information at any time by contacting us. You may cancel your subscription at any time by emailing support@compexampro.com from your account address. Upon account deletion, we will remove your personal data from our active systems within 30 days."
    },
    {
      heading: "Cookies and Local Storage",
      text: "CompExamPro uses browser local storage to save your study progress locally for offline access and faster performance. We use Vercel Analytics for basic, privacy-friendly usage analytics. We also use a Google Ads conversion tag to measure whether our advertising leads to sign-ups; Google may set cookies for that purpose. We do not sell your data or show third-party ads inside CompExamPro."
    },
    {
      heading: "Children's Privacy",
      text: "CompExamPro is intended for graduate-level counseling students and professionals. We do not knowingly collect information from children under 13. If you believe a child has provided us with personal information, please contact us."
    },
    {
      heading: "Changes to This Policy",
      text: "We may update this privacy policy from time to time. We will notify registered users of material changes via email. Continued use of CompExamPro after changes constitutes acceptance of the updated policy."
    },
    {
      heading: "Contact",
      text: "For questions about this privacy policy or your data, contact us at support@compexampro.com."
    },
  ]
};

const TERMS_OF_SERVICE = {
  title: "Terms of Service",
  lastUpdated: "November 21, 2026",
  sections: [
    {
      heading: "Acceptance of Terms",
      text: "By accessing or using CompExamPro, you agree to be bound by these Terms of Service. If you do not agree, do not use the service."
    },
    {
      heading: "Description of Service",
      text: "CompExamPro is an educational study tool that provides practice questions, flashcards, and performance tracking for students preparing for counselor certification examinations. The content is designed for educational and study purposes only."
    },
    {
      heading: "Accounts and Registration",
      text: "You must provide accurate information when creating an account. You are responsible for maintaining the security of your account credentials. You must be at least 18 years old to create an account."
    },
    {
      heading: "Subscriptions and Payments",
      text: "CompExamPro offers free and paid subscription tiers. Paid subscriptions are billed on a recurring basis (monthly or annually) through Stripe. You may cancel your subscription at any time, and cancellation will take effect at the end of your current billing period. No refunds are provided for partial billing periods."
    },
    {
      heading: "Educational Disclaimer",
      text: "CompExamPro is an independent educational resource. It is not affiliated with, endorsed by, or associated with the National Board for Certified Counselors (NBCC), the Center for Credentialing and Education (CCE), the Council for Accreditation of Counseling and Related Educational Programs (CACREP), or any state licensing board. CPCE, NCE, and NCMHCE are trademarks of their respective owners. Our practice questions are original educational content, drafted with the assistance of AI tools and checked against published professional sources. They are not actual exam questions."
    },
    {
      heading: "No Guarantee of Results",
      text: "While CompExamPro is designed to help you prepare for counselor certification exams, we do not guarantee that use of our service will result in passing any examination. Exam results depend on many factors beyond the scope of our study materials."
    },
    {
      heading: "Intellectual Property",
      text: "All content on CompExamPro, including questions, explanations, and design, is the property of CompExamPro and is protected by copyright. You may not reproduce, distribute, or create derivative works from our content without written permission."
    },
    {
      heading: "Acceptable Use",
      text: "You agree not to: share your account with others, attempt to access other users' data, reverse engineer or scrape the application, use the content for commercial purposes without permission, or engage in any activity that disrupts the service."
    },
    {
      heading: "Limitation of Liability",
      text: "CompExamPro is provided 'as is' without warranties of any kind. To the maximum extent permitted by law, CompExamPro shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service."
    },
    {
      heading: "Modifications",
      text: "We reserve the right to modify these terms at any time. Material changes will be communicated to registered users via email. Continued use after changes constitutes acceptance."
    },
    {
      heading: "Governing Law",
      text: "These terms are governed by the laws of the State of New York, without regard to conflict of law principles."
    },
    {
      heading: "Contact",
      text: "For questions about these terms, contact us at support@compexampro.com."
    },
  ]
};

export default function Legal({ page }) {
  const doc = page === "privacy" ? PRIVACY_POLICY : TERMS_OF_SERVICE;
  return (
    <div className="narrow page stack" style={{ "--gap": "18px" }}>
      <h2>{doc.title}</h2>
      <p className="small muted">Last updated {doc.lastUpdated}</p>
      {doc.sections.map((s) => (
        <div key={s.heading} className="stack" style={{ "--gap": "6px" }}>
          <h3>{s.heading}</h3>
          <p className="muted" style={{ maxWidth: "70ch" }}>{s.text}</p>
        </div>
      ))}
      <div><button className="link" onClick={() => go(page === "privacy" ? "/terms" : "/privacy")}>{page === "privacy" ? "Read the Terms of Service" : "Read the Privacy Policy"}</button></div>
    </div>
  );
}

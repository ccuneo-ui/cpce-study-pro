# CompExamPro — Counselor Exam Prep

A gamified study app for counseling certification exams including the CPCE, NCE, NCMHCE, and school-specific comprehensive exams (CECE, etc.). Built with React + Vite.

## Target Exams

- **CPCE** — Counselor Preparation Comprehensive Examination
- **NCE** — National Counselor Examination
- **NCMHCE** — National Clinical Mental Health Counseling Examination
- **School comps** — CECE and other program-specific comprehensive exams

All questions cover the 8 CACREP core domains.

## Features

- 1000 practice questions across all 8 CACREP domains
- Flashcards with key concepts
- Timed challenge mode (30s per question)
- Domain score tracking
- Points, streaks, and progress tracking
- User accounts with progress sync
- Free tier (100 questions) and paid subscription (full access)

## Getting Started

```bash
cp .env.example .env
# Fill in your Supabase credentials in .env
npm install
npm run dev
```

## Tech Stack

- React 18 + Vite
- Supabase (auth, database, edge functions)
- Stripe (subscriptions)
- Vercel (hosting)

## Disclaimer

CompExamPro is not affiliated with, endorsed by, or associated with NBCC, CCE, CACREP, or any licensing body. CPCE, NCE, and NCMHCE are trademarks of their respective owners. All practice questions are original content written against publicly available CACREP domain descriptions.

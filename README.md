# CompExamPro

Practice questions and timed practice exams for the CPCE and counseling comprehensive exams. React + Vite, Supabase (accounts, progress sync, subscription state), Stripe (checkout), Vercel (hosting).

## What is in the app

- 320 original questions, 40 in each of the eight CACREP core areas, each with a written rationale
- A free 40-question timed diagnostic (5 per area)
- Two full-length timed exams (160 questions, 20 per area, 3 h 45 min), with no overlap between them
- Untimed practice by area, with filters for unseen, missed, and saved questions
- 228 flashcards
- Readiness by content area, exam history, exam-date countdown

## Where things live

- `src/data/bank/*.js`: the question bank, one file per content area. In every question `o[0]` is the correct answer; the app shuffles the choices each time a question is shown.
- `src/data/questions.js`: assembles the bank, assigns each question to exam form A or B, and marks the free questions.
- `src/lib/engine.js`: builds exams and practice rounds, scoring.
- `src/lib/ProgressContext.jsx`: answer history, saved to the browser and synced to Supabase (`user_progress.domain_stats.v2`).
- `src/screens/*`: one file per screen. `src/ui.jsx`: shared pieces. `src/styles.css`: all styling.

## Adding or fixing a question

Edit the file for its content area in `src/data/bank/`. Keep the correct answer first in `o`, keep the four choices close in length, and give every new question a unique `id`. Keep 40 per area so the two exam forms stay at 20 per area.

## Running it

```bash
cp .env.example .env   # fill in Supabase and Stripe values
npm install
npm run dev
```

In `npm run dev` only, run `localStorage.setItem("dev-pro", "1")` in the browser console to preview Pro without paying.

## Disclaimer

CompExamPro is not affiliated with, endorsed by, or sponsored by NBCC, CCE, CACREP, or any university or licensing board. CPCE, NCE, and NCMHCE are trademarks of their respective owners. All questions are original.

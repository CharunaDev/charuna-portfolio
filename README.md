# Charuna Portfolio

Personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and Prisma + PostgreSQL (Supabase) for the contact form.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env` and fill in your Supabase connection strings (Dashboard → Project Settings → Database → Connection string):

- `DATABASE_URL` — Transaction pooler connection string, used by the running app.
- `DIRECT_URL` — Direct connection string, used only by Prisma Migrate.

After setting these, apply the schema:

```bash
npx prisma migrate deploy
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript, no emit
- `npm run test` — Vitest unit tests
- `npm run format` — Prettier

## CI/CD

- [.github/workflows/test.yml](.github/workflows/test.yml) runs lint, typecheck, tests and a production build on every push/PR to `main`.
- [.github/workflows/deploy.yml](.github/workflows/deploy.yml) runs after `Test` succeeds on `main`: applies Prisma migrations to the database, then builds and deploys to Vercel via the Vercel CLI.

### Required GitHub Actions secrets

Add these under Repo → Settings → Secrets and variables → Actions:

| Secret | Where to get it |
| --- | --- |
| `DATABASE_URL` | Supabase Transaction pooler connection string |
| `DIRECT_URL` | Supabase direct connection string |
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel → Project Settings → General (or `.vercel/project.json` after `vercel link`) |
| `VERCEL_PROJECT_ID` | Vercel → Project Settings → General (or `.vercel/project.json` after `vercel link`) |

### Vercel project environment variables

Separately, in the Vercel dashboard under Project → Settings → Environment Variables, add `DATABASE_URL` (the same pooled connection string) so the deployed serverless functions can reach the database at runtime.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev              # Start dev server with Turbopack (http://localhost:3000)

# Build & Production
npm run build
npm start

# Linting & Testing
npm run lint
npm test                 # Run Vitest tests
npm run test:watch
npm run test:coverage

# Database (Drizzle ORM + Supabase)
npm run db:push          # Push schema changes
npm run db:generate      # Generate migration files
npm run db:migrate       # Run migrations
npm run db:deploy        # Push migrations + regenerate types
npm run db:types         # Regenerate TypeScript types from Supabase schema
npm run db:start / db:stop / db:reset  # Local Supabase instance
```

## ⚠️ Database Note

**The active database is now MySQL**, not Supabase. All new database work should target the MySQL connection via `DATABASE_URL`.

- Supabase files (`db/index.ts`, `types/database.ts`, Supabase env vars) are kept as **backup/reference only** — do not remove them, but do not write new code against the Supabase client.
- When touching the database layer, use the MySQL-compatible Drizzle config and connection, not the Supabase client.

## Architecture

**Stack**: Next.js 15 (App Router), React 19, TypeScript, TailwindCSS 4, Drizzle ORM, MySQL, Vitest, EmailJS, Zod, react-hook-form.

### App Router Structure

- Pages follow the pattern: `app/<route>/page.tsx` renders a `<RoutePageComponent>` (client component, defined in the same directory).
- Most page components use `"use client"` — the RSC/client split is at the page level.
- Page-specific styles live as `app/<route>/<route>.css` files.

### Form Handling

- All forms use the `useContactForm` hook (`hooks/useContactForm.ts`) for submission logic.
- Email delivery is done **entirely client-side** via EmailJS — there are no API routes.
- Data is also persisted to Supabase using the Drizzle client (`db/index.ts`).
- Phone numbers are normalized to E.164 format via `lib/phone-utils.ts` (libphonenumber-js).

### Database Layer

- Schema defined in `db/schema.ts` (8 tables: `profile_quiz`, `mini_test`, `plan_selection`, `brochure_download`, `custom_quote`, `diagnostic_maroc_2030`, `contact_form`, `guide_download`).
- All tables use UUID primary keys with `defaultRandom()` and auto-generated `created_at`.
- Auto-generated Supabase TypeScript types live in `types/database.ts` — regenerate with `npm run db:types` after schema changes.

### Key Shared Components

- `app/Header.tsx` — sticky responsive nav with active link detection
- `components/forms/ContactSection.tsx` — reusable contact form
- `components/BotpressChat.tsx` — live chat widget
- `components/WhatsAppButton.tsx` — floating WhatsApp CTA

### CI/CD

Push to `main` triggers `.github/workflows/deploy.yml`: SSH into VPS → `git pull` → `npm ci` → `npm run build` → PM2 restart (`entrepreneur-morocco` service on port 3002).

## Environment Variables

See `.env.example` for required variables:

- `NEXT_PUBLIC_EMAILJS_*` — EmailJS service, template, and public key
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase client
- `DATABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` — server-side DB access

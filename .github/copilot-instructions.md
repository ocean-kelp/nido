# Copilot Instructions — Nido 🏠

## Project Overview
Nido is an offline-first mobile home organizer app built with React Native and Expo.
It helps users track recurring bills, monitor household supplies, and manage personal finances.
There is no backend — all data is stored locally using SQLite.

## Tech Stack
- **Framework**: React Native + Expo (SDK 51+)
- **Routing**: Expo Router (file-based, similar to Next.js App Router)
- **Language**: TypeScript (strict mode)
- **Database**: Expo SQLite (local only, no backend)
- **State management**: Zustand
- **Notifications**: Expo Notifications (local scheduled only)
- **Package manager**: Yarn
- **Target platform**: Android first, iOS later

## Project Structure
```
app/              → routes and layouts only, files should be thin
src/
  components/     → reusable UI components
    ui/           → generic, no business logic (Button, Card, Input)
    shared/       → business-aware components (PaymentCard, ResourceItem)
  hooks/          → custom hooks, one per feature/concern
  services/       → all SQLite and notification logic lives here
  stores/         → Zustand stores
  utils/          → pure helper functions
  constants/      → colors, spacing, strings, etc.
  types/          → global TypeScript interfaces and types
docs/             → markdown documentation, versioned with code
assets/           → images, fonts, icons
```

## Code Style & Conventions

### General
- Always use TypeScript. Never use `any` — prefer `unknown` if type is uncertain.
- Use named exports for components, default exports only for route files inside `app/`.
- Prefer `const` over `let`. Never use `var`.
- Use path alias `@/` instead of relative imports (e.g. `@/src/hooks/usePayments`).

### Components
- One component per file.
- Component files use PascalCase: `PaymentCard.tsx`.
- Keep route files (`app/**`) thin — they only assemble components and connect hooks.
- All logic goes in hooks inside `src/hooks/`.

### Hooks
- Prefix with `use`: `usePayments`, `useResources`.
- Each hook handles one concern only.
- Hooks that touch the database must call a service function, not query SQLite directly.

### Services
- All database queries live in `src/services/`.
- One file per domain: `payments.service.ts`, `resources.service.ts`.
- Functions should be async and return typed results.

### Styling
- Use `StyleSheet.create()` for all styles.
- No inline styles except for truly dynamic values.
- Use constants from `@/src/constants/` for colors, spacing, and font sizes.
- Flexbox for all layouts.

### Naming conventions
- Files: camelCase for non-components, PascalCase for components.
- Types and interfaces: PascalCase, prefix interfaces with `I` only if ambiguous.
- Constants: SCREAMING_SNAKE_CASE.
- Database table names: snake_case.

## Key Behaviors to Preserve
- **Offline-first**: never assume network availability. All features must work without internet.
- **No auth**: there is no login or user account system.
- **Local notifications only**: all notifications are scheduled locally, no push server.
- **Single device**: no sync between devices (for now).

## What NOT to do
- Do not install packages outside the official Expo ecosystem without a strong reason.
- Do not add a backend, REST API, or any remote database.
- Do not use `localStorage` or `AsyncStorage` for structured data — use SQLite.
- Do not create API routes or server-side logic.
- Do not use class components — functional components only.
- Do not bypass TypeScript with `// @ts-ignore` without an explanation comment.
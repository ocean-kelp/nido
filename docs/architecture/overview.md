# Architecture Overview

This folder documents the technical architecture of Nido.

## Contents

| File | Description |
|---|---|
| `overview.md` | This file — high-level architecture summary |
| `stack.md` | Tech stack and tooling decisions *(coming soon)* |
| `database-schema.md` | SQLite schema and data model *(coming soon)* |

---

## High-level summary

Nido is a fully client-side mobile app. There is no backend, no authentication, and no
network dependency. All data is stored locally on the device using SQLite.

```
┌─────────────────────────────────┐
│         Nido (React Native)     │
│                                 │
│  ┌──────────┐  ┌─────────────┐  │
│  │  Expo    │  │   Zustand   │  │
│  │  Router  │  │   (state)   │  │
│  └──────────┘  └─────────────┘  │
│                                 │
│  ┌──────────┐  ┌─────────────┐  │
│  │  SQLite  │  │    Expo     │  │
│  │  (data)  │  │ Notifs(local│  │
│  └──────────┘  └─────────────┘  │
└─────────────────────────────────┘
```

## Related
- [ADR-001 — Expo over Flutter](../decisions/ADR-001-expo-over-flutter.md)
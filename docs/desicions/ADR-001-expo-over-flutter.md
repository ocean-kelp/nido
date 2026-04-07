# ADR-001 — Expo (React Native) over Flutter

| Field | Value |
|---|---|
| **ID** | ADR-001 |
| **Status** | Accepted |
| **Date** | 2025-04-06 |
| **Author** | ocean-kelp |

---

## Context

Nido is an offline-first mobile home organizer targeting Android initially, with iOS as a
future consideration. The project is maintained by a single developer and is not intended
for commercial monetization. The goal is to ship a working, well-structured app while also
serving as a portfolio piece.

A cross-platform mobile framework was required to avoid maintaining two separate native
codebases. The candidates evaluated were:

- **Expo (React Native)**
- **Flutter**
- **Kotlin Multiplatform (KMP)**

---

## Decision

Use **React Native with Expo** as the cross-platform mobile framework.

---

## Evaluation

### Expo (React Native)
- Large, mature ecosystem with broad community support
- Expo abstracts away native configuration (no Xcode or Android Studio required to start)
- Expo Router provides file-based routing similar to Next.js, reducing cognitive overhead
- `expo-notifications`, `expo-sqlite`, and other first-party libraries cover all of Nido's
  core requirements out of the box
- React Native's new architecture (JSI + Fabric) eliminates the legacy bridge performance
  bottleneck — rendering performance is no longer a concern for a UI of this complexity
- Backed by Meta with a stable long-term outlook
- Developer has prior familiarity with the React ecosystem

### Flutter
- Strong UI consistency across platforms
- In May 2024, Google laid off approximately 200 employees from the Flutter and Dart core
  teams, raising concerns about long-term investment and stability
- Key contributors (including the creator of the Impeller rendering engine) have since left
  the Flutter team
- Requires learning Dart, an additional language with a smaller ecosystem
- For a single-developer portfolio project, the risk of depending on a framework with
  uncertain backing outweighs the UI consistency benefits

### Kotlin Multiplatform (KMP)
- Promising approach with strong Kotlin/Android developer adoption
- Compose Multiplatform (the UI layer) still has rough edges on iOS as of early 2025
- Significantly smaller ecosystem and community compared to React Native
- Higher entry barrier for a developer without prior Kotlin experience
- Not recommended for greenfield projects without a specific Kotlin background

---

## Consequences

### Positive
- Fast development setup with Expo Go — no native build tools required during development
- All core features (notifications, SQLite, navigation) are covered by official Expo
  libraries, minimizing third-party dependency risk
- Codebase is in TypeScript/React, maximizing compatibility with the developer's existing
  skill set and making the project more readable as a portfolio piece

### Negative
- Expo's managed workflow has limitations for deeply custom native modules, though none
  are anticipated for Nido's current or planned feature set
- If a bare native module is ever required, an eject to bare workflow would be necessary

### Neutral
- The decision to target Android first reduces the need to test iOS-specific behavior
  during early development, regardless of framework choice

---

## Related
- [Stack decisions](../architecture/stack.md)
- [RF-001 — Bill reminders](../requirements/functional/RF-001-bill-reminders.md)
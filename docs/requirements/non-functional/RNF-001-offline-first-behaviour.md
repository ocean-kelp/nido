---
id: RNF-001
title: Offline-first behavior
status: defined
priority: high
created: 2026-04-06
updated: 2026-04-06
---

# RNF-001 — Offline-first behavior

## Description
Nido must function completely without an internet connection. Since the app targets everyday
home management, users should never be blocked from accessing their data or core features
due to lack of connectivity. There is no backend — all data lives locally on the device.

This is not just a technical constraint but a product principle: no account, no sync,
no dependency on any external service.

## Criteria
- [ ] All core features (bill reminders, resource tracking, finance overview) are fully
      usable without an internet connection
- [ ] The app never makes any network requests during normal operation
- [ ] All data is persisted locally using SQLite and survives app restarts
- [ ] Local notifications are scheduled on-device and do not require a push server
- [ ] No authentication or account creation is required to use the app
- [ ] The app does not degrade in functionality when the device is in airplane mode

## Implementation notes
- Local storage is handled via `expo-sqlite`
- Notifications are scheduled locally via `expo-notifications` with no remote push server
- No networking libraries (axios, fetch for data) should be added to the project
- `AsyncStorage` should not be used for structured data — SQLite only

## Related
- [ADR-001 — Expo over Flutter](../../decisions/ADR-001-expo-over-flutter.md)
- [RNF-004 — Security](./RNF-004-security.md) *(local data protection)*
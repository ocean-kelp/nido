# Non-Functional Requirements

This folder contains all non-functional requirements (NFRs) for Nido.
NFRs define the quality attributes of the system — how it behaves, not what it does.

---

## Index

| ID | Title | Status | Priority |
|---|---|---|---|
| RNF-001 | Offline-first behavior | defined | high |

> Add new RNF files to this folder and register them in the index above.

---

## How to create a new RNF file

### 1. Name the file
Use the format `RNF-XXX-short-title.md` where `XXX` is a zero-padded number:
```
RNF-002-performance.md
RNF-003-usability.md
RNF-004-security.md
```

### 2. Use this template

```markdown
---
id: RNF-XXX
title: Short descriptive title
status: draft
priority: high | medium | low
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# RNF-XXX — Title

## Description
What quality attribute does this requirement address and why does it matter for Nido?

## Criteria
- [ ] Measurable or observable criterion 1
- [ ] Measurable or observable criterion 2
- [ ] Measurable or observable criterion 3

## Implementation notes
<!-- Fill in when relevant architectural or code decisions are made -->

## Related
- Links to related RFs, ADRs, or other RNFs if applicable
```

### 3. Register it
Add a row to the index table at the top of this README.

### 4. Update status as the project evolves
- `draft` — requirement identified but not fully defined
- `defined` — criteria are clear and agreed upon
- `implemented` — behavior is reflected in the codebase

---

## Common NFR categories for reference

| Category | Examples |
|---|---|
| **Reliability** | Offline behavior, data persistence, crash recovery |
| **Performance** | App startup time, list rendering, notification delivery |
| **Usability** | Onboarding, input friction, accessibility |
| **Security** | Local data protection, dependency auditing |
| **Maintainability** | Code structure, documentation, test coverage |
| **Portability** | Android/iOS compatibility, screen size adaptability |
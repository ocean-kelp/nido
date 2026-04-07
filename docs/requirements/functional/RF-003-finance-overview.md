---
id: RF-003
title: Finance overview
status: draft
priority: medium
created: 2026-04-06
updated: 2026-04-06
---

# RF-003 — Finance overview

## Description

Users need a quick way to understand their financial situation at a glance. This
requirement provides a simple monthly overview dashboard that shows total fixed
expenses (from registered recurring payments) versus the user's available
monthly budget. By setting a monthly income reference, the app calculates
remaining budget after fixed costs, giving the user real-time visibility into
their financial commitments without requiring detailed transaction history.

## Acceptance criteria

- [ ] User can set a monthly income reference amount
- [ ] Dashboard displays total fixed expenses from all registered recurring
      payments
- [ ] Dashboard calculates and displays remaining budget (income - expenses)
- [ ] Dashboard shows month-to-date fixed commitments
- [ ] User can update or modify the income reference
- [ ] The overview updates in real-time as recurring payments are added, edited,
      or marked as paid
- [ ] Dashboard clearly highlights over-budget scenarios (if expenses exceed
      income)

## Implementation notes

<!-- Fill in when development starts -->

## Technical decisions

<!-- Document any non-obvious choices made during implementation -->

## Related

- RF-001 — Bill reminders
- RF-002 — Household resource tracking

---

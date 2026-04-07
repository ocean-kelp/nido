---
id: RF-001
title: Bill reminders
status: draft
priority: high
created: 2026-04-06
updated: 2026-04-06
---

# RF-001 — Bill reminders

## Description

Users need a way to track recurring payments and stay on top of deadlines. This
requirement allows users to register recurring bills/payments (such as rent,
subscriptions, insurance) and receive timely reminders before each payment is
due. The app sends local notifications to alert the user, and allows them to
mark payments as completed for the current billing cycle.

## Acceptance criteria

- [ ] User can create a recurring payment with name, amount, due date, and
      recurrence pattern
- [ ] App sends a local notification N days before the due date (configurable,
      default 3 days)
- [ ] User can mark a payment as paid for the current cycle
- [ ] Recurring payments persist and accurately calculate future due dates
- [ ] Paid status resets automatically at the start of each cycle (based on
      recurrence)
- [ ] User can edit or delete existing recurring payments

## Implementation notes

<!-- Fill in when development starts -->

## Technical decisions

<!-- Document any non-obvious choices made during implementation -->

## Related

- RF-003 — Finance overview

---

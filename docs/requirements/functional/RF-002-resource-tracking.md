---
id: RF-002
title: Household resource tracking
status: draft
priority: high
created: 2026-04-06
updated: 2026-04-06
---

# RF-002 — Household resource tracking

## Description

Users need visibility into household consumables to plan restocking before they
run out. This requirement allows users to track household resources (such as
toilet paper, dish soap, cleaning supplies) with an estimated duration after
purchase. The app calculates an estimated depletion date and alerts the user
when inventory is running low, so they can reorder proactively.

## Acceptance criteria

- [ ] User can create a household resource with name, estimated duration (e.g.,
      "3 weeks"), and purchase date
- [ ] App calculates and displays the estimated depletion date
- [ ] App sends an alert when a resource is running low (configurable threshold,
      e.g., 7 days remaining)
- [ ] User can log a restock event to reset the countdown
- [ ] User can view a list of all tracked resources with their depletion status
- [ ] User can edit or delete existing resources

## Implementation notes

<!-- Fill in when development starts -->

## Technical decisions

<!-- Document any non-obvious choices made during implementation -->

## Related

- RF-003 — Finance overview

---

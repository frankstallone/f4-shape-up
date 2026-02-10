---
title: "How-To: Find and Patch Rabbit Holes"
description: "How-To: Find and Patch Rabbit Holes"
---
## Objective

Reduce delivery risk before betting by identifying likely complexity traps.

## Signals of a rabbit hole

- key behavior is undefined
- multiple implementation paths with major trade-offs
- dependency on unknown external system behavior
- hidden migration or compatibility costs
- UX flow depends on unresolved policy decisions

## Procedure

1. Review the shaped solution path-by-path.
2. Ask "what could block the team for multiple days?"
3. Classify each risk:
- technical unknown
- product decision ambiguity
- integration dependency
- sequencing dependency
4. Patch each risk by one of:
- clarifying the behavior now
- adding a hard boundary/no-go
- cutting the risky slice
- deferring to a later cycle
5. Re-check appetite fit.

## Output format in pitch

- Rabbit hole:
- Why risky:
- Patch decision:
- Residual risk:

## Quality bar

A pitch is bettable when the highest-risk unknowns are either solved or explicitly bounded.

## See also

- How-To: [Shape a pitch in one session](../how-to/shape-a-pitch.md)
- Reference: [Scope map patterns](../reference/scope-map-patterns.md)
- Explanation: [Why shaping before betting](../explanation/why-shaping-before-betting.md)

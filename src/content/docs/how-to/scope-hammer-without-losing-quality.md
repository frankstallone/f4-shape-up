---
title: "How-To: Scope Hammer Without Losing Quality"
description: "How-To: Scope Hammer Without Losing Quality"
---
## Objective

Ship on time by cutting scope deliberately while maintaining quality.

## Principle

Fixed time, variable scope.

## Scope-cut order

1. remove optional variants
2. reduce edge-case support
3. defer secondary workflows
4. simplify interaction depth
5. postpone non-core integrations

## Decision test

Keep scope if it is required for:

- core user outcome
- end-to-end flow integrity
- safety or correctness

Cut scope if it only improves:

- flexibility
- cosmetic polish beyond baseline
- infrequent advanced paths

## Cut log template

- Candidate cut:
- User impact:
- Why acceptable now:
- Follow-up shaping note:

## Anti-patterns

- cutting quality controls
- cutting integration testing
- adding replacement complexity under deadline pressure

## See also

- How-To: [Execute a six-week build cycle](../how-to/execute-a-cycle.md)
- How-To: [Decide stop vs extend](../how-to/decide-stop-vs-extend.md)
- Explanation: [Fixed time, variable scope](../explanation/fixed-time-variable-scope.md)

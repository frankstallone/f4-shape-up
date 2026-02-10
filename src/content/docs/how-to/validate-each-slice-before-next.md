---
title: "How-To: Validate Each Slice Before Moving On"
description: "How-To: Validate Each Slice Before Moving On"
---
## Objective

Prevent drift and rework by proving each slice works before starting the next one.

## Preconditions

- current slice has a plan file
- demo criteria are defined for the slice
- test scenarios are known

## Validation protocol

1. Run the slice implementation in the app.
2. Execute happy-path scenario for the slice.
3. Execute edge scenarios relevant to the slice.
4. Confirm no regressions in previously completed slices.
5. Record results in the slice plan.

## Prompt pattern for agent-driven validation

Use an explicit instruction that requires real execution and interaction:

- `Please run the app yourself and interact with it to verify this slice works. Cover all relevant scenarios and report failures before making the next change.`

## Scenario matrix template

| Scenario | Input | Expected result | Pass/Fail |
|------|------|------|------|
| Happy path | Normal user action | Primary behavior works |  |
| Edge case 1 | Boundary input | Graceful handling |  |
| Edge case 2 | Alternate flow | Correct state transition |  |
| Regression check | Prior slice behavior | Still works unchanged |  |

## Go/no-go gate

Only proceed when all are true:

- slice demo criteria pass
- no critical scenario failures
- no unresolved regressions
- slice notes updated with evidence

## Evidence to record

- commands used
- scenarios run
- observed outputs
- fixes applied
- final pass state

## See also

- Tutorial: [Ryan 0-1 shaping playbook](/tutorials/ryan-0-1-shaping-playbook/)
- How-To: [Slice a breadboarded shape](/how-to/slice-a-breadboarded-shape/)
- How-To: [Execute a six-week build cycle](/how-to/execute-a-cycle/)

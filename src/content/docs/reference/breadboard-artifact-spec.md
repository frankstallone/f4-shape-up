---
title: "Reference: Breadboard Artifact Spec"
description: "Reference: Breadboard Artifact Spec"
---
## Purpose

Define the minimum artifact set for a breadboard that is useful for shaping and slicing.

## Required artifacts

- UI affordances table
- Non-UI affordances table
- Wiring diagram grouped by place

## UI affordances table fields

| Field | Description |
|------|------|
| ID | Stable affordance id (`U1`, `U2`...) |
| Place | Screen, dialog, panel, or context |
| Affordance | User-visible control or output |
| Intent | What user action or signal it represents |
| Wires Out | IDs this affordance triggers |

## Non-UI affordances table fields

| Field | Description |
|------|------|
| ID | Stable affordance id (`N1`, `N2`...) |
| Place | Logical location in system |
| Affordance | Handler, query, transform, service, store action |
| Intent | Mechanism responsibility |
| Wires Out | IDs this mechanism triggers |

## Wiring rules

- Keep IDs stable through revisions.
- Every wire endpoint must exist in affordance tables.
- Group diagram by place so cross-place boundaries are visible.
- Update tables first, then diagram.

## CURRENT baseline

Reserve `CURRENT` as the baseline shape when mapping an existing system.

## Slicing outputs from breadboard

After slicing, produce:

- sliced breadboard with explicit slice boundaries
- slice grid with status and demo criteria
- one plan file per slice

## Quality checks

- no orphan affordances
- no unexplained cross-place wires
- main path is traceable end-to-end
- each slice ends in demo-able UI

## See also

- How-To: [Breadboard a solution](/how-to/breadboard-a-solution/)
- How-To: [Slice a breadboarded shape](/how-to/slice-a-breadboarded-shape/)
- How-To: [Validate each slice before moving on](/how-to/validate-each-slice-before-next/)

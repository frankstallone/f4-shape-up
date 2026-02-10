---
title: "How-To: Create a Big Picture Document"
description: "How-To: Create a Big Picture Document"
---
## Objective

Create a one-page summary that stays consistent with shaping, slices, and implementation plans.

## When to create it

Create the Big Picture after a shape is selected and breadboarded.

## Required sections

The document has exactly three sections:

- Frame
- Shape
- Slices

## Procedure

1. Add feature title and selected shape.
2. Copy Problem and Outcome into Frame.
3. Add selected-shape fit check in Shape.
4. Add Parts table in Shape.
5. Add full breadboard in Shape.
6. Add sliced breadboard and slices grid in Slices.
7. Keep this page updated when lower-level docs change.

## Template

```markdown
TITLE: [Feature Name] - Big Picture

**Selected shape:** F (short description)

## Frame

### Problem
- ...

### Outcome
- ...

## Shape

### Fit Check (R x F)
| Req | Requirement | Status | F |
|-----|-------------|--------|---|
| R0 | ... | Core goal | ✅ |

### Parts
| Part | Mechanism | Flag |
|------|-----------|:----:|
| F1 | ... | |

### Breadboard
[diagram]

## Slices

[sliced diagram]

[slices grid]
```

## Consistency rule

If shaping, slice definitions, or plan details change, update Big Picture in the same session.

## See also

- Reference: [Shaping document hierarchy and sync rules](/reference/shaping-document-hierarchy-and-sync-rules/)
- Reference: [Shaping prompts cheat sheet](/reference/shaping-prompts-cheat-sheet/)
- How-To: [Slice a breadboarded shape](/how-to/slice-a-breadboarded-shape/)
- How-To: [Create a fit check decision matrix](/how-to/create-fit-check-decision-matrix/)

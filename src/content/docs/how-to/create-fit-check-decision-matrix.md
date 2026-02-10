---
title: "How-To: Create a Fit Check Decision Matrix"
description: "How-To: Create a Fit Check Decision Matrix"
---
## Objective

Evaluate requirements against shape options in a single decision table.

## Inputs

- Requirement set (`R0`, `R1`, `R2`...)
- Two or more shape options (`A`, `B`, `C`...)

## Procedure

1. Create one row per requirement.
2. Include full requirement text (no abbreviations).
3. Add one column per shape option.
4. Score each cell as pass (`✅`) or fail (`❌`).
5. Add short notes only for failures.

## Canonical template

```markdown
| Req | Requirement | Status | A | B | C |
|-----|-------------|--------|---|---|---|
| R0 | Full requirement text | Core goal | ✅ | ✅ | ✅ |
| R1 | Full requirement text | Must-have | ✅ | ❌ | ✅ |
| R2 | Full requirement text | Must-have | ❌ | ✅ | ✅ |

**Notes:**
- B fails R1: reason
- A fails R2: reason
```

## Rules

- Use only `✅` and `❌`.
- Never place `⚠️` in fit check cells.
- Keep commentary out of cells; use notes below.
- If all shapes fail a requirement, rewrite or split the requirement.

## Selected-shape view

After choosing a shape, maintain a focused table with one shape column.

```markdown
| Req | Requirement | Status | F |
|-----|-------------|--------|---|
| R0 | Full requirement text | Core goal | ✅ |
| R1 | Full requirement text | Must-have | ✅ |
```

## See also

- Tutorial: [Run your first R/S shaping session](/tutorials/first-r-s-shaping-session/)
- How-To: [Shape a pitch in one session](/how-to/shape-a-pitch/)
- Reference: [Shaping prompts cheat sheet](/reference/shaping-prompts-cheat-sheet/)
- Reference: [Shaping notation and fit check rules](/reference/shaping-notation-and-fit-check-rules/)

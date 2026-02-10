---
title: "Reference: Shaping Notation and Fit Check Rules"
description: "Reference: Shaping Notation and Fit Check Rules"
---
## Notation hierarchy

| Level | Notation | Meaning |
|------|----------|---------|
| Requirements | `R0`, `R1`, `R2` | Problem constraints |
| Shapes | `A`, `B`, `C` | Alternative solution approaches |
| Components | `C1`, `C2`, `C3` | Parts inside shape `C` |
| Alternatives | `C3-A`, `C3-B` | Mutually exclusive approaches for one component |

## Requirement rules

- `R` states what is needed, not how it is implemented.
- Keep requirement text standalone.
- Keep top-level requirement count manageable.

## Fit check rules

- Fit check is binary: `✅` or `❌` only.
- Rows are requirements.
- Columns are shape options.
- Keep full requirement text in every row.
- Put explanations in notes below table.

## Unknown mechanism rule

If a part is still unknown (`⚠️`), treat requirement satisfaction as `❌` until the mechanism is resolved.

## Selected-shape convention

After selection, maintain `R × [selected shape]` for execution tracking.

## See also

- How-To: [Create a fit check decision matrix](/how-to/create-fit-check-decision-matrix/)
- How-To: [Run a shaping spike](/how-to/run-a-shaping-spike/)
- Reference: [Shaping document hierarchy and sync rules](/reference/shaping-document-hierarchy-and-sync-rules/)

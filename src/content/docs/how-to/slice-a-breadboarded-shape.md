---
title: "How-To: Slice a Breadboarded Shape"
description: "How-To: Slice a Breadboarded Shape"
---
## Objective

Break a selected shape into vertical, demo-able implementation slices.

## Preconditions

- selected shape is explicit
- selected-shape fit check is stable
- breadboard exists for the selected shape

## Procedure

1. List all affordances in the selected-shape flow.
2. Group affordances into vertical slices (`V1`, `V2`, `V3`...).
3. Ensure each slice ends with visible user value.
4. Define demo criteria for each slice.
5. Order slices by risk and dependency.
6. Create one plan file per slice.

## Slice quality checks

- no horizontal layer-only slices
- each slice is independently demo-able
- unknowns are front-loaded
- dependencies are explicit

## Slice grid template

```markdown
|  |  |  |
|:--|:--|:--|
| **V1: Name**<br>✅ COMPLETE<br><br>• item<br>• item<br><br>*Demo: ...* | **V2: Name**<br>⏳ PENDING<br><br>• item<br>• item<br><br>*Demo: ...* | **V3: Name**<br>⏳ PENDING<br><br>• item<br>• item<br><br>*Demo: ...* |
```

## Outputs

- slices doc with sliced breadboard + slice grid
- `V1-plan.md`, `V2-plan.md`, etc.

## See also

- How-To: [Create a big picture document](/how-to/create-big-picture-document/)
- How-To: [Validate each slice before moving on](/how-to/validate-each-slice-before-next/)
- How-To: [Execute a six-week build cycle](/how-to/execute-a-cycle/)
- Reference: [Breadboard artifact spec](/reference/breadboard-artifact-spec/)
- Reference: [Scope map patterns](/reference/scope-map-patterns/)

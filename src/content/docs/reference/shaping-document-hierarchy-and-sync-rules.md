---
title: "Reference: Shaping Document Hierarchy and Sync Rules"
description: "Reference: Shaping Document Hierarchy and Sync Rules"
---
## Document hierarchy (high to low)

1. Big Picture
2. Shaping doc
3. Slices doc
4. Slice plans (`V1-plan.md`, `V2-plan.md`...)

## Ground-truth ownership

- Big Picture: summary for fast context
- Shaping doc: source of truth for requirements, shapes, fit checks, and parts
- Slices doc: source of truth for slice definitions and sliced breadboard
- Slice plans: source of truth for implementation details per slice

## Synchronization rule

When one level changes, update affected levels in the same operation.

- high-level change must flow down
- low-level discovery must flow up

## Common drift failures

- Big Picture says a part is resolved, shaping doc still flags it unknown
- Slice plan changes scope, slices doc not updated
- Fit check changed in shaping doc, Big Picture still shows old state

## Session close checklist

- all impacted docs updated
- selected-shape fit check current
- slice statuses current
- Big Picture reflects latest state

## See also

- How-To: [Create a big picture document](/how-to/create-big-picture-document/)
- How-To: [Slice a breadboarded shape](/how-to/slice-a-breadboarded-shape/)
- Tutorial: [Run your first R/S shaping session](/tutorials/first-r-s-shaping-session/)

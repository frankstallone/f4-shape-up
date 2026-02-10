---
title: "Tutorial: Ryan 0-1 Shaping Playbook"
description: "Tutorial: Ryan 0-1 Shaping Playbook"
---
## Goal

Run a complete shaping-to-build flow in the same style Ryan demonstrates: from blank folder to working slices.

## Prerequisites

- Blank project directory
- Claude Code session
- One concrete feature idea
- Ability to run and test the app locally

## Step 1: Start with one concrete product prompt

Describe the product idea in plain language and include this instruction:

- `use your shaping skill to capture the requirements and tease apart the key parts of the solution A`

Outcome:

- initial `shaping.md` exists
- first draft of Problem/Outcome, requirements, and Shape A exists

## Step 2: Check fit immediately

Ask for fit check between requirements and shape:

- `show me R x A`

Then rotate it to inspect by shape part:

- `show me A x R`

Outcome:

- solved vs unsolved constraints are explicit
- next unknown to investigate is obvious

## Step 3: Spike first unknown

Ask for a targeted spike:

- `please spike A2`

Keep the spike in its own file and fold findings back into shaping.

Outcome:

- unknown becomes concrete options
- requirements or shape parts are updated

## Step 4: Iterate requirements and shape together

As findings emerge:

- rewrite requirements that were solution-specific
- add missing requirements discovered through fit checks
- keep fit check current after each update

Outcome:

- requirement set is cleaner and more stable
- selected shape is converging

## Step 5: Breadboard selected shape

When a shape is credible, ask to breadboard it:

- `let's breadboard A`

Outcome:

- affordances and wiring are explicit
- vertical slicing becomes possible

## Step 6: Slice vertically

Ask for slicing directly:

- `let's slice it`

Require each slice to have clear demo criteria.

Outcome:

- ordered slices (`V1`, `V2`, ...)
- each slice is demo-able, not a horizontal layer

## Step 7: Build slice-by-slice with explicit validation

For each slice, ask for an implementation plan that includes self-testing.

Example instruction:

- `Please make an implementation plan for the first slice. Include how you will test it yourself to ensure it's working.`

Before moving to next slice, require scenario-level validation.

Outcome:

- working slice verified
- confidence preserved before next increment

## Step 8: Repeat until feature is complete

Continue plan, build, validate for each slice until all required behavior is shipped.

Final checks:

- requested behavior works end-to-end
- no hidden backlog commitments introduced
- docs reflect actual implementation decisions

## See also

- Tutorial: [Run your first R/S shaping session](/tutorials/first-r-s-shaping-session/)
- How-To: [Create a fit check decision matrix](/how-to/create-fit-check-decision-matrix/)
- How-To: [Run a shaping spike](/how-to/run-a-shaping-spike/)
- How-To: [Slice a breadboarded shape](/how-to/slice-a-breadboarded-shape/)
- How-To: [Validate each slice before moving on](/how-to/validate-each-slice-before-next/)
- Reference: [Shaping prompts cheat sheet](/reference/shaping-prompts-cheat-sheet/)
- Reference: [Upstream sources](/reference/upstream-sources/)

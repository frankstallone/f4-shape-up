# How-To: Run a Shaping Spike

## Objective

Resolve a critical unknown by investigating mechanics before committing to a shape.

## When to run a spike

Run a spike when:

- a key part is still unclear
- multiple implementation paths have different risks
- external system behavior is unknown

## File rule

Create spikes in separate files (for example, `spike-state-sync.md`).

## Procedure

1. Name the spike with the component and question.
2. Add context and goal.
3. List specific investigation questions.
4. Define acceptance as knowledge gained, not a decision.
5. Record findings and update the shaping doc.

## Spike template

```markdown
## [Component] Spike: [Title]

### Context
Why this investigation is needed.

### Goal
What we need to learn.

### Questions
| # | Question |
|---|----------|
| X1-Q1 | Specific mechanics question |
| X1-Q2 | Specific mechanics question |

### Acceptance
Spike is complete when all questions are answered and we can describe the required implementation steps.
```

## Close-out checklist

- findings captured in spike file
- affected shape parts updated
- fit check updated if requirements changed
- follow-up action decided (proceed, cut, or defer)

## See also

- How-To: [Find and patch rabbit holes](/how-to/find-and-patch-rabbit-holes/)
- How-To: [Create a fit check decision matrix](/how-to/create-fit-check-decision-matrix/)
- Reference: [Shaping prompts cheat sheet](/reference/shaping-prompts-cheat-sheet/)
- Reference: [Shaping document hierarchy and sync rules](/reference/shaping-document-hierarchy-and-sync-rules/)

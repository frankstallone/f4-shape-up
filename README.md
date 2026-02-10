# f4-shape-up

Diataxis-based documentation derived from *Shape Up* by Ryan Singer.

## Project Layout

- `docs/`: source Diataxis docs
- `src/content/docs/`: Starlight-rendered docs content
- `sources/shape-up.pdf`: source book PDF
- `sources/shape-up.md`: extracted Markdown reference

## Diataxis Map

- `docs/tutorials/`: learning-oriented, end-to-end lessons
- `docs/how-to/`: goal-oriented procedures
- `docs/reference/`: factual lookups (roles, artifacts, cadence, glossary)
- `docs/explanation/`: rationale and tradeoffs

## Run the Starlight Site

```bash
npm install
npm run dev
```

Build for static output:

```bash
npm run build
```

The built site is generated in `dist/`.

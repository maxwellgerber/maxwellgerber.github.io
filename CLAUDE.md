# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog / portfolio site for maxgerber.com. Built with Next.js, TypeScript, and MDX. Statically exported and deployed to GitHub Pages.

## Commands

```bash
npm run dev           # Auto-starts Kroki (docker compose up -d) then next dev on :3030
npm run build         # Static build. Requires Kroki running — run `npm run kroki:up` first
npm run build:slides  # Build Marp slides → public/slides/*.html. LOCAL ONLY — requires Kroki running. Commit the output HTML after running.
npm run kroki:up      # Start local Kroki in the background (required for diagram rendering)
npm run kroki:down    # Stop local Kroki
```

Diagrams in MDX (```d2, ```mermaid, ```plantuml, ```excalidraw fences) are rendered at build time by `lib/rehype-kroki.mjs`, which POSTs the fence source to Kroki and inlines the returned SVG. In CI, Kroki runs as a GitHub Actions service container.

For large diagram sources (especially Excalidraw JSON), put the source in a sibling file and reference it with `@file:`:

````
```excalidraw
@file:diagrams/my-diagram.excalidraw
```
````

The path is resolved relative to the MDX file. Inline fences still work for small diagrams.

There are no tests. Pre-commit hook (Husky) auto-runs `prettier --write .` and `eslint . --fix`.

## Architecture

- **Static export**: `next.config.js` sets `output: 'export'` — no SSR, purely static site for GitHub Pages
- **MDX content**: Blog posts live in `pages/blog/<slug>/` as MDX files. The homepage content is `pages/content.mdx`
- **Blog metadata**: `data/blogs.ts` contains the `Blog[]` array with title, description, slug, tags, and publish date for each post. New posts must be registered here
- **MDX overrides**: `mdx-components.tsx` maps headings to a custom `Header` component, code blocks to `Codeblock`, and links to open in new tabs
- **Path aliases**: `@/components/*`, `@/data/*`, `@/markdown/*` (configured in tsconfig.json)
- **Interactive components**: `components/RunnableCodeBlock/` provides executable code blocks for blog posts; `components/codeblock/` handles syntax highlighting via react-code-blocks

## Adding a Blog Post

1. Create `pages/blog/<slug>/index.mdx` (wrap in `BlogLayout` component)
2. Add an entry to the `Blogs` array in `data/blogs.ts`
3. Place any post-specific components in `components/blog/<slug>/`

## Slides

Marp presentations live in `slides/<slug>/`. Each deck is a single `.md` file with Marp front matter. Diagrams use the same `@file:` / Kroki pattern as MDX blog posts (`slides/marp.config.cjs` wires this up). Built HTML lands in `public/slides/<slug>.html` and is served as a standalone file (no Next.js page needed). CI builds slides after `next build` using the same Kroki service container.

To add a new deck: drop `slides/<slug>/<slug>.md` (and a `diagrams/` folder if needed), then add a `build:slides` entry for it in `package.json` and the CI step in `.github/workflows/main.yml`.

## CI/CD

GitHub Actions on push to `master`: builds with Node 22, runs `next build` then `build:slides`, and deploys the combined `out/` to GitHub Pages.

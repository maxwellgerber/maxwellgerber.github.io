# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog / portfolio site for maxgerber.com. Built with Next.js, TypeScript, and MDX. Statically exported and deployed to GitHub Pages.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Static build (next build with output: 'export')
```

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

## CI/CD

GitHub Actions on push to `master`: builds with Node 20 and deploys to GitHub Pages.

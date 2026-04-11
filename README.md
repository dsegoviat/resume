# resume

Interactive bilingual resume website for David Segovia, built with Next.js and exported as static files for GitHub Pages.

## Stack

- Next.js (App Router) + TypeScript
- Static export (`out/`) for GitHub Pages
- MDX-based blog content pipeline (hidden while there are no published posts)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Build

```bash
npm run lint
npm run build
```

Static output is generated in `out/`.

## Deploy to GitHub Pages

The workflow at `.github/workflows/deploy.yml` deploys automatically on pushes to `main`.

Target URL:

- `https://dsegoviat.github.io/resume/`

## Content Editing

### Resume content

Edit structured data files:

- `src/content/profile.ts`
- `src/content/experience.ts`
- `src/content/skills.ts`
- `src/content/dictionary.ts`

### Blog posts (hidden until first post)

1. Add an `.mdx` file under `content/posts/`.
2. Include frontmatter:

```md
---
title: "Post title"
date: "2026-04-11"
summary: "One-sentence summary"
tags: ["nextjs", "architecture"]
published: true
locale: "en"
---

Your post content.
```

3. Once at least one post has `published: true`, the Blog link appears automatically in navigation.

## Notes

- English is the default language at first load.
- The EN/ES selection is stored in localStorage.
- Site messaging is optimized for remote opportunities and hybrid roles in Barcelona.

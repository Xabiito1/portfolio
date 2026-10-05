# Portfolio

Personal portfolio. Built with Next.js (App Router), React, TypeScript and Tailwind CSS. Motion is used only for small interactions (mobile menu, copy email).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the production domain. It is used for canonical URLs, Open Graph and the sitemap.

## Structure

```
src/
  app/
    page.tsx               Home
    work/page.tsx          All projects
    work/[slug]/page.tsx   Case study (statically generated)
    opengraph-image.tsx    Default social image
    sitemap.ts, robots.ts
  components/              UI and home sections
  content/
    site.ts                Profile, links, hero, how I work, stack, experience
    projects.ts            Projects and case studies
    images/                Screenshots and photos
  lib/                     Small helpers
```

All content lives in `src/content`. There is no CMS.

## Adding a project

1. Add screenshots to `src/content/images/<slug>/`. A 4:3 or 16:10 cover works best.
2. Import them in `src/content/projects.ts` and add an entry following the `Project` type in `src/content/types.ts`, including `caseStudy`.
3. Set `featured: true` to show it on the home page (keep it to 2–3).

Only real projects with a `caseStudy` get a `/work/[slug]` page. The current entries (`Project 01`, `Project 02`) are placeholders: they are not linked, have no page and stay out of the sitemap.

Each case study has: overview, challenge, role, key features, technical implementation, screenshots and outcome. Keep them short and only describe what you actually did.

## Before publishing

- [ ] Replace the placeholder projects in `src/content/projects.ts`.
- [ ] Optional: add a photo in `hero.image` (`src/content/site.ts`).
- [ ] Add the GitHub URL in `contact.github`.
- [ ] Add the CV to `public/cv.pdf` and set `contact.cv` to `"/cv.pdf"`.
- [ ] Set `NEXT_PUBLIC_SITE_URL`.

## Deploy

Works on Vercel with zero config: import the repository and set `NEXT_PUBLIC_SITE_URL`.

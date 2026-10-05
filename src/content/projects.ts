import type { Project } from "./types";

import placeholderCover from "./images/placeholder/project-cover.png";

/**
 * Projects shown on the site, in display order.
 *
 * There are no public projects yet. The entries below are neutral placeholders
 * that only fill the layout: they are not linked, get no case study page and
 * stay out of the sitemap. Replace them with real projects when they can be shown.
 * Only write what you actually did: no invented clients, metrics or results.
 *
 * To add a project:
 * 1. Put screenshots in src/content/images/<slug>/ (4:3 or 16:10 works best for the cover).
 * 2. Import them here and add an entry with a `caseStudy` (see types.ts).
 * 3. Set `featured: true` to show it on the home page (2–3 projects).
 */

const placeholder = (n: number): Project => {
  const id = String(n).padStart(2, "0");
  return {
    slug: `project-${id}`,
    name: `Project ${id}`,
    summary: "Details coming soon.",
    stack: [],
    featured: true,
    placeholder: true,
    cover: { src: placeholderCover, alt: "" },
  };
};

export const projects: Project[] = [placeholder(1), placeholder(2)];

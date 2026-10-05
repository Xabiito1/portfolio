import type { Project } from "./types";

import cover from "./images/placeholder/project-cover.png";
import shot1 from "./images/placeholder/screenshot-1.png";
import shot2 from "./images/placeholder/screenshot-2.png";
import shot3 from "./images/placeholder/screenshot-3.png";
import shot4 from "./images/placeholder/screenshot-4.png";

/**
 * Projects shown on the site, in display order.
 *
 * The two entries below are neutral placeholders so the layout can be reviewed.
 * Replace them with real projects (and real screenshots) before publishing.
 * Only write what you actually did: no invented clients, metrics or results.
 *
 * To add a project:
 * 1. Put screenshots in src/content/images/<slug>/ (16:10 works best for the cover).
 * 2. Import them here and add an entry. Remove `placeholder: true`.
 */

const placeholderScreens = [
  { src: shot1, alt: "Placeholder screenshot", caption: "Screenshot caption" },
  { src: shot2, alt: "Placeholder screenshot", caption: "Screenshot caption" },
  { src: shot3, alt: "Placeholder screenshot", caption: "Screenshot caption" },
  { src: shot4, alt: "Placeholder screenshot", caption: "Screenshot caption" },
];

const placeholderCaseStudy: Project["caseStudy"] = {
  overview: "A short description of what the product is and who it is for.",
  challenge: "What problem needed solving, and any constraints that shaped the solution.",
  role: "What you were responsible for and who you worked with.",
  features: ["Key feature", "Key feature", "Key feature", "Key feature"],
  implementation: [
    "How the frontend is structured.",
    "How data is fetched and managed.",
    "How it connects to the backend or APIs.",
  ],
  screenshots: placeholderScreens,
  outcome: "Where the project stands today. Only facts you can stand behind.",
};

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project one",
    summary: "Short description of the project.",
    stack: ["Technology", "Technology", "Technology"],
    featured: true,
    placeholder: true,
    cover: { src: cover, alt: "Placeholder project screenshot" },
    caseStudy: placeholderCaseStudy,
  },
  {
    slug: "project-two",
    name: "Project two",
    summary: "Short description of the project.",
    stack: ["Technology", "Technology", "Technology"],
    featured: true,
    placeholder: true,
    cover: { src: cover, alt: "Placeholder project screenshot" },
    caseStudy: placeholderCaseStudy,
  },
];

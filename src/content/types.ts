import type { StaticImageData } from "next/image";

export type ContentImage = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

export type Project = {
  slug: string;
  name: string;
  /** One line, shown on cards and as the page description. */
  summary: string;
  stack: string[];
  year?: string;
  links?: {
    live?: string;
    repo?: string;
  };
  /** Show on the home page under "Selected work". Keep it to 2–3 projects. */
  featured?: boolean;
  /**
   * Placeholder entries only fill the layout until real projects exist.
   * They are not linked, get no /work/[slug] page and stay out of the sitemap.
   */
  placeholder?: boolean;
  cover: ContentImage;
  /** Required for a project to get its own /work/[slug] page. */
  caseStudy?: {
    overview: string;
    challenge: string;
    role: string;
    features: string[];
    implementation: string[];
    screenshots: ContentImage[];
    outcome: string;
  };
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  /** ISO-like month, e.g. "2025-01". Used for the <time> element. */
  start: string;
  /** Omit for current positions. */
  end?: string;
  description: string;
};

import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

type ProjectWithCaseStudy = Project & { caseStudy: NonNullable<Project["caseStudy"]> };

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((p) => p.featured);
  return (featured.length > 0 ? featured : projects).slice(0, 3);
}

/** A project gets its own page only if it is real and has a case study. */
export function hasCaseStudy(project: Project): project is ProjectWithCaseStudy {
  return !project.placeholder && project.caseStudy !== undefined;
}

export function getCaseStudies(): ProjectWithCaseStudy[] {
  return projects.filter(hasCaseStudy);
}

export function getCaseStudy(slug: string): ProjectWithCaseStudy | undefined {
  return getCaseStudies().find((p) => p.slug === slug);
}

/**
 * Selected work is only shown once there is at least one real case study.
 * In development the placeholders stay visible so the layout can be worked on.
 */
export const showWork = getCaseStudies().length > 0 || process.env.NODE_ENV === "development";

/** Navigation without the Work link while the section is hidden. */
export function visibleNav<T extends { href: string }>(items: readonly T[]): T[] {
  return showWork ? [...items] : items.filter((item) => item.href !== "/#work");
}

/** Previous and next case studies, wrapping around. Null when there are fewer than two. */
export function getAdjacentCaseStudies(slug: string) {
  const list = getCaseStudies();
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1 || list.length < 2) return null;
  return {
    previous: list[(index - 1 + list.length) % list.length],
    next: list[(index + 1) % list.length],
  };
}

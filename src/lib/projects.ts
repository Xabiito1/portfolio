import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  const featured = projects.filter((p) => p.featured);
  return (featured.length > 0 ? featured : projects).slice(0, 3);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Previous and next projects, wrapping around. Null when there is only one project. */
export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1 || projects.length < 2) return null;
  return {
    previous: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

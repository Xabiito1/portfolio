import Link from "next/link";
import { getAllProjects, getFeaturedProjects } from "@/lib/projects";
import { ArrowRight } from "../icons";
import { ProjectCard } from "../project-card";
import { HomeSection } from "./section";

export function SelectedWork() {
  const featured = getFeaturedProjects();
  const total = getAllProjects().length;

  if (featured.length === 0) return null;

  return (
    <HomeSection
      id="work"
      label="Selected work"
      action={
        total > featured.length ? (
          <Link
            href="/work"
            className="group inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            View all projects
            <ArrowRight className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
          </Link>
        ) : null
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </HomeSection>
  );
}

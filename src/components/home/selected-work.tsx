import Link from "next/link";
import { getAllProjects, getCaseStudies, getFeaturedProjects } from "@/lib/projects";
import { ArrowRight } from "../icons";
import { ProjectCard } from "../project-card";
import { Section } from "../ui";

export function SelectedWork() {
  const featured = getFeaturedProjects();
  if (featured.length === 0) return null;

  const total = getAllProjects().length;
  const hasPublished = getCaseStudies().length > 0;

  let aside = null;
  if (!hasPublished) {
    aside = <p className="text-sm text-muted">Case studies coming soon.</p>;
  } else if (total > featured.length) {
    aside = (
      <Link
        href="/work"
        className="group inline-flex items-center gap-1.5 text-sm text-ink-soft transition-colors hover:text-ink"
      >
        All projects
        <ArrowRight className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
      </Link>
    );
  }

  return (
    <Section id="work" title="Selected work" aside={aside} stacked>
      <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:gap-x-8">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}

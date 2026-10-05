import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Container } from "@/components/ui";
import { notFound } from "next/navigation";
import { getAllProjects, getCaseStudies, showWork } from "@/lib/projects";

const hasPublished = getCaseStudies().length > 0;

export const metadata: Metadata = {
  title: "Work",
  description: "Projects I have worked on.",
  alternates: { canonical: "/work" },
  // Nothing worth indexing until there is at least one real case study.
  robots: hasPublished ? undefined : { index: false, follow: true },
};

export default function WorkPage() {
  // Hidden in production until there is a real project to show.
  if (!showWork) notFound();

  const projects = getAllProjects();

  return (
    <section aria-labelledby="work-title" className="pt-14 pb-20 sm:pt-20 lg:pt-28 lg:pb-28">
      <Container>
        <h1 id="work-title" className="text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl lg:text-6xl">
          Work
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
          {hasPublished
            ? "Some of the products I have worked on, and what I did on each one."
            : "Case studies coming soon."}
        </p>

        <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:gap-x-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h2" />
          ))}
        </div>
      </Container>
    </section>
  );
}

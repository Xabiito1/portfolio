import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { Container, Eyebrow } from "@/components/ui";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects I have worked on.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <section aria-labelledby="work-title" className="pt-12 pb-16 sm:pt-20 sm:pb-24">
      <Container>
        <Eyebrow>Work</Eyebrow>
        <h1 id="work-title" className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-soft">
          Some of the products I have worked on, with what I did on each one.
        </p>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h2" />
          ))}
        </div>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { hasCaseStudy } from "@/lib/projects";
import { ArrowUpRight } from "./icons";

/**
 * Project preview: the screenshot does the work, text sits underneath without a box.
 * Placeholders and projects without a case study are rendered without a link.
 */
export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const linked = hasCaseStudy(project);

  return (
    <article className="group relative">
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-surface ring-1 ring-black/[0.04]">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1280px) 580px, (min-width: 640px) 50vw, 100vw"
          className={
            linked
              ? "object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.012] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              : "object-cover object-top"
          }
        />
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-6">
        <Heading className="text-lg font-medium tracking-[-0.01em] text-ink">
          {linked ? (
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-1.5 after:absolute after:inset-0 after:rounded-md"
            >
              {project.name}
              <ArrowUpRight className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink motion-reduce:transition-none" />
            </Link>
          ) : (
            project.name
          )}
        </Heading>
        {project.stack.length > 0 && (
          <p className="truncate text-sm text-muted">
            <span className="sr-only">Stack: </span>
            {project.stack.join(" · ")}
          </p>
        )}
      </div>
      <p className="mt-1.5 max-w-md text-[15px] leading-relaxed text-muted">{project.summary}</p>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";
import { ArrowUpRight } from "./icons";
import { TagList } from "./ui";

export function ProjectCard({ project, headingLevel = "h3" }: { project: Project; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-line bg-white transition-colors hover:border-line-strong has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-accent">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface">
        <Image
          src={project.cover.src}
          alt={project.cover.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1152px) 540px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Heading className="text-lg font-semibold tracking-tight text-ink">
              <Link
                href={`/work/${project.slug}`}
                className="after:absolute after:inset-0 focus-visible:outline-none"
              >
                {project.name}
              </Link>
            </Heading>
            <p className="mt-1 text-sm leading-relaxed text-muted">{project.summary}</p>
          </div>
          <span
            aria-hidden="true"
            className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white"
          >
            <ArrowUpRight />
          </span>
        </div>

        <TagList items={project.stack} className="mt-5" />
      </div>
    </article>
  );
}

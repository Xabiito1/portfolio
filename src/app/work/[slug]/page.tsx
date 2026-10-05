import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Grid } from "@/components/icons";
import { Container } from "@/components/ui";
import { getAdjacentCaseStudies, getCaseStudies, getCaseStudy } from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

// Only real projects with a case study get a page. Placeholders never do.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudies().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  const url = `/work/${project.slug}`;
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: project.name,
      description: project.summary,
      images: [
        {
          url: project.cover.src.src,
          width: project.cover.src.width,
          height: project.cover.src.height,
          alt: project.cover.alt,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const adjacent = getAdjacentCaseStudies(project.slug);

  return (
    <article className="pt-10 pb-20 sm:pt-14 lg:pb-28">
      <Container>
        <Link
          href="/work"
          className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" />
          All projects
        </Link>

        <header className="mt-8 grid items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.035em] text-ink sm:text-5xl lg:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-soft">{project.summary}</p>
            {project.stack.length > 0 && (
              <p className="mt-6 text-sm text-muted">
                <span className="sr-only">Stack: </span>
                {project.stack.join(" · ")}
              </p>
            )}

            {(project.year || project.links?.live || project.links?.repo) && (
              <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
                {project.year && <li className="text-muted">{project.year}</li>}
                {project.links?.live && (
                  <li>
                    <ExternalLink href={project.links.live}>Visit site</ExternalLink>
                  </li>
                )}
                {project.links?.repo && (
                  <li>
                    <ExternalLink href={project.links.repo}>Source code</ExternalLink>
                  </li>
                )}
              </ul>
            )}
          </div>

          <div className="overflow-hidden rounded-md bg-surface ring-1 ring-black/[0.04]">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </header>

        <div className="mt-14 border-t border-line sm:mt-20">
          <CaseSection index={1} title="Overview">
            <p>{caseStudy.overview}</p>
          </CaseSection>
          <CaseSection index={2} title="The challenge">
            <p>{caseStudy.challenge}</p>
          </CaseSection>
          <CaseSection index={3} title="My role">
            <p>{caseStudy.role}</p>
          </CaseSection>
          <CaseSection index={4} title="Key features">
            <BulletList items={caseStudy.features} />
          </CaseSection>
          <CaseSection index={5} title="Technical implementation">
            <BulletList items={caseStudy.implementation} />
          </CaseSection>

          {caseStudy.screenshots.length > 0 && (
            <CaseSection index={6} title="Screenshots" wide>
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                {caseStudy.screenshots.map((shot, i) => (
                  <figure key={i}>
                    <div className="overflow-hidden rounded-md bg-surface ring-1 ring-black/[0.04]">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        placeholder="blur"
                        sizes="(min-width: 1280px) 580px, (min-width: 640px) 50vw, 100vw"
                        className="h-auto w-full"
                      />
                    </div>
                    {shot.caption && <figcaption className="mt-2 text-sm text-muted">{shot.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            </CaseSection>
          )}

          <CaseSection index={caseStudy.screenshots.length > 0 ? 7 : 6} title="Outcome">
            <p>{caseStudy.outcome}</p>
          </CaseSection>
        </div>

        {adjacent && (
          <nav aria-label="More projects" className="mt-12 grid grid-cols-[1fr_auto_1fr] items-center gap-4 sm:mt-16">
            <Link
              href={`/work/${adjacent.previous.slug}`}
              className="group inline-flex items-center gap-2 justify-self-start text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <ArrowLeft className="shrink-0 transition-transform group-hover:-translate-x-0.5 motion-reduce:transition-none" />
              <span>
                <span className="sr-only">Previous project: </span>
                <span aria-hidden="true" className="hidden sm:inline">
                  Previous project
                </span>
                <span className="sm:sr-only">{adjacent.previous.name}</span>
              </span>
            </Link>
            <Link
              href="/work"
              aria-label="All projects"
              className="grid size-10 place-items-center rounded-md text-ink-soft transition-colors hover:text-ink"
            >
              <Grid width={18} height={18} />
            </Link>
            <Link
              href={`/work/${adjacent.next.slug}`}
              className="group inline-flex items-center gap-2 justify-self-end text-sm text-ink-soft transition-colors hover:text-ink"
            >
              <span>
                <span className="sr-only">Next project: </span>
                <span aria-hidden="true" className="hidden sm:inline">
                  Next project
                </span>
                <span className="sm:sr-only">{adjacent.next.name}</span>
              </span>
              <ArrowRight className="shrink-0 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </Link>
          </nav>
        )}
      </Container>
    </article>
  );
}

function CaseSection({
  index,
  title,
  wide = false,
  children,
}: {
  index: number;
  title: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const id = title.toLowerCase().replace(/[^a-z]+/g, "-");
  const number = String(index).padStart(2, "0");

  return (
    <section
      aria-labelledby={id}
      className={
        wide
          ? "border-b border-line py-8 sm:py-10"
          : "grid gap-3 border-b border-line py-8 lg:grid-cols-12 lg:gap-x-8 lg:py-10"
      }
    >
      <h2
        id={id}
        className={`flex items-baseline gap-3 font-medium text-ink ${wide ? "mb-6" : "lg:col-span-4"}`}
      >
        <span className="font-mono text-xs font-normal text-muted">{number}.</span>
        {title}
      </h2>
      <div className={wide ? undefined : "max-w-2xl text-[15px] leading-relaxed text-ink-soft lg:col-span-8"}>
        {children}
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="relative pl-5 before:absolute before:top-[0.7em] before:left-0 before:size-1 before:rounded-full before:bg-ink-soft">
          {item}
        </li>
      ))}
    </ul>
  );
}

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-ink underline-offset-4 hover:underline"
    >
      {children}
      <ArrowUpRight className="text-muted" />
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

import Image from "next/image";
import { hero } from "@/content/site";
import { showWork } from "@/lib/projects";
import { ArrowRight } from "../icons";
import { ButtonLink, Container, Eyebrow } from "../ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-14 pb-16 sm:pt-20 lg:pt-28 lg:pb-24">
      <Container>
        <h1
          id="hero-title"
          className="max-w-5xl text-[2.375rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance text-ink sm:text-6xl lg:text-[5rem] lg:leading-[1.02]"
        >
          {hero.title}
        </h1>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-7">
            <p className="max-w-xl text-lg leading-relaxed text-ink-soft lg:text-xl lg:leading-relaxed">{hero.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={showWork ? "/#work" : "/#experience"}>
                {showWork ? "View my work" : "View experience"}
                <ArrowRight className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </ButtonLink>
              <ButtonLink href="/#contact" variant="secondary">
                Get in touch
              </ButtonLink>
            </div>
          </div>

          {hero.facts.length > 0 && (
            <dl className="grid content-end gap-5 sm:grid-cols-3 lg:col-span-4 lg:col-start-9 lg:grid-cols-1">
              {hero.facts.map((fact) => (
                <div key={fact.label} className="border-t border-line pt-3">
                  <Eyebrow as="dt">{fact.label}</Eyebrow>
                  <dd className="mt-1.5 text-[15px] text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        {hero.image && (
          <div className="relative mt-14 aspect-[21/9] overflow-hidden rounded-md bg-surface lg:mt-20">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1280px) 1184px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </Container>
    </section>
  );
}

import Image from "next/image";
import { hero } from "@/content/site";
import { ArrowRight } from "../icons";
import { ButtonLink, Container, Eyebrow, cx } from "../ui";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="pt-10 pb-10 sm:pt-16 sm:pb-14">
      <Container
        className={cx("grid items-center gap-10 lg:gap-16", hero.image && "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]")}
      >
        <div className="max-w-xl">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1
            id="hero-title"
            className="mt-4 text-[2.375rem] leading-[1.08] font-bold tracking-tight text-balance text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg">{hero.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/#work">
              View my work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </ButtonLink>
            <ButtonLink href="/#contact" variant="secondary">
              Get in touch
            </ButtonLink>
          </div>
        </div>

        {hero.image && (
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl lg:aspect-[4/3] border border-line bg-surface">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              placeholder="blur"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 1152px) 500px, (min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </Container>
    </section>
  );
}

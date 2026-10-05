import { experience } from "@/content/site";
import { formatMonth } from "@/lib/format";
import { HomeSection } from "./section";

export function Experience() {
  return (
    <HomeSection id="experience" label="Experience">
      <ol className="relative ml-[5px] border-l border-line">
        {experience.map((item) => (
          <li key={`${item.role}-${item.start}`} className="relative pb-10 pl-7 last:pb-0 sm:pl-9">
            <span
              aria-hidden="true"
              className="absolute top-[7px] -left-[5px] size-[9px] rounded-full bg-ink ring-4 ring-white"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-semibold tracking-tight text-ink">{item.role}</h3>
              <p className="order-first text-sm text-muted tabular-nums sm:order-none sm:shrink-0">
                <time dateTime={item.start}>{formatMonth(item.start)}</time>
                {" – "}
                {item.end ? <time dateTime={item.end}>{formatMonth(item.end)}</time> : "Present"}
              </p>
            </div>
            <p className="mt-1 text-sm text-ink-soft">
              {item.company}
              <span aria-hidden="true" className="mx-2 text-line-strong">
                ·
              </span>
              {item.location}
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </HomeSection>
  );
}

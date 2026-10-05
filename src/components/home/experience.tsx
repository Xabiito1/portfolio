import { experience } from "@/content/site";
import { formatMonth } from "@/lib/format";
import { Section } from "../ui";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line">
        {experience.map((item) => (
          <li
            key={`${item.role}-${item.start}`}
            className="grid gap-x-6 gap-y-2 py-7 first:pt-1 last:pb-0 sm:grid-cols-[9.5rem_minmax(0,1fr)]"
          >
            <p className="flex items-center gap-1.5 self-start text-sm whitespace-nowrap text-muted tabular-nums sm:pt-1">
              <time dateTime={item.start}>{formatMonth(item.start)}</time>
              <span aria-hidden="true">–</span>
              {item.end ? (
                <time dateTime={item.end}>{formatMonth(item.end)}</time>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-ink">
                  Present
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
                </span>
              )}
            </p>
            <div>
              <h3 className="text-lg font-medium tracking-[-0.01em] text-ink">{item.role}</h3>
              <p className="mt-0.5 text-[15px] text-ink-soft">
                {item.company}
                <span aria-hidden="true" className="mx-2 text-line-strong">
                  /
                </span>
                <span className="text-muted">{item.location}</span>
              </p>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">{item.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

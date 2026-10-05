import { principles, stack } from "@/content/site";
import { Section } from "../ui";

export function About() {
  return (
    <Section id="about" title="How I work">
      <ul className="grid gap-8 sm:grid-cols-3 sm:gap-8">
        {principles.map((item) => (
          <li key={item.title}>
            <h3 className="font-medium text-ink">{item.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Stack() {
  return (
    <Section id="stack" title="Stack">
      <dl className="grid gap-8 sm:grid-cols-3 sm:gap-8">
        {stack.map((group) => (
          <div key={group.label}>
            <dt className="font-medium text-ink">{group.label}</dt>
            <dd className="mt-2">
              <ul className="space-y-1 text-[15px] text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

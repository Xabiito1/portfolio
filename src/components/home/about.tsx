import { principles, stack } from "@/content/site";
import { Code, Layers, Users } from "../icons";
import { HomeSection } from "./section";

const icons = {
  understand: Users,
  build: Code,
  endToEnd: Layers,
} as const;

export function About() {
  return (
    <HomeSection id="about" label="How I work">
      <ul className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        {principles.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title} className="rounded-xl border border-line bg-white p-5 sm:p-6">
              <Icon width={22} height={22} className="text-ink" />
              <h3 className="mt-5 font-semibold tracking-tight text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          );
        })}
      </ul>

      <div className="mt-10 grid gap-6 border-t border-line pt-8 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-10">
        <h3 className="text-sm font-semibold text-ink">Stack</h3>
        <dl className="grid gap-5 sm:grid-cols-3 sm:gap-8">
          {stack.map((group) => (
            <div key={group.label}>
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{group.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-soft">{group.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </HomeSection>
  );
}

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export { cx };

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-6xl px-4 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({
  as: Tag = "p",
  tone = "soft",
  children,
  className,
  id,
}: {
  as?: "p" | "span" | "h2" | "h3";
  tone?: "soft" | "strong";
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={cx(
        "text-xs font-semibold uppercase tracking-[0.14em]",
        tone === "strong" ? "text-ink" : "text-ink-soft",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function ButtonLink({ variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cx(
        "group inline-flex h-11 items-center justify-center gap-2 rounded-lg px-5 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-ink text-white hover:bg-black"
          : "border border-line-strong bg-white text-ink hover:border-ink",
        className,
      )}
      {...props}
    />
  );
}

export function TagList({ items, label = "Technologies", className }: { items: string[]; label?: string; className?: string }) {
  return (
    <ul aria-label={label} className={cx("flex flex-wrap gap-2", className)}>
      {items.map((item, i) => (
        <li
          key={`${item}-${i}`}
          className="rounded-md border border-line bg-paper px-2 py-0.5 text-xs text-ink-soft"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

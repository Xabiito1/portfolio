import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12", className)}>{children}</div>;
}

export function Eyebrow({
  as: Tag = "p",
  children,
  className,
  id,
}: {
  as?: "p" | "span" | "h2" | "h3" | "dt";
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <Tag id={id} className={cx("text-xs font-medium uppercase tracking-[0.12em] text-muted", className)}>
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
        "group inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-ink text-white hover:bg-black"
          : "border border-line-strong text-ink hover:border-ink",
        className,
      )}
      {...props}
    />
  );
}

/**
 * Page section: thin rule on top, title in the left column and content on the right.
 * `stacked` puts the content full width under the title row (used for project grids).
 */
export function Section({
  id,
  title,
  aside,
  stacked = false,
  className,
  children,
}: {
  id: string;
  title: string;
  aside?: ReactNode;
  stacked?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  const heading = (
    <h2 id={headingId} className="text-2xl font-semibold tracking-[-0.02em] text-ink lg:text-[1.75rem]">
      {title}
    </h2>
  );

  return (
    <section id={id} aria-labelledby={headingId} className={cx("scroll-mt-16", className)}>
      <Container>
        <div className="border-t border-line pt-8 pb-16 lg:pt-10 lg:pb-24">
          {stacked ? (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                {heading}
                {aside}
              </div>
              <div className="mt-8 lg:mt-10">{children}</div>
            </>
          ) : (
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-4">
                {heading}
                {aside && <div className="mt-3">{aside}</div>}
              </div>
              <div className="lg:col-span-8">{children}</div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

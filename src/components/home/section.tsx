import type { ReactNode } from "react";
import { Container, Eyebrow, cx } from "../ui";

/** Home page section with the small uppercase label used across the page. */
export function HomeSection({
  id,
  label,
  action,
  className,
  children,
}: {
  id: string;
  label: string;
  action?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={cx("scroll-mt-20 py-10 sm:py-14", className)}>
      <Container>
        <div className="mb-6 flex items-baseline justify-between gap-4 sm:mb-8">
          <Eyebrow as="h2" id={headingId} tone="strong">
            {label}
          </Eyebrow>
          {action}
        </div>
        {children}
      </Container>
    </section>
  );
}

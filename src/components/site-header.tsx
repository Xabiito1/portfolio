import Link from "next/link";
import { nav, site } from "@/content/site";
import { Container } from "./ui";
import { MobileNav } from "./mobile-nav";
import { visibleNav } from "@/lib/projects";

export function SiteHeader() {
  const items = visibleNav(nav);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <Container className="relative flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-ink"
          aria-label={`${site.name}, home`}
        >
          {site.logo}
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav items={items} />
      </Container>
    </header>
  );
}

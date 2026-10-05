import Link from "next/link";
import { nav, site } from "@/content/site";
import { visibleNav } from "@/lib/projects";
import { Container } from "./ui";

export function SiteFooter() {
  return (
    <footer>
      <Container>
        <div className="flex flex-col gap-4 border-t border-line py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-3 text-muted">
            <Link href="/" className="font-bold tracking-tight text-ink" aria-label={`${site.name}, home`}>
              {site.logo}
            </Link>
            <span>
              © {new Date().getFullYear()} {site.name}
            </span>
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {visibleNav(nav).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted transition-colors hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}

import Link from "next/link";
import { contact, nav, site } from "@/content/site";
import { GitHub, LinkedIn, Mail } from "./icons";
import { Container } from "./ui";

export function SiteFooter() {
  type SocialLink = { label: string; href: string; icon: typeof Mail };
  const social: SocialLink[] = [];
  if (contact.github) social.push({ label: "GitHub", href: contact.github, icon: GitHub });
  if (contact.linkedin) social.push({ label: "LinkedIn", href: contact.linkedin, icon: LinkedIn });
  social.push({ label: "Email", href: `mailto:${contact.email}`, icon: Mail });

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight" aria-label={`${site.name}, home`}>
          {site.logo}
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex items-center gap-1 sm:-mr-2">
          {social.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="grid size-9 place-items-center rounded-md text-ink-soft transition-colors hover:text-ink"
                aria-label={label}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <Icon width={18} height={18} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

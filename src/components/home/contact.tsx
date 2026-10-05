import { contact, contactSection } from "@/content/site";
import { CopyEmailButton } from "../copy-email-button";
import { ArrowUpRight } from "../icons";
import { Container, Eyebrow } from "../ui";

type ContactLink = { label: string; value: string; href: string; external: boolean };

export function Contact() {
  const links: ContactLink[] = [];
  if (contact.linkedin) {
    links.push({ label: "LinkedIn", value: displayUrl(contact.linkedin), href: contact.linkedin, external: true });
  }
  if (contact.github) {
    links.push({ label: "GitHub", value: displayUrl(contact.github), href: contact.github, external: true });
  }
  if (contact.cv) {
    links.push({ label: "CV", value: "Download PDF", href: contact.cv, external: false });
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-16">
      <Container>
        <div className="border-t border-line pt-14 pb-20 lg:pt-20 lg:pb-28">
          <h2
            id="contact-heading"
            className="text-4xl leading-[1.05] font-semibold tracking-[-0.035em] text-balance text-ink sm:text-5xl lg:text-[3.75rem]"
          >
            {contactSection.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">{contactSection.text}</p>

          <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            <div className="border-t border-line pt-4">
              <Eyebrow as="dt">Email</Eyebrow>
              <dd className="mt-2 flex items-center gap-3">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-base break-all text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                >
                  {contact.email}
                </a>
                <CopyEmailButton email={contact.email} />
              </dd>
            </div>
            {links.map((link) => (
              <div key={link.label} className="border-t border-line pt-4">
                <Eyebrow as="dt">{link.label}</Eyebrow>
                <dd className="mt-2">
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-base text-ink underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-ink"
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : { download: "" })}
                  >
                    {link.value}
                    {link.external && (
                      <>
                        <ArrowUpRight className="text-muted transition-colors group-hover:text-ink" />
                        <span className="sr-only">(opens in a new tab)</span>
                      </>
                    )}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

function displayUrl(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

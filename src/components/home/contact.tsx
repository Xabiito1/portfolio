import { contact } from "@/content/site";
import { CopyEmailButton } from "../copy-email-button";
import { ArrowRight, ArrowUpRight, FileText, GitHub, LinkedIn, Mail } from "../icons";
import { Container, Eyebrow } from "../ui";

export function Contact() {
  const links = [
    contact.linkedin && { label: "LinkedIn", href: contact.linkedin, icon: LinkedIn, external: true },
    contact.github && { label: "GitHub", href: contact.github, icon: GitHub, external: true },
    contact.cv && { label: "CV (PDF)", href: contact.cv, icon: FileText, external: false },
  ].filter(isLink);

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 pt-10 pb-16 sm:pt-14 sm:pb-20">
      <Container>
        <div className="rounded-xl border border-line bg-paper p-6 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <Eyebrow>Get in touch</Eyebrow>
              <h2 id="contact-heading" className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Open to new opportunities.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
                I&apos;m open to full-time roles and freelance work. If you think we could work together, send me an
                email.
              </p>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-black md:self-auto"
            >
              Send a message
              <ArrowRight className="transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
            <li className="flex items-center gap-3">
              <Mail width={18} height={18} className="text-muted" />
              <a href={`mailto:${contact.email}`} className="text-sm text-ink underline-offset-4 hover:underline">
                {contact.email}
              </a>
              <CopyEmailButton email={contact.email} />
            </li>
            {links.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  className="group inline-flex items-center gap-3 text-sm text-ink underline-offset-4 hover:underline"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : { download: "" })}
                >
                  <Icon width={18} height={18} className="text-muted" />
                  {label}
                  {external && <ArrowUpRight className="text-muted" />}
                  {external && <span className="sr-only">(opens in a new tab)</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

type ContactLink = {
  label: string;
  href: string;
  icon: typeof Mail;
  external: boolean;
};

function isLink(value: ContactLink | null | false | ""): value is ContactLink {
  return Boolean(value);
}

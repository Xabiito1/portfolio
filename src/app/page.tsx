import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { Experience } from "@/components/home/experience";
import { Hero } from "@/components/home/hero";
import { SelectedWork } from "@/components/home/selected-work";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "A Coruña", addressCountry: "ES" },
  sameAs: [contact.linkedin, contact.github].filter(Boolean),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <SelectedWork />
      <About />
      <Experience />
      <Contact />
    </>
  );
}

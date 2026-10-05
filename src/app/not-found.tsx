import { ButtonLink, Container, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink">Page not found.</h1>
        <p className="mt-4 text-ink-soft">The page you are looking for does not exist or has moved.</p>
        <ButtonLink href="/" className="mt-8">
          Back to home
        </ButtonLink>
      </Container>
    </section>
  );
}

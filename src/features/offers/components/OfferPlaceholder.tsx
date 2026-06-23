import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Minimal placeholder body for an offer page: a short generic line + a contact
 * CTA. No fabricated programme/eligibility claims — real copy is a follow-up.
 * Server Component.
 */
export function OfferPlaceholder({ name }: { name: string }) {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-lg text-muted">
          Find out how <span className="font-semibold text-ink">{name}</span>{" "}
          can help make heating your Auckland home more affordable. Get in touch
          with the Varcoe team to learn more.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="cta">
            Get a free quote
          </Button>
          <Button href="/services" variant="outline">
            View our services
          </Button>
        </div>
      </Container>
    </section>
  );
}

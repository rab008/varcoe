import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

/**
 * Minimal placeholder body for a product page: a short generic line + a contact
 * CTA. No fabricated product-specific claims — real copy is a follow-up.
 * Server Component.
 */
export function ProductPlaceholder({ name }: { name: string }) {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-lg text-muted">
          <span className="font-semibold text-ink">{name}</span> — supplied,
          installed and serviced by Varcoe across Auckland. Get in touch for
          expert advice and a free quote.
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

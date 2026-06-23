import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { LocationArea } from "@/features/locations/locations-data";

/**
 * Minimal placeholder body for an area or suburb page: a short "serving" line, an
 * optional list of suburbs (area pages), and a contact CTA. No fabricated
 * location-specific claims — real copy is a follow-up. Server Component.
 */
export function LocationPlaceholder({
  name,
  area,
}: {
  name: string;
  /** Provided on area pages to list child suburbs. */
  area?: LocationArea;
}) {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <p className="text-lg text-muted">
          Varcoe provides heat pump and air conditioning supply, installation
          and servicing in{" "}
          <span className="font-semibold text-ink">{name}</span> and across
          Auckland.
        </p>

        {area && area.suburbs.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-ink">Suburbs we serve</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {area.suburbs.map((suburb) => (
                <li key={suburb.slug}>
                  <Link
                    href={`/locations/${area.slug}/${suburb.slug}`}
                    className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-sm text-ink transition-colors hover:border-primary hover:text-primary"
                  >
                    <Icon name="pin" className="h-4 w-4 text-cta" />
                    {suburb.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
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

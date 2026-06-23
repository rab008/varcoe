import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { locations } from "@/features/locations/locations-data";

/**
 * Locations archive body — every service area as a card, with its suburbs linked
 * beneath. Server Component.
 */
export function LocationsList() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <p className="max-w-2xl text-muted">
          Varcoe installs and services heat pumps and air conditioning across
          Auckland. Choose your area to learn more or get in touch.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((area) => (
            <li
              key={area.slug}
              className="flex flex-col rounded-lg border border-border bg-white p-6 shadow-card"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-ink">
                <Icon name="pin" className="h-5 w-5 text-cta" />
                <Link
                  href={`/locations/${area.slug}`}
                  className="transition-colors hover:text-primary"
                >
                  {area.name}
                </Link>
              </h2>
              {area.suburbs.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {area.suburbs.map((suburb) => (
                    <li key={suburb.slug}>
                      <Link
                        href={`/locations/${area.slug}/${suburb.slug}`}
                        className="inline-block rounded-full bg-surface px-3 py-1 text-sm text-muted transition-colors hover:text-primary"
                      >
                        {suburb.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

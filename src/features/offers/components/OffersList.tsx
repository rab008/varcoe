import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { offers } from "@/features/offers/offers-data";

/**
 * Offers archive body — each offer as a card linking to its page. Server Component.
 */
export function OffersList() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <p className="max-w-2xl text-muted">
          Current programmes and offers that help make heating your Auckland
          home more affordable.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer) => (
            <li key={offer.slug}>
              <Link
                href={`/offers/${offer.slug}`}
                className="group flex h-full items-center justify-between gap-3 rounded-lg border border-border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-semibold text-ink transition-colors group-hover:text-primary">
                  {offer.name}
                </span>
                <Icon
                  name="sparkle"
                  className="h-5 w-5 shrink-0 text-cta"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

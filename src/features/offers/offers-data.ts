/**
 * Static offers — the single source of truth for the `/offers` archive, the
 * `/offers/[slug]` pages (via `generateStaticParams`), the nav dropdown, and the
 * sitemap. No per-offer copy provided, so pages render minimal placeholders.
 */

export type Offer = { slug: string; name: string };

export const offers: Offer[] = [
  { slug: "warmer-kiwi-homes", name: "Warmer Kiwi Homes" },
];

export function getOffer(slug: string): Offer | undefined {
  return offers.find((o) => o.slug === slug);
}

/** Params for `/offers/[slug]`. */
export function offerParams(): { slug: string }[] {
  return offers.map((o) => ({ slug: o.slug }));
}

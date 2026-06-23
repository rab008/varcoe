/**
 * Static products — the single source of truth for the `/products` archive, the
 * `/products/[slug]` pages (via `generateStaticParams`), the nav dropdown, and
 * the sitemap.
 *
 * Names/slugs from the supplied menu document. No per-product copy provided, so
 * pages render minimal placeholders.
 */

export type Product = { slug: string; name: string };

export const products: Product[] = [
  { slug: "commercial-heat-pumps", name: "Commercial Heat Pumps" },
  { slug: "commercial-refrigeration", name: "Commercial Refrigeration" },
  { slug: "domestic-hvac", name: "Domestic Air Conditioning & Heat Pumps" },
  { slug: "ventilation-systems", name: "Ventilation Systems" },
  { slug: "commercial-hvac", name: "Commercial Heat Pump" },
  { slug: "reduce-energy-costs", name: "Reduce Energy Costs with Heat Pumps" },
  { slug: "energy-audits", name: "Energy Audits & Efficiency Upgrades" },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** Params for `/products/[slug]`. */
export function productParams(): { slug: string }[] {
  return products.map((p) => ({ slug: p.slug }));
}

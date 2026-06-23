/**
 * Static manufacturers — the single source of truth for the `/manufacturers`
 * archive, the `/manufacturers/[slug]` pages (via `generateStaticParams`), the
 * nav dropdown, and the sitemap.
 *
 * Brands/slugs from the supplied menu document. Logos reuse the existing brand
 * assets; no per-brand copy provided, so pages render minimal placeholders.
 */

export type Manufacturer = {
  slug: string;
  name: string;
  logo: { src: string; alt: string };
};

export const manufacturers: Manufacturer[] = [
  {
    slug: "mitsubishi",
    name: "Mitsubishi",
    logo: {
      src: "/images/brands/mitsubishi-electric.svg",
      alt: "Mitsubishi Electric",
    },
  },
  {
    slug: "daikin",
    name: "Daikin",
    logo: { src: "/images/brands/daikin.svg", alt: "Daikin" },
  },
  {
    slug: "panasonic",
    name: "Panasonic",
    logo: { src: "/images/brands/panasonic.svg", alt: "Panasonic" },
  },
];

export function getManufacturer(slug: string): Manufacturer | undefined {
  return manufacturers.find((m) => m.slug === slug);
}

/** Params for `/manufacturers/[slug]`. */
export function manufacturerParams(): { slug: string }[] {
  return manufacturers.map((m) => ({ slug: m.slug }));
}

/**
 * Static locations — the single source of truth for the `/locations` archive,
 * the `/locations/[area]` and `/locations/[area]/[suburb]` pages (via
 * `generateStaticParams`), the nav, and the sitemap.
 *
 * Structure from the supplied menu document (Auckland service areas). Names/slugs
 * only — no per-location copy provided, so pages render minimal placeholders.
 */

export type Suburb = { slug: string; name: string };
export type LocationArea = { slug: string; name: string; suburbs: Suburb[] };

export const locations: LocationArea[] = [
  {
    slug: "east-auckland",
    name: "East Auckland",
    suburbs: [
      { slug: "botany-downs", name: "Botany Downs" },
      { slug: "howick", name: "Howick" },
      { slug: "pakuranga", name: "Pakuranga" },
      { slug: "remuera", name: "Remuera" },
    ],
  },
  {
    slug: "auckland-cbd",
    name: "Auckland CBD",
    suburbs: [
      { slug: "mount-eden", name: "Mount Eden" },
      { slug: "ponsonby", name: "Ponsonby" },
    ],
  },
  { slug: "wellington-penrose", name: "Wellington & Penrose", suburbs: [] },
  { slug: "manurewa", name: "Manurewa", suburbs: [] },
  {
    slug: "north-shore",
    name: "North Shore",
    suburbs: [{ slug: "takapuna", name: "Takapuna" }],
  },
  { slug: "papakura", name: "Papakura", suburbs: [] },
  {
    slug: "south-auckland",
    name: "South Auckland",
    suburbs: [
      { slug: "papatoetoe", name: "Papatoetoe" },
      { slug: "takanini", name: "Takanini" },
    ],
  },
  { slug: "waiuku", name: "Waiuku", suburbs: [] },
  {
    slug: "west-auckland",
    name: "West Auckland",
    suburbs: [{ slug: "henderson", name: "Henderson" }],
  },
];

export function getArea(area: string): LocationArea | undefined {
  return locations.find((a) => a.slug === area);
}

export function getSuburb(
  area: string,
  suburb: string,
): { area: LocationArea; suburb: Suburb } | undefined {
  const found = getArea(area);
  const sub = found?.suburbs.find((s) => s.slug === suburb);
  if (!found || !sub) return undefined;
  return { area: found, suburb: sub };
}

/** Params for `/locations/[area]`. */
export function areaParams(): { area: string }[] {
  return locations.map((a) => ({ area: a.slug }));
}

/** Params for `/locations/[area]/[suburb]`. */
export function suburbParams(): { area: string; suburb: string }[] {
  return locations.flatMap((a) =>
    a.suburbs.map((s) => ({ area: a.slug, suburb: s.slug })),
  );
}

/**
 * Content model + registry for the product pages (`/products/[slug]`). The
 * `ProductDetail` template renders a `ProductContent`; the route reads `seo` for
 * metadata. `seo.title`/`seo.ogTitle` exclude the "| Varcoe" suffix — the root
 * title template adds it (and the route appends it to the OG title).
 */

export type Brochure = { brand: string; href: string };

export type CommercialType = {
  name: string;
  description: string;
  image?: { src: string; alt: string };
  brochures: Brochure[]; // may be empty (options/feature cards without downloads)
};

export type ProductSeo = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type ProductContent = {
  seo: ProductSeo;
  intro: string;
  typesTitle: string;
  types: CommercialType[];
  sidebar: {
    ctaTitle: string;
    ctaBody: string;
    cta: { label: string; href: string };
  };
  closingCta: {
    title: string;
    body: string;
    cta: { label: string; href: string };
  };
};

import { commercialHeatPumps } from "@/features/products/commercial-heat-pumps-content";
import { commercialRefrigeration } from "@/features/products/content/commercial-refrigeration";
import { domesticHvac } from "@/features/products/content/domestic-hvac";
import { ventilationSystems } from "@/features/products/content/ventilation-systems";
import { wineCellars } from "@/features/products/content/wine-cellars";
import { commercialHvac } from "@/features/products/content/commercial-hvac";
import { reduceEnergyCosts } from "@/features/products/content/reduce-energy-costs";
import { energyAudits } from "@/features/products/content/energy-audits";

/** Registry: product slug → rich page content. Slugs without an entry fall back to the placeholder. */
export const productsContent: Record<string, ProductContent> = {
  "commercial-heat-pumps": commercialHeatPumps,
  "commercial-refrigeration": commercialRefrigeration,
  "domestic-hvac": domesticHvac,
  "ventilation-systems": ventilationSystems,
  "wine-cellars": wineCellars,
  "commercial-hvac": commercialHvac,
  "reduce-energy-costs": reduceEnergyCosts,
  "energy-audits": energyAudits,
};

export function getProductContent(slug: string): ProductContent | undefined {
  return productsContent[slug];
}

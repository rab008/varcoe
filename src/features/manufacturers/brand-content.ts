/**
 * Shared content model for the manufacturer brand pages (`/manufacturers/[slug]`).
 * Each brand provides a `BrandContent` object; the `[slug]` route renders the
 * generic `BrandPage` component and reads `seo` for metadata.
 *
 * `seo.title` / `seo.ogTitle` are stored WITHOUT the "| Varcoe" suffix — the root
 * layout's title template adds it (and the route appends it to the OG title).
 */

export type BrandCta = { label: string; href: string };
export type BrandTech = { title: string; text: string };
export type BrandProduct = {
  name: string;
  description: string;
  brochureHref: string; // external PDF (opens in a new tab)
  image?: { src: string; alt: string };
};
export type BrandSeo = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type BrandContent = {
  seo: BrandSeo;
  hero: {
    eyebrow: string;
    title: string; // page <h1> (PageBanner)
    tagline: string;
    primaryCta: BrandCta;
    secondaryCta: BrandCta;
  };
  intro: { lead: string; paragraphs: string[] };
  technologies: { title: string; items: BrandTech[] };
  dealer: { title: string; paragraphs: string[]; cta: BrandCta };
  products: { title: string; items: BrandProduct[] };
  store: { title: string; body: string; cta: BrandCta };
};

import { mitsubishi } from "@/features/manufacturers/mitsubishi-content";
import { daikin } from "@/features/manufacturers/daikin-content";
import { panasonic } from "@/features/manufacturers/panasonic-content";

/** Registry: manufacturer slug → rich brand-page content. Slugs without an entry fall back to the placeholder. */
export const brands: Record<string, BrandContent> = {
  mitsubishi,
  daikin,
  panasonic,
};

export function getBrandContent(slug: string): BrandContent | undefined {
  return brands[slug];
}

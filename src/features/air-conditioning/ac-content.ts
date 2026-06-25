/**
 * Registry for the Air Conditioning sub-pages
 * (`/service/air-conditioning/[type]`). Content localised from the live
 * varcoe.co.nz pages (cost ranges are client-supplied; the source's 0800 number
 * is replaced by siteConfig). Each provides an `AcSubPageContent`.
 */

export type AcSubPageSection = {
  title: string;
  paragraphs?: string[];
  points?: { label?: string; text: string }[];
};

export type AcSubPageContent = {
  slug: string;
  navLabel: string;
  cardBlurb: string;
  seo: { title: string; description: string };
  heroTitle: string;
  intro: string[];
  sections: AcSubPageSection[];
  faqs: { question: string; answer: string }[];
  faqsTitle: string;
  closingCta: {
    title: string;
    body: string;
    cta: { label: string; href: string };
  };
};

import { industrial } from "@/features/air-conditioning/content/industrial";
import { lightCommercial } from "@/features/air-conditioning/content/light-commercial";

export const acSubPageList: AcSubPageContent[] = [industrial, lightCommercial];

export const acSubPages: Record<string, AcSubPageContent> = Object.fromEntries(
  acSubPageList.map((p) => [p.slug, p]),
);

export function getAcSubPage(slug: string): AcSubPageContent | undefined {
  return acSubPages[slug];
}

/** Params for `/service/air-conditioning/[type]`. */
export function acSubPageParams(): { type: string }[] {
  return acSubPageList.map((p) => ({ type: p.slug }));
}

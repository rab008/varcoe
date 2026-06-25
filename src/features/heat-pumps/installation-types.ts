/**
 * Registry for the heat-pump installation type pages
 * (`/service/heat-pumps/installation/[type]`). Content localised from the live
 * varcoe.co.nz/heat-pump-installation/{type} pages (cost ranges, timelines and
 * guarantees are client-supplied; the source's 0800 number is replaced by
 * siteConfig). Each type provides an `InstallationTypeContent`.
 */

export type InstallationTypeSection = {
  title: string;
  paragraphs?: string[];
  points?: { label?: string; text: string }[];
};

export type InstallationTypeContent = {
  slug: string;
  navLabel: string; // short label for nav + the installation-page grid
  cardBlurb: string; // one line for the grid card
  seo: { title: string; description: string };
  heroTitle: string;
  intro: string[];
  sections: InstallationTypeSection[];
  faqs: { question: string; answer: string }[];
  faqsTitle: string;
  closingCta: {
    title: string;
    body: string;
    cta: { label: string; href: string };
  };
};

import { ceilingCassette } from "@/features/heat-pumps/installation-types/ceiling-cassette";
import { ductedSystems } from "@/features/heat-pumps/installation-types/ducted-systems";
import { apartments } from "@/features/heat-pumps/installation-types/apartments";
import { retrofit } from "@/features/heat-pumps/installation-types/retrofit";
import { newBuilds } from "@/features/heat-pumps/installation-types/new-builds";
import { multiSplitSystems } from "@/features/heat-pumps/installation-types/multi-split-systems";
import { ventilationMoistureControl } from "@/features/heat-pumps/installation-types/ventilation-moisture-control";

/** Ordered list — drives the installation-page grid, the nav sub-menu and the sitemap. */
export const installationTypeList: InstallationTypeContent[] = [
  ceilingCassette,
  ductedSystems,
  apartments,
  retrofit,
  newBuilds,
  multiSplitSystems,
  ventilationMoistureControl,
];

export const installationTypes: Record<string, InstallationTypeContent> =
  Object.fromEntries(installationTypeList.map((t) => [t.slug, t]));

export function getInstallationType(
  slug: string,
): InstallationTypeContent | undefined {
  return installationTypes[slug];
}

/** Params for `/service/heat-pumps/installation/[type]`. */
export function installationTypeParams(): { type: string }[] {
  return installationTypeList.map((t) => ({ type: t.slug }));
}

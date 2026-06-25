/**
 * Static content for the `/products/commercial-heat-pumps` page. Single source
 * of truth. Copy from the client brief (cleaned of mojibake/typos).
 *
 * All brochures are served locally from public/Brochure (basePath-prefixed via
 * `assetPath` for the Pages export).
 */

import { assetPath } from "@/lib/asset-path";
import type {
  ProductContent,
  CommercialType,
} from "@/features/products/product-content";

const PANASONIC_RAC = assetPath(
  "/Brochure/Panisonic_Residential-Air-Con_BRO-AC-RAC1920_V3_LR.pdf",
);

export const commercialHeatPumps: ProductContent = {
  seo: {
    title: "Commercial Heat Pumps Auckland",
    description:
      "Commercial heat pumps & HVAC for Auckland businesses — highwall, ceiling cassette, ducted and commercial HVAC systems from Mitsubishi Electric, Daikin and Panasonic. Supplied, installed and serviced by Varcoe.",
    ogTitle: "Commercial Heat Pumps",
    ogDescription:
      "Commercial heat pump & HVAC systems for Auckland businesses — supplied, installed and serviced by Varcoe.",
  },

  intro:
    "Varcoe supplies, installs and services commercial heat pump and HVAC systems across Auckland — from space-saving highwall units to discreet ceiling cassettes and large-capacity ducted systems. Explore the options below and download manufacturer brochures.",

  typesTitle: "Commercial Heat Pumps for Businesses",

  types: [
    {
      name: "Highwall Heat Pumps",
      description:
        "The most popular heat pump choice. Highwall heat pumps save floor space and are designed to suit the style of any building.",
      brochures: [
        {
          brand: "Mitsubishi Electric",
          href: assetPath("/Brochure/Mitsubishi-HeatPumpRange.pdf"),
        },
        {
          brand: "Daikin",
          href: assetPath("/Brochure/Daikin-SplitSystemsBrochureMarch2019.pdf"),
        },
        { brand: "Panasonic", href: PANASONIC_RAC },
      ],
    },
    {
      name: "Ceiling Cassettes",
      description:
        "Ceiling cassettes are perfect for office spaces. Cassette units are an ideal solution for unobtrusive heating, as they are largely hidden from view, with only the air grille fascia visible. This slimline design ensures versatility and ease of installation.",
      brochures: [
        {
          brand: "Mitsubishi Electric",
          href: assetPath("/Brochure/Mitsubishi-CeilingCasette.pdf"),
        },
        {
          brand: "Daikin",
          href: assetPath("/Brochure/Daikin-FFQ-Fully-Flat-Cassette.pdf"),
        },
        { brand: "Panasonic", href: PANASONIC_RAC },
      ],
    },
    {
      name: "Ducted Heat Pumps",
      description:
        "Large area interiors can now enjoy almost invisible heating or cooling from the highly efficient, large capacity, ducted hide-away single-split Inverter heat pump range, with flexible installation and usability options. The perfect fit for lowered ceilings — guaranteed less installation hassle.",
      brochures: [
        {
          brand: "Mitsubishi Electric",
          href: assetPath("/Brochure/Mitsubishi-MrSlimCommercial.pdf"),
        },
        {
          brand: "Daikin",
          href: assetPath("/Brochure/Daikin-Ducted-Brochure-NZ_LR.pdf"),
        },
        { brand: "Panasonic", href: PANASONIC_RAC },
      ],
    },
    {
      name: "Commercial HVAC Solutions",
      description:
        "We have a comprehensive range of systems to suit all commercial interiors and provide optimal air quality in every aspect of a building space.",
      brochures: [
        {
          brand: "Mitsubishi Electric",
          href: assetPath("/Brochure/Mitsubishi-MrSlimCommercial.pdf"),
        },
        {
          brand: "Daikin",
          href: assetPath("/Brochure/Daikin-SkyAir.pdf"),
        },
        { brand: "Panasonic", href: PANASONIC_RAC },
      ],
    },
  ] satisfies CommercialType[],

  sidebar: {
    ctaTitle: "Talk to our commercial team",
    ctaBody:
      "Tell us about your building and we'll recommend the right system and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Heating or Cooling a Commercial Space?",
    body: "Varcoe designs, supplies, installs and services commercial heat pump and HVAC systems across Auckland. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

import { assetPath } from "@/lib/asset-path";
import type { ProductContent } from "@/features/products/product-content";

const MITSUBISHI = assetPath("/Brochure/Mitsubishi-HeatPumpRange.pdf");
const MITSUBISHI_MULTI = assetPath("/Brochure/@MultiRoomSystems.pdf");
const MITSUBISHI_CASSETTE = assetPath(
  "/Brochure/Mitsubishi-CeilingCasette.pdf",
);
const DAIKIN = assetPath("/Brochure/Daikin-SplitSystemsBrochureMarch2019.pdf");
const DAIKIN_CASSETTE = assetPath(
  "/Brochure/Daikin-FFQ-Fully-Flat-Cassette.pdf",
);
const DAIKIN_DUCTED = assetPath("/Brochure/Daikin-Ducted-Brochure-NZ_LR.pdf");
const PANASONIC = assetPath(
  "/Brochure/Panisonic_Residential-Air-Con_BRO-AC-RAC1920_V3_LR.pdf",
);

/** Content for `/products/domestic-hvac`. Localised from the live page. */
export const domesticHvac: ProductContent = {
  seo: {
    title: "Domestic Air Conditioning & Heat Pumps Auckland",
    description:
      "Domestic heat pumps & air conditioning supplied and professionally installed by Varcoe across Auckland — single-room, multi-room, ducted and floor consoles from Mitsubishi, Daikin & Panasonic.",
    ogTitle: "Domestic Air Conditioning & Heat Pumps",
    ogDescription:
      "Home heat pumps & air conditioning, supplied and professionally installed by Varcoe across Auckland.",
  },

  intro:
    "Keep your home comfortable all year with a domestic heat pump or air conditioning system from Varcoe. We supply and professionally install efficient systems that heat in winter and cool in summer — sized right for your home and budget.",

  typesTitle: "Home Heating & Cooling Options",

  types: [
    {
      name: "Single-Room Heat Pumps",
      description:
        "A wall-mounted high-wall unit to heat and cool your main living space efficiently and quietly.",
      brochures: [
        { brand: "Mitsubishi Electric", href: MITSUBISHI },
        { brand: "Daikin", href: DAIKIN },
        { brand: "Panasonic", href: PANASONIC },
      ],
    },
    {
      name: "Multi-Room Systems",
      description:
        "Condition several rooms from one outdoor unit, with independent control in each space.",
      brochures: [
        { brand: "Mitsubishi Electric", href: MITSUBISHI_MULTI },
        { brand: "Daikin", href: DAIKIN },
        { brand: "Panasonic", href: PANASONIC },
      ],
    },
    {
      name: "Ducted Whole-Home Systems",
      description:
        "Discreet, even comfort throughout the house, with hidden indoor units and a single quiet outdoor unit.",
      brochures: [{ brand: "Daikin", href: DAIKIN_DUCTED }],
    },
    {
      name: "Floor Consoles & Cassettes",
      description:
        "Floor-mounted and ceiling-cassette options for rooms where a standard high-wall unit won't suit.",
      brochures: [
        { brand: "Mitsubishi Electric", href: MITSUBISHI_CASSETTE },
        { brand: "Daikin", href: DAIKIN_CASSETTE },
      ],
    },
  ],

  sidebar: {
    ctaTitle: "Upgrade your home comfort",
    ctaBody:
      "Tell us about your home and we'll recommend the right system and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Comfortable Homes, All Year Round",
    body: "Varcoe supplies, installs and services domestic heat pumps and air conditioning across Auckland. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

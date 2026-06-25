import { assetPath } from "@/lib/asset-path";
import type { ProductContent } from "@/features/products/product-content";

const MITSUBISHI_COMMERCIAL = assetPath(
  "/Brochure/Mitsubishi-MrSlimCommercial.pdf",
);
const MITSUBISHI_CASSETTE = assetPath(
  "/Brochure/Mitsubishi-CeilingCasette.pdf",
);
const DAIKIN_SKYAIR = assetPath("/Brochure/Daikin-SkyAir.pdf");
const DAIKIN_DUCTED = assetPath("/Brochure/Daikin-Ducted-Brochure-NZ_LR.pdf");
const DAIKIN_CASSETTE = assetPath(
  "/Brochure/Daikin-FFQ-Fully-Flat-Cassette.pdf",
);

/** Content for `/products/commercial-hvac`. Localised from the live page. */
export const commercialHvac: ProductContent = {
  seo: {
    title: "Commercial HVAC Auckland",
    description:
      "Varcoe designs, supplies, installs and services commercial HVAC across Auckland — VRF/VRV, ducted systems, ceiling cassettes and ventilation for offices, retail and large buildings.",
    ogTitle: "Commercial HVAC",
    ogDescription:
      "Commercial HVAC systems designed, installed and serviced by Varcoe across Auckland.",
  },

  intro:
    "Varcoe designs, supplies, installs and services commercial HVAC systems for Auckland businesses — from offices and retail to large multi-zone buildings. We deliver efficient heating, cooling and ventilation tailored to your space.",

  typesTitle: "Commercial HVAC Systems",

  types: [
    {
      name: "Multi-Zone VRF/VRV Systems",
      description:
        "Flexible systems that condition many zones from a single outdoor system, with independent control in each space.",
      brochures: [
        { brand: "Mitsubishi Electric", href: MITSUBISHI_COMMERCIAL },
        { brand: "Daikin", href: DAIKIN_SKYAIR },
      ],
    },
    {
      name: "Ducted Commercial Systems",
      description:
        "Large-capacity ducted systems for even, discreet comfort across commercial floors.",
      brochures: [
        { brand: "Mitsubishi Electric", href: MITSUBISHI_COMMERCIAL },
        { brand: "Daikin", href: DAIKIN_DUCTED },
      ],
    },
    {
      name: "Ceiling Cassettes",
      description:
        "Discreet ceiling-mounted units ideal for offices, retail and hospitality spaces.",
      brochures: [
        { brand: "Mitsubishi Electric", href: MITSUBISHI_CASSETTE },
        { brand: "Daikin", href: DAIKIN_CASSETTE },
      ],
    },
    {
      name: "Ventilation & Air Quality",
      description:
        "Fresh-air ventilation and filtration integrated with your HVAC for healthy indoor environments.",
      brochures: [],
    },
  ],

  sidebar: {
    ctaTitle: "Talk to our commercial team",
    ctaBody:
      "Tell us about your building and we'll design the right HVAC system and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Commercial HVAC, Designed for Your Building",
    body: "Varcoe designs, supplies, installs and services commercial HVAC across Auckland. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

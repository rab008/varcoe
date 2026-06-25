import type { ProductContent } from "@/features/products/product-content";

/** Content for `/products/commercial-refrigeration`. Localised from the live page. */
export const commercialRefrigeration: ProductContent = {
  seo: {
    title: "Commercial Refrigeration Auckland",
    description:
      "Varcoe designs, supplies and installs commercial refrigeration across Auckland — coolrooms, chillers, milk and wine vats, water chillers and process coolers. Free quote.",
    ogTitle: "Commercial Refrigeration",
    ogDescription:
      "Commercial refrigeration designed, supplied and installed by Varcoe across Auckland.",
  },

  intro:
    "Varcoe designs, supplies and installs commercial refrigeration across Auckland — from chillers and coolrooms to milk and wine vats, water chillers and process coolers. We keep your product at the right temperature, reliably and efficiently.",

  typesTitle: "Commercial Refrigeration Solutions",

  types: [
    {
      name: "Coolrooms & Freezer Rooms",
      description:
        "Custom-built coolrooms and freezer rooms sized to your operation, with reliable temperature control and energy-efficient plant.",
      brochures: [],
    },
    {
      name: "Chillers & Water Chillers",
      description:
        "Industrial chillers and water chillers for process cooling, manufacturing and large commercial systems.",
      brochures: [],
    },
    {
      name: "Milk & Wine Vats",
      description:
        "Refrigeration for milk and wine vats that holds precise temperatures to protect product quality.",
      brochures: [],
    },
    {
      name: "Process Coolers",
      description:
        "Process cooling solutions engineered for the specific demands of your equipment and workflow.",
      brochures: [],
    },
  ],

  sidebar: {
    ctaTitle: "Need commercial refrigeration?",
    ctaBody:
      "Tell us about your operation and we'll design the right system and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Reliable Commercial Refrigeration",
    body: "Varcoe designs, supplies, installs and services commercial refrigeration across Auckland. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

import type { ProductContent } from "@/features/products/product-content";

/** Content for `/products/reduce-energy-costs`. Localised from the live page. */
export const reduceEnergyCosts: ProductContent = {
  seo: {
    title: "Reduce Energy Costs with Heat Pumps",
    description:
      "Heat pumps deliver up to 3x the efficiency of conventional heating. Varcoe helps Auckland homeowners cut power bills with the right modern, efficient heat pump system. Free quote.",
    ogTitle: "Reduce Energy Costs with Heat Pumps",
    ogDescription:
      "Cut your power bills with an efficient heat pump from Varcoe — up to 3x more efficient than conventional heating.",
  },

  intro:
    "Heat pumps are one of the most efficient ways to heat and cool your home — delivering up to three times the energy efficiency of conventional heating. Varcoe helps Auckland homeowners cut power bills with the right modern, efficient system.",

  typesTitle: "How Heat Pumps Lower Your Bills",

  types: [
    {
      name: "Up to 3x More Efficient",
      description:
        "A modern heat pump delivers around 3kW of heating for every 1kW of electricity used — far cheaper to run than electric or gas heating.",
      brochures: [],
    },
    {
      name: "Heat and Cool in One",
      description:
        "One system replaces separate heaters and coolers, running efficiently in every season.",
      brochures: [],
    },
    {
      name: "Smart, Zoned Control",
      description:
        "Only heat or cool the rooms you're using, with timers and Wi-Fi control to avoid wasted energy.",
      brochures: [],
    },
    {
      name: "Right-Sized Installation",
      description:
        "We size the system correctly for your home so it runs efficiently — an oversized or undersized unit costs you money.",
      brochures: [],
    },
  ],

  sidebar: {
    ctaTitle: "Start saving on power",
    ctaBody:
      "Tell us about your home and we'll recommend the most efficient system and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Cut Your Power Bills with a Heat Pump",
    body: "Varcoe supplies and installs efficient heat pumps across Auckland that lower your running costs. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

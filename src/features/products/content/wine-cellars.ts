import type { ProductContent } from "@/features/products/product-content";

/** Content for `/products/wine-cellars` (moved from services). Localised. */
export const wineCellars: ProductContent = {
  seo: {
    title: "Wine Cellar Refrigeration Auckland",
    description:
      "Varcoe designs, installs and maintains wine cellars and wine-room refrigeration for domestic and commercial collections across Auckland — perfect, stable temperature and humidity.",
    ogTitle: "Wine Cellar Refrigeration",
    ogDescription:
      "Wine cellar design, installation and refrigeration by Varcoe across Auckland — for domestic and commercial collections.",
  },

  intro:
    "Varcoe designs, installs and maintains wine cellars and wine-room refrigeration for domestic and commercial collections across Auckland — keeping your wine at the perfect, stable temperature and humidity.",

  typesTitle: "Wine Cellar Solutions",

  types: [
    {
      name: "Residential Wine Cellars",
      description:
        "Bespoke climate control for home wine rooms and cellars, sized to your collection and space.",
      brochures: [],
    },
    {
      name: "Commercial Wine Storage",
      description:
        "Reliable refrigeration for restaurants, retailers and commercial cellars where temperature stability matters.",
      brochures: [],
    },
    {
      name: "Wine Room & Cabinet Refrigeration",
      description:
        "Purpose-built cooling units that hold precise temperature and humidity for long-term storage.",
      brochures: [],
    },
  ],

  sidebar: {
    ctaTitle: "Protect your collection",
    ctaBody:
      "Tell us about your space and collection and we'll design the right wine cellar and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Your Wine, at the Perfect Temperature",
    body: "Varcoe designs, installs and maintains wine cellars and refrigeration across Auckland. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

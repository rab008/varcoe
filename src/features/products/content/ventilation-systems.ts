import type { ProductContent } from "@/features/products/product-content";

/** Content for `/products/ventilation-systems`. Localised from the live page. */
export const ventilationSystems: ProductContent = {
  seo: {
    title: "Home Ventilation Systems Auckland",
    description:
      "Improve air quality and reduce damp with a home ventilation system from Varcoe — positive pressure, balanced heat-recovery and moisture extraction, supplied and installed across Auckland.",
    ogTitle: "Home Ventilation Systems",
    ogDescription:
      "Home ventilation systems supplied and installed by Varcoe across Auckland — fresher air, less condensation.",
  },

  intro:
    "Improve your home's air quality and reduce damp with a ventilation system from Varcoe. We supply and install systems that bring fresh, filtered air through your home and help control condensation and moisture.",

  typesTitle: "Ventilation Options",

  types: [
    {
      name: "Positive Pressure Ventilation",
      description:
        "Draws filtered air from the roof space or outside to push out stale, damp air and reduce condensation.",
      brochures: [],
    },
    {
      name: "Balanced Ventilation (Heat Recovery)",
      description:
        "Brings in fresh air while recovering heat from the outgoing air for efficient, comfortable ventilation.",
      brochures: [],
    },
    {
      name: "Extraction & Moisture Control",
      description:
        "Targeted extraction for kitchens, bathrooms and laundries to remove moisture at the source.",
      brochures: [],
    },
  ],

  sidebar: {
    ctaTitle: "Breathe easier at home",
    ctaBody:
      "Tell us about your home and we'll recommend the right ventilation system and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Fresher, Drier, Healthier Air",
    body: "Varcoe supplies and installs home ventilation systems across Auckland. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

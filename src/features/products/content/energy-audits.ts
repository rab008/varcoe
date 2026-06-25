import type { ProductContent } from "@/features/products/product-content";

/** Content for `/products/energy-audits`. Localised from the live page. */
export const energyAudits: ProductContent = {
  seo: {
    title: "Energy Audits & Efficiency Upgrades Auckland",
    description:
      "Find where your home or building wastes energy. Varcoe's energy audits identify savings and recommend efficiency upgrades — heat pumps, insulation and ventilation — across Auckland.",
    ogTitle: "Energy Audits & Efficiency Upgrades",
    ogDescription:
      "Energy audits and efficiency upgrade plans from Varcoe — find and fix where your home or building wastes energy.",
  },

  intro:
    "Not sure where your home or building is losing energy? Varcoe's energy audits identify where you're wasting power and recommend efficiency upgrades — from heat pumps to ventilation — that pay for themselves over time.",

  typesTitle: "What an Energy Audit Covers",

  types: [
    {
      name: "Heating & Cooling Assessment",
      description:
        "We review your current heating and cooling and identify more efficient options for your space.",
      brochures: [],
    },
    {
      name: "Insulation & Ventilation Review",
      description:
        "Find where heat is lost and where moisture and poor airflow are driving up your costs.",
      brochures: [],
    },
    {
      name: "Efficiency Upgrade Plan",
      description:
        "A clear, prioritised plan of upgrades with the biggest impact on your energy bills.",
      brochures: [],
    },
    {
      name: "Ongoing Savings",
      description:
        "Recommendations designed to keep running costs down long after the work is done.",
      brochures: [],
    },
  ],

  sidebar: {
    ctaTitle: "Audit your energy use",
    ctaBody:
      "Tell us about your home or building and we'll arrange an energy audit and provide a free quote.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  closingCta: {
    title: "Find Your Energy Savings",
    body: "Varcoe's energy audits and efficiency upgrades help Auckland homes and businesses cut energy waste. Get expert advice and a free quote.",
    cta: { label: "Get in Touch", href: "/contact" },
  },
};

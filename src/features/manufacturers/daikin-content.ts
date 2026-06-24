import type { BrandContent } from "@/features/manufacturers/brand-content";
import { assetPath } from "@/lib/asset-path";

/**
 * Static content for the `/manufacturers/daikin` page. Copy from the live
 * varcoe.co.nz/daikin page (cleaned). Brochure is hosted locally; the Browse
 * Range store link points to varcoe.co.nz — verify before launch. The source's
 * "Commercial" section and Browse Range link referenced Mitsubishi by mistake;
 * corrected to Daikin here. Award/heritage claims are client-supplied.
 */

const QUOTE = { label: "Get a Free Quote", href: "/contact" };
// Locally-hosted brochure (public/Brochure); basePath-prefixed for the Pages export.
const DAIKIN_BROCHURE = assetPath(
  "/Brochure/Daikin-SplitSystemsBrochureMarch2019.pdf",
);

export const daikin: BrandContent = {
  seo: {
    title: "Daikin Heat Pumps Auckland",
    description:
      "Daikin heat pumps & air conditioning, supplied and professionally installed by Varcoe across Auckland — energy-efficient, asthma-approved systems, an award-winning Daikin dealer, and brochures for the full range.",
    ogTitle: "Daikin Heat Pumps",
    ogDescription:
      "Daikin heat pumps installed by Varcoe — an award-winning Daikin dealer with one of New Zealand's biggest heat pump showrooms.",
  },

  hero: {
    eyebrow: "Precision Cooling & Heating",
    title: "Daikin Heat Pumps & Air Conditioning",
    tagline:
      "Experience Daikin heat pumps installed by Varcoe. If you need your Daikin heat pump supplied and professionally installed, get in touch with Varcoe today.",
    primaryCta: QUOTE,
    secondaryCta: { label: "Enquire Now", href: "/contact" },
  },

  intro: {
    lead: "One of New Zealand's most trusted names in heat pumps and air conditioning, with more than 45 years of global experience building systems for our climate.",
    paragraphs: [
      "Daikin entered the New Zealand market in 1993 and is today one of the country's most trusted names in heat pumps and air conditioning. With more than 45 years of global experience, Daikin builds systems designed to handle New Zealand's variable climate — warm, humid summers and cool, damp winters alike.",
      "Daikin focuses on one thing: air conditioning and heating. That singular focus drives constant innovation in smart, efficient technology designed for real homes, and it's why their inverter systems are efficient without being complicated to use.",
      "Daikin takes its environmental responsibility seriously, championing the adoption of R-32 refrigerant for lower environmental impact. Many Daikin split systems also carry the Sensitive Choice blue butterfly — approved by the Asthma + Respiratory Foundation NZ — for cleaner, healthier indoor air.",
    ],
  },

  technologies: {
    title: "Why Daikin?",
    items: [
      {
        title: "Air Purification",
        text: "Filtration and purification technology, with Sensitive Choice approval for allergy and asthma sufferers.",
      },
      {
        title: "Environmentally Friendly",
        text: "R-32 refrigerant for a lower environmental impact than older systems.",
      },
      {
        title: "High Energy Efficiency",
        text: "Advanced inverter technology delivers efficient, lower-cost heating and cooling.",
      },
      {
        title: "After-Service Support",
        text: "A committed support team and strong local parts availability.",
      },
    ],
  },

  dealer: {
    title: "Varcoe — Award-Winning Daikin Suppliers & Installers",
    paragraphs: [
      "Recognised over the years by Daikin as a trusted installer, Varcoe operates one of the biggest heat pump showrooms in New Zealand.",
      "Contact Varcoe today to find the perfect Daikin heat pump for your home or business.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },

  products: {
    title: "Our Products",
    items: [
      {
        name: "Single Room Heat Pumps & Air Conditioners",
        description:
          "A wall-mounted split-system heat pump that delivers premium comfort and blends with your surroundings. Daikin's technology keeps indoor units compact, whisper-quiet and energy efficient.",
        brochureHref: DAIKIN_BROCHURE,
      },
      {
        name: "Multi Room Heat Pumps & Air Conditioners",
        description:
          "Heat or cool 2–5 rooms from a single outdoor unit. A Daikin Multi-Split lets you control the temperature of each room individually and saves on running costs by only conditioning the rooms you use. All Daikin heat pumps are reverse cycle — they both heat and cool.",
        brochureHref: DAIKIN_BROCHURE,
      },
      {
        name: "Floor Consoles & Cassettes",
        description:
          "Small and compact, ideal for positioning at floor level — with the option to semi-recess into the wall, a great replacement for an unused fireplace. Top, or top and bottom, discharge vents ensure even air distribution throughout the room.",
        brochureHref: DAIKIN_BROCHURE,
      },
      {
        name: "Commercial Heat Pumps",
        description:
          "Daikin's commercial range and multi-zone systems deliver flexible, energy-efficient heating and cooling for offices, retail and larger spaces — with reliable performance and centralised control.",
        brochureHref: DAIKIN_BROCHURE,
      },
    ],
  },

  store: {
    title: "Browse the Daikin Range",
    body: "View our full selection of Daikin heat pumps on our online store.",
    cta: {
      label: "Browse Range",
      href: "https://www.varcoe.co.nz/product-category/heatpumps/daikin/",
    },
  },
};

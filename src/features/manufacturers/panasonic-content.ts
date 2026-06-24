import type { BrandContent } from "@/features/manufacturers/brand-content";
import { assetPath } from "@/lib/asset-path";

/**
 * Static content for the `/manufacturers/panasonic` page. Copy from the live
 * varcoe.co.nz/panasonic page (cleaned). Brochure is hosted locally; the Browse
 * Range store link points to varcoe.co.nz — verify before launch (the source's
 * Browse Range link referenced Mitsubishi by mistake; corrected to Panasonic
 * here). Award/heritage claims are client-supplied.
 */

const QUOTE = { label: "Get a Free Quote", href: "/contact" };
// Locally-hosted brochure (public/Brochure); basePath-prefixed for the Pages export.
const PANASONIC_BROCHURE = assetPath(
  "/Brochure/Panisonic_Residential-Air-Con_BRO-AC-RAC1920_V3_LR.pdf",
);

export const panasonic: BrandContent = {
  seo: {
    title: "Panasonic Heat Pumps Auckland",
    description:
      "Panasonic heat pumps & air conditioning, supplied and professionally installed by Varcoe across Auckland — nanoe X air purification, energy-efficient inverter systems, and a Panasonic Elite Dealer.",
    ogTitle: "Panasonic Heat Pumps",
    ogDescription:
      "Panasonic heat pumps installed by Varcoe — a Panasonic Elite Dealer and the premier Panasonic dealer in New Zealand.",
  },

  hero: {
    eyebrow: "Smart, Quiet & Efficient Climate Control",
    title: "Panasonic Heat Pumps & Air Conditioning",
    tagline:
      "Discover Panasonic heat pumps with Varcoe. If you need your Panasonic heat pump supplied and professionally installed, get in touch with Varcoe today.",
    primaryCta: QUOTE,
    secondaryCta: { label: "Enquire Now", href: "/contact" },
  },

  intro: {
    lead: "Trusted in New Zealand homes for over a century — smart, quiet and efficient climate control built around your wellbeing.",
    paragraphs: [
      "Panasonic has been in the homes of New Zealanders for over a century, building a reputation for quality and reliability under its philosophy of creating 'A Better Life, A Better World'.",
      "Panasonic delivers more than just heating and cooling. Its nanoe X technology neutralises micro-organisms — removing up to 99% of airborne bacteria, viruses and mould — for cleaner, healthier indoor air.",
      "Panasonic also prides itself on energy efficiency: inverter technology varies the speed of the compressor according to temperature changes, and every unit is built to rigorous quality-testing standards.",
    ],
  },

  technologies: {
    title: "Why Panasonic?",
    items: [
      {
        title: "nanoe X Air Purification",
        text: "Neutralises up to 99% of airborne bacteria, viruses and mould for cleaner indoor air.",
      },
      {
        title: "Inverter Technology",
        text: "Varies the compressor speed to match conditions — efficient, stable comfort.",
      },
      {
        title: "Quality Tested",
        text: "User-friendly design backed by rigorous quality-testing standards.",
      },
      {
        title: "High Energy Efficiency",
        text: "Efficient operation that helps keep running costs down all year round.",
      },
    ],
  },

  dealer: {
    title: "Varcoe — A Panasonic 'Elite Dealer'",
    paragraphs: [
      "Varcoe is recognised by Panasonic as an 'Elite Dealer' — a trusted supplier whose installation and after-care match Panasonic's high-quality standards.",
      "Varcoe Air Conditioning and Heat Pumps has received over 18 awards from Panasonic over the years, making us the premier Panasonic dealer in New Zealand.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },

  products: {
    title: "Our Products",
    items: [
      {
        name: "Single Room Heat Pumps & Air Conditioners",
        description:
          "When it comes to energy efficiency and heating your home, you can't look past Panasonic. Whether you're after a simple, efficient single-split unit or a powerful, environment-enhancing system, there's a fit for every home.",
        brochureHref: PANASONIC_BROCHURE,
      },
      {
        name: "Multi Room Heat Pumps & Air Conditioners",
        description:
          "A Panasonic Multi-Inverter Split System gives you flexible configuration to create the perfect setup for your home. One outdoor unit conditions multiple rooms, so it takes up less space outside.",
        brochureHref: PANASONIC_BROCHURE,
      },
      {
        name: "Floor Consoles & Cassettes",
        description:
          "Compact, elegant, quiet and efficient — Panasonic floor consoles and cassettes are capable of up to 7.10kW output and heating down to -15°C.",
        brochureHref: PANASONIC_BROCHURE,
      },
      {
        name: "Commercial Heat Pumps",
        description:
          "Panasonic's multi-split systems offer flexible, powerful heating and cooling with lower operational costs and eco-certified energy efficiency — whisper-quiet comfort for commercial spaces.",
        brochureHref: PANASONIC_BROCHURE,
      },
    ],
  },

  store: {
    title: "Browse the Panasonic Range",
    body: "View our full selection of Panasonic heat pumps on our online store.",
    cta: {
      label: "Browse Range",
      href: "https://www.varcoe.co.nz/product-category/heatpumps/panasonic/",
    },
  },
};

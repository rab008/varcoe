import type { IconName } from "@/components/ui/Icon";

/**
 * Static content for the `/manufacturers` page. Single source of truth.
 * Copy from the client brief (cleaned of mojibake/typos).
 *
 * Brand claims ("over 50 years", "almost a century", air-purification, energy
 * savings) are client-supplied — confirm before launch.
 */

export type FeaturePoint = { icon: IconName; title: string; text: string };
export type Brand = {
  name: string;
  image?: { src: string; alt: string };
  paragraphs: string[];
};

const QUOTE: { label: string; href: string } = {
  label: "Get a Free Quote",
  href: "/contact",
};

export const manufacturersPage = {
  hero: {
    eyebrow: "Quality You Can Trust",
    title: "Manufacturers We Partner With",
    intro:
      "A carefully chosen range of HVAC and refrigeration brands that deliver real performance in Auckland homes and businesses. You get what you pay for with heating and cooling systems — that's why, since 1975, Varcoe has stuck with manufacturers known for building equipment that actually lasts. We work with Mitsubishi Electric, Daikin, Panasonic and specialist brands that earn their reputation through reliability and genuine energy savings.",
    cta: QUOTE,
  },

  whyMatter: {
    title: "Why Our Manufacturer Partnerships Matter",
    intro:
      "Your system will run almost every day for 10, 15, maybe 20 years. That's why we work with manufacturers that have proven themselves in the field, not just in the lab. Our partnerships focus on what actually matters to customers:",
    points: [
      {
        icon: "shield",
        title: "Real reliability",
        text: "These brands build to last — quality components, warranties that mean something, and parts and service when you need them. We've installed hundreds of their systems across Auckland, and that experience tells us which ones perform.",
      },
      {
        icon: "bolt",
        title: "Actual energy savings",
        text: "Modern inverter technology and smart controls do lower your power bills — we've seen the difference in customer accounts. But only if the system is sized correctly and installed properly, which is where we come in.",
      },
      {
        icon: "headset",
        title: "Service that sticks around",
        text: "A great product doesn't help if you can't get it serviced or find replacement parts. These manufacturers have local support, and we're factory-certified to work on their equipment.",
      },
    ] satisfies FeaturePoint[],
  },

  brands: {
    title: "Our Key Brands",
    items: [
      {
        name: "Mitsubishi Electric",
        paragraphs: [
          "Mitsubishi has been making heat pumps for over 50 years, and there's a reason their systems show up in homes and businesses all over the world — they get the engineering right. Their equipment runs quietly, uses less power than you'd expect, and keeps working year after year.",
          "The range is solid: single units for a bedroom or living room, multi-room systems where you can heat or cool specific spaces, and ducted options that hide in the ceiling. For apartments or big houses, there's usually something that fits. Mitsubishi's inverter technology adjusts output based on what you actually need, which is why the running costs don't surprise people.",
          "Varcoe technicians are factory-certified on Mitsubishi systems, so you get the performance the manufacturer intended. We also handle service and repairs, so you're not hunting around for someone who knows the brand.",
        ],
      },
      {
        name: "Daikin",
        paragraphs: [
          "If you've driven around Auckland, you've probably seen Daikin units on roofs and walls — they're one of New Zealand's most popular brands for a reason. Daikin builds systems that handle our variable weather well: warm humid summers, cool damp winters. Their inverter systems are efficient without being complicated to use.",
          "Daikin's range covers small apartments through to large family homes and commercial spaces. Most units are quiet, and Wi-Fi control is available on many models, so you can adjust temperature from your phone and set schedules so the system runs when you need it.",
          "We've installed hundreds of Daikin systems in Auckland. The units perform well, parts are readily available, and service support is solid. When customers ask what we'd recommend for a standard home, Daikin often comes up because the price-to-performance ratio makes sense.",
        ],
      },
      {
        name: "Panasonic",
        paragraphs: [
          "Panasonic has been in manufacturing for almost a century, which means they've learned how to make things that last. Their heat pump systems are well-built, efficient, and designed with longevity in mind — the components are quality, and it shows in how they perform over time.",
          "What sets some Panasonic models apart is air purification: several units include filters and technology that reduce dust, allergens and airborne particles. In Auckland's humid climate, this matters for people with allergies or respiratory sensitivity (though it's not a replacement for good ventilation).",
          "Panasonic has been sold here for decades, so parts availability is good and service is straightforward to arrange. We install and service Panasonic systems regularly. If durability and air quality are priorities for your home, Panasonic deserves consideration.",
        ],
      },
    ] satisfies Brand[],
  },

  commercial: {
    title: "Commercial & Specialty Manufacturers",
    paragraphs: [
      "Beyond standard residential systems, we partner with manufacturers focused on commercial refrigeration, ventilation and specialised cooling — including wine cellars, food-grade refrigeration for hospitality, and process cooling for industrial operations.",
      "These manufacturers build equipment for demanding conditions. A restaurant's walk-in cooler needs to run reliably seven days a week. A wine cellar needs to maintain exact temperature and humidity. These aren't set-and-forget systems like a residential heat pump.",
      "We select partners based on proven performance in their category, the quality of their support, and whether parts and technical assistance are available locally. All commercial installations are done to code and meet building warrant of fitness requirements, and we provide service contracts tailored to how often equipment runs and how critical it is.",
    ],
  },

  howWeWork: {
    title: "How We Work With Manufacturers",
    intro:
      "Our relationships go beyond just buying equipment and selling it. We work closely with each brand on a few specific things:",
    points: [
      {
        title: "Sizing & selection",
        text: "What you need depends on room size, layout, insulation quality, even which way windows face. We do the assessment so we recommend something that fits your situation — not just what's profitable for us.",
      },
      {
        title: "Installation to spec",
        text: "Each manufacturer specifies how systems should be installed. We follow those specs because it's the only way to get the performance they promise and keep the warranty valid.",
      },
      {
        title: "Trained technicians",
        text: "When manufacturers update their products or new technology appears, we make sure our team knows how to install and service it properly.",
      },
      {
        title: "Ongoing support",
        text: "We handle maintenance, repairs and service because we're invested in your long-term satisfaction.",
      },
    ],
  },

  getStarted: {
    title: "Get Started — Quotes & Support",
    intro:
      "Want to know which system makes sense for your space? Get in touch. We offer free quotes — visit our Papakura showroom, or we can come to you for an on-site assessment. Either way, there's no pressure and no charge to figure out what would work best.",
    cta: QUOTE,
  },
} as const;

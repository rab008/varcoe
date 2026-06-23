import type { IconName } from "@/components/ui/Icon";

/**
 * Static services — the single source of truth that drives the homepage services
 * grid, the `/services` index, `/services/[slug]` detail pages (via
 * `generateStaticParams`), and the sitemap.
 *
 * Content from the Varcoe brief (heat pumps & air conditioning, Auckland).
 */
type ServiceImage = { src: string; alt: string };

/**
 * Rich content for the `/services/[slug]` detail page. Optional — present only
 * for fully-populated services (Heat Pumps in v1); others fall back to a core
 * layout built from `description`.
 */
export type LabelledPoint = { label?: string; text: string };

export type ServiceDetail = {
  heroImage: ServiceImage;
  /** Optional H1/metadata override (e.g. "Heat Pumps Auckland") — nav label stays `title`. */
  heroTitle?: string;
  heroSubtitle?: string;
  intro: string[]; // paragraphs
  features?: string[]; // "what's included" checklist (optional)
  quality?: {
    title: string;
    paragraphs: string[];
    points: string[];
    image: ServiceImage;
  };
  gallery?: { images: ServiceImage[]; videoId?: string };
  /** YouTube id for the main-column info/video block (placeholder until a real clip exists). */
  videoId?: string;
  benefits?: string[]; // two-column checklist
  brochureUrl?: string; // placeholder for now
  // Rich content blocks (all optional, additive)
  experts?: { title: string; paragraphs: string[] };
  whyList?: { title: string; lead?: string; items: LabelledPoint[] };
  types?: {
    title: string;
    lead?: string;
    items: {
      name: string;
      description: string;
      image: ServiceImage;
      tags: string[];
    }[];
  };
  infoSections?: {
    title: string;
    paragraphs?: string[];
    points: LabelledPoint[];
    image?: ServiceImage;
  }[];
  faqs?: { question: string; answer: string }[];
  faqsTitle?: string; // visible heading above the FAQ accordion
  closingCta?: {
    title: string;
    body: string;
    cta: { label: string; href: string };
    image?: ServiceImage; // two-column CTA image (placeholder for now)
  };
  showBrands?: boolean;
  showReviews?: boolean;
};

export type Service = {
  slug: string;
  title: string;
  icon: IconName;
  /** Short one-liner for cards. */
  summary: string;
  /** Longer copy for the service detail page. */
  description: string;
  /** Rich detail content (optional; populated per service). */
  detail?: ServiceDetail;
};

export const services: Service[] = [
  {
    slug: "heat-pumps",
    title: "Heat Pumps",
    icon: "thermostat",
    summary:
      "Sized right for your Auckland home, installed in 3–4 hours, built to last 15+ years.",
    description:
      "We'll size it right for your Auckland home, install it in 3–4 hours, and it'll last 15+ years. We supply and install Mitsubishi Electric and Daikin heat pumps for efficient year-round heating and cooling.",
    detail: {
      heroImage: {
        src: "/images/services/heat-pumps/hero.svg",
        alt: "Wall-mounted heat pump installed in an Auckland home",
      },
      heroTitle: "Heat Pumps Auckland",
      heroSubtitle: "Year-Round Comfort with Varcoe",
      videoId: "EPsC2Jojv-s",
      intro: [
        "Looking for reliable, energy-efficient heat pumps in Auckland? Varcoe Heatpumps & Air Conditioning is your trusted local expert. With decades of experience in the industry, we've built a reputation for delivering high-quality solutions, expert advice, and seamless heat pump installation throughout the Auckland region.",
        "Whether you're heating your home in winter or cooling it down during the summer, Varcoe has the ideal system to keep your indoor environment perfectly comfortable, every season, every day.",
      ],
      experts: {
        title: "Auckland's Trusted Heat Pump Experts",
        paragraphs: [
          "As one of Auckland's longest-standing heat pump installers, Varcoe has helped thousands of homeowners and businesses find the perfect climate control solution. Our team is certified, experienced, and backed by some of the world's leading brands. We understand Auckland's unique weather patterns and provide tailored solutions that match the needs of each home, office, or commercial space.",
          "When you choose Varcoe, you're choosing dependable products, precision installation, and long-term performance.",
        ],
      },
      whyList: {
        title: "Why Heat Pumps?",
        lead: "Modern heat pumps offer a range of benefits that make them the smart choice for Auckland homes and workplaces:",
        items: [
          {
            label: "Heating & Cooling in One",
            text: "Enjoy comfort all year round from a single, efficient system.",
          },
          {
            label: "Energy Efficient",
            text: "Reduce power bills with advanced inverter technology.",
          },
          {
            label: "Low Maintenance",
            text: "With regular servicing, heat pumps can last 10–15 years or more.",
          },
          {
            label: "Healthier Air",
            text: "Many models have built-in filtration to improve indoor air quality.",
          },
          {
            label: "Eco-Friendly",
            text: "Heat pumps use less energy and produce fewer emissions than traditional heating options.",
          },
        ],
      },
      types: {
        title: "Types of Heat Pumps We Install",
        lead: "We supply and install a wide variety of systems to suit all property types and layouts:",
        items: [
          {
            name: "High Wall Heat Pumps",
            description:
              "Compact, discreet, and powerful, high wall systems are the most popular type of heat pump in Auckland. Ideal for bedrooms, living rooms, and office spaces, they're mounted high on the wall and provide excellent airflow and fast temperature control.",
            image: {
              src: "/images/services/heat-pumps/type-high-wall.svg",
              alt: "High wall heat pump unit",
            },
            tags: ["Heating", "Cooling"],
          },
          {
            name: "Floor Console Heat Pumps",
            description:
              "If you don't have available wall space or want an alternative look, floor console heat pumps are the perfect solution. They're compact, modern, and ideal for older homes or spaces with low wall height.",
            image: {
              src: "/images/services/heat-pumps/type-floor-console.svg",
              alt: "Floor console heat pump unit",
            },
            tags: ["Heating", "Cooling"],
          },
          {
            name: "Ducted Heat Pump Systems",
            description:
              "Looking for a seamless, whole-home solution? Ducted systems deliver heating and cooling to every room through discreet ceiling or floor vents. Perfect for new builds and larger homes, ducted heat pumps offer ultimate comfort and visual appeal.",
            image: {
              src: "/images/services/heat-pumps/type-ducted.svg",
              alt: "Ducted heat pump ceiling vent",
            },
            tags: ["Heating", "Cooling"],
          },
          {
            name: "Multi-Split Heat Pumps",
            description:
              "Control the temperature in multiple rooms with a single outdoor unit. Multi-split systems are ideal for growing families or commercial offices that require flexible temperature settings in different zones.",
            image: {
              src: "/images/services/heat-pumps/type-multi-split.svg",
              alt: "Multi-split heat pump outdoor unit",
            },
            tags: ["Heating", "Cooling"],
          },
        ],
      },
      infoSections: [
        {
          title: "Expert Heat Pump Installation in Auckland",
          paragraphs: [
            "Choosing the right system is only half the equation — professional installation is key to long-term performance. At Varcoe, we offer:",
          ],
          points: [
            {
              label: "Detailed Site Assessments",
              text: "We evaluate your home's size, layout, and insulation to recommend the best solution.",
            },
            {
              label: "Optimal Placement",
              text: "Our technicians ensure your unit is installed in the ideal location for airflow, efficiency, and aesthetics.",
            },
            {
              label: "Minimal Disruption",
              text: "Our experienced team works quickly and respectfully to get your system up and running without interrupting your routine.",
            },
          ],
          image: {
            src: "/images/services/heat-pumps/installation.svg",
            alt: "Technician installing a heat pump",
          },
        },
        {
          title: "Energy Savings You Can See",
          paragraphs: [
            "Installing a heat pump isn't just about comfort — it's also a smart investment. With Varcoe, you'll enjoy:",
          ],
          points: [
            {
              label: "Lower Power Bills",
              text: "Our energy-efficient models deliver significant savings over time.",
            },
            {
              label: "Smart Features",
              text: "Wi-Fi control, programmable timers, and eco modes help you manage usage and reduce costs.",
            },
            {
              label: "Government Rebates",
              text: "Many of our systems qualify for energy-efficiency incentives.",
            },
          ],
          image: {
            src: "/images/services/heat-pumps/energy.svg",
            alt: "Energy-efficient heat pump controls",
          },
        },
        {
          title: "Ongoing Maintenance & Servicing",
          paragraphs: [
            "Like any major appliance, heat pumps work best with regular servicing. We offer:",
          ],
          points: [
            {
              label: "Scheduled Maintenance Plans",
              text: "Keep your unit clean, efficient, and running at its best.",
            },
            {
              label: "Fast Repairs",
              text: "Our local technicians are on hand for quick diagnosis and repair.",
            },
            {
              label: "Expert Support",
              text: "We service all major brands and provide ongoing technical support.",
            },
          ],
          image: {
            src: "/images/services/heat-pumps/maintenance.svg",
            alt: "Heat pump being serviced",
          },
        },
        {
          title: "Warranty & Workmanship Guarantee",
          paragraphs: ["Every Varcoe installation is backed by:"],
          points: [
            {
              label: "Manufacturer Warranties",
              text: "Enjoy peace of mind with up to 5-year warranties on major brands.",
            },
            {
              label: "Workmanship Guarantee",
              text: "Our team stands behind every install with a full workmanship warranty.",
            },
            {
              label: "NZ Standards Compliance",
              text: "All work is carried out to meet or exceed New Zealand's strict energy and safety regulations.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "How long do heat pumps last?",
          answer:
            "With proper maintenance, most heat pumps will last 10–15 years.",
        },
        {
          question: "What size heat pump do I need?",
          answer:
            "This depends on room size, insulation, and layout. Our team will assess and recommend the best fit during your free consultation.",
        },
        {
          question: "How often should I service my heat pump?",
          answer:
            "We recommend annual servicing to maintain performance and efficiency.",
        },
        {
          question: "Are heat pumps efficient in winter?",
          answer:
            "Absolutely. Modern heat pumps are designed to perform efficiently in colder Auckland temperatures, providing consistent warmth even on chilly days.",
        },
      ],
      faqsTitle: "FAQs: Heat Pumps in Auckland",
      closingCta: {
        title: "Get Started Today with Varcoe Heat Pumps Auckland",
        body: "Ready to experience reliable, cost-effective climate control? Whether you need a new heat pump, an upgrade, or a custom heat pump installation, Varcoe is here to help. We've been keeping Auckland homes and workplaces comfortable for decades — and we're ready to do the same for you. Contact Varcoe Heatpumps & A/Cs today for expert advice, installation, and service across Auckland.",
        cta: { label: "Get a Free Quote", href: "/contact" },
        image: {
          src: "/images/services/heat-pumps/cta.svg",
          alt: "Varcoe technician installing a heat pump for an Auckland home",
        },
      },
      showBrands: true,
      showReviews: true,
    },
  },
  {
    slug: "air-conditioning",
    title: "Air Conditioning",
    icon: "wind",
    summary:
      "Air conditioning systems designed and installed to your requirements and budget.",
    description:
      "We design and install air conditioning systems tailored to your requirements and budget — single-room, multi-room, ducted, and commercial solutions for homes and businesses across Auckland.",
  },
  {
    slug: "electrical",
    title: "Electrical",
    icon: "bolt",
    summary: "Expert electrical services tailored to your needs.",
    description:
      "Our expert team provides electrical services tailored to your needs, from heat pump circuits to general installation work — completed by licensed technicians.",
  },
  {
    slug: "services-maintenance",
    title: "Services & Maintenance",
    icon: "gear",
    summary:
      "Regular servicing to keep your air conditioner or heat pump running for years.",
    description:
      "All air conditioners and heat pumps need regular maintenance to ensure a long operating life. Our scheduled servicing keeps your system efficient, reliable, and under warranty.",
  },
  {
    slug: "commercial-refrigeration",
    title: "Commercial Refrigeration",
    icon: "snowflake",
    summary:
      "Design, supply and installation of refrigeration, chillers and process coolers.",
    description:
      "We design, supply and install refrigeration systems, milk and wine vats, water chillers, and process coolers for commercial operations throughout Auckland.",
  },
  {
    slug: "wine-cellars",
    title: "Wine Cellars",
    icon: "wine",
    summary:
      "Design, installation and maintenance of domestic and commercial wine cellars.",
    description:
      "We design, install and maintain wine cellars and refrigeration for both domestic and commercial installations — keeping your collection at the perfect temperature.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/**
 * Shared chrome for the `/services/[slug]` sidebar (same on every detail page).
 * Downloads are placeholders until the real brochure/company docs exist; the
 * testimonial is a real Varcoe review (kept here to avoid importing the home feature).
 */
export const serviceSidebar = {
  downloads: [
    { label: "Services Guide.PDF", href: "#", kind: "pdf" as const },
    { label: "About Company.DOC", href: "#", kind: "doc" as const },
  ],
  testimonial: {
    quote:
      "We are delighted with our heat pumps and would like to compliment you on your staff. Very professional, and pleasant to have in the house. We will definitely recommend you.",
    author: "Loraine Grant",
    role: "Google review",
    rating: 5,
  },
} as const;

/** Intro copy for the /services page header section. */
export const servicesIntro = {
  eyebrow: "Our services",
  title: "What We Do For Our Customers",
  intro:
    "From heat pumps and air conditioning to electrical, refrigeration and wine cellars, Varcoe designs, supplies, installs and services it all across Auckland — with genuine parts and a workmanship guarantee.",
};

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
    detail: {
      heroImage: {
        src: "/images/services/air-conditioning/hero.svg",
        alt: "Air conditioning unit installed in an Auckland home",
      },
      heroTitle: "Auckland Air Conditioning",
      heroSubtitle: "Heating and Cooling Specialists",
      videoId: "EPsC2Jojv-s",
      intro: [
        "Varcoe Air Conditioning Auckland is your premier choice for air conditioning solutions in Auckland. With years of expertise and a strong presence in the region, we specialise in delivering top-tier air conditioning services tailored to the unique needs of Auckland's climate and architecture. Our commitment to quality, efficiency, and customer satisfaction positions us as your go-to provider for all your air conditioning requirements.",
        "We supply and install air conditioning from leading manufacturers chosen for Auckland's climate — Mitsubishi Electric, Daikin and Panasonic — with options for everything from a small apartment to a large commercial space.",
      ],
      experts: {
        title: "Auckland's Air Conditioning Specialists",
        paragraphs: [
          "Varcoe's professional installation team is composed of local experts familiar with Auckland's specific air conditioning needs. With rigorous training and a wealth of experience, our technicians deliver exceptional service, ensuring your system is installed efficiently and effectively.",
          "Understanding that every Auckland home and business has unique needs, we specialise in creating customised air conditioning solutions. From the initial consultation to the final installation, we work closely with you to design a system that meets your specific preferences, budget, and the climatic demands of your location.",
        ],
      },
      whyList: {
        title: "Why Choose Varcoe for Air Conditioning?",
        lead: "We pair the right system with expert installation and ongoing support:",
        items: [
          {
            label: "Energy Efficiency",
            text: "Advanced energy-efficient units help Auckland residents save on power bills while reducing their environmental impact.",
          },
          {
            label: "Maintenance & Servicing",
            text: "Comprehensive maintenance and servicing keep your system running smoothly and efficiently year-round.",
          },
          {
            label: "Warranty & Peace of Mind",
            text: "Extensive warranties on both products and installation give Auckland customers confidence in their investment.",
          },
          {
            label: "Tailored to Auckland",
            text: "Customised solutions designed around your space, budget and Auckland's variable climate.",
          },
        ],
      },
      types: {
        title: "Types of Air Conditioning Systems",
        lead: "From a single room to a whole building, there's a system to suit your space:",
        items: [
          {
            name: "Single Room Air Conditioners",
            description:
              "Ideal for heating and cooling individual rooms, offering a versatile and energy-efficient option.",
            image: {
              src: "/images/services/air-conditioning/placeholder.svg",
              alt: "Single room air conditioner",
            },
            tags: ["Cooling", "Heating"],
          },
          {
            name: "Multi Room Air Conditioners",
            description:
              "Perfect for homes without ductwork, allowing you to control the temperature in multiple rooms independently.",
            image: {
              src: "/images/services/air-conditioning/placeholder.svg",
              alt: "Multi room air conditioner",
            },
            tags: ["Cooling", "Heating"],
          },
          {
            name: "Floor Consoles & Cassettes",
            description:
              "Compact and ideal for anyone wanting the convenience and access of positioning their unit closer to the floor.",
            image: {
              src: "/images/services/air-conditioning/placeholder.svg",
              alt: "Floor console air conditioning unit",
            },
            tags: ["Cooling", "Heating"],
          },
          {
            name: "Ducted Whole Home Air Conditioning",
            description:
              "A seamless solution for whole-home climate control — ducted systems offer a discreet and efficient way to manage your comfort.",
            image: {
              src: "/images/services/air-conditioning/placeholder.svg",
              alt: "Ducted whole-home air conditioning vent",
            },
            tags: ["Cooling", "Heating"],
          },
          {
            name: "Wifi Control Air Conditioning Systems",
            description:
              "Pre-heat or cool a room no matter where you are, with smart Wi-Fi control from your phone or tablet.",
            image: {
              src: "/images/services/air-conditioning/placeholder.svg",
              alt: "Wi-Fi controlled air conditioning",
            },
            tags: ["Cooling", "Heating"],
          },
          {
            name: "Commercial Air Conditioning",
            description:
              "Tailored solutions for businesses and commercial spaces, ensuring optimal working conditions and energy efficiency.",
            image: {
              src: "/images/services/air-conditioning/placeholder.svg",
              alt: "Commercial air conditioning system",
            },
            tags: ["Cooling", "Heating"],
          },
        ],
      },
      infoSections: [
        {
          title: "Expert Air Conditioning Installation in Auckland",
          paragraphs: [
            "Our installation process is customised to Auckland's unique requirements — from selecting the right unit through to optimising its performance for your space. It includes:",
          ],
          points: [
            {
              label: "Detailed Site Assessment",
              text: "We evaluate room sizes, insulation, and sun exposure to determine the best system type and placement.",
            },
            {
              label: "Optimal Placement",
              text: "Our technicians position your unit for efficiency, airflow, and a clean finish.",
            },
            {
              label: "Smooth, Compliant Installation",
              text: "Work is carried out safely and to local Auckland standards, with minimal disruption to your routine.",
            },
          ],
          image: {
            src: "/images/services/air-conditioning/placeholder.svg",
            alt: "Technician installing an air conditioning unit",
          },
        },
      ],
      faqs: [
        {
          question: "What types of air conditioning systems do you offer?",
          answer:
            "We offer a wide range of systems for both residential and commercial properties in Auckland — including split system air conditioners, multi-split systems, ducted air conditioning, and specialised commercial solutions. Each system is chosen for its efficiency, reliability, and suitability to Auckland's climate.",
        },
        {
          question:
            "How do I know which air conditioning system is right for my home or business?",
          answer:
            "Our team conducts a detailed site assessment, considering the size of your space, insulation levels, and sun exposure. Based on that, we recommend the most suitable system for your preferences, needs, and budget.",
        },
        {
          question: "Can you customise a solution for my property?",
          answer:
            "Absolutely. We specialise in customised air conditioning solutions tailored to the unique requirements of Auckland homes and businesses — from initial consultation through to final installation.",
        },
        {
          question: "Are your air conditioning units energy-efficient?",
          answer:
            "Yes. Energy efficiency is a key factor in our selection of units. We offer models with advanced energy-saving features that reduce your bills and minimise your environmental impact while keeping you comfortable.",
        },
        {
          question: "What is involved in the installation process?",
          answer:
            "A comprehensive site assessment, selection of the appropriate system, and professional installation by our expert team — with the best placement for efficiency and aesthetics, and minimal disruption to your daily routine.",
        },
        {
          question: "How often should my air conditioning system be serviced?",
          answer:
            "We recommend servicing at least once a year to keep your system running efficiently, prevent potential issues, and extend the lifespan of your unit — especially in Auckland's variable climate.",
        },
        {
          question:
            "What warranty do you offer on systems and installation services?",
          answer:
            "Our products come with extensive manufacturer warranties, and we provide guarantees on our installation services. Specific details vary by product and service, so we're happy to discuss the full details with you directly.",
        },
        {
          question:
            "How do you ensure safety and compliance during installation?",
          answer:
            "Safety and compliance are our top priorities. All installations adhere to strict safety standards and comply with local Auckland regulations, carried out by highly trained and experienced technicians.",
        },
        {
          question:
            "What makes Varcoe different from other Auckland providers?",
          answer:
            "Our commitment to personalised service, customised solutions, and professional expertise — backed by a deep understanding of Auckland's climate and architecture, and a focus on energy efficiency and sustainability.",
        },
        {
          question: "How can I get a quote for an air conditioning system?",
          answer:
            "Getting a quote is easy — contact us through our website, email, or phone. We'll arrange a convenient time for a site assessment and consultation, then provide a detailed quote based on your specific needs.",
        },
      ],
      faqsTitle: "FAQs: Air Conditioning in Auckland",
      closingCta: {
        title: "Get Started with Varcoe Air Conditioning",
        body: "Ready for reliable, energy-efficient cooling and heating? Whether it's a single room or a whole building, our Auckland team will recommend the right system, install it properly, and keep it running for years. Get in touch for expert advice and a free quote.",
        cta: { label: "Get a Free Quote", href: "/contact" },
      },
      showBrands: true,
      showReviews: true,
    },
  },
  {
    slug: "electrical",
    title: "Electrical",
    icon: "bolt",
    summary: "Expert electrical services tailored to your needs.",
    description:
      "Our expert team provides electrical services tailored to your needs, from heat pump circuits to general installation work — completed by licensed technicians.",
    detail: {
      heroImage: {
        src: "/images/services/electrical/hero.svg",
        alt: "Varcoe electrical services in Auckland",
      },
      heroTitle: "Expert Electrical Services in Auckland",
      heroSubtitle:
        "Trusted Electricians in Auckland — Residential, Commercial & Industrial",
      videoId: "EPsC2Jojv-s",
      intro: [
        "Varcoe — a trusted family-owned business established in 1975 — has built a solid reputation for reliability and excellence across Auckland for electrical services. Our team of expert electricians is skilled, certified and qualified to offer a wide range of electrical services for residential, commercial and industrial clients, compliant with current regulations.",
        "From installations, maintenance and repairs to safety inspections and lighting, we deliver every job through a transparent process — in-depth consultation, comprehensive site assessment, quality materials and stringent safety protocols — across all Auckland suburbs.",
      ],
      experts: {
        title: "Certified & Qualified Team of Electricians",
        paragraphs: [
          "Each electrician on our team holds the necessary licences and certifications to perform a wide range of electrical work, ensuring compliance with safety regulations and standards.",
          "We invest in continuous training and professional development for our electricians, so clients receive innovative, efficient solutions tailored to their specific needs.",
        ],
      },
      whyList: {
        title: "Why Choose Varcoe Electrical?",
        lead: "What sets us apart in Auckland's competitive electrical market:",
        items: [
          {
            label: "Certified & Qualified",
            text: "Fully licensed electricians for residential, commercial and industrial work.",
          },
          {
            label: "Transparent Pricing",
            text: "A clear breakdown of all costs upfront — no hidden fees or surprises.",
          },
          {
            label: "Customer Satisfaction",
            text: "A high rate of repeat business and referrals from delighted clients.",
          },
          {
            label: "Quality Materials",
            text: "Sourced from reputable suppliers — energy-efficient and long-lasting.",
          },
          {
            label: "Safety First",
            text: "Stringent safety protocols, with audits and inspections before any work.",
          },
          {
            label: "Auckland-Wide & Guaranteed",
            text: "Service across all suburbs, with a quality guarantee on all work.",
          },
        ],
      },
      types: {
        title: "Our Electrical Services",
        lead: "Comprehensive electrical solutions for every type of property:",
        items: [
          {
            name: "Residential Electrical",
            description:
              "Lighting installations, power-point fittings and switchboard upgrades. Our experienced residential electricians specialise in older homes — prioritising safety and compliance — as well as new-home wiring and fit-outs.",
            image: {
              src: "/images/services/electrical/placeholder.svg",
              alt: "Residential electrical work",
            },
            tags: ["Lighting", "Switchboards"],
          },
          {
            name: "Commercial Electrical",
            description:
              "Electrical fit-outs, data cabling and energy-efficient lighting for businesses of all sizes. We work to industry standards while minimising downtime, and offer maintenance programs that reduce operating costs and improve safety.",
            image: {
              src: "/images/services/electrical/placeholder.svg",
              alt: "Commercial electrical work",
            },
            tags: ["Fit-outs", "Maintenance"],
          },
          {
            name: "Industrial Electrical",
            description:
              "Complex installations, machinery upgrades and power-distribution systems for manufacturing, warehousing and production facilities, plus preventative maintenance to reduce downtime and boost productivity.",
            image: {
              src: "/images/services/electrical/placeholder.svg",
              alt: "Industrial electrical work",
            },
            tags: ["High-power", "Control panels"],
          },
        ],
      },
      infoSections: [
        {
          title: "Our Process for Delivering Electrical Solutions",
          paragraphs: [
            "Every project is delivered with precision and care, through a clear, transparent process:",
          ],
          points: [
            {
              label: "In-Depth Consultation",
              text: "We take the time to understand your requirements, budget and timeline before any work begins.",
            },
            {
              label: "Comprehensive Site Assessment",
              text: "Our electricians identify any risks or challenges upfront so the work is carried out safely and efficiently.",
            },
            {
              label: "Safe, Efficient Execution",
              text: "We plan proactively for a successful project, minimising disruption to your home or business.",
            },
          ],
          image: {
            src: "/images/services/electrical/placeholder.svg",
            alt: "Electrician assessing an installation",
          },
        },
        {
          title: "Quality Materials & Safety Standards",
          paragraphs: [
            "Our commitment to quality and safety runs through every job:",
          ],
          points: [
            {
              label: "Reputable Suppliers",
              text: "Materials and equipment sourced from trusted brands known for reliability and quality.",
            },
            {
              label: "Safety Audits",
              text: "Thorough audits and inspections before any work to identify and mitigate hazards.",
            },
            {
              label: "Compliance",
              text: "All work meets current New Zealand safety regulations and standards.",
            },
          ],
        },
      ],
      faqs: [
        {
          question: "What electrical services does Varcoe offer?",
          answer:
            "A comprehensive range for residential, commercial and industrial clients — electrical installations, maintenance, repairs, safety inspections, lighting solutions, and much more.",
        },
        {
          question: "Are your electricians certified?",
          answer:
            "Yes. All our electricians are fully certified with extensive experience, equipped with the latest knowledge and tools to ensure all work is done safely and efficiently.",
        },
        {
          question: "Can you handle electrical work for new constructions?",
          answer:
            "Absolutely. We specialise in electrical installations for new constructions, designed and installed to meet all safety standards, working closely with construction teams for timely, seamless service.",
        },
        {
          question:
            "Do you provide electrical maintenance for commercial properties?",
          answer:
            "Yes. We offer electrical maintenance services for commercial properties, including routine inspections, testing and repairs to keep your systems running smoothly and prevent downtime.",
        },
        {
          question: "What industrial electrical services do you offer?",
          answer:
            "High-power installations, machinery wiring, control-panel installation and servicing, preventative maintenance, and safety inspections — tailored to the needs of industrial facilities.",
        },
        {
          question: "Do you provide energy-efficient electrical solutions?",
          answer:
            "Yes. We offer LED lighting upgrades, energy audits, and advice on reducing your energy consumption while maintaining optimal performance.",
        },
        {
          question: "How do I schedule an appointment?",
          answer:
            "Call us directly or fill out the contact form on our website, and we'll work with you to find a time that suits your schedule.",
        },
        {
          question: "Do you provide quotes for electrical projects?",
          answer:
            "Yes — free, no-obligation quotes for all types of electrical projects. Contact us with the details of your project and we'll provide an accurate estimate.",
        },
        {
          question: "Are your electrical services guaranteed?",
          answer:
            "Yes. All our electrical services come with a quality guarantee — we stand behind the workmanship of our electricians and ensure all work is performed to the highest standards.",
        },
      ],
      faqsTitle: "FAQs: Electrical Services in Auckland",
      closingCta: {
        title: "Get Started with Varcoe Electrical",
        body: "Need a certified Auckland electrician for a residential, commercial or industrial job? Get in touch for honest advice, transparent pricing and a free, no-obligation quote.",
        cta: { label: "Get a Free Quote", href: "/contact" },
      },
      showBrands: false,
    },
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

import type { Service } from "@/features/services/services-data";

/**
 * Single Room heat-pump landing page content — transcribed from the live page
 * (https://www.varcoe.co.nz/single-room/) into the shared `Service` shape.
 * Rendered at the top-level `/single-room` route via `RoomTypeDetail`.
 */
export const singleRoom: Service = {
  slug: "single-room",
  title: "Single Room",
  icon: "thermostat",
  summary:
    "Right size, right room, right price — sort that one problem room in a few hours, not a few weeks.",
  description:
    "Single-room heat pumps for Auckland homes: the right system for the one room that's always too hot or too cold, installed in 3–4 hours.",
  detail: {
    heroImage: {
      src: "/images/services/heat-pumps/hero.svg",
      alt: "Single-room heat pump installed in an Auckland home",
    },
    heroTitle:
      "Single-Room Heat Pumps Auckland - Right Size, Right Room, Right Price",
    heroSubtitle: "One problem room, sorted",
    intro: [
      "For Auckland homeowners with one problem room that's always too hot or too cold — and want it sorted in a few hours, not a few weeks.",
      "Most homes have that one problem area. A bedroom that won't cool in summer. A home office that gets too hot. A living room that's always cold.",
      "The systems come in three styles: wall-mounted units, floor consoles, and ceiling cassettes that fit different room configurations.",
    ],
    whyList: {
      title: "Why Single-Room Actually Makes Sense",
      items: [
        {
          label: "Pay only for what you use",
          text: "If you're using three rooms in your house, why are you paying to cool the other five? You heat or cool the room you're in — not the empty ones.",
        },
        {
          label: "Energy efficiency",
          text: "Modern inverter technology adjusts compressor speed based on actual needs, and many units qualify for energy-efficiency incentives.",
        },
        {
          label: "Independent room control",
          text: "Set the temperature in one room without affecting the rest of the house.",
        },
        {
          label: "Better air quality",
          text: "Built-in filtration systems clean the air as the unit heats and cools.",
        },
        {
          label: "Quiet operation",
          text: "Units run very quietly — Mitsubishi models at 19dB. You won't hear it.",
        },
        {
          label: "Fast temperature response",
          text: "They respond to temperature changes faster than traditional heaters.",
        },
      ],
    },
    types: {
      title: "Types of Single-Room Systems",
      items: [
        {
          name: "High-Wall Units",
          description:
            "The most common option, mounted near the ceiling for good airflow and quick temperature reach.",
          image: {
            src: "/images/services/heat-pumps/type-high-wall.svg",
            alt: "High-wall single-room heat pump",
          },
          tags: ["Most popular"],
        },
        {
          name: "Floor Consoles",
          description:
            "For limited wall space — sits at floor level. Slower air distribution but space-saving.",
          image: {
            src: "/images/services/heat-pumps/type-floor-console.svg",
            alt: "Floor console heat pump",
          },
          tags: ["Limited wall space"],
        },
        {
          name: "Ceiling Cassettes",
          description:
            "Completely invisible installation with four-directional air distribution. More expensive to install.",
          image: {
            src: "/images/services/heat-pumps/type-multi-split.svg",
            alt: "Ceiling cassette heat pump",
          },
          tags: ["Discreet"],
        },
      ],
    },
    infoSections: [
      {
        title: "The Brands We Actually Stock",
        points: [
          {
            label: "Mitsubishi Electric",
            text: "They're honestly the quietest. 19dB is legitimately quiet — you won't hear it. Features HyperCore technology, a 3D i-See sensor and built-in Wi-Fi, at a higher cost.",
          },
          {
            label: "Daikin",
            text: "Reliable and handles Auckland weather well. Carries Asthma + Respiratory Foundation NZ approval and solid inverter technology.",
          },
          {
            label: "Panasonic",
            text: "Well established in NZ. nanoe X technology kills 99% of airborne bacteria and mould, with good energy efficiency and value.",
          },
        ],
      },
      {
        title: "Sizing Your System (This Actually Matters)",
        paragraphs: [
          "Get the size wrong and you're either freezing or sweating.",
          "We assess room dimensions, insulation quality, windows, sun exposure, heat from appliances and usage patterns before recommending a system — rather than guessing.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/energy.svg",
          alt: "Sizing a single-room heat pump",
        },
      },
      {
        title: "What Actually Happens During Installation",
        points: [
          {
            label: "Assessment",
            text: "We assess the space and your preferences.",
          },
          { label: "Quote", text: "You get a clear quote." },
          {
            label: "Installation",
            text: "Our technician installs the system — typically in a few hours.",
          },
          {
            label: "Training",
            text: "We test it and show you how to run it.",
          },
        ],
        image: {
          src: "/images/services/heat-pumps/installation.svg",
          alt: "Single-room heat pump installation",
        },
      },
      {
        title: "Keeping Your System Running",
        points: [
          {
            label: "Maintenance",
            text: "Dirty filters are the main culprit. An annual service — filter cleaning or replacement and refrigerant checks — keeps units efficient for 10–15 years.",
          },
          {
            label: "Smart features",
            text: "Wi-Fi control, programmable timers and pattern learning.",
          },
          {
            label: "Seasonal",
            text: "Both heating and cooling modes — efficient in cold Auckland winters.",
          },
        ],
        image: {
          src: "/images/services/heat-pumps/maintenance.svg",
          alt: "Heat pump maintenance",
        },
      },
      {
        title: "Where These Actually Work Well",
        points: [
          { text: "Houses and apartments." },
          { text: "Small businesses." },
          { text: "Adding to an existing system." },
        ],
      },
      {
        title: "Single-Room Heat Pump Repairs",
        paragraphs: [
          "Most issues show up during regular service – dirty filters, refrigerant leaks, electrical connections getting loose.",
          "Common problems include reduced cooling or heating performance, strange noises and winter ice buildup. We service all major brands — Mitsubishi, Daikin and Panasonic.",
        ],
        points: [],
      },
    ],
    experts: {
      title: "Why We're Actually Different",
      paragraphs: [
        "We've been doing this for over 40 years.",
        "We understand Auckland's climate, stock three major brands, don't push unnecessary upsells, and provide after-installation support.",
      ],
    },
    closingCta: {
      title: "Ready to Upgrade Your Comfort?",
      body: "Contact Varcoe for a free consultation and discover the right single-room system for your space.",
      cta: { label: "Get a free quote", href: "/contact" },
    },
  },
};

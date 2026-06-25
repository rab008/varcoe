/**
 * Content for `/service/heat-pumps/size-calculator` (a child of the Heat Pumps
 * service). Exact copy from the live varcoe.co.nz/heat-pump-size-calculator page
 * (a formula-based sizing guide), cleaned of mojibake/typos only. Reuses an
 * existing calculator image for the assessment band.
 *
 * Note: overlaps with `/heat-pump-calculator` by design (client-approved — both
 * keep their own self canonical).
 */

type Cta = { label: string; href: string };

export type SizeCalculatorContent = {
  title: string;
  intro: string[];
  formula: { heading: string; expression: string; example: string };
  baseline: {
    heading: string;
    lead: string;
    items: { label: string; value: string }[];
  };
  sizes: {
    heading: string;
    items: { size: string; use: string }[];
    note: string;
  };
  variables: { heading: string; items: { label: string; text: string }[] };
  mistakes: { heading: string; body: string };
  assessment: {
    heading: string;
    lead: string;
    points: string[];
    image: { src: string; alt: string };
    cta: Cta;
  };
  guide: {
    heading: string;
    columns: string[];
    rooms: { name: string; dims: string; values: string[] }[];
    note: string;
  };
  installation: {
    heading: string;
    body: string;
    points: string[];
    link: Cta;
  };
};

export const sizeCalculatorContent: SizeCalculatorContent = {
  title: "Heat Pump Size Calculator",

  intro: [
    "Sizing your heat pump correctly matters more than which brand you buy. Undersized? It'll be loud, inefficient, and never quite warm enough. Oversized? It cycles on and off constantly, wastes energy, and creates temperature swings.",
  ],

  formula: {
    heading: "The Formula",
    expression: "Room volume (m³) × 55 watts = kW you need",
    example:
      "For example, a 5m × 4m room with a 2.4m ceiling is 48m³. 48 × 55 = 2,640 watts, or about 2.6kW — so you'd look at a 2.5–3kW unit.",
  },

  baseline: {
    heading: "But That's the Baseline",
    lead: "The 55-watt figure is a starting point. Adjust it for your home:",
    items: [
      { label: "New homes (2016+)", value: "Use 50 watts" },
      { label: "Average insulation", value: "Use 55 watts" },
      { label: "Poor insulation", value: "Use 65 watts" },
      { label: "South Island / high-altitude", value: "Add 10–15%" },
    ],
  },

  sizes: {
    heading: "Heat Pump Sizes You'll Actually See",
    items: [
      { size: "2.5kW", use: "Small bedrooms, home offices" },
      { size: "3.5kW", use: "Medium bedrooms, small lounges" },
      { size: "5kW", use: "Large bedrooms, medium lounges" },
      { size: "6kW", use: "Large open-plan living" },
      { size: "7–8kW+", use: "Whole-home systems" },
    ],
    note: "Most single-room installations in Auckland homes are 3.5kW or 5kW.",
  },

  variables: {
    heading: "Variables You Need to Factor In",
    items: [
      {
        label: "Window size & type",
        text: "Add around 10% for large or poor-quality windows.",
      },
      {
        label: "House age",
        text: "Older homes leak heat more, so they need extra capacity.",
      },
      {
        label: "Sunlight exposure",
        text: "Reduce 5–10% for sunny, north-facing rooms.",
      },
      {
        label: "Ceiling height",
        text: "Multiply by 1.2–1.5 for ceilings above the standard 2.4m.",
      },
      {
        label: "Climate zone",
        text: "The South Island requires extra capacity over Auckland.",
      },
    ],
  },

  mistakes: {
    heading: "What You Shouldn't Do",
    body: "Don't oversize “just to be safe.” Oversizing causes problems: frequent cycling on and off wastes energy, you get temperature swings, upfront costs rise with no benefit, and the equipment's lifespan is reduced from the extra stress.",
  },

  assessment: {
    heading: "The Professional Assessment",
    lead: "A calculator gets you close, but the best approach is having someone visit your home and actually look at:",
    points: [
      "Your insulation level",
      "Window placement and condition",
      "How airtight the space is",
      "Your local climate zone",
      "Which room needs heating",
    ],
    image: {
      src: "/images/calculator/cta.svg",
      alt: "Varcoe team carrying out a free in-home heat pump assessment",
    },
    cta: { label: "Book a Free Assessment", href: "/contact" },
  },

  guide: {
    heading: "Quick Sizing Guide for Auckland",
    columns: ["New / insulated", "Average", "Older / poor"],
    rooms: [
      {
        name: "Bedrooms",
        dims: "typical 3m × 4m × 2.4m",
        values: ["2.5kW", "3.5kW", "3.5–5kW"],
      },
      {
        name: "Living rooms",
        dims: "typical 5m × 6m × 2.4m",
        values: ["4kW", "5–6kW", "6–7kW"],
      },
      {
        name: "Open-plan",
        dims: "7m × 7m+",
        values: ["6–7kW", "7–8kW", "8–10kW"],
      },
    ],
    note: "South Island: add 1kW to the figures above.",
  },

  installation: {
    heading: "After You've Sized It, Installation Matters",
    body: "Right sizing is half the battle — installation is the other half. A great install means your installer will:",
    points: [
      "Mount units high on exterior walls",
      "Run properly insulated pipes",
      "Size the electrical circuits correctly",
      "Test and balance the system",
      "Show you how to use it well",
    ],
    link: {
      label: "Learn about heat pump installation",
      href: "/service/heat-pumps/installation",
    },
  },
};

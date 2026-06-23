import type { IconName } from "@/components/ui/Icon";

/**
 * Static content for the Heat Pump Calculator page. Reproduced verbatim from the
 * supplied document (Varco content (1).md) — wording is not condensed or altered.
 * Inline links are kept as the MD wrote them (external varcoe.co.nz URLs).
 */

type Img = { src: string; alt: string };

/** A run of text or an inline link; a paragraph is a list of segments. */
export type Segment = string | { text: string; href: string };
export type RichText = Segment[];

const CONTACT = "https://www.varcoe.co.nz/contact-us/";

export const calculatorContent = {
  title: "Heat Pump Calculator",

  intro: [
    [
      "Wondering how powerful a heat pump you should buy? You can use the free calculator to find out the perfect make and model for your home.",
    ],
    [
      "Just answer three quick questions about your space, insulation, and location — ",
      { text: "Varcoe", href: "https://www.varcoe.co.nz/" },
      " will handle the rest.",
    ],
  ] satisfies RichText[],

  /** Mitsubishi Electric selector embed. */
  embed: {
    iframeSrc:
      "https://www.mitsubishi-electric.co.nz/customer/heatpump_selector.aspx?mesa=2958000",
    scriptSrc: "https://www.mitsubishi-electric.co.nz/js/me-external.js",
    title: "Mitsubishi Electric heat pump selector",
  },

  paths: [
    {
      icon: "thermostat" as IconName,
      title: "Heat a Single Room",
      body: [
        [
          {
            text: "Heating or cooling a single room?",
            href: "https://www.varcoe.co.nz/single-room/",
          },
          " High-wall units work great for bedrooms and lounges, while floor consoles are perfect for replacing fireplaces. Answer three quick questions about your room, and we'll recommend the right capacity for you.",
        ],
      ] satisfies RichText[],
      image: {
        src: "/images/calculator/path-single-room.svg",
        alt: "High-wall heat pump in a single room",
      },
    },
    {
      icon: "wind" as IconName,
      title: "Heat My Whole Home",
      subtitle: "Which Central Home Ducted Heat Pump is Right for Me?",
      body: [
        [
          {
            text: "Ducted systems",
            href: "https://www.varcoe.co.nz/ducted-whole-home-systems/",
          },
          " deliver one consistent temperature throughout your home — no cold hallways, no hot spots. Custom designed for your layout and completely discreet, they're ideal for new builds and whole-home comfort.",
        ],
        [
          "Enter your conditioned space (the areas you actually want heated — exclude bathrooms, hallways, storage, and garages) and we'll calculate the capacity you need.",
        ],
      ] satisfies RichText[],
      image: {
        src: "/images/calculator/path-whole-home.svg",
        alt: "Ducted whole-home heat pump system",
      },
    },
    {
      icon: "snowflake" as IconName,
      title: "Heat Multiple Rooms",
      subtitle: "Which Multi Room Heat Pump is Right for Me?",
      body: [
        [
          "Need to heat multiple areas but don't want full ducting? ",
          { text: "Multi-room", href: "https://www.varcoe.co.nz/multi-room/" },
          " systems give you independent control in different zones with one outdoor unit. Perfect for homes with awkward layouts or if you want flexibility.",
        ],
        [
          "We recommend booking a free consultation so our team can assess your specific spaces and design the right system for you. We'll calculate accurate sizing and recommend the best indoor unit positions for your home.",
        ],
      ] satisfies RichText[],
      image: {
        src: "/images/calculator/path-multi-room.svg",
        alt: "Multi-room heat pump system",
      },
    },
  ],

  /** Section heading above the three path cards (user-approved; not from the MD). */
  pathsHeading: "Which heat pump is right for you?",

  consultCta: { label: "Book a free Consultation", href: CONTACT },

  why: {
    title: "Why Heat Pump Sizing Is So Important?",
    image: {
      src: "/images/calculator/why-sizing.svg",
      alt: "Correctly sized heat pump keeping a home comfortable",
    },
    paragraphs: [
      "One of the best investments you can make is investing into the comfort of your home. Our homes are supposed to be a safe haven from the elements. But with Auckland's famous “four seasons in a day” weather system, choosing the right heat pump for your home can be surprisingly tricky.",
      "What brand? What type and model? What sort of performance is best for a particular room? You need to answer these questions accurately before you pay for the unit(s) and the installer. If you undershoot, the temperature won't be to your liking. Overshooting can mean an over-powered system that is costly to run and maintain with no additional benefits.",
      "While it's best to get a professional over to assess your home and give their consultation, the free calculators above are a great way to gauge and estimate a budget before you make a call.",
    ],
  },

  factors: {
    title: "The Key Factors in Heat Pump Sizing",
    items: [
      {
        icon: "gear" as IconName,
        title: "Room or House Size",
        paragraphs: [
          "Square metres aside, the ceiling height is important to factor in, too. A 50-square-metre room with standard 2.4-metre ceilings requires a different capacity than the same footprint with 3-metre ceilings. The best way to determine heating demand is by volume, not floor area.",
        ],
      },
      {
        icon: "shield" as IconName,
        title: "Insulation Quality",
        paragraphs: [
          "This is the single biggest factor affecting sizing. While an older villa in Papakura, Manurewa, or East Auckland with single-pane windows and minimal insulation leaks heat like a sieve, a newer build of the same size with double-glazed windows and full insulation retains warmth far more effectively. You must factor this in to your sizing calculus to get the best idea of the kind of unit you need.",
        ],
      },
      {
        icon: "sparkle" as IconName,
        title: "Building Orientation and Windows",
        paragraphs: [
          "North-facing homes receive winter sun, which helps maintain temperature naturally. If your home faces the south, it'll stay colder for longer. Windows play a role, too — glass windows or sliding doors, even if they're double-glazed, can leak a lot of heat (single-pane windows are even worse).",
          "If your room or home has extensive glazing, plan for 10–15% additional capacity beyond base calculations. For us at Varcoe, typically, when we find that the client has single-pane windows, we'd recommend them to upgrade to double-glazed — that'd drastically improve the heat pump's size and overall efficiency.",
        ],
      },
      {
        icon: "snowflake" as IconName,
        title: "Auckland's Winter Climate",
        paragraphs: [
          "Auckland experiences mild winters compared to most of New Zealand. Our average July low sits around 10°C, rarely dropping below 5°C for extended periods (Earth Sciences New Zealand). This is mild enough that standard heat pumps perform reliably without needing something fancy like Mitsubishi's HyperCore technology. However, “mild” doesn't mean you can undersize.",
          "Winter nights are damp and penetrating, and the heat inside your home will gradually leak out. Over long stretches of consecutive cold days, you'll need a more robustly-sized systems that won't falter or run constantly. Areas like the South Island experience sub-zero temperatures regularly and require either larger capacity systems or advanced HyperCore Heat Pumps.",
        ],
      },
    ],
  },

  mistakes: {
    title: "Common Sizing Mistakes",
    items: [
      {
        title: "Undersizing to Save Money",
        body: "Buying a cheaper, smaller heat pump hoping it will “do the job” is a bad idea. An undersized unit runs constantly, wastes power, and ages prematurely because the compressor never gets a break. You'll also never reach comfortable temperatures on the coldest nights. Over time, the higher power consumption and eventual replacement costs far exceed the initial savings.",
      },
      {
        title: "Oversizing for “Safety”",
        body: "Conversely, choosing a larger system thinking bigger is safer creates problems. An oversized unit cycles on and off frequently, wasting energy and causing unnecessary wear on components.",
      },
      {
        title: "Ignoring Insulation Status",
        body: "Many homeowners guess at their insulation quality or assume their home is better insulated than it actually is. A villa from the 1970s isn't magically as efficient as a 2018 renovation just because it's in the same neighbourhood. If you're unsure, select the more conservative option to avoid undersizing.",
      },
      {
        title: "Not Accounting for Ceiling Height",
        body: "Open-plan kitchens and lounges with 3-metre ceilings need noticeably more capacity than standard 2.4-metre rooms. Some Auckland renovations create soaring spaces that look impressive but demand significantly more heating power.",
      },
    ],
  },

  nextSteps: {
    title: "Next Steps",
    image: {
      src: "/images/calculator/cta.svg",
      alt: "Varcoe team consultation",
    },
    paragraphs: [
      [
        "But if you need any more information or have additional questions, don't hesitate to get in contact with us directly. As Auckland's leading experts in heat pumps and air conditioning, Varcoe can ensure that you get the right heat pump from our range of ",
        {
          text: "Daikin",
          href: "https://www.varcoe.co.nz/manufacturers/daikin/",
        },
        ", ",
        {
          text: "Mitsubishi Electric",
          href: "https://www.varcoe.co.nz/manufacturers/mitsubishi/",
        },
        ", and ",
        {
          text: "Panasonic",
          href: "https://www.varcoe.co.nz/manufacturers/panasonic/",
        },
        " systems to guarantee you the comfort levels you're looking for.",
      ],
      [
        "Use our calculator above to get an initial sizing estimate. Then ",
        { text: "contact our team", href: CONTACT },
        " to book your free, no-obligation consultation with the expert team at Varcoe Heat Pump and Air Conditioning. Let us help you choose the perfect heat pump for your home!",
      ],
    ] satisfies RichText[],
    cta: { label: "Book a free Consultation", href: CONTACT },
  },
} as const;

/**
 * Static content for the `/offers` "Heat Pump Specials" page. Single source of
 * truth for the page. Copy supplied by the client (cleaned of mojibake/typos).
 *
 * Pricing/grant figures ($400, up to $3,450, $400–700, "50% less power", "90%")
 * are promotional/government-programme claims — confirm with the client before
 * launch.
 */

export type SpecialsCta = { label: string; href: string };

export type SpecialOffer = {
  title: string;
  lead?: string;
  dealLabel?: string;
  deal?: string;
  bulletsLabel?: string;
  bullets?: string[];
  reasonLabel?: string;
  reason?: string;
  qualifyLabel?: string;
  qualify?: string[];
  stepsLabel?: string;
  steps?: string[];
  exampleLabel?: string;
  example?: string;
  cta: SpecialsCta;
};

const QUOTE_HREF = "/contact";

export const heatPumpSpecials = {
  hero: {
    title: "Heat Pump Specials",
    intro:
      "We've got deals running on our bestsellers right now — Mitsubishi, Daikin and Panasonic, all discounted while stock lasts. Check what's special below and give us a call. These move fast.",
    cta: { label: "Get Your Free Quote", href: QUOTE_HREF },
  },

  offers: [
    {
      title: "Trade In Your Old Heat Pump, Get Money Off",
      lead: "Got an old heat pump? We'll give you cash for it.",
      dealLabel: "Here's the deal:",
      deal: "Your old unit is worth money — even broken ones. We take it off your hands and knock dollars off your new system.",
      bulletsLabel: "You get:",
      bullets: [
        "Instant savings on a brand new heat pump",
        "We remove your old one for free",
        "Lower power bills starting day one",
        "Mitsubishi, Daikin, or Panasonic (your choice)",
      ],
      reasonLabel: "Why upgrade?",
      reason:
        "Old heat pumps waste power. New ones use 50% less electricity — that's real money back in your pocket every month.",
      exampleLabel: "Takes 5 minutes:",
      example:
        "Book a free quote. We check your old unit. You see your savings. Simple.",
      cta: { label: "Save Now", href: QUOTE_HREF },
    },
    {
      title: "Government Pays 90% (Warmer Kiwi Homes)",
      lead: "If you qualify, your heat pump costs as low as $400. The government covers up to $3,450 of the cost — Varcoe handles everything.",
      qualifyLabel: "Do you qualify?",
      qualify: [
        "Own your home (built before 2008)",
        "Have a Community Services Card or SuperGold Card",
        "Home already has insulation",
        "No heat pump or wood burner in your lounge yet",
      ],
      stepsLabel: "Yes to all four? You're likely approved. What happens next:",
      steps: [
        "Call us or check online (2 minutes)",
        "We visit your home for free",
        "You pay $400–700 total (government pays the rest)",
        "We install your heat pump the same week",
        "Your home stays warm and your power bill drops",
      ],
      exampleLabel: "Real example:",
      example:
        "Heat pump normally costs $3,200. Government pays $2,880. You pay $320.",
      cta: { label: "Save Now", href: QUOTE_HREF },
    },
  ] satisfies SpecialOffer[],

  wkhCta: {
    title: "Check If You Qualify for Warmer Kiwi Homes",
    body: "See if you're eligible for free or subsidised heating through the Warmer Kiwi Homes programme.",
    cta: {
      label: "Apply for Warmer Kiwi Homes",
      href: "/offers/warmer-kiwi-homes",
    },
  },

  whyVarcoe: {
    title: "Why Choose Varcoe?",
    subtitle: "50 years. Thousands of happy Auckland homes.",
    body: "We've been doing this since 1975. We only install the best brands. Our team shows up on time. Your heat pump works perfectly. That's our promise.",
    points: [
      "Owner operated (we care about getting it right)",
      "Only premium brands (Mitsubishi, Daikin, Panasonic)",
      "Licensed installers (no cowboys)",
      "Same-day service available",
      "We fix it if anything goes wrong",
    ],
  },

  howItWorks: {
    title: "How It Works",
    steps: [
      "Book a free quote",
      "Our team will come to you",
      "We'll walk you through the best options and any available specials",
      "You choose what works best for your home and budget",
    ],
    note: "Easy as that.",
  },

  finalCta: {
    title: "Don't Miss Out",
    cta: { label: "Get Your Free Quote", href: QUOTE_HREF },
  },
} as const;

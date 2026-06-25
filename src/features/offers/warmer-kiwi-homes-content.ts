/**
 * Static content for the Warmer Kiwi Homes landing page
 * (`/offers/warmer-kiwi-homes`). Single source of truth for the page and its
 * FAQPage JSON-LD. Copy supplied by the client (cleaned of mojibake/typos).
 *
 * Figures (up to 90% off, funding capped at $3,450 inc GST, eligibility
 * criteria) are government-programme facts — confirm with the client before
 * launch.
 */

export type WkhFaq = { question: string; answer: string };
export type WkhStep = { step: number; title: string; text: string };

/** External EECA eligibility checker — opened in a new tab. */
export const eecaEligibilityUrl =
  "https://www.eeca.govt.nz/co-funding-and-support/products/warmer-kiwi-homes-programme/check-eligibility/";

/** Facebook testimonial video referenced in the programme section. */
export const warmerKiwiHomesVideoUrl =
  "https://www.facebook.com/warmerkiwihomes/videos/1937788840361118/";

export const warmerKiwiHomes = {
  hero: {
    eyebrow: "An EECA-Approved Heat Pump Provider",
    title: "Heat Your Home Affordably with Varcoe",
    // The "heat pump installation" phrase links internally to /services/heat-pumps.
    bodyBefore:
      "At Varcoe, we're proud to be an approved Warmer Kiwi Homes service provider, helping New Zealanders heat their homes efficiently and affordably. Through this government-backed programme, eligible homeowners can get up to 90% off the cost of a high-quality ",
    bodyLinkLabel: "heat pump installation",
    bodyLinkHref: "/service/heat-pumps",
    bodyAfter: " (funding capped at $3,450 inc GST) by our certified team.",
    primaryCta: { label: "Check Eligibility Now", href: eecaEligibilityUrl },
    secondaryCta: { label: "Get in Touch", href: "/contact" },
  },

  intro: {
    title: "Warmer Kiwi Homes",
    body: "Our team will guide you through the process, from checking your Warmer Kiwi Homes grant eligibility to professional installation. As a trusted local expert with over 45 years of experience, we make staying warm easier than ever.",
    cta: {
      label: "Check Your Eligibility with EECA Now",
      href: eecaEligibilityUrl,
    },
  },

  whatIs: {
    eyebrow: "What is the Warmer Kiwi Homes Programme?",
    title: "Helping Kiwis Live in Warmer, Drier, Healthier Homes",
    intro:
      "Warmer Kiwi Homes is an initiative by EECA (Energy Efficiency and Conservation Authority) to make New Zealand homes warmer, healthier, and more energy-efficient. The programme provides funding for:",
    bullets: [
      "Heat pumps in the main living area",
      "Ceiling and underfloor insulation (Varcoe provides heat pump installations only)",
    ],
    fundingNote:
      "If eligible, you could receive a grant covering up to 90% of the total cost (funding capped at $3,450 inc GST) off your new heat pump — dramatically reducing upfront costs while increasing comfort.",
    stat: "Over 100,000 Kiwi households have already benefited.",
    quote: "It's just made a huge difference to our whānau.",
    videoLabel: "Watch the video on Facebook",
    videoUrl: warmerKiwiHomesVideoUrl,
  },

  whyVarcoe: {
    eyebrow: "Why Choose Varcoe?",
    title: "EECA-Approved. Auckland-Based. Trusted Since 1975.",
    body: "As a Warmer Kiwi Homes service provider, Varcoe is certified by EECA to install approved energy-efficient heat pumps across Auckland. Our experienced installers work with leading brands like Mitsubishi Electric, Daikin & Panasonic, delivering quality systems that meet EECA's standards.",
    handlesTitle: "We handle:",
    handles: [
      "Grant eligibility support",
      "Free home assessments",
      "Professional, compliant installation",
      "After-sales service and maintenance",
    ],
    trustPoints: [
      "Trusted by Kiwis for over 45 years",
      "5-star customer reviews",
      "Locally owned and operated",
    ],
  },

  eligibility: {
    eyebrow: "Am I Eligible for the Warmer Kiwi Homes Grant?",
    title: "You may qualify for Warmer Kiwi Homes heat pump subsidies if:",
    criteria: [
      "You own and live in a home built before 2008",
      "You have a Community Services Card, or SuperGold Combo Card",
      "You live in a low-income area (as defined by NZ Government data)",
      "You don't already have a fixed heating source in your main living area",
    ],
    insulationNote:
      "In addition to the above criteria, your home must also be insulated to Warmer Kiwi Homes standards (ceiling and underfloor). If it isn't, you may also qualify for insulation support — homeowners can receive a grant covering 80–90% of the cost of insulation, on top of up to 90% off a heat pump.",
    closing: "Not sure if you qualify? We'll help you check — no obligation.",
    cta: { label: "Check My Eligibility Now", href: eecaEligibilityUrl },
  },

  process: {
    eyebrow: "How the Process Works",
    title: "Simple 4-Step Process to a Warmer, Healthier Home",
    steps: [
      {
        step: 1,
        title: "Get in Touch",
        text: "Call or email Varcoe to begin your eligibility check.",
      },
      {
        step: 2,
        title: "Home Assessment",
        text: "Our team visits your property to assess your needs and recommend the right heat pump.",
      },
      {
        step: 3,
        title: "Easy Installation",
        text: "Once approved, we install your new unit quickly and professionally to EECA standards.",
      },
      {
        step: 4,
        title: "Enjoy the Comfort",
        text: "Experience efficient warmth in winter and refreshing cool in summer.",
      },
    ] satisfies WkhStep[],
    note: "Most installations are completed within 2–4 weeks of approval.",
  },

  benefits: {
    eyebrow: "Why Install a Heat Pump?",
    title: "Energy-Efficient Heating with Year-Round Comfort",
    items: [
      "Fast, efficient heating for the whole room",
      "Reduces mould, dampness, and respiratory issues",
      "Lower energy bills compared to plug-in heaters",
      "Doubles as an air conditioner during summer",
      "Cleaner indoor air and better sleep quality",
    ],
    note: "Only EECA-approved heat pumps are eligible, and they meet strict energy efficiency standards for New Zealand homes.",
    cta: { label: "Check My Eligibility Now", href: eecaEligibilityUrl },
  },

  faqs: [
    {
      question: "Do I apply through EECA or Varcoe?",
      answer:
        "You can apply directly through Varcoe — we handle the entire process on your behalf.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We service Auckland and surrounding regions, including South, West, East, and North Auckland.",
    },
    {
      question: "How much will I pay?",
      answer:
        "If you're eligible, you'll pay just 20% or less of the cost. Some homeowners may qualify for full coverage.",
    },
    {
      question: "What heat pump brands do you install?",
      answer:
        "We install trusted EECA-approved brands including Mitsubishi Electric, Panasonic, and Daikin.",
    },
    {
      question: "Can I choose where the heat pump goes?",
      answer:
        "Yes, we'll work with you to find the ideal spot for optimal performance and comfort.",
    },
  ] satisfies WkhFaq[],

  finalCta: {
    title: "Let's Get You a Warmer, Healthier Home",
    body: "With Varcoe and the Warmer Kiwi Homes grant, efficient home heating is more accessible than ever. Our team is here to help every step of the way, from checking your Warmer Kiwi Homes grant eligibility to expert installation.",
    cta: {
      label: "Check Your Eligibility with EECA Now",
      href: eecaEligibilityUrl,
    },
  },
} as const;

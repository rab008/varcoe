/**
 * Content model + builder for the location pages (`/locations/[area]` and
 * `/locations/[area]/[suburb]`). The `LocationDetail` template renders a
 * `LocationContent`; the route reads `seo` for metadata.
 *
 * `seo.title` / `seo.ogTitle` are stored WITHOUT the "| Varcoe" suffix — the root
 * layout's title template adds it (and the route appends it to the OG title).
 *
 * This is a LEAF module (no imports of the content fragments or the registry) so
 * the per-area content files can import `makeLocationContent` without a cycle.
 */

export type LocationCta = { label: string; href: string };
export type LocationSeo = {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
};

export type LocationContent = {
  name: string; // display name ("East Auckland", "Mount Eden") — used in localised copy
  seo: LocationSeo;
  hero: { title: string; intro: string; cta: LocationCta };
  keyTakeaways: { title: string; intro: string; points: string[] };
  whyChoose: { title: string; paragraphs: string[]; points: string[] };
  whatWeProvide: { title: string; paragraphs: string[] };
  howItWorks: { title: string; paragraphs: string[] };
  systems: { title: string; body: string };
  reviews: { title: string; body: string }; // retained for parity (not rendered; route uses <Testimonials/>)
  readyToUpgrade: { title: string; body: string; stat: string };
  closingCta: { title: string; body: string; cta: LocationCta };
};

const QUOTE: LocationCta = { label: "Get a Free Quote", href: "/contact" };

/**
 * Build a `LocationContent` for a templated (non-East-Auckland) location. The
 * caller supplies the **localised** differentiators (hero intro, the lead "why
 * choose" / "what we provide" paragraphs, the meta description, and an optional
 * systems note); the shared process copy is woven with the location `name` so no
 * two pages are byte-identical. East Auckland keeps its own hand-written content.
 */
export function makeLocationContent(input: {
  name: string;
  heroIntro: string;
  whyChooseLead: string;
  whatWeProvideLead: string;
  seoDescription: string;
  systemsBody?: string;
}): LocationContent {
  const { name, heroIntro, whyChooseLead, whatWeProvideLead, seoDescription } =
    input;

  return {
    name,
    seo: {
      title: `Heat Pumps & Air Conditioning ${name}`,
      description: seoDescription,
      ogTitle: `Heat Pumps & Air Conditioning ${name}`,
      ogDescription: `Heat pump & air conditioning installation in ${name} by Varcoe — 50+ years' experience and a 12-month workmanship guarantee.`,
    },

    hero: {
      title: `Heat Pumps & Air Conditioning in ${name}`,
      intro: heroIntro,
      cta: QUOTE,
    },

    keyTakeaways: {
      title: "Key Takeaways",
      intro: `Varcoe brings 50+ years of experience to ${name}, with professional heat pump and air conditioning installation backed by a 12-month workmanship guarantee.`,
      points: [
        "Professional installation includes an in-home assessment, a detailed no-pressure quote, a typical 3–4 hour install, and 24-hour service scheduling for maintenance and repairs.",
        "For larger homes we offer multi-zone systems with independent temperature control per area, and ducted whole-home solutions that keep every room at a consistent temperature.",
        "All systems are sourced from trusted manufacturers including Mitsubishi, Daikin and Panasonic, which typically last 15+ years with proper maintenance.",
      ],
    },

    whyChoose: {
      title: `Why Choose Varcoe for ${name}?`,
      paragraphs: [
        whyChooseLead,
        `With 50+ years and 12,000+ installations across Auckland, our technicians bring real expertise to every ${name} job — and we stand behind the work long after it's finished.`,
      ],
      points: [
        "Professional, tidy installation that respects your home",
        "Expertise across single rooms, multi-zone and ducted whole-home systems",
        "Strong local reputation with regular customer referrals",
        "Full after-sales service and maintenance",
        "Every installation comes with a 12-month workmanship guarantee",
        "Service and maintenance whenever you need it — most calls scheduled within 24 hours",
      ],
    },

    whatWeProvide: {
      title: `What We Provide in ${name}`,
      paragraphs: [
        whatWeProvideLead,
        "We install single-room heat pumps, multi-zone systems for larger homes, and ducted whole-home solutions that heat in winter and cool in summer. We also handle replacements, servicing, and commercial or rental properties.",
      ],
    },

    howItWorks: {
      title: "How It Works",
      paragraphs: [
        `We start with an in-home assessment in ${name}. You tell us what you need; we take measurements, look at your space, and understand your preferences and budget. Then we provide a detailed, no-pressure quote.`,
        "If you decide to proceed, installation typically takes 3–4 hours — and we leave your home clean and tidy.",
        "After installation you get a 12-month workmanship guarantee, with service and maintenance whenever you need it. Most service calls are scheduled within 24 hours.",
      ],
    },

    systems: {
      title: "The Systems We Install",
      body:
        input.systemsBody ??
        `We partner with Mitsubishi, Daikin and Panasonic — three of the world's most trusted manufacturers. We'll recommend the right system for your ${name} home and budget, all built to last 15+ years with proper maintenance.`,
    },

    reviews: {
      title: `What ${name} Customers Say`,
      body: `Our ${name} customers leave reviews on Google — real feedback from real installations. Quality workmanship, a professional finish, and systems that keep working year after year.`,
    },

    readyToUpgrade: {
      title: "Ready to Upgrade?",
      body: `Call or email and we'll arrange a free in-home assessment in ${name}. You'll get a detailed quote — no pressure, no obligation.`,
      stat: "Varcoe. 50+ years. 12,000+ installations. Real service.",
    },

    closingCta: {
      title: `Heat Pumps & Air Conditioning, Done Right in ${name}`,
      body: "Get professional installation backed by a 12-month workmanship guarantee. Book your free in-home assessment with Varcoe today.",
      cta: QUOTE,
    },
  };
}

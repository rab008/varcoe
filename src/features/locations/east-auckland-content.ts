/**
 * Static content for the `/locations/east-auckland` page. Single source of truth.
 * Copy from the client brief (cleaned of mojibake/typos).
 *
 * Marketing claims (25+/50+ years, 12,000+ installations, "15+ years",
 * "50% less power") are client-supplied — confirm before launch. Phone/email
 * come from siteConfig (the brief's "0980 270 03" is treated as a typo).
 *
 * `seo.title`/`seo.ogTitle` exclude the "| Varcoe" suffix — the root title
 * template adds it (and the route appends it to the OG title).
 */

import type { LocationContent } from "@/features/locations/location-content";

export const eastAuckland: LocationContent = {
  name: "East Auckland",

  seo: {
    title: "Heat Pumps & Air Conditioning East Auckland",
    description:
      "Professional heat pump & air conditioning installation across East Auckland — Howick, Botany, Pakuranga and more. 25+ years' experience, 12-month workmanship guarantee. Get a free quote.",
    ogTitle: "Heat Pumps & Air Conditioning East Auckland",
    ogDescription:
      "Premium heat pump & AC installation across East Auckland, backed by a 12-month workmanship guarantee.",
  },

  hero: {
    title: "Heat Pumps & Air Conditioning in East Auckland",
    intro:
      "East Auckland suburbs like Howick, Botany and Kohimarama are premium residential areas. Homes here are well-maintained and thoughtfully designed — your heat pump system should match that standard. It should be installed professionally, finished cleanly, and backed with real expertise.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },

  keyTakeaways: {
    title: "Key Takeaways",
    intro:
      "Varcoe has 25+ years of experience serving East Auckland's premium suburbs with professional heat pump and air conditioning installation, backed by a 12-month workmanship guarantee.",
    points: [
      "Professional installation includes an in-home assessment, a detailed no-pressure quote, 3–4 hour installation, and 24-hour service scheduling for maintenance and repairs.",
      "For larger homes, Varcoe offers multi-zone systems with independent temperature control per area, and ducted whole-home solutions that maintain consistent temperatures throughout the property.",
      "All systems are sourced from trusted manufacturers including Mitsubishi, Daikin and Panasonic, which typically last 15+ years with proper maintenance.",
    ],
  },

  whyChoose: {
    title: "Why Choose Varcoe for East Auckland?",
    paragraphs: [
      "In East Auckland, you want more than installation. You want professionals who take pride in their work, who finish the job right, and who stick around if you need service down the line. Not every installer cares about that.",
      "We have 25+ years serving East Auckland's premium suburbs, and our technicians understand the standard you expect.",
    ],
    points: [
      "Professional, tidy installation that respects your home",
      "Expertise with high-end systems and custom solutions",
      "Strong local reputation with regular customer referrals",
      "Full after-sales service and maintenance",
      "Every installation comes with a 12-month workmanship guarantee",
      "Service and maintenance whenever you need it — most calls scheduled within 24 hours",
    ],
  },

  whatWeProvide: {
    title: "What We Provide in East Auckland",
    paragraphs: [
      "Heat pump replacements are our specialty. If your old air conditioning system is reaching the end of its life, we'll install a modern, efficient heat pump that heats in winter and cools in summer. You'll see the difference in your power bill within the first month.",
      "For larger homes and premium properties, we offer multi-zone systems that give different areas independent temperature control. Ducted whole-home solutions maintain consistent temperature throughout your house without visible indoor units. We also offer design-forward installation that looks professional and matches your home's aesthetic.",
      "For commercial or rental properties, we handle those too.",
    ],
  },

  howItWorks: {
    title: "How It Works",
    paragraphs: [
      "We start with an in-home assessment. You tell us what you need; we take measurements, look at your space, and understand your preferences and budget. Then we provide a detailed, no-pressure quote.",
      "If you decide to proceed, installation typically takes 3–4 hours. We'll take care of the rest — and we'll leave your home clean.",
      "After installation, you get a 12-month workmanship guarantee. We're available for service and maintenance whenever you need it, and most service calls are scheduled within 24 hours.",
    ],
  },

  systems: {
    title: "The Systems We Install",
    body: "We partner with Mitsubishi, Daikin and Panasonic — three of the world's most trusted manufacturers. For East Auckland homes, we often recommend premium options that combine efficiency with aesthetic appeal. All three build systems that last 15+ years with proper maintenance.",
  },

  reviews: {
    title: "What East Auckland Families Say",
    body: "We've installed systems in East Auckland's best homes, and our customers leave reviews on Google — real feedback, real results. Quality installation, professional finish, and systems that work and look good doing it.",
  },

  readyToUpgrade: {
    title: "Ready to Upgrade?",
    body: "Call or email and we'll arrange a free in-home assessment. You'll get a detailed quote — no pressure, no obligation. Just a conversation with someone who knows the East Auckland market.",
    stat: "Varcoe. 50+ years. 12,000+ installations. Real service.",
  },

  closingCta: {
    title: "Heat Pumps & Air Conditioning, Done Right in East Auckland",
    body: "Get professional installation backed by a 12-month workmanship guarantee. Book your free in-home assessment with Varcoe today.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },
};

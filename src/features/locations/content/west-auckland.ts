import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** West Auckland area page + its suburb (Henderson). Localised copy. */
export const westAucklandLocations: Record<string, LocationContent> = {
  "west-auckland": makeLocationContent({
    name: "West Auckland",
    heroIntro:
      "West Auckland stretches from leafy suburbs to lifestyle properties near the ranges, and every home wants dependable comfort. Varcoe installs heat pumps and air conditioning across the west, sized for the home and the climate.",
    whyChooseLead:
      "Westies want honest advice and a job done properly. With 50+ years across Auckland, Varcoe brings the experience and the after-sales service to match.",
    whatWeProvideLead:
      "Across West Auckland we install single-room heat pumps, multi-zone systems for larger or split-level homes, and ducted whole-home solutions.",
    seoDescription:
      "Heat pump & air conditioning installation across West Auckland. Varcoe — 50+ years, professional installs and a 12-month workmanship guarantee. Free quote.",
  }),

  "west-auckland/henderson": makeLocationContent({
    name: "Henderson",
    heroIntro:
      "Henderson is the hub of West Auckland — a mix of established family homes and newer developments that all benefit from efficient heating and cooling. Varcoe installs systems built to keep Henderson homes comfortable year-round.",
    whyChooseLead:
      "Henderson homeowners want reliable, well-priced installation from a team that sticks around. That's exactly what Varcoe offers.",
    whatWeProvideLead:
      "From a single unit for the living room to a ducted whole-home system, we match Henderson homes with the right heating and cooling solution.",
    seoDescription:
      "Heat pump & air conditioning installation in Henderson, West Auckland. Varcoe — efficient systems, professional installs and a 12-month workmanship guarantee.",
  }),
};

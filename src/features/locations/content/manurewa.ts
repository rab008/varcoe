import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** Manurewa area page (no suburbs). Localised copy. */
export const manurewaLocations: Record<string, LocationContent> = {
  manurewa: makeLocationContent({
    name: "Manurewa",
    heroIntro:
      "Manurewa's family homes need heating and cooling that's efficient and affordable to run. Varcoe installs reliable heat pumps across Manurewa, with clear quotes and tidy workmanship.",
    whyChooseLead:
      "Manurewa families want value and service they can trust. Varcoe has installed thousands of systems across Auckland and guarantees the workmanship on every one.",
    whatWeProvideLead:
      "From a single high-wall unit to multi-zone systems for larger families, we'll recommend the right solution for your Manurewa home.",
    seoDescription:
      "Heat pump & air conditioning installation in Manurewa, South Auckland. Varcoe — efficient, affordable-to-run systems and a 12-month workmanship guarantee. Free quote.",
  }),
};

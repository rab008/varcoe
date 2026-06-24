import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** South Auckland area page + its suburbs (Papatoetoe, Takanini). Localised copy. */
export const southAucklandLocations: Record<string, LocationContent> = {
  "south-auckland": makeLocationContent({
    name: "South Auckland",
    heroIntro:
      "South Auckland's family homes deserve heating and cooling that's affordable to run and built to last. Varcoe installs efficient heat pumps across the south, with honest quotes and tidy workmanship.",
    whyChooseLead:
      "South Auckland families want straight-up value and service that lasts. Varcoe has installed thousands of systems across Auckland and stands behind every one.",
    whatWeProvideLead:
      "Across South Auckland we install single-room heat pumps, multi-zone systems for larger families, and ducted whole-home solutions — plus servicing and replacements.",
    seoDescription:
      "Heat pump & air conditioning installation across South Auckland. Varcoe — efficient, affordable-to-run systems, professional installs and a 12-month workmanship guarantee.",
  }),

  "south-auckland/papatoetoe": makeLocationContent({
    name: "Papatoetoe",
    heroIntro:
      "Papatoetoe's established family homes need reliable heating and cooling that keeps running costs down. Varcoe installs efficient systems sized right for the home and the household.",
    whyChooseLead:
      "Papatoetoe homeowners value reliability and a fair price. We quote clearly, install tidily, and provide service whenever you need it.",
    whatWeProvideLead:
      "Whether you're replacing an old unit or fitting out a Papatoetoe family home, we recommend the right system for your space and budget.",
    seoDescription:
      "Heat pump & air conditioning installation in Papatoetoe, South Auckland. Varcoe — efficient systems, professional installs and a 12-month workmanship guarantee.",
  }),

  "south-auckland/takanini": makeLocationContent({
    name: "Takanini",
    heroIntro:
      "Takanini is one of Auckland's fastest-growing areas, full of new builds and modern family homes. Varcoe fits efficient heating and cooling that suits new-build layouts and busy households.",
    whyChooseLead:
      "New homes in Takanini deserve a clean, professional install from day one. Varcoe gets it right the first time and backs the work with a guarantee.",
    whatWeProvideLead:
      "From single high-wall units to multi-zone and ducted systems for new Takanini homes, we'll size and install the right solution for open-plan living.",
    seoDescription:
      "Heat pump & air conditioning installation in Takanini, South Auckland. Varcoe — new-build ready systems, professional installs and a 12-month workmanship guarantee.",
  }),
};

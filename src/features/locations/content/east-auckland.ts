import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/**
 * East Auckland suburb pages (the East Auckland area page itself is hand-written
 * in `east-auckland-content.ts`). Localised copy; service facts and guarantees are
 * client-supplied (confirm before launch).
 */
export const eastAucklandLocations: Record<string, LocationContent> = {
  "east-auckland/botany-downs": makeLocationContent({
    name: "Botany Downs",
    heroIntro:
      "Botany Downs is one of East Auckland's most popular family suburbs — modern homes, busy households and a real focus on comfort. Whether you're cooling open-plan living for summer or warming the bedrooms in winter, your heat pump should be installed properly and finished to match the home.",
    whyChooseLead:
      "Botany families want an installer who turns up, does tidy work, and is still around if something needs attention later. That's exactly how Varcoe has built its reputation across East Auckland.",
    whatWeProvideLead:
      "In Botany Downs we install everything from a single high-wall unit for the lounge to multi-zone systems that keep a busy family home comfortable in every room.",
    seoDescription:
      "Heat pump & air conditioning installation in Botany Downs, East Auckland. Varcoe — 50+ years, tidy professional installs and a 12-month workmanship guarantee. Free quote.",
  }),

  "east-auckland/howick": makeLocationContent({
    name: "Howick",
    heroIntro:
      "Howick blends established character homes with newer coastal builds, and both deserve heating and cooling that's installed with care. Varcoe has been keeping Howick homes comfortable for decades.",
    whyChooseLead:
      "From the village to the waterfront, Howick homeowners expect a professional finish and honest advice — not a rushed job. Varcoe delivers both.",
    whatWeProvideLead:
      "Howick's mix of older and modern homes means no two installs are the same. We assess each property and recommend the right single-room, multi-zone or ducted solution.",
    seoDescription:
      "Heat pump & air conditioning installation in Howick, East Auckland. Varcoe — decades of local experience, professional installs and a 12-month workmanship guarantee.",
  }),

  "east-auckland/pakuranga": makeLocationContent({
    name: "Pakuranga",
    heroIntro:
      "Pakuranga's family homes and townhouses need heating and cooling that's efficient and unobtrusive. Varcoe installs systems that fit the home and keep running costs down.",
    whyChooseLead:
      "Pakuranga homeowners value reliable, no-nonsense service. We quote clearly, install tidily, and back every job with a workmanship guarantee.",
    whatWeProvideLead:
      "Whether you're upgrading an ageing unit or fitting out a new build in Pakuranga, we'll match the system to your space and budget.",
    seoDescription:
      "Heat pump & air conditioning installation in Pakuranga, East Auckland. Varcoe — efficient systems, professional installation and a 12-month workmanship guarantee.",
  }),

  "east-auckland/remuera": makeLocationContent({
    name: "Remuera",
    heroIntro:
      "Remuera's homes are some of Auckland's finest — heritage villas, designer renovations and premium apartments. Your heating and cooling should be installed to that same standard: discreetly and immaculately.",
    whyChooseLead:
      "In Remuera, the finish matters as much as the function. Varcoe's installers keep units neat, cable runs hidden, and your home spotless.",
    whatWeProvideLead:
      "For Remuera's larger and premium properties we often recommend multi-zone and ducted whole-home systems that deliver consistent comfort without visible clutter.",
    seoDescription:
      "Heat pump & air conditioning installation in Remuera. Varcoe — discreet, premium installs for character and designer homes, with a 12-month workmanship guarantee.",
    systemsBody:
      "We partner with Mitsubishi, Daikin and Panasonic, and for Remuera homes we often recommend premium options that combine quiet efficiency with a clean, understated look — all built to last 15+ years with proper maintenance.",
  }),
};

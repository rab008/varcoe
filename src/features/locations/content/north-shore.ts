import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** North Shore area page + its suburb (Takapuna). Localised copy. */
export const northShoreLocations: Record<string, LocationContent> = {
  "north-shore": makeLocationContent({
    name: "North Shore",
    heroIntro:
      "From the beaches to the bush, the North Shore is home to families who want year-round comfort. Varcoe installs heat pumps and air conditioning across the Shore, sized right for everything from compact units to larger family homes.",
    whyChooseLead:
      "Shore homeowners want an installer who's reliable and local. With 50+ years across Auckland, Varcoe brings real expertise and after-sales service you can count on.",
    whatWeProvideLead:
      "Across the North Shore we install single-room heat pumps, multi-zone systems for bigger homes, and ducted whole-home solutions for consistent comfort throughout.",
    seoDescription:
      "Heat pump & air conditioning installation across the North Shore, Auckland. Varcoe — 50+ years, professional installs and a 12-month workmanship guarantee. Free quote.",
  }),

  "north-shore/takapuna": makeLocationContent({
    name: "Takapuna",
    heroIntro:
      "Takapuna's beachside homes and apartments enjoy the best of the Shore — and benefit from heating and cooling that handles coastal conditions. Varcoe installs efficient, durable systems built for the location.",
    whyChooseLead:
      "By the beach, you want equipment that lasts and an installer who finishes the job properly. Varcoe delivers a tidy, professional install backed by a workmanship guarantee.",
    whatWeProvideLead:
      "From apartments by the lake to family homes near the beach, we match Takapuna properties with the right single-room, multi-zone or ducted system.",
    seoDescription:
      "Heat pump & air conditioning installation in Takapuna, North Shore. Varcoe — durable coastal-ready systems, professional installs and a 12-month workmanship guarantee.",
  }),
};

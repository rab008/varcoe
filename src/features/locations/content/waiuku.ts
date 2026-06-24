import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** Waiuku area page (no suburbs). Rural-town / lifestyle properties. Localised copy. */
export const waiukuLocations: Record<string, LocationContent> = {
  waiuku: makeLocationContent({
    name: "Waiuku",
    heroIntro:
      "Waiuku's rural-town and lifestyle properties sit further south, where dependable heating and cooling really matters through the seasons. Varcoe installs efficient heat pumps built to keep Waiuku homes comfortable year-round.",
    whyChooseLead:
      "Out Waiuku way, you want an installer who'll make the trip and do the job properly. Varcoe brings 50+ years of Auckland experience and a workmanship guarantee on every install.",
    whatWeProvideLead:
      "From single-room heat pumps to ducted whole-home systems for larger and lifestyle properties, we'll size and install the right solution for your Waiuku home.",
    seoDescription:
      "Heat pump & air conditioning installation in Waiuku, South Auckland. Varcoe — reliable installs for homes and lifestyle properties, with a 12-month workmanship guarantee.",
  }),
};

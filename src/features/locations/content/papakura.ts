import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** Papakura area page (no suburbs). Varcoe is based in Papakura. Localised copy. */
export const papakuraLocations: Record<string, LocationContent> = {
  papakura: makeLocationContent({
    name: "Papakura",
    heroIntro:
      "Papakura combines established homes with fast-growing new developments, and Varcoe keeps them all comfortable. We install efficient heat pumps and air conditioning sized right for each home.",
    whyChooseLead:
      "Papakura homeowners want a reliable local installer who does tidy work and stands behind it — and with Varcoe based right here in Papakura, we're as local as it gets.",
    whatWeProvideLead:
      "Whether you're upgrading an older Papakura home or fitting out a new build, we match the system to your space, your budget and your household.",
    seoDescription:
      "Heat pump & air conditioning installation in Papakura, South Auckland. Varcoe — your local Papakura team, professional installs and a 12-month workmanship guarantee.",
  }),
};

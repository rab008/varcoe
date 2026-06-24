import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** Wellington & Penrose area page (no suburbs). Residential + commercial. */
export const wellingtonPenroseLocations: Record<string, LocationContent> = {
  "wellington-penrose": makeLocationContent({
    name: "Wellington & Penrose",
    heroIntro:
      "Penrose and the surrounding central suburbs mix homes with workplaces, and both need dependable heating and cooling. Varcoe installs and services heat pumps and air conditioning for residential and commercial properties in the area.",
    whyChooseLead:
      "Whether it's a home or a workplace, you want an installer who works cleanly and reliably. Varcoe brings 50+ years of Auckland experience to every job.",
    whatWeProvideLead:
      "We install single-room and multi-zone systems for homes, plus larger air conditioning solutions for offices and commercial spaces around Penrose.",
    seoDescription:
      "Heat pump & air conditioning installation and service around Penrose, Auckland. Varcoe — residential & commercial, with a 12-month workmanship guarantee. Free quote.",
    systemsBody:
      "We partner with Mitsubishi, Daikin and Panasonic for both homes and commercial spaces, recommending systems that balance efficiency, capacity and long service life.",
  }),
};

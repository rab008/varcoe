import {
  makeLocationContent,
  type LocationContent,
} from "@/features/locations/location-content";

/** Auckland CBD area page + its suburbs (Mount Eden, Ponsonby). Localised copy. */
export const aucklandCbdLocations: Record<string, LocationContent> = {
  "auckland-cbd": makeLocationContent({
    name: "Auckland CBD",
    heroIntro:
      "Auckland CBD living means apartments, terraces and converted spaces where every square metre counts. Varcoe installs compact, efficient heat pumps that heat and cool city homes without taking over the room.",
    whyChooseLead:
      "City installs come with their own challenges — body corporate approvals, access and tight spaces. Varcoe handles them with 12,000+ installations of experience behind us.",
    whatWeProvideLead:
      "In the CBD we specialise in space-saving single-room and multi-split systems suited to apartments and smaller footprints, with a clean install that respects shared buildings.",
    seoDescription:
      "Heat pump & air conditioning installation in Auckland CBD. Varcoe — apartment-friendly systems, body-corp experience and a 12-month workmanship guarantee. Free quote.",
    systemsBody:
      "We partner with Mitsubishi, Daikin and Panasonic, and for CBD apartments we favour quiet, compact units and multi-split systems that condition several rooms from one tidy outdoor unit.",
  }),

  "auckland-cbd/mount-eden": makeLocationContent({
    name: "Mount Eden",
    heroIntro:
      "Mount Eden is character-home country — villas and bungalows with the charm (and the draughts) that come with age. Varcoe fits modern heat pumps that warm these homes efficiently while respecting their character.",
    whyChooseLead:
      "Heating a character home in Mount Eden takes a careful approach. We position units thoughtfully and keep the install neat so it never spoils the look of a classic home.",
    whatWeProvideLead:
      "From a single unit for a villa living room to multi-zone systems for a renovated Mount Eden home, we recommend the right fit for older and updated houses alike.",
    seoDescription:
      "Heat pump & air conditioning installation in Mount Eden. Varcoe — sympathetic installs for villas and character homes, with a 12-month workmanship guarantee.",
  }),

  "auckland-cbd/ponsonby": makeLocationContent({
    name: "Ponsonby",
    heroIntro:
      "Ponsonby pairs heritage villas with design-led renovations, and both want heating and cooling that performs without spoiling the aesthetic. Varcoe installs discreet, efficient systems that suit the suburb's style.",
    whyChooseLead:
      "Ponsonby homeowners care about how things look. Our installers keep units tidy and unobtrusive, with hidden cable runs and a spotless finish.",
    whatWeProvideLead:
      "We fit single-room, multi-zone and ducted systems across Ponsonby's villas and modern builds, matching performance with a clean, design-conscious install.",
    seoDescription:
      "Heat pump & air conditioning installation in Ponsonby. Varcoe — discreet, design-conscious installs for villas and renovations, with a 12-month workmanship guarantee.",
  }),
};

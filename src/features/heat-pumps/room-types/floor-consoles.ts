import type { Service } from "@/features/services/services-data";

/**
 * Floor Consoles page content — transcribed from the live page
 * (https://www.varcoe.co.nz/floor-consoles/) into the shared `Service` shape.
 * Rendered at the top-level `/floor-consoles` route via `RoomTypeDetail`.
 */
export const floorConsoles: Service = {
  slug: "floor-consoles",
  title: "Floor Consoles",
  icon: "thermostat",
  summary:
    "Ground-level heating that fits your space — clean, efficient floor-standing units for homes with limited wall space.",
  description:
    "Floor console heat pumps for Auckland homes with limited wall space, or where you're replacing an old floor heater and want a clean, efficient drop-in solution.",
  detail: {
    heroImage: {
      src: "/images/services/heat-pumps/type-floor-console.svg",
      alt: "Floor console heat pump at ground level in an Auckland home",
    },
    heroTitle:
      "Floor Console Heat Pumps Auckland - Ground-Level Heating That Fits Your Space",
    heroSubtitle: "Ground-level heating that fits your space",
    intro: [
      "For Auckland homes with limited wall space, or where you're replacing an old floor heater and want a clean, efficient drop-in solution.",
      "A heating and cooling unit that sits on the floor instead of mounting on a wall. Could be freestanding or semi-recessed into a wall. Either way, it's at floor level. Sounds simple because it is. But placement matters and it changes how you interact with the system.",
    ],
    whyList: {
      title: "Why Choose Floor Level",
      items: [
        {
          label: "You've got no wall space",
          text: "Some rooms just don't have usable wall. Or the walls you do have are windows, doors, furniture. A floor console solves that problem.",
        },
        {
          label: "Replacing old heaters",
          text: "Old fireplaces, night-storage heaters — they left floor space. Floor consoles fit in that same spot, which makes retrofit installation straightforward.",
        },
        {
          label: "Different aesthetic",
          text: "Some people just prefer seeing equipment at floor level rather than wall-mounted. Looks less like an air conditioner, more like a piece of furniture.",
        },
        {
          label: "Easy to access",
          text: "Filters are accessible — you can clean them yourself. No need to climb on chairs to reach a wall unit.",
        },
      ],
    },
    infoSections: [
      {
        title: "Installation Options",
        points: [
          {
            label: "Just sits on the floor",
            text: "The unit has legs or a base and stands freely. Flexible placement, simplest installation.",
          },
          {
            label: "Semi-recessed",
            text: "Partially integrated into a wall cavity for a more built-in look. Takes more work to install but looks cleaner.",
          },
          {
            label: "Replacement installation",
            text: "Swapping out an old floor heater? Consoles often fit the same footprint — an easy transition.",
          },
        ],
        image: {
          src: "/images/services/heat-pumps/installation.svg",
          alt: "Floor console installation options",
        },
      },
      {
        title: "Real Trade-Offs",
        paragraphs: [
          "Floor consoles are slower at distributing air compared to wall-mounted units sitting high up. That's just physics — it has to push air downward, then outward. Wall units push from above, and air flows better from above.",
          "But they work fine; they just take slightly longer to reach target temperature. Also, they do take up floor space — if you've got a small room, that matters.",
        ],
        points: [],
      },
      {
        title: "The Brands We Work With",
        points: [
          {
            label: "Mitsubishi Electric",
            text: "Quiet performers. Good capacity options (up to 7.1kW on some models). Built-in Wi-Fi on most. Premium quality.",
          },
          {
            label: "Daikin",
            text: "Compact design, efficient inverter tech. Top or top-and-bottom vents for air distribution flexibility. Good value, with Asthma + Respiratory Foundation certification available. Reliable.",
          },
          {
            label: "Panasonic",
            text: "Solid engineering. Advanced air purification (nanoe X kills bacteria and mould). Energy-efficient — a good option if air quality matters to you.",
          },
        ],
      },
      {
        title: "Where They Actually Work",
        points: [
          {
            label: "Bedrooms",
            text: "Quiet operation. You control temperature without a wall unit dominating the room. Good for sleeping.",
          },
          {
            label: "Living rooms",
            text: "Larger floor consoles can handle bigger spaces. Directional vents prevent cold drafts while distributing air.",
          },
          {
            label: "Offices and home workspaces",
            text: "Ground-level placement doesn't interfere with the workspace. Easy to adjust, and quiet so it doesn't distract.",
          },
          {
            label: "Kitchens and dining",
            text: "Keeps the temperature comfortable while staying out of the way visually.",
          },
          {
            label: "Small commercial",
            text: "A salon, small shop or office — floor consoles work well. Professional but not obtrusive.",
          },
        ],
      },
      {
        title: "Installation Reality",
        paragraphs: [
          "Installation's straightforward for freestanding models. For semi-recessed, we need to do minor wall work. Either way, not complex — electrical connection, refrigerant lines to the outdoor unit, test it all, done.",
        ],
        points: [],
      },
      {
        title: "Maintenance",
        paragraphs: [
          "Clean or replace filters annually. Service once a year to keep it efficient. Most last 10–15 years if maintained properly.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/maintenance.svg",
          alt: "Floor console maintenance",
        },
      },
    ],
    experts: {
      title: "Honest Assessment",
      paragraphs: [
        "Floor consoles work well when you don't have wall space or you want equipment at floor level. They're not as fast at temperature distribution as wall-mounted units, but for many applications that's fine.",
        "Installation's simple. They're reliable. If aesthetics or wall space is your problem, a floor console's your answer.",
      ],
    },
    closingCta: {
      title: "Want to Explore This Option?",
      body: "We'll tell you honestly if a floor console makes sense for your space.",
      cta: { label: "Get a free quote", href: "/contact" },
    },
  },
};

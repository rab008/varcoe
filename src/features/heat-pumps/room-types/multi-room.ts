import type { Service } from "@/features/services/services-data";

/**
 * Multi Room heat-pump landing page content — transcribed from the live page
 * (https://www.varcoe.co.nz/multi-room/) into the shared `Service` shape.
 * Rendered at the top-level `/multi-room` route via `RoomTypeDetail`.
 */
export const multiRoom: Service = {
  slug: "multi-room",
  title: "Multi Room",
  icon: "thermostat",
  summary:
    "One outdoor unit, every room comfortable — independent temperature control for the whole home.",
  description:
    "Multi-room (multi-split) heat pump systems for Auckland homes: multiple indoor units on one efficient outdoor unit, each room controlled separately.",
  detail: {
    heroImage: {
      src: "/images/services/heat-pumps/hero.svg",
      alt: "Multi-room heat pump system serving several rooms from one outdoor unit",
    },
    heroTitle:
      "Multi-Room Heat Pump Systems Auckland - One Outdoor Unit, Every Room Comfortable",
    heroSubtitle: "One outdoor unit, every room comfortable",
    intro: [
      "For Auckland families where everyone has different temperature preferences — and nobody wants four outdoor units cluttering the yard.",
      "Multiple indoor units connected to one outdoor compressor. Each room has its own thermostat. One unit can be heating while another's cooling. You control temperature in each space separately, all from one efficient outdoor unit.",
      "For families where nobody agrees on temperature, or homes where you need different climate in different spaces? This is the answer. You're not stuck with a central system where if you want it colder upstairs, you're making downstairs freezing too.",
    ],
    whyList: {
      title: "Why Multi-Room Makes More Sense Than You Might Think",
      items: [
        {
          label: "Actually independent temperature control",
          text: "Bedroom at 18°C, living room at 22°C. Back office warmer, front shop cooler. Each zone operates independently. You're not compromising. Everyone gets what they want.",
        },
        {
          label: "Energy efficiency that adds up",
          text: "You only heat or cool occupied rooms. With central heating you're conditioning the whole house whether anyone's there or not. Multi-room, you only run what you're using — and one efficient outdoor unit sharing the compressor beats running multiple single-room units separately.",
        },
        {
          label: "Costs more up front, but not crazy more",
          text: "Multi-room costs more than a single unit — less than a whole-home ducted system though. We're talking 2–3 room systems starting around $4,000–$6,000 installed. The power-bill savings over a few years add up.",
        },
        {
          label: "You can expand later",
          text: "Most systems let you add more indoor units later. Start with two rooms, add more if you need them. The outdoor unit has capacity for it (usually 2–6 rooms total).",
        },
        {
          label: "No hot and cold spots",
          text: "Central systems create weird temperature zones. Multi-room distributes heating and cooling more evenly because you've got multiple units. Better comfort overall.",
        },
        {
          label: "Flexible indoor unit types",
          text: "You don't have to use the same type everywhere. Wall-mounted unit in the living room, floor console in a bedroom, maybe a cassette if you're fussy about appearance.",
        },
      ],
    },
    infoSections: [
      {
        title: "Multi-Room vs. Ducted Systems (The Real Difference)",
        paragraphs: [
          "Honestly? A lot of people start with multi-room. Then years later when they renovate, they add ducted. Nothing wrong with that approach.",
        ],
        points: [
          {
            label: "Multi-room makes sense if",
            text: "you want to add rooms gradually (start with 2, add later); you've got limited ceiling or wall space for ducts; you accept seeing the units; you need faster installation; budget's a concern.",
          },
          {
            label: "Ducted makes sense if",
            text: "you want absolutely no visible equipment; you need to cool or heat 5+ rooms; you're building new or doing a major renovation anyway; you don't mind the higher upfront cost; you want everything controlled from one central point.",
          },
        ],
      },
      {
        title: "Small Heat Pump NZ: Why Most Homes Actually Need One",
        paragraphs: [
          "Even though a whole ducted system is the most performant, most homes in NZ don't actually need one. A small heat pump in the 2.5kW to 3.5kW range can handle one room efficiently and costs a fraction of the full setup. Wall-mounted in a bedroom, office, or problem area. That's it.",
          "Your comfort issue is always localised anyway — like a room that's too hot in summer or won't warm in winter. Running a small unit there instead of your whole house means you skip the big power bill. Better yet, installation typically takes only a few hours and doesn't require a full renovation. That's why they're standard in NZ now.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/energy.svg",
          alt: "Small single-zone heat pump",
        },
      },
      {
        title: "What's Actually Inside the System",
        points: [
          {
            label: "The indoor units",
            text: "High-wall units (most popular), floor consoles (good if you don't have wall space), or cassettes (if you want it invisible). Each room gets its own remote or wall thermostat, and some systems let you control everything from an app.",
          },
          {
            label: "The outdoor unit",
            text: "One compact compressor does all the work — handling 2–6 indoor units depending on what you're cooling or heating. Quiet operation, and cleaner-looking than multiple outdoor units around your property.",
          },
          {
            label: "Control setup",
            text: "Every indoor unit has independent controls — individual remotes, wall-mounted thermostats, or Wi-Fi so you manage everything from an app. Most people prefer that to remembering six different remotes.",
          },
        ],
      },
      {
        title: "Installation Process",
        points: [
          {
            label: "We look at your house",
            text: "We assess layout, insulation, sun exposure and where you want units, and talk about which rooms matter most and what your budget actually is.",
          },
          {
            label: "Design and quote",
            text: "We create a design showing unit placement, piping routes and electrical work, with a quote that breaks down equipment, labour and electrical — no surprises.",
          },
          {
            label: "The actual installation",
            text: "Technicians install the outdoor unit, run refrigerant lines to each indoor location and set up electrical. Most 2–3 room installs take about a day.",
          },
          {
            label: "Testing and setup",
            text: "We test every zone, make sure temperatures balance properly, set up Wi-Fi if you've got it, and show you how to use the controls before we leave.",
          },
        ],
        image: {
          src: "/images/services/heat-pumps/installation.svg",
          alt: "Multi-room heat pump installation",
        },
      },
      {
        title: "The Brands We Work With",
        points: [
          {
            label: "Mitsubishi Electric",
            text: "Quietest systems on the market. Their multi-split setups are flexible — you can add rooms later without replacing the outdoor unit. Built-in Wi-Fi on most models. Bit pricey, but you get what you pay for.",
          },
          {
            label: "Daikin",
            text: "Popular, reliable performers. Their inverter technology actually works — real power savings — with good certification for allergy sufferers. Solid choice, not flashy but dependable.",
          },
          {
            label: "Panasonic",
            text: "Focus on air quality — actual purification through nanoe X technology, not just temperature control. Energy-efficient and good value for money.",
          },
        ],
      },
      {
        title: "How Much Does This Actually Cost?",
        paragraphs: [
          "System costs vary a lot depending on what you want. Two-room systems start around $4,000. Three to four rooms maybe $6,000–$8,000. That's equipment and installation for most homes.",
          "Financing? We can work with you on that, to make it less painful to pay upfront.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/cta.svg",
          alt: "Multi-room heat pump pricing",
        },
      },
      {
        title: "Maintenance Keeps It Running Well",
        paragraphs: [
          "Service once a year. Clean filters, check refrigerant, make sure everything's working. Costs less than the power bills you'll save by keeping it efficient.",
          "Most systems last 10–15 years. Longer if you maintain them properly.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/maintenance.svg",
          alt: "Multi-room heat pump maintenance",
        },
      },
    ],
    experts: {
      title: "Why We Actually Know What We're Doing",
      paragraphs: [
        "40+ years in the business. Thousands of installations. We understand Auckland's climate and what homes actually need.",
        "We're not here to sell you something you don't need. If multi-room makes sense for your situation, we'll tell you. If you need something different, we'll tell you that too.",
      ],
    },
    closingCta: {
      title: "Ready to Get Your Zones Comfortable?",
      body: "Call us for a free consultation. We'll assess your space and tell you honestly what makes sense.",
      cta: { label: "Get a free quote", href: "/contact" },
    },
  },
};

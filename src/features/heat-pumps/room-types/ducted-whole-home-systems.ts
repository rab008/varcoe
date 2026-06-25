import type { Service } from "@/features/services/services-data";

/**
 * Ducted Whole Home Systems page content — transcribed from the live page
 * (https://www.varcoe.co.nz/ducted-whole-home-systems/) into the shared
 * `Service` shape. Rendered at `/ducted-whole-home-systems` via `RoomTypeDetail`.
 */
export const ductedWholeHome: Service = {
  slug: "ducted-whole-home-systems",
  title: "Ducted Whole Home Systems",
  icon: "thermostat",
  summary:
    "Whole-home comfort, nothing to see — consistent temperature in every room with no visible units.",
  description:
    "Ducted whole-home heat pump systems for Auckland homes building new or renovating who want consistent temperature in every room without a single visible wall unit.",
  detail: {
    heroImage: {
      src: "/images/services/heat-pumps/type-ducted.svg",
      alt: "Ducted whole-home heat pump system with discreet ceiling vents",
    },
    heroTitle:
      "Ducted Heat Pump Systems Auckland — Whole-Home Comfort, Nothing to See",
    heroSubtitle: "Whole-home comfort, nothing to see",
    intro: [
      "For Auckland homeowners building new or renovating who want consistent temperature in every room — without a single visible unit on the wall.",
      "Ducts throughout your home (in the ceiling, walls, under the floor) deliver heated or cooled air to every room from one central system. The indoor unit hides in your roof. The outdoor unit sits outside. You see vents. That's it.",
      "If you want zero visible equipment and consistent temperature everywhere, this is the choice.",
    ],
    whyList: {
      title: "Why People Pick Ducted",
      items: [
        {
          label: "Completely invisible",
          text: "The main reason people install ducted. If you care how your room looks, a big wall unit or a floor console bothers you. With this? A grille in the ceiling, that's it. Architects like them. Interior designers definitely like them.",
        },
        {
          label: "Temperature consistency",
          text: "Central systems work well for whole-home comfort. It's not the best at zone control (multi-room does that better), but it's good at keeping temperature consistent room to room.",
        },
        {
          label: "Works for large homes",
          text: "If you've got a 4+ bedroom house, ducted is often the most economical choice — one big system instead of multiple smaller ones.",
        },
        {
          label: "Good for new builds",
          text: "Installing ducts during construction is straightforward. If you're building, seriously consider ducted.",
        },
      ],
    },
    infoSections: [
      {
        title: "Ducted vs. Multi-Room (Real Talk)",
        paragraphs: [
          "Both work. Different situations call for different approaches.",
        ],
        points: [
          {
            label: "Ducted is better if",
            text: "you want invisible equipment; you have a larger home (5+ rooms); you want simple central control; you're building new; budget's secondary to invisibility.",
          },
          {
            label: "Multi-room is better if",
            text: "you want room-by-room control; you're retrofitting into an existing house; you want to expand gradually; installation needs to be quick; you're on a tighter budget.",
          },
        ],
      },
      {
        title: "System Components",
        points: [
          {
            label: "The indoor unit",
            text: "Sits in your roof space. Invisible. Does all the work conditioning the air.",
          },
          {
            label: "The outdoor unit",
            text: "One compressor handles everything — a cleaner look than multiple outdoor units.",
          },
          {
            label: "Ductwork",
            text: "Runs through the ceiling or under the floor, insulated to prevent energy loss. Air travels to vents in each room.",
          },
          {
            label: "Vents",
            text: "Ceiling or floor vents depending on your setup. Discreet — that's all you see.",
          },
          {
            label: "Controls",
            text: "A central thermostat for the whole system. Some can be split into zones so upstairs and downstairs operate separately. Newer systems include Wi-Fi control.",
          },
        ],
      },
      {
        title: "Installation",
        points: [
          {
            label: "Before we start",
            text: "We look at your home — layout, insulation, where ducts can run, what capacity you actually need. This determines everything about the system design.",
          },
          {
            label: "Design phase",
            text: "We show you where ducts will go, where vents appear, what the system costs. It's customised to your home, not generic.",
          },
          {
            label: "The work",
            text: "Technicians install the indoor unit, run ductwork, position vents strategically, and set up the outdoor unit and electrical. Most homes take 2–3 days depending on complexity.",
          },
          {
            label: "Testing",
            text: "We test all zones, balance airflow, and make sure temperatures work evenly for consistent comfort throughout the house.",
          },
        ],
        image: {
          src: "/images/services/heat-pumps/installation.svg",
          alt: "Ducted system installation",
        },
      },
      {
        title: "Cost Reality",
        paragraphs: [
          "$8,000–$15,000 range for most homes including installation. The size of your home matters. Complexity matters. The brand you choose matters.",
          "Is it expensive? Yeah. But it's also permanent — 10–15 years of reliable whole-home comfort. Over that timeframe, the cost per year is reasonable. We can finance it to make payments manageable.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/cta.svg",
          alt: "Ducted system pricing",
        },
      },
      {
        title: "The Brands",
        paragraphs: [
          "All three handle Auckland's variable climate fine — summer heat, winter cold. It doesn't matter which brand, you'll get year-round comfort.",
        ],
        points: [
          {
            label: "Mitsubishi Electric",
            text: "World leader in commercial and residential systems. Excellent engineering. Quiet. Efficient. Premium pricing but premium performance.",
          },
          {
            label: "Daikin",
            text: "Reliable global brand with good performance in the NZ climate. Solid engineering, good value compared to Mitsubishi, a no-nonsense approach.",
          },
          {
            label: "Panasonic",
            text: "Air-quality focus — not just temperature but actual purification. Good efficiency. A trusted brand in NZ for decades.",
          },
        ],
      },
      {
        title: "Maintenance",
        paragraphs: [
          "An annual service keeps it working properly — clean filters, check everything's balanced, verify performance. Costs less than the power bills you'll save by keeping it efficient.",
          "Lasts 10–15 years typically. Longer if maintained well.",
        ],
        points: [],
        image: {
          src: "/images/services/heat-pumps/maintenance.svg",
          alt: "Ducted system maintenance",
        },
      },
    ],
    experts: {
      title: "Honest Assessment",
      paragraphs: [
        "Ducted systems are the 'set it and forget it' approach. You install it, it just works, the temperature's consistent everywhere. Downside? You can't easily adjust zones — if someone wants it colder or warmer in their room, that's not happening unless you're running separate zone dampers (which adds cost).",
        "If whole-home consistency matters more than individual control, ducted's your answer.",
      ],
    },
    closingCta: {
      title: "Want to Talk Through This?",
      body: "Free consultation. We'll assess your home and tell you if ducted makes sense.",
      cta: { label: "Get a free quote", href: "/contact" },
    },
  },
};

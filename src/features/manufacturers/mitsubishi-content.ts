/**
 * Static content for the `/manufacturers/mitsubishi` page. Single source of truth.
 * Copy from the client brief (cleaned of mojibake/typos; "210fB" → "21dB").
 *
 * Brochure/store links point to varcoe.co.nz (WordPress PDFs + online store) —
 * verify before launch (the multi-room link in the brief looked malformed).
 * Brand claims ("since 1969", "most popular in NZ") are client-supplied.
 */

export type MitsuTech = { title: string; text: string };
export type MitsuProduct = {
  name: string;
  description: string;
  brochureHref: string;
  image?: { src: string; alt: string };
};

const QUOTE = { label: "Get a Free Quote", href: "/contact" };

export const mitsubishi = {
  hero: {
    eyebrow: "Advanced Technology Meets Comfort",
    title: "Mitsubishi Electric Heat Pumps & Air Conditioning",
    tagline:
      "Explore Mitsubishi Electric heat pump solutions with Varcoe. If you need your Mitsubishi Electric heat pump supplied and professionally installed, get in touch with Varcoe today.",
    primaryCta: QUOTE,
    secondaryCta: { label: "Enquire Now", href: "/contact" },
  },

  intro: {
    lead: "Providing market-leading technology, designed in Japan for New Zealand conditions. Mitsubishi Electric has been on the cutting edge of heat pump innovation since 1969.",
    paragraphs: [
      "Mitsubishi Electric has one fundamental guiding principle when it comes to heat pump design — to continuously innovate and be at the forefront of heat pump technology. After installing its first wall-mounted split-system room heat pump in 1969, they have maintained their position as market-leading innovators to this day. Their rigorous factory testing ensures every piece of equipment is of the highest quality, which is why their products are renowned for longevity — low maintenance, with an extremely low fault rate, and backed by genuine support.",
      "Every Mitsubishi heat pump is a product of intense, detail-oriented research and relentless testing, with a consistent approach to improving features and performance. The result is a huge range of heat pumps that keep getting quieter, more durable, less costly to operate, and easier to install and maintain. Search data shows Mitsubishi Electric heat pumps are the most popular choice in New Zealand homes — and it's easy to understand why, given how much they invest in research and development with New Zealand conditions specifically in mind.",
    ],
  },

  technologies: {
    title: "Unique Technologies in Mitsubishi Electric's Range",
    items: [
      {
        title: "Quietness",
        text: "The quietest heat pumps on the New Zealand market.",
      },
      {
        title: "HyperCore",
        text: "Most heat pumps lose efficiency when the temperature drops below 7°C — but not with HyperCore technology.",
      },
      {
        title: "3D i-See Sensor",
        text: "The ultimate in customised comfort — analysing the temperature profile of the room and delivering the perfect amount of heating or cooling.",
      },
      {
        title: "Wi-Fi Control",
        text: "Manage your heat pump from your smartphone, tablet or online account, no matter where you are.",
      },
    ] satisfies MitsuTech[],
  },

  dealer: {
    title: "And That's Just the Beginning",
    paragraphs: [
      "Mitsubishi Electric is very selective about who it allows to service and install its products — being an authorised dealer is a sign of a trusted company. Varcoe is not only a trusted distributor of Mitsubishi Electric heat pumps; we have over 15 years of awards to prove it.",
      "Varcoe has installed thousands of heat pumps since opening in 1975, making us one of the most experienced companies in New Zealand. If you're looking to install a Mitsubishi Electric heat pump in your home, contact the Varcoe team today.",
    ],
    cta: { label: "Contact Us", href: "/contact" },
  },

  products: {
    title: "Our Products",
    items: [
      {
        name: "Single Room Heat Pumps & Air Conditioners",
        description:
          "Whether it's burning hot summer days or freezing cold winter nights, Mitsubishi Electric keeps you comfortable. These heat pumps offer up to three times the energy efficiency of conventional heating — cutting your heating costs without blowing your budget. A robust, feature-rich range with contemporary styling that complements any interior, and whisper-quiet because it's Mitsubishi Electric.",
        brochureHref:
          "https://www.varcoe.co.nz/wp-content/uploads/2019/08/Mitsubishi-HeatPumpRange.pdf",
      },
      {
        name: "Multi Room Heat Pumps & Air Conditioners",
        description:
          "Select the best models to suit each room in your house and combine them into the perfect system. With some of the quietest systems on the market (from 21dB), the multi-split system reduces the number of outdoor units required — enhancing exterior aesthetics while providing a simple, economical way to add indoor units at any time.",
        brochureHref:
          "https://www.varcoe.co.nz/wp-content/uploads/2019/08/MultiRoomSystems.pdf",
      },
      {
        name: "Floor Consoles & Cassettes",
        description:
          "An ideal replacement for traditional floor-mounted heating appliances such as night-store heaters. Floor consoles and cassette units are designed to sit at floor level or recess into a wall, so they fit perfectly where the old appliance used to be.",
        brochureHref:
          "https://www.varcoe.co.nz/wp-content/uploads/2019/08/Mitsubishi-HeatPumpRange.pdf",
      },
      {
        name: "Commercial Heat Pumps",
        description:
          "Mitsubishi Electric's CITY MULTI series has the capability and flexibility to adapt to any building requirement. Even complex configurations are easily managed with a wide line-up of indoor units and flexible piping. Easy to operate, with energy-saving technology, CITY MULTI offers an ideal blend of comfort, efficiency and economy.",
        brochureHref:
          "https://www.varcoe.co.nz/wp-content/uploads/2019/08/Mitsubishi-MrSlimCommercial.pdf",
      },
      {
        name: "Mitsubishi Electric Wi-Fi Heat Pump Controller",
        description:
          "Never return to a cold home again. Mitsubishi Electric Wi-Fi control lets you adjust the temperature of your home or commercial building while you're on the go. New Zealand weather can change in the blink of an eye — with Wi-Fi control you can get ahead of it and return to the perfect environment, whether you're on the way home from work or in another country.",
        brochureHref:
          "https://www.varcoe.co.nz/product/mitsubishi-electric-wi-fi-heat-pump-controller/",
      },
    ] satisfies MitsuProduct[],
  },

  store: {
    title: "Browse the Mitsubishi Electric Range",
    body: "View our full selection of Mitsubishi Electric heat pumps on our online store.",
    cta: {
      label: "Browse Range",
      href: "https://www.varcoe.co.nz/product-category/heatpumps/mitsubishi-electric/",
    },
  },
} as const;

import type {
  AboutContent,
  AcHeatPumpsContent,
  AdvantagesContent,
  BookQuoteCtaContent,
  BrandsContent,
  DiagnosticsContent,
  HeroContent,
  Highlight,
  ProcessContent,
  QuoteCtaContent,
  SectionIntro,
  TestimonialsContent,
} from "@/features/home/types/home";

/**
 * Homepage content for Varcoe Air Conditioning & Heat Pumps (Auckland).
 * Copy from the client brief. Brand logos and photography are placeholders —
 * replace with licensed assets before launch.
 */

export const hero: HeroContent = {
  eyebrow: "For over 50 years",
  title: "Air Conditioning & Heat Pumps in Auckland",
  promise: "50+ years of heat pump excellence.",
  supporting:
    "Owner-operated since 1975, Varcoe is Auckland's trusted specialist — serving thousands of homes and businesses from Manukau to the North Shore.",
  primaryCta: { label: "Book a Free Quote", href: "/contact" },
  secondaryCta: { label: "Our Services", href: "/service" },
  promo: "12-month workmanship · 5-year parts & labour warranty",
  image: {
    src: "/images/home/hero-bg.jpg",
    alt: "Modern living room with a wall-mounted heat pump",
    width: 2560,
    height: 960,
  },
};

export const highlights: Highlight[] = [
  {
    icon: "medal",
    title: "50+ Years of Excellence",
    text: "Owner-operated since 1975 — Auckland's trusted heat pump specialist for homes and businesses.",
  },
  {
    icon: "star",
    title: "224 Five-Star Reviews",
    text: "Praised for professional service, clean installations, and expert guidance.",
  },
  {
    icon: "shield",
    title: "Workmanship & Parts Warranty",
    text: "12-month workmanship and 5-year parts & labour. Licensed, manufacturer-certified technicians.",
  },
];

export const about: AboutContent = {
  eyebrow: "Why choose Varcoe",
  title: "Auckland's Heat Pump & Air Conditioning Specialists Since 1975",
  body: "Varcoe has installed over 20,000 heat pumps and air conditioning systems across Auckland since 1975. We'll help you choose the right heating and cooling solution for your home, install it properly, and keep it running efficiently for years. Servicing all Auckland suburbs from our Papakura base — Manukau to North Shore, CBD to West Auckland.",
  points: [
    "Licensed technicians",
    "Manufacturer-certified installations",
    "12-month workmanship guarantee",
    "5-year parts & labour warranty",
  ],
  stat: { value: "20,000+", label: "Heat pumps & A/C systems installed" },
  video: {
    videoId: "EPsC2Jojv-s",
    title: "Why choose Varcoe — Air Conditioning & Heat Pumps, Auckland",
  },
};

export const servicesSection: SectionIntro = {
  eyebrow: "What are you looking for?",
  title: "Our Services",
  intro:
    "From heat pumps and air conditioning to electrical, refrigeration and wine cellars — Varcoe designs, supplies, installs and maintains it across Auckland.",
};

export const acHeatPumps: AcHeatPumpsContent = {
  eyebrow: "Find the right system",
  title: "Air Conditioning and Heat Pumps",
  intro:
    "From single rooms to whole homes and commercial spaces — explore the cooling and heating solution that fits your space.",
  coolingHref: "/service/air-conditioning",
  heatingHref: "/service/heat-pumps",
  items: [
    {
      title: "Single Room Air Conditioners",
      description:
        "Every home is as individual as its owner. Choosing the wrong size for the room you need to heat can leave you cold and cost you more in power consumption.",
    },
    {
      title: "Multi Room Air Conditioners",
      description:
        "Looking to heat and cool multiple rooms but don't want to clutter your exterior area with an outdoor unit for each indoor unit? A multi room heat pump or A/C may be the perfect option for you.",
    },
    {
      title: "Floor Consoles & Cassettes",
      description:
        "Providing seamless climate control solutions through state-of-the-art, energy-efficient floor-mounted units and ceiling cassettes, tailored to your specific needs and preferences.",
    },
    {
      title: "Ducted Whole Home Air Conditioning",
      description:
        "Ducted Central Heat Pump and Air Conditioning Systems are designed to provide whole home central heating or cooling at a constant temperature throughout the whole house.",
    },
    {
      title: "Wifi Control Air Conditioning Systems",
      description:
        "With Mitsubishi Electric WiFi control, you can preheat or cool a room no matter if you're on the way home from work early, running late, or even if you're in a completely different country.",
    },
    {
      title: "Commercial Air Conditioning",
      description:
        "With Varcoe's Commercial Air Conditioning expertise, businesses can experience energy savings, optimal indoor air quality, and expert maintenance for uninterrupted performance.",
    },
  ],
};

export const bookQuote: BookQuoteCtaContent = {
  title: "Book a quote",
  body: "Varcoe Air Conditioning and Heat Pumps are Auckland's industry leaders in the supply, installation and servicing of heat pumps and air conditioning. With Varcoe, you can always expect exceptional service and workmanship. Distributing and installing high quality systems from Daikin, Mitsubishi Electric and Panasonic, available throughout all Auckland including servicing North Shore and South Auckland.",
  cta: { label: "Book a free quote", href: "/contact" },
  // image omitted for now — a tokenized placeholder is rendered until a real asset is supplied.
};

export const brands: BrandsContent = {
  eyebrow: "Our brands",
  title: "We Install the Brands You Trust",
  intro:
    "We distribute and install high-quality systems from the world's leading manufacturers.",
  items: [
    {
      name: "Mitsubishi Electric",
      blurb: "A world leader in heat pumps and air conditioning since 1968.",
      image: {
        src: "/images/brands/mitsubishi-electric.svg",
        alt: "Mitsubishi Electric logo",
      },
    },
    {
      name: "Daikin",
      blurb:
        "One of New Zealand's most trusted names in heat pumps and air conditioning.",
      image: { src: "/images/brands/daikin.svg", alt: "Daikin logo" },
    },
    {
      name: "Panasonic",
      blurb: "Loved by New Zealand households for almost a century.",
      image: { src: "/images/brands/panasonic.svg", alt: "Panasonic logo" },
    },
  ],
};

export const advantages: AdvantagesContent = {
  eyebrow: "The Varcoe difference",
  title: "Professional Installation, Done Right",
  intro:
    "We'll size it right, install it fast, and back it with a genuine warranty.",
  items: [
    {
      icon: "clock",
      title: "3–4 Hour Installs",
      text: "A typical heat pump installation is completed in just 3–4 hours.",
    },
    {
      icon: "medal",
      title: "Certified Technicians",
      text: "Manufacturer-certified, licensed installers across all Auckland locations.",
    },
    {
      icon: "gear",
      title: "All Major Brands",
      text: "Mitsubishi Electric, Daikin and Panasonic supplied and installed.",
    },
    {
      icon: "shield",
      title: "Guaranteed Work",
      text: "12-month workmanship guarantee and 5-year parts & labour warranty.",
    },
  ],
};

export const process: ProcessContent = {
  eyebrow: "Our process",
  title: "How It Works",
  intro: "Six simple steps from first call to ongoing care.",
  items: [
    {
      step: 1,
      title: "In-Home Assessment",
      text: "Expert evaluation of your space and heating/cooling needs.",
    },
    {
      step: 2,
      title: "Quote Provided",
      text: "Transparent pricing with no hidden costs.",
    },
    {
      step: 3,
      title: "Agreement",
      text: "Finalise terms and your installation date.",
    },
    {
      step: 4,
      title: "Installation",
      text: "Licensed technicians complete the job (3–4 hours typical).",
    },
    {
      step: 5,
      title: "Enjoy",
      text: "Full walkthrough and operation training.",
    },
    {
      step: 6,
      title: "Service",
      text: "Regular maintenance to ensure longevity.",
    },
  ],
};

export const diagnostics: DiagnosticsContent = {
  title: "Auckland's Heat Pump Industry Leaders",
  subtitle:
    "Supply, installation and servicing — exceptional service and workmanship, every time.",
  cta: { label: "Book a Free Quote", href: "/contact" },
};

export const testimonials: TestimonialsContent = {
  eyebrow: "Customer stories",
  title: "What Our Customers Say",
  rating: { score: "4.8", count: "250+", label: "Google reviews" },
  videos: [
    { videoId: "xOh6wS2GB2U", title: "Varcoe customer review" },
    { videoId: "fF1fD-9WOS0", title: "Varcoe customer review" },
  ],
  link: { label: "Read over 200 reviews", href: "/contact" },
  items: [
    {
      quote:
        "Professional, prompt and friendly service. Thank you so much. I am happy to recommend Varcoe to all.",
      author: "Christine Jenden",
      role: "Google review",
    },
    {
      quote:
        "We love dealing with Varcoe in Papakura. The team are quick and I was surprised at how reasonable the bill was. They serviced our air con unit and all it needed was a clean.",
      author: "Helen Gray",
      role: "Google review · Papakura",
    },
    {
      quote:
        "Could not have been more impressed — from the first phone call booking the service through to a very professional tradesperson turning up promptly and diagnosing the problem.",
      author: "Peter Masefield",
      role: "Google review",
    },
    {
      quote:
        "From start to finish it was the best experience dealing with the team from Varcoe. John was extremely prompt and thorough with all communication.",
      author: "Tegan & Beau",
      role: "Google review",
    },
    {
      quote:
        "We are delighted with our heat pumps and would like to compliment you on your staff. Very professional, and pleasant to have in the house. We will definitely recommend you.",
      author: "Loraine Grant",
      role: "Google review",
    },
    {
      quote:
        "Just a note to say thanks to you and your two fine young men who installed our heat pump last week. They did a fantastic job.",
      author: "Lorna & George Hirst",
      role: "Google review",
    },
  ],
};

export const quoteCta: QuoteCtaContent = {
  title: "Get a Free Repair & Servicing Quote",
  subtitle:
    "Tell us how we can help — exceptional service and workmanship from Auckland's heat pump specialists.",
  cta: { label: "Get in Touch", href: "/contact" },
};

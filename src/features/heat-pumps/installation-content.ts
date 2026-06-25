/**
 * Content for `/service/heat-pumps/installation` (a child of the Heat Pumps
 * service). Localised from the live varcoe.co.nz page. Marketing claims
 * (50+ years, 12,000+ installations, guarantees) are client-supplied.
 */
export type InstallationSection = {
  title: string;
  paragraphs?: string[];
  points?: { label?: string; text: string }[];
};

export type InstallationContent = {
  heroTitle: string;
  intro: string[];
  sections: InstallationSection[];
  faqs: { question: string; answer: string }[];
  faqsTitle: string;
  closingCta: {
    title: string;
    body: string;
    cta: { label: string; href: string };
  };
};

export const installationContent: InstallationContent = {
  heroTitle: "Heat Pump Installation in Auckland",
  intro: [
    "A heat pump is only as good as its installation. Varcoe has installed thousands of heat pumps across Auckland since 1975 — sized correctly, positioned well and finished cleanly — so your system runs efficiently and lasts for years.",
    "From the first assessment to the final test, our certified team handles the whole job, with a 12-month workmanship guarantee on every install.",
  ],
  sections: [
    {
      title: "Our Installation Process",
      points: [
        {
          label: "In-home assessment",
          text: "We visit your home, take measurements and understand your needs, preferences and budget.",
        },
        {
          label: "A detailed, no-pressure quote",
          text: "You get a clear, itemised quote with the right system for your space — no hard sell.",
        },
        {
          label: "Professional installation",
          text: "Most installs take just 3–4 hours, carried out by certified technicians to a high standard.",
        },
        {
          label: "Clean finish & demo",
          text: "We leave your home tidy and show you how to get the best from your new system.",
        },
        {
          label: "Workmanship guarantee",
          text: "Every installation is backed by a 12-month workmanship guarantee and ongoing support.",
        },
      ],
    },
    {
      title: "What's Included",
      paragraphs: [
        "Our quotes are complete — everything needed to get your system running properly, with no surprise extras:",
      ],
      points: [
        { text: "Supply of the heat pump and mounting hardware" },
        { text: "Indoor and outdoor unit installation and pipe work" },
        { text: "Electrical connection by our licensed team" },
        { text: "Full testing and commissioning" },
        { text: "Removal of installation waste and a tidy finish" },
        { text: "A 12-month workmanship guarantee" },
      ],
    },
    {
      title: "Why Choose Varcoe for Installation",
      points: [
        {
          label: "50+ years of experience",
          text: "One of Auckland's most experienced installers, with 12,000+ installations.",
        },
        {
          label: "Correctly sized systems",
          text: "We size every system to your home so it runs efficiently and lasts.",
        },
        {
          label: "Trusted brands",
          text: "Mitsubishi Electric, Daikin and Panasonic — quality systems built to last 15+ years.",
        },
        {
          label: "After-sales service",
          text: "Servicing and support whenever you need it, most calls within 24 hours.",
        },
      ],
    },
  ],
  faqs: [
    {
      question: "How long does a heat pump installation take?",
      answer:
        "Most single-room installations are completed in just 3–4 hours. Multi-room and ducted systems take longer — we'll confirm timing when we quote.",
    },
    {
      question: "Do you remove my old unit?",
      answer:
        "Yes — if you're replacing an existing system, we can remove and dispose of the old unit as part of the installation. Just let us know when we quote.",
    },
    {
      question: "Where should the heat pump be installed?",
      answer:
        "Positioning affects both performance and looks. During the in-home assessment we recommend the best location for even airflow and a tidy finish, taking your preferences into account.",
    },
    {
      question: "Is the installation guaranteed?",
      answer:
        "Yes. Every installation comes with a 12-month workmanship guarantee, on top of the manufacturer's warranty on the unit itself.",
    },
  ],
  faqsTitle: "FAQs: Heat Pump Installation",
  closingCta: {
    title: "Book Your Heat Pump Installation",
    body: "Get professional installation backed by a 12-month workmanship guarantee. Book your free in-home assessment with Varcoe today.",
    cta: { label: "Get a Free Quote", href: "/contact" },
  },
};

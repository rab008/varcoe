import type {
  AboutIntroContent,
  TeamMember,
} from "@/features/about/types/about";

/**
 * About page content (from the Varcoe brief). Team photos and the intro image
 * are placeholders — replace with real assets before launch.
 */

export const aboutIntro: AboutIntroContent = {
  eyebrow: "About us",
  title: "Experts in Air Conditioning and Heat Pumps Since 1975",
  paragraphs: [
    "Varcoe Air Conditioning and Heat Pumps are Auckland's leading heat pump specialist. Owner-operated since 1975 and with a showroom in Papakura, we pride ourselves on our quality of design, our quick and clean heat pump installations, and our after-sales service. We only install top-quality heat pump brands such as Mitsubishi Electric, Daikin and Panasonic — renowned for their quietness, reliability and superior energy efficiency.",
    "Our team of extensively trained industry professionals ensure expert installations that surpass heat pump and air conditioning industry standards of quality control.",
  ],
  points: [
    "Leading heat pump Advice, Design, Install and Service",
    "The most cost-effective, efficient system for your needs",
    "Qualified, experienced installers — minimal disruption",
  ],
  cta: { label: "Book a Free Quote", href: "/contact" },
  image: {
    src: "/images/home/about.svg",
    alt: "Varcoe team servicing an air conditioning unit",
    width: 560,
    height: 520,
  },
};

export const team: TeamMember[] = [
  {
    name: "Tim Fawdray",
    role: "Managing Director",
    bio: "Tim has been an integral part of Varcoe Air Conditioning and Heat Pumps for the last 24 years, taking ownership in 2001. Tim is a qualified Refrigeration Engineer with a wealth of knowledge in the air conditioning and refrigeration sector. Outside of work Tim enjoys motorsports, squash and fishing.",
    image: {
      src: "/images/team/tim-fawdray.svg",
      alt: "Portrait of Tim Fawdray, Managing Director",
    },
  },
  {
    name: "Jacob Dilworth",
    role: "General Manager",
    bio: "Jacob has been within the industry for 25+ years. With his senior management skills and technical knowledge, he leads the business to deliver high-quality service, projects and installations that meet or exceed our clients' expectations. Jacob has strong core values, embraces technology, and is customer focused.",
    image: {
      src: "/images/team/jacob-dilworth.svg",
      alt: "Portrait of Jacob Dilworth, General Manager",
    },
  },
  {
    name: "Warick Silver",
    role: "Service Manager",
    bio: "Warick has 30+ years of experience within the commercial and residential sectors of the HVAC and refrigeration industry. Service, maintenance, BWOF compliance and technical fault finding are his specialty — so no job is too big or small for him and his competent team of qualified technicians.",
    image: {
      src: "/images/team/warick-silver.svg",
      alt: "Portrait of Warick Silver, Service Manager",
    },
  },
];

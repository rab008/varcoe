/**
 * Site-wide configuration — the single source of truth for the site name, base
 * URL, navigation, business contact details, and social links. Consumed by the
 * layout, TopBar, Header, Footer, DiagnosticsCta, sitemap, and JSON-LD so links
 * and metadata never drift.
 */
export const siteConfig = {
  name: "Varcoe",
  legalName: "Varcoe Air Conditioning & Heat Pumps",
  description:
    "Auckland's heat pump and air conditioning specialist since 1975. Expert supply, installation and servicing — 12-month workmanship guarantee and 5-year parts & labour warranty.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Offers", href: "/offers" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Manufacturers", href: "/manufacturers" },
    { label: "Locations", href: "/locations" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  /**
   * Business contact details — single source for the TopBar, DiagnosticsCta band,
   * and the HVACBusiness JSON-LD.
   */
  business: {
    phone: "+6498027002", // E.164 for tel: (NZ; from 0980 270 02 — confirm)
    displayPhone: "0980 270 02", // human-readable
    email: "info@varcoe.co.nz",
    hours: "Mo-Fr 08:00-17:00", // schema.org openingHours
    hoursDisplay: "Mon – Fri · 8:00am – 5:00pm",
    areaServed: "Auckland",
    address: {
      street: "21 Elliot St",
      locality: "Papakura",
      region: "Auckland",
      country: "NZ",
    },
  },
  /**
   * Social profiles. NOTE: Instagram & X are currently generic root URLs —
   * replace with the real Varcoe profiles before launch (and only then add them
   * to JSON-LD `sameAs`).
   */
  social: {
    facebook: "https://www.facebook.com/VarcoeNZ",
    instagram: "https://www.instagram.com/",
    x: "https://x.com/",
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];

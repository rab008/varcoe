import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { HeatPumpSpecials } from "@/features/offers/components/HeatPumpSpecials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Save Up to 90% on Heat Pumps Auckland | Varcoe Special Offers",
  description:
    "Heat pump specials in Auckland — trade in your old unit for cash off, or pay as little as $400 through Warmer Kiwi Homes. Mitsubishi, Daikin & Panasonic, installed by Varcoe.",
  alternates: { canonical: "/offers" },
  openGraph: {
    title: `Heat Pump Specials | ${siteConfig.name}`,
    description:
      "Current heat pump deals in Auckland — trade-in cash, up to 90% off via Warmer Kiwi Homes, and premium brands installed by Varcoe.",
    url: "/offers",
    images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Offers",
      item: `${siteConfig.url}/offers`,
    },
  ],
};

export default function OffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Offers" }]} />

      <HeatPumpSpecials />
    </>
  );
}

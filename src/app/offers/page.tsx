import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { OffersList } from "@/features/offers/components/OffersList";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Offers",
  description:
    "Current offers and programmes from Varcoe — including Warmer Kiwi Homes — to make heating your Auckland home more affordable.",
  alternates: { canonical: "/offers" },
  openGraph: {
    title: `Offers | ${siteConfig.name}`,
    description: "Varcoe offers & programmes for affordable home heating.",
    url: "/offers",
  },
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

      <PageBanner
        title="Offers"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Offers" }]} />

      <OffersList />
    </>
  );
}

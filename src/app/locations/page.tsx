import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { LocationsList } from "@/features/locations/components/LocationsList";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "The Auckland areas Varcoe serves for heat pumps and air conditioning — East Auckland, North Shore, South Auckland, West Auckland, Papakura and more.",
  alternates: { canonical: "/locations" },
  openGraph: {
    title: `Locations | ${siteConfig.name}`,
    description:
      "Auckland service areas for Varcoe heat pumps & air conditioning.",
    url: "/locations",
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
      name: "Locations",
      item: `${siteConfig.url}/locations`,
    },
  ],
};

export default function LocationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title="Locations"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Locations" }]}
      />

      <LocationsList />
    </>
  );
}

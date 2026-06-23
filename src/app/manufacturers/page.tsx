import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ManufacturersList } from "@/features/manufacturers/components/ManufacturersList";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Manufacturers",
  description:
    "The heat pump and air conditioning brands Varcoe supplies and installs across Auckland — Mitsubishi, Daikin and Panasonic.",
  alternates: { canonical: "/manufacturers" },
  openGraph: {
    title: `Manufacturers | ${siteConfig.name}`,
    description:
      "Brands Varcoe supplies & installs — Mitsubishi, Daikin, Panasonic.",
    url: "/manufacturers",
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
      name: "Manufacturers",
      item: `${siteConfig.url}/manufacturers`,
    },
  ],
};

export default function ManufacturersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title="Manufacturers"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Manufacturers" }]}
      />

      <ManufacturersList />
    </>
  );
}

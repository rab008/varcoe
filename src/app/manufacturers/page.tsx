import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { ManufacturersOverview } from "@/features/manufacturers/components/ManufacturersOverview";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Heat Pump Brands We Install — Mitsubishi, Daikin & Panasonic | Varcoe",
  description:
    "The HVAC & refrigeration brands Varcoe partners with across Auckland — Mitsubishi Electric, Daikin, Panasonic and specialist manufacturers chosen for reliability, energy savings and local support.",
  alternates: { canonical: "/manufacturers" },
  openGraph: {
    title: `Manufacturers We Partner With | ${siteConfig.name}`,
    description:
      "Quality HVAC & refrigeration brands Varcoe installs and services across Auckland — Mitsubishi Electric, Daikin and Panasonic.",
    url: "/manufacturers",
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

      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Manufacturers" }]}
      />

      <ManufacturersOverview />
    </>
  );
}

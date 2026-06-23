import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ProductsList } from "@/features/products/components/ProductsList";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Heat pump, air conditioning, refrigeration, ventilation and energy-efficiency solutions Varcoe supplies and installs across Auckland.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: `Products | ${siteConfig.name}`,
    description: "Varcoe's heat pump, A/C, refrigeration & energy solutions.",
    url: "/products",
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
      name: "Products",
      item: `${siteConfig.url}/products`,
    },
  ],
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title="Products"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <ProductsList />
    </>
  );
}

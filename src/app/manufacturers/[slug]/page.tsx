import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ManufacturerPlaceholder } from "@/features/manufacturers/components/ManufacturerPlaceholder";
import {
  getManufacturer,
  manufacturerParams,
} from "@/features/manufacturers/manufacturers-data";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return manufacturerParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getManufacturer(slug);
  if (!brand) return {};
  return {
    title: `${brand.name} Heat Pumps & Air Conditioning`,
    description: `Varcoe supplies, installs and services ${brand.name} heat pumps and air conditioning across Auckland.`,
    alternates: { canonical: `/manufacturers/${brand.slug}` },
    // Thin placeholder page — keep out of the index until real copy is added.
    robots: { index: false, follow: true },
  };
}

export default async function ManufacturerPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const brand = getManufacturer(slug);
  if (!brand) notFound();

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
      {
        "@type": "ListItem",
        position: 3,
        name: brand.name,
        item: `${siteConfig.url}/manufacturers/${brand.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title={brand.name}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Manufacturers", href: "/manufacturers" },
          { label: brand.name },
        ]}
      />

      <ManufacturerPlaceholder brand={brand} />
    </>
  );
}

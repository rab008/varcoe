import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ManufacturerPlaceholder } from "@/features/manufacturers/components/ManufacturerPlaceholder";
import { Mitsubishi } from "@/features/manufacturers/components/Mitsubishi";
import { mitsubishi } from "@/features/manufacturers/mitsubishi-content";
import { Testimonials } from "@/features/home/components/Testimonials";
import { OurBrands } from "@/features/home/components/OurBrands";
import {
  getManufacturer,
  manufacturerParams,
} from "@/features/manufacturers/manufacturers-data";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

/** Brand slug with a bespoke, indexable page (rendered instead of the placeholder). */
const MITSUBISHI = "mitsubishi";

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

  if (slug === MITSUBISHI) {
    return {
      title: "Mitsubishi Electric Heat Pumps Auckland | Varcoe",
      description:
        "Mitsubishi Electric heat pumps & air conditioning, supplied and professionally installed by Varcoe across Auckland. Market-leading technology, an authorised dealer, and brochures for the full range.",
      alternates: { canonical: `/manufacturers/${slug}` },
      openGraph: {
        title: `Mitsubishi Electric Heat Pumps | ${siteConfig.name}`,
        description:
          "Market-leading Mitsubishi Electric heat pumps, installed by Varcoe — Auckland's authorised dealer since 1975.",
        url: `/manufacturers/${slug}`,
        images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
      },
      twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
    };
  }

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

  const banner = (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title={slug === MITSUBISHI ? mitsubishi.hero.title : brand.name}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Manufacturers", href: "/manufacturers" },
          { label: brand.name },
        ]}
      />
    </>
  );

  // Bespoke, indexable Mitsubishi page (testimonials + brands composed here at the
  // app layer, mirroring the service-detail template).
  if (slug === MITSUBISHI) {
    return (
      <>
        {banner}
        <Mitsubishi />
        <Testimonials />
        <OurBrands />
      </>
    );
  }

  return (
    <>
      {banner}
      <ManufacturerPlaceholder brand={brand} />
    </>
  );
}

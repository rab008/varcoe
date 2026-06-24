import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ManufacturerPlaceholder } from "@/features/manufacturers/components/ManufacturerPlaceholder";
import { BrandPage } from "@/features/manufacturers/components/BrandPage";
import { getBrandContent } from "@/features/manufacturers/brand-content";
import { Testimonials } from "@/features/home/components/Testimonials";
import { OurBrands } from "@/features/home/components/OurBrands";
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

  // Rich, indexable brand page (Mitsubishi / Daikin / Panasonic). `seo.title` /
  // `seo.ogTitle` exclude the "| Varcoe" suffix — the root title template adds it.
  const content = getBrandContent(slug);
  if (content) {
    return {
      title: content.seo.title,
      description: content.seo.description,
      alternates: { canonical: `/manufacturers/${slug}` },
      openGraph: {
        title: `${content.seo.ogTitle} | ${siteConfig.name}`,
        description: content.seo.ogDescription,
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

  const content = getBrandContent(slug);

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
        title={content?.hero.title ?? brand.name}
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

  // Rich, indexable brand page (testimonials + brands composed here at the app
  // layer, mirroring the service-detail template). Placeholder for future brands.
  if (content) {
    return (
      <>
        {banner}
        <BrandPage content={content} slug={slug} />
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

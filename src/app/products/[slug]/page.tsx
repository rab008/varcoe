import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ProductPlaceholder } from "@/features/products/components/ProductPlaceholder";
import { CommercialHeatPumps } from "@/features/products/components/CommercialHeatPumps";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { OurBrands } from "@/features/home/components/OurBrands";
import { commercialHeatPumps } from "@/features/products/commercial-heat-pumps-content";
import { getProduct, productParams } from "@/features/products/products-data";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

/** Product slug with a bespoke, indexable page (rendered instead of the placeholder). */
const COMMERCIAL_HEAT_PUMPS = "commercial-heat-pumps";

export function generateStaticParams(): Params[] {
  return productParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  if (slug === COMMERCIAL_HEAT_PUMPS) {
    return {
      title: "Commercial Heat Pumps Auckland | Varcoe",
      description:
        "Commercial heat pumps & HVAC for Auckland businesses — highwall, ceiling cassette, ducted and commercial HVAC systems from Mitsubishi Electric, Daikin and Panasonic. Supplied, installed and serviced by Varcoe.",
      alternates: { canonical: `/products/${slug}` },
      openGraph: {
        title: `Commercial Heat Pumps | ${siteConfig.name}`,
        description:
          "Commercial heat pump & HVAC systems for Auckland businesses — supplied, installed and serviced by Varcoe.",
        url: `/products/${slug}`,
        images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
      },
      twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
    };
  }

  return {
    title: product.name,
    description: `${product.name} — supplied, installed and serviced by Varcoe across Auckland.`,
    alternates: { canonical: `/products/${product.slug}` },
    // Thin placeholder page — keep out of the index until real copy is added.
    robots: { index: false, follow: true },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  // Bespoke, indexable Commercial Heat Pumps page (brands + closing CTA composed
  // here at the app layer, mirroring the service-detail template).
  if (slug === COMMERCIAL_HEAT_PUMPS) {
    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: `${siteConfig.url}/products`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name,
          item: `${siteConfig.url}/products/${product.slug}`,
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
          title={product.name}
          image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
        />
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.name },
          ]}
        />

        <CommercialHeatPumps />
        <OurBrands />
        <ServiceClosingCta cta={commercialHeatPumps.closingCta} />
      </>
    );
  }

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
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${siteConfig.url}/products/${product.slug}`,
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
        title={product.name}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name },
        ]}
      />

      <ProductPlaceholder name={product.name} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ProductPlaceholder } from "@/features/products/components/ProductPlaceholder";
import { ProductDetail } from "@/features/products/components/ProductDetail";
import { getProductContent } from "@/features/products/product-content";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { OurBrands } from "@/features/home/components/OurBrands";
import { getProduct, productParams } from "@/features/products/products-data";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

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

  // Rich, indexable product page. `seo.title`/`seo.ogTitle` exclude the
  // "| Varcoe" suffix — the root title template adds it.
  const content = getProductContent(slug);
  if (content) {
    return {
      title: content.seo.title,
      description: content.seo.description,
      alternates: { canonical: `/products/${slug}` },
      openGraph: {
        title: `${content.seo.ogTitle} | ${siteConfig.name}`,
        description: content.seo.ogDescription,
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

  const content = getProductContent(slug);

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

  const banner = (
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
    </>
  );

  // Rich, indexable product page (brands + closing CTA composed here at the app
  // layer, mirroring the service-detail template). Placeholder otherwise.
  if (content) {
    return (
      <>
        {banner}
        <ProductDetail content={content} currentSlug={slug} />
        <OurBrands />
        <ServiceClosingCta cta={content.closingCta} />
      </>
    );
  }

  return (
    <>
      {banner}
      <ProductPlaceholder name={product.name} />
    </>
  );
}

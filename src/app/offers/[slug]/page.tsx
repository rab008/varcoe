import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { OfferPlaceholder } from "@/features/offers/components/OfferPlaceholder";
import { getOffer, offerParams } from "@/features/offers/offers-data";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return offerParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) return {};
  return {
    title: offer.name,
    description: `${offer.name} — find out how Varcoe can help make heating your Auckland home more affordable.`,
    alternates: { canonical: `/offers/${offer.slug}` },
    // Thin placeholder page — keep out of the index until real copy is added.
    robots: { index: false, follow: true },
  };
}

export default async function OfferPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();

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
      {
        "@type": "ListItem",
        position: 3,
        name: offer.name,
        item: `${siteConfig.url}/offers/${offer.slug}`,
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
        title={offer.name}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Offers", href: "/offers" },
          { label: offer.name },
        ]}
      />

      <OfferPlaceholder name={offer.name} />
    </>
  );
}

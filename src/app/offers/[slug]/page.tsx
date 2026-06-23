import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { OfferPlaceholder } from "@/features/offers/components/OfferPlaceholder";
import { OurBrands } from "@/features/home/components/OurBrands";
import { Testimonials } from "@/features/home/components/Testimonials";
import { WarmerKiwiHomes } from "@/features/offers/components/WarmerKiwiHomes";
import { getOffer, offerParams } from "@/features/offers/offers-data";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

/** Slug with a bespoke, indexable page (rendered instead of the placeholder). */
const WARMER_KIWI_HOMES = "warmer-kiwi-homes";

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

  if (slug === WARMER_KIWI_HOMES) {
    return {
      title: "Warmer Kiwi Homes Heat Pump Grant Auckland",
      description:
        "Varcoe is an EECA-approved Warmer Kiwi Homes provider. Eligible Auckland homeowners can get up to 90% off a heat pump (funding capped at $3,450 inc GST). Check your eligibility.",
      alternates: { canonical: `/offers/${slug}` },
      openGraph: {
        title: `Warmer Kiwi Homes Heat Pump Grant | ${siteConfig.name}`,
        description:
          "Up to 90% off a heat pump for eligible Auckland homeowners through the EECA Warmer Kiwi Homes programme. Varcoe handles the whole process.",
        url: `/offers/${slug}`,
        images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
      },
      twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
    };
  }

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

  // Bespoke, indexable Warmer Kiwi Homes page (brands + testimonials injected
  // here at the app layer to keep the offers feature decoupled from home).
  if (slug === WARMER_KIWI_HOMES) {
    return (
      <WarmerKiwiHomes>
        <OurBrands />
        <Testimonials />
      </WarmerKiwiHomes>
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

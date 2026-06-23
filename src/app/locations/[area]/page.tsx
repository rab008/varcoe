import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { LocationPlaceholder } from "@/features/locations/components/LocationPlaceholder";
import { EastAuckland } from "@/features/locations/components/EastAuckland";
import { eastAuckland } from "@/features/locations/east-auckland-content";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { Testimonials } from "@/features/home/components/Testimonials";
import { OurBrands } from "@/features/home/components/OurBrands";
import { getArea, areaParams } from "@/features/locations/locations-data";
import { siteConfig } from "@/lib/site";

type Params = { area: string };

/** Area slug with a bespoke, indexable page (rendered instead of the placeholder). */
const EAST_AUCKLAND = "east-auckland";

export function generateStaticParams(): Params[] {
  return areaParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { area } = await params;
  const found = getArea(area);
  if (!found) return {};

  if (area === EAST_AUCKLAND) {
    return {
      title: "Heat Pumps & Air Conditioning East Auckland | Varcoe",
      description:
        "Professional heat pump & air conditioning installation across East Auckland — Howick, Botany, Pakuranga and more. 25+ years' experience, 12-month workmanship guarantee. Get a free quote.",
      alternates: { canonical: `/locations/${found.slug}` },
      openGraph: {
        title: `Heat Pumps & Air Conditioning East Auckland | ${siteConfig.name}`,
        description:
          "Premium heat pump & AC installation across East Auckland, backed by a 12-month workmanship guarantee.",
        url: `/locations/${found.slug}`,
        images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
      },
      twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
    };
  }

  return {
    title: `Heat Pumps & Air Conditioning in ${found.name}`,
    description: `Varcoe supplies, installs and services heat pumps and air conditioning in ${found.name}, Auckland.`,
    alternates: { canonical: `/locations/${found.slug}` },
    // Thin placeholder page — keep out of the index until real copy is added.
    robots: { index: false, follow: true },
  };
}

export default async function LocationAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { area } = await params;
  const found = getArea(area);
  if (!found) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${siteConfig.url}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: found.name,
        item: `${siteConfig.url}/locations/${found.slug}`,
      },
    ],
  };

  // Bespoke, indexable East Auckland page (reviews + brands + closing CTA composed
  // here at the app layer, mirroring the service-detail template).
  if (area === EAST_AUCKLAND) {
    return (
      <>
        <script
          type="application/ld+json"
          // First-party, self-authored structured data — sanctioned use.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />

        <PageBanner
          title={eastAuckland.hero.title}
          image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
        />
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Locations", href: "/locations" },
            { label: found.name },
          ]}
        />

        <EastAuckland />
        <Testimonials />
        <OurBrands />
        <ServiceClosingCta cta={eastAuckland.closingCta} />
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title={found.name}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: found.name },
        ]}
      />

      <LocationPlaceholder name={found.name} area={found} />
    </>
  );
}

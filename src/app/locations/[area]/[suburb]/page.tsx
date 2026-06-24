import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { LocationPlaceholder } from "@/features/locations/components/LocationPlaceholder";
import { LocationDetail } from "@/features/locations/components/LocationDetail";
import { getLocationContent } from "@/features/locations/locations-registry";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { Testimonials } from "@/features/home/components/Testimonials";
import { OurBrands } from "@/features/home/components/OurBrands";
import { getSuburb, suburbParams } from "@/features/locations/locations-data";
import { siteConfig } from "@/lib/site";

type Params = { area: string; suburb: string };

export function generateStaticParams(): Params[] {
  return suburbParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { area, suburb } = await params;
  const found = getSuburb(area, suburb);
  if (!found) return {};

  const canonical = `/locations/${found.area.slug}/${found.suburb.slug}`;

  // Rich, indexable suburb page. `seo.title`/`seo.ogTitle` exclude the "| Varcoe"
  // suffix — the root title template adds it.
  const content = getLocationContent(`${area}/${suburb}`);
  if (content) {
    return {
      title: content.seo.title,
      description: content.seo.description,
      alternates: { canonical },
      openGraph: {
        title: `${content.seo.ogTitle} | ${siteConfig.name}`,
        description: content.seo.ogDescription,
        url: canonical,
        images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
      },
      twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
    };
  }

  return {
    title: `Heat Pumps & Air Conditioning in ${found.suburb.name}`,
    description: `Varcoe supplies, installs and services heat pumps and air conditioning in ${found.suburb.name}, ${found.area.name}.`,
    alternates: { canonical },
    // Thin placeholder page — keep out of the index until real copy is added.
    robots: { index: false, follow: true },
  };
}

export default async function LocationSuburbPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { area, suburb } = await params;
  const found = getSuburb(area, suburb);
  if (!found) notFound();

  const content = getLocationContent(`${area}/${suburb}`);

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
        name: found.area.name,
        item: `${siteConfig.url}/locations/${found.area.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: found.suburb.name,
        item: `${siteConfig.url}/locations/${found.area.slug}/${found.suburb.slug}`,
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
        title={content?.hero.title ?? found.suburb.name}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: found.area.name, href: `/locations/${found.area.slug}` },
          { label: found.suburb.name },
        ]}
      />
    </>
  );

  // Rich, indexable suburb page (reviews + brands + closing CTA composed here at
  // the app layer). Placeholder otherwise.
  if (content) {
    return (
      <>
        {banner}
        <LocationDetail
          content={content}
          currentAreaSlug={area}
          currentSuburbSlug={suburb}
        />
        <Testimonials />
        <OurBrands />
        <ServiceClosingCta cta={content.closingCta} />
      </>
    );
  }

  return (
    <>
      {banner}
      <LocationPlaceholder name={found.suburb.name} />
    </>
  );
}

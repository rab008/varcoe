import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { LocationPlaceholder } from "@/features/locations/components/LocationPlaceholder";
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
  return {
    title: `Heat Pumps & Air Conditioning in ${found.suburb.name}`,
    description: `Varcoe supplies, installs and services heat pumps and air conditioning in ${found.suburb.name}, ${found.area.name}.`,
    alternates: {
      canonical: `/locations/${found.area.slug}/${found.suburb.slug}`,
    },
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

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title={found.suburb.name}
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

      <LocationPlaceholder name={found.suburb.name} />
    </>
  );
}

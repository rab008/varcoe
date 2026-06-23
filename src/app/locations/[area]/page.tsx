import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { LocationPlaceholder } from "@/features/locations/components/LocationPlaceholder";
import { getArea, areaParams } from "@/features/locations/locations-data";
import { siteConfig } from "@/lib/site";

type Params = { area: string };

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

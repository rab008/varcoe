import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { Container } from "@/components/ui/Container";
import { ServicesList } from "@/features/services/components/ServicesList";
import { DiagnosticsCta } from "@/features/home/components/DiagnosticsCta";
import { QuoteCtaBand } from "@/features/home/components/QuoteCtaBand";
import { services } from "@/features/services/services-data";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Heat pumps, air conditioning, electrical, refrigeration and wine cellars — Varcoe designs, installs and services it all across Auckland. Explore our services.",
  alternates: { canonical: "/services" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
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
          name: "Services",
          item: `${siteConfig.url}/services`,
        },
      ],
    },
    {
      "@type": "ItemList",
      itemListElement: services.map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: service.title,
        url: `${siteConfig.url}/services/${service.slug}`,
      })),
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageBanner
        title="Services"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <ServicesList />

      <Container className="pb-8">
        <Image
          src="/images/services/diagnostics-illustration.svg"
          alt=""
          width={640}
          height={360}
          unoptimized
          className="mx-auto h-auto w-full max-w-2xl"
        />
      </Container>

      <DiagnosticsCta />
      <QuoteCtaBand />
    </>
  );
}

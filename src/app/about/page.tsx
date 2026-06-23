import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { AboutIntro } from "@/features/about/components/AboutIntro";
import { AboutTeam } from "@/features/about/components/AboutTeam";
import { Testimonials } from "@/features/home/components/Testimonials";
import { OurBrands } from "@/features/home/components/OurBrands";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Varcoe is Auckland's leading heat pump specialist — owner-operated since 1975, with expert design, installation and after-sales service across Auckland.",
  alternates: { canonical: "/about" },
};

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
      name: "About Us",
      item: `${siteConfig.url}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PageBanner
        title="About Us"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutIntro />
      <AboutTeam />
      <Testimonials />
      <OurBrands />
    </>
  );
}

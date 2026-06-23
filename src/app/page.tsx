import type { Metadata } from "next";
import { HomeHero } from "@/features/home/components/HomeHero";
import { TrustHighlights } from "@/features/home/components/TrustHighlights";
import { AboutSection } from "@/features/home/components/AboutSection";
import { ServicesGrid } from "@/features/home/components/ServicesGrid";
import { AcHeatPumps } from "@/features/home/components/AcHeatPumps";
import { BookQuoteCta } from "@/features/home/components/BookQuoteCta";
import { OurBrands } from "@/features/home/components/OurBrands";
import { AdvantagesBand } from "@/features/home/components/AdvantagesBand";
import { OurProcess } from "@/features/home/components/OurProcess";
import { DiagnosticsCta } from "@/features/home/components/DiagnosticsCta";
import { Testimonials } from "@/features/home/components/Testimonials";
import { QuoteCtaBand } from "@/features/home/components/QuoteCtaBand";
import { getLocalBusinessJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Air Conditioning & Heat Pumps Auckland",
  description:
    "Auckland's heat pump and air conditioning specialist since 1975. Expert supply, installation and servicing with a 12-month workmanship guarantee and 5-year parts & labour warranty.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Air Conditioning & Heat Pumps Auckland | Varcoe",
    description:
      "Auckland's trusted heat pump & air conditioning specialist since 1975 — Mitsubishi, Daikin & Panasonic. Book a free quote.",
    url: "/",
    images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/home.svg"],
  },
};

export default function Home() {
  const jsonLd = getLocalBusinessJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeHero />
      <TrustHighlights />
      <AboutSection />
      <ServicesGrid />
      <AcHeatPumps />
      <BookQuoteCta />
      <OurBrands />
      <AdvantagesBand />
      <OurProcess />
      <DiagnosticsCta />
      <Testimonials />
      <QuoteCtaBand />
    </>
  );
}

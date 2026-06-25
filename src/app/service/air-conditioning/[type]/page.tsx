import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { SubPageShell } from "@/features/services/components/SubPageShell";
import { SubPageBody } from "@/features/services/components/SubPageBody";
import {
  getAcSubPage,
  acSubPageParams,
} from "@/features/air-conditioning/ac-content";
import { siteConfig } from "@/lib/site";

type Params = { type: string };

const PARENT = "/service/air-conditioning";

export function generateStaticParams(): Params[] {
  return acSubPageParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { type } = await params;
  const content = getAcSubPage(type);
  if (!content) return {};

  const canonical = `${PARENT}/${content.slug}`;
  return {
    title: content.seo.title,
    description: content.seo.description,
    alternates: { canonical },
    openGraph: {
      title: `${content.seo.title} | ${siteConfig.name}`,
      description: content.seo.description,
      url: canonical,
      images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
  };
}

export default async function AcSubPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { type } = await params;
  const content = getAcSubPage(type);
  if (!content) notFound();

  const canonical = `${PARENT}/${content.slug}`;

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
            item: `${siteConfig.url}/service`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Air Conditioning",
            item: `${siteConfig.url}${PARENT}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: content.navLabel,
            item: `${siteConfig.url}${canonical}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={content.heroTitle}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/service" },
          { label: "Air Conditioning", href: PARENT },
          { label: content.navLabel },
        ]}
      />

      <SubPageShell
        serviceSlug="air-conditioning"
        serviceLabel="Air Conditioning"
        serviceHref={PARENT}
        currentHref={canonical}
      >
        <SubPageBody
          intro={content.intro}
          sections={content.sections}
          faqs={content.faqs}
          faqsTitle={content.faqsTitle}
          formIntro={`Send us a few details and our Auckland team will be in touch about your ${content.navLabel.toLowerCase()} air conditioning project.`}
        />
      </SubPageShell>

      <ServiceClosingCta cta={content.closingCta} />
    </>
  );
}

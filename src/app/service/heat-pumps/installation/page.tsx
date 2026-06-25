import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { SubPageShell } from "@/features/services/components/SubPageShell";
import { SubPageBody } from "@/features/services/components/SubPageBody";
import { installationContent } from "@/features/heat-pumps/installation-content";
import { installationTypeList } from "@/features/heat-pumps/installation-types";
import { siteConfig } from "@/lib/site";

const CANONICAL = "/service/heat-pumps/installation";

export const metadata: Metadata = {
  title: "Heat Pump Installation Auckland",
  description:
    "Professional heat pump installation across Auckland by Varcoe — correctly sized, tidily installed in 3–4 hours, with a 12-month workmanship guarantee. Get a free quote.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `Heat Pump Installation Auckland | ${siteConfig.name}`,
    description:
      "Professional heat pump installation across Auckland, backed by a 12-month workmanship guarantee.",
    url: CANONICAL,
    images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
};

export default function HeatPumpInstallationPage() {
  const c = installationContent;

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
            name: "Heat Pumps",
            item: `${siteConfig.url}/service/heat-pumps`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Heat Pump Installation",
            item: `${siteConfig.url}${CANONICAL}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faqs.map((faq) => ({
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
        title={c.heroTitle}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/service" },
          { label: "Heat Pumps", href: "/service/heat-pumps" },
          { label: "Heat Pump Installation" },
        ]}
      />

      <SubPageShell
        serviceSlug="heat-pumps"
        serviceLabel="Heat Pumps"
        serviceHref="/service/heat-pumps"
        currentHref={CANONICAL}
      >
        <SubPageBody
          intro={c.intro}
          sections={c.sections}
          faqs={c.faqs}
          faqsTitle={c.faqsTitle}
          formIntro="Send us a few details and our Auckland team will be in touch about your heat pump installation."
        />
      </SubPageShell>

      {/* Installation types grid */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading
            title="Installation Types We Cover"
            intro="Whatever your home or system, we install it properly. Explore the options:"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {installationTypeList.map((type) => (
              <li key={type.slug}>
                <Link
                  href={`${CANONICAL}/${type.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <h3 className="flex items-center justify-between gap-2 text-lg font-bold text-ink group-hover:text-primary">
                    {type.navLabel}
                    <Icon
                      name="snowflake"
                      className="h-5 w-5 text-primary/40"
                      aria-hidden="true"
                    />
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">
                    {type.cardBlurb}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-primary">
                    Learn more →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ServiceClosingCta cta={c.closingCta} />
    </>
  );
}

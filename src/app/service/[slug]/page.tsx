import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { ServiceSidebar } from "@/features/services/components/ServiceSidebar";
import { ServiceDetailHero } from "@/features/services/components/ServiceDetailHero";
import { ServiceInfoVideo } from "@/features/services/components/ServiceInfoVideo";
import { Accordion } from "@/components/shared/Accordion";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { ServiceTypes } from "@/features/services/components/ServiceTypes";
import { ServiceInfoSections } from "@/features/services/components/ServiceInfoSections";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { OurBrands } from "@/features/home/components/OurBrands";
import { services, getService } from "@/features/services/services-data";
import { siteConfig, serviceChildren } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.detail?.heroTitle ?? service.title,
    description: service.summary,
    alternates: { canonical: `/service/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.summary,
      url: `/service/${service.slug}`,
      images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const detail = service.detail;

  const graph: Record<string, unknown>[] = [
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
          name: service.title,
          item: `${siteConfig.url}/service/${service.slug}`,
        },
      ],
    },
    {
      "@type": "Service",
      name: service.title,
      description: service.summary,
      serviceType: service.title,
      areaServed: siteConfig.business.areaServed,
      provider: {
        "@type": "HVACBusiness",
        name: siteConfig.legalName,
        url: siteConfig.url,
        telephone: siteConfig.business.phone,
      },
      url: `${siteConfig.url}/service/${service.slug}`,
    },
  ];

  if (detail?.faqs && detail.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: detail.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={detail?.heroTitle ?? service.title}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/service" },
          { label: service.title },
        ]}
      />

      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Sidebar — after main in source order on mobile (see order utils) */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start">
            <ServiceSidebar currentSlug={service.slug} />
          </div>

          {/* Main column */}
          <div className="order-1 space-y-14 lg:order-2">
            <ServiceDetailHero service={service} />

            {detail?.experts && (
              <section aria-label={detail.experts.title}>
                <h2 className="text-2xl font-bold text-ink">
                  {detail.experts.title}
                </h2>
                <div className="mt-4 space-y-4 text-muted">
                  {detail.experts.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            )}

            {detail?.whyList && (
              <ServiceInfoVideo
                whyList={detail.whyList}
                videoId={detail.videoId}
                serviceTitle={service.title}
              />
            )}

            {detail?.types && <ServiceTypes types={detail.types} />}

            {detail?.infoSections && detail.infoSections.length > 0 && (
              <ServiceInfoSections sections={detail.infoSections} />
            )}

            {detail?.faqs && detail.faqs.length > 0 && (
              <Accordion items={detail.faqs} title={detail.faqsTitle} />
            )}

            <ServiceAppointmentForm defaultService={service.slug} />
          </div>
        </div>
      </Container>

      {/* Explore this service's sub-pages (when present) */}
      {serviceChildren[service.slug] &&
        serviceChildren[service.slug].length > 0 && (
          <section className="bg-surface py-16 lg:py-24">
            <Container>
              <SectionHeading title={`Explore ${service.title}`} />
              <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {serviceChildren[service.slug].map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      className="group flex h-full items-center justify-between gap-3 rounded-lg border border-border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <span className="font-bold text-ink group-hover:text-primary">
                        {child.label}
                      </span>
                      <Icon
                        name="snowflake"
                        className="h-5 w-5 shrink-0 text-primary/40"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}

      {/* Full-width bands below the two-column article (per content document) */}
      {detail?.showBrands && <OurBrands />}
      {detail?.closingCta && <ServiceClosingCta cta={detail.closingCta} />}
    </>
  );
}

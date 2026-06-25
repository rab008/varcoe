import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { Container } from "@/components/ui/Container";
import { Accordion } from "@/components/shared/Accordion";
import { ServiceSidebar } from "@/features/services/components/ServiceSidebar";
import { ServiceDetailHero } from "@/features/services/components/ServiceDetailHero";
import { ServiceInfoVideo } from "@/features/services/components/ServiceInfoVideo";
import { ServiceTypes } from "@/features/services/components/ServiceTypes";
import { ServiceInfoSections } from "@/features/services/components/ServiceInfoSections";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { ServiceClosingCta } from "@/features/services/components/ServiceClosingCta";
import { OurBrands } from "@/features/home/components/OurBrands";
import {
  getRoomType,
  getRoomTypeParent,
} from "@/features/heat-pumps/room-types";
import { siteConfig } from "@/lib/site";

/**
 * Renders a top-level system/configuration page (e.g. `/single-room`,
 * `/floor-consoles`) using the same two-column design as the service-detail
 * page. The page's IA parent (Heat Pumps or Air Conditioning) drives the
 * breadcrumb, highlighted sidebar item and JSON-LD, even though the URL is
 * top-level. Server Component.
 */
export function RoomTypeDetail({ slug }: { slug: string }) {
  const room = getRoomType(slug);
  if (!room) notFound();

  const detail = room.detail;
  const parent = getRoomTypeParent(slug);
  const url = `${siteConfig.url}/${slug}`;

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
          name: parent.label,
          item: `${siteConfig.url}${parent.href}`,
        },
        { "@type": "ListItem", position: 3, name: room.title, item: url },
      ],
    },
    {
      "@type": "Service",
      name: room.title,
      description: room.summary,
      serviceType: `${room.title} — ${parent.label}`,
      areaServed: siteConfig.business.areaServed,
      provider: {
        "@type": "HVACBusiness",
        name: siteConfig.legalName,
        url: siteConfig.url,
        telephone: siteConfig.business.phone,
      },
      url,
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
        // First-party structured data; escape `<` for script-context safety.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageBanner
        title={detail?.heroTitle ?? room.title}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: parent.label, href: parent.href },
          { label: room.title },
        ]}
      />

      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Sidebar — after main in source order on mobile */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start">
            <ServiceSidebar currentSlug={parent.sidebarSlug} />
          </div>

          {/* Main column */}
          <div className="order-1 space-y-14 lg:order-2">
            <ServiceDetailHero service={room} />

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
                serviceTitle={room.title}
              />
            )}

            {detail?.types && <ServiceTypes types={detail.types} />}

            {detail?.infoSections && detail.infoSections.length > 0 && (
              <ServiceInfoSections sections={detail.infoSections} />
            )}

            {detail?.faqs && detail.faqs.length > 0 && (
              <Accordion items={detail.faqs} title={detail.faqsTitle} />
            )}

            <ServiceAppointmentForm defaultService="heat-pumps" />
          </div>
        </div>
      </Container>

      {detail?.showBrands && <OurBrands />}
      {detail?.closingCta && <ServiceClosingCta cta={detail.closingCta} />}
    </>
  );
}

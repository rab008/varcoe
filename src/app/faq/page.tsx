import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/shared/Accordion";
import { FaqTimerVideos } from "@/features/faq/components/FaqTimerVideos";
import { faqContent } from "@/features/faq/faq-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common heat pump questions — filters, defrost mode, remotes, timers and servicing — plus video guides for setting your timer.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ | ${siteConfig.name}`,
    description:
      "Common heat pump questions answered by Varcoe's Auckland team.",
    url: "/faq",
  },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent.items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageBanner
        title={faqContent.title}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />

      <Container className="py-16 lg:py-24">
        <p className="mx-auto max-w-3xl text-center text-muted">
          {faqContent.intro}
        </p>
        <div className="mx-auto mt-10 max-w-3xl">
          <Accordion items={faqContent.items} />
        </div>
      </Container>

      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow={faqContent.timer.eyebrow}
            title={faqContent.timer.title}
            intro={faqContent.timer.intro}
          />
          <div className="mt-12">
            <FaqTimerVideos videos={faqContent.timer.videos} />
          </div>

          <div className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 rounded-lg border border-border bg-white px-6 py-10 text-center shadow-card">
            <p className="text-lg text-ink">{faqContent.contact.text}</p>
            <Button href={faqContent.contact.cta.href} variant="cta">
              {faqContent.contact.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

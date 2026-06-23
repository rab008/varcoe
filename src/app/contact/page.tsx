import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { Container } from "@/components/ui/Container";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { ContactInfo } from "@/features/contact/components/ContactInfo";
import { ContactMap } from "@/features/contact/components/ContactMap";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Varcoe — request a quote or ask us anything about heat pumps and air conditioning across Auckland.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: "Request a quote or ask our Auckland team anything.",
    url: "/contact",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Contact",
      item: `${siteConfig.url}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title="Contact Us"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      />
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <Container className="py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <ServiceAppointmentForm
            eyebrow="Get in touch"
            heading="Drop a Message"
            intro="Send us a few details and our Auckland team will be in touch."
            note=""
          />
          <ContactInfo />
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <ContactMap />
        </div>
      </Container>
    </>
  );
}

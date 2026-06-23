import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { servicesSection } from "@/features/home/home-content";
import { services } from "@/features/services/services-data";

export function ServicesGrid() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          intro={servicesSection.intro}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-block font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            View all services &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}

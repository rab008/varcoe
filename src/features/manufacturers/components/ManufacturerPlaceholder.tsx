import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { Manufacturer } from "@/features/manufacturers/manufacturers-data";

/**
 * Minimal placeholder body for a brand page: the brand logo, a short "supplies &
 * installs" line, and a contact CTA. No fabricated brand-specific claims — real
 * copy is a follow-up. Server Component.
 */
export function ManufacturerPlaceholder({ brand }: { brand: Manufacturer }) {
  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <div className="relative h-16 w-48">
          <Image
            src={brand.logo.src}
            alt={brand.logo.alt}
            fill
            sizes="12rem"
            className="object-contain object-left"
          />
        </div>
        <p className="mt-6 text-lg text-muted">
          Varcoe supplies, installs and services{" "}
          <span className="font-semibold text-ink">{brand.name}</span> heat
          pumps and air conditioning across Auckland.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="cta">
            Get a free quote
          </Button>
          <Button href="/services" variant="outline">
            View our services
          </Button>
        </div>
      </Container>
    </section>
  );
}

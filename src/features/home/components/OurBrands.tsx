import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { brands } from "@/features/home/home-content";

export function OurBrands() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={brands.eyebrow}
          title={brands.title}
          intro={brands.intro}
        />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {brands.items.map((brand) => (
            <li
              key={brand.name}
              className="flex flex-col items-center rounded-md border border-border bg-white p-6 text-center shadow-card"
            >
              <Image
                src={brand.image.src}
                alt={brand.image.alt}
                width={220}
                height={80}
                className="h-16 w-auto"
              />
              <p className="mt-4 text-xl font-bold text-primary">
                {brand.name}
              </p>
              <p className="mt-2 text-sm text-muted">{brand.blurb}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

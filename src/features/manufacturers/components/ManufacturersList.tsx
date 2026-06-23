import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { manufacturers } from "@/features/manufacturers/manufacturers-data";

/**
 * Manufacturers archive body — each brand as a logo card linking to its page.
 * Server Component.
 */
export function ManufacturersList() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <p className="max-w-2xl text-muted">
          Varcoe supplies and installs heat pumps and air conditioning from the
          industry&rsquo;s leading brands. Choose a manufacturer to learn more.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {manufacturers.map((brand) => (
            <li key={brand.slug}>
              <Link
                href={`/manufacturers/${brand.slug}`}
                className="group flex flex-col items-center gap-4 rounded-lg border border-border bg-white p-8 text-center shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="relative h-16 w-full">
                  <Image
                    src={brand.logo.src}
                    alt={brand.logo.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain"
                  />
                </span>
                <span className="font-bold text-ink transition-colors group-hover:text-primary">
                  {brand.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

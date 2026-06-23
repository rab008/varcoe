import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { products } from "@/features/products/products-data";

/**
 * Products archive body — each product as a card linking to its page.
 * Server Component.
 */
export function ProductsList() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <p className="max-w-2xl text-muted">
          Heat pump, air conditioning, refrigeration and energy-efficiency
          solutions Varcoe supplies and installs across Auckland.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.slug}>
              <Link
                href={`/products/${product.slug}`}
                className="group flex h-full items-center justify-between gap-3 rounded-lg border border-border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-semibold text-ink transition-colors group-hover:text-primary">
                  {product.name}
                </span>
                <Icon
                  name="check"
                  className="h-5 w-5 shrink-0 text-cta"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

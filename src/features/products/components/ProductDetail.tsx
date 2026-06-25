import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { CommercialTypes } from "@/features/products/components/CommercialTypes";
import { products } from "@/features/products/products-data";
import type { ProductContent } from "@/features/products/product-content";

/** Left rail: product nav (current highlighted) + a contact CTA card. */
function ProductSidebar({
  currentSlug,
  sidebar,
}: {
  currentSlug: string;
  sidebar: ProductContent["sidebar"];
}) {
  return (
    <aside className="space-y-8">
      <nav aria-label="Products">
        <ul className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
          <li>
            <Link
              href="/products"
              className="flex items-center justify-between gap-2 border-b border-border bg-surface px-5 py-4 font-semibold text-ink transition-colors hover:text-primary"
            >
              View All Products
              <Icon name="gear" className="h-4 w-4 text-muted" />
            </Link>
          </li>
          {products.map((product) => {
            const active = product.slug === currentSlug;
            return (
              <li
                key={product.slug}
                className="border-b border-border last:border-b-0"
              >
                <Link
                  href={`/products/${product.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "flex items-center gap-3 border-l-4 border-accent bg-primary px-5 py-4 font-semibold text-white"
                      : "flex items-center gap-3 border-l-4 border-transparent px-5 py-4 font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                  }
                >
                  {product.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-lg bg-surface p-6 text-center shadow-card">
        <h2 className="text-lg font-bold text-ink">{sidebar.ctaTitle}</h2>
        <p className="mt-2 text-sm text-muted">{sidebar.ctaBody}</p>
        <Button href={sidebar.cta.href} variant="cta" className="mt-5">
          {sidebar.cta.label}
        </Button>
      </div>
    </aside>
  );
}

/**
 * Product page body — two-column (sidebar + main), mirroring the service-detail
 * template. Static Server Component driven by `content`. Brands and the closing
 * CTA are composed by the route after this component.
 */
export function ProductDetail({
  content,
  currentSlug,
}: {
  content: ProductContent;
  currentSlug: string;
}) {
  const { intro, typesTitle, types, sidebar } = content;

  return (
    <Container className="py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
        {/* Sidebar — after main in source order on mobile */}
        <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start">
          <ProductSidebar currentSlug={currentSlug} sidebar={sidebar} />
        </div>

        {/* Main column */}
        <div className="order-1 space-y-14 lg:order-2">
          <p className="text-lg text-muted">{intro}</p>

          <CommercialTypes title={typesTitle} types={types} />

          <ServiceAppointmentForm
            eyebrow="Get in touch"
            heading="Request a Quote"
            intro="Send us a few details and our Auckland team will be in touch."
            note=""
          />
        </div>
      </div>
    </Container>
  );
}

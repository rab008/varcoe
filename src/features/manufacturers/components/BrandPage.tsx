import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { manufacturers } from "@/features/manufacturers/manufacturers-data";
import type {
  BrandContent,
  BrandCta,
  BrandProduct,
} from "@/features/manufacturers/brand-content";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

/** A single brand product card with a Download Brochure link. */
function ProductCard({ product }: { product: BrandProduct }) {
  return (
    <li className="flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card">
      <div
        aria-hidden="true"
        className="grid aspect-4/3 w-full place-items-center bg-primary/5 text-primary/40"
      >
        <Icon name="snowflake" className="h-14 w-14" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{product.description}</p>
        <a
          href={product.brochureHref}
          {...EXTERNAL}
          aria-label={`Download brochure — ${product.name} (opens in a new tab)`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Icon name="mail" className="h-4 w-4" aria-hidden="true" />
          Download Brochure
        </a>
      </div>
    </li>
  );
}

/** Left rail: manufacturer nav (current highlighted) + a quote CTA card. */
function ManufacturerSidebar({
  currentSlug,
  cta,
}: {
  currentSlug: string;
  cta: BrandCta;
}) {
  return (
    <aside className="space-y-8">
      <nav aria-label="Manufacturers">
        <ul className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
          <li>
            <Link
              href="/manufacturers"
              className="flex items-center justify-between gap-2 border-b border-border bg-surface px-5 py-4 font-semibold text-ink transition-colors hover:text-primary"
            >
              All Manufacturers
              <Icon name="gear" className="h-4 w-4 text-muted" />
            </Link>
          </li>
          {manufacturers.map((m) => {
            const active = m.slug === currentSlug;
            return (
              <li
                key={m.slug}
                className="border-b border-border last:border-b-0"
              >
                <Link
                  href={`/manufacturers/${m.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "flex items-center gap-3 border-l-4 border-accent bg-primary px-5 py-4 font-semibold text-white"
                      : "flex items-center gap-3 border-l-4 border-transparent px-5 py-4 font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                  }
                >
                  {m.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-lg bg-surface p-6 text-center shadow-card">
        <h2 className="text-lg font-bold text-ink">Request a Free Quote</h2>
        <p className="mt-2 text-sm text-muted">
          Get a no-obligation quote from Auckland&apos;s heat pump experts.
        </p>
        <Button href={cta.href} variant="cta" className="mt-5">
          {cta.label}
        </Button>
      </div>
    </aside>
  );
}

/**
 * Manufacturer brand page body — two-column (sidebar + main), mirroring the
 * service-detail template. Static Server Component driven by `content`: hero
 * intro, brand story, unique technologies, authorised-dealer block, product grid
 * (with brochures), and an enquiry form; then a full-width online-store CTA band.
 * Testimonials and brands are composed by the route after this component.
 */
export function BrandPage({
  content,
  slug,
}: {
  content: BrandContent;
  slug: string;
}) {
  const { hero, intro, technologies, dealer, products, store } = content;

  return (
    <>
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Sidebar — after main in source order on mobile */}
          <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start">
            <ManufacturerSidebar currentSlug={slug} cta={hero.primaryCta} />
          </div>

          {/* Main column */}
          <div className="order-1 space-y-14 lg:order-2">
            {/* Hero intro (H1 is the PageBanner; this is the lead-in) */}
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cta">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-6 rounded-full bg-cta"
                />
                {hero.eyebrow}
              </p>
              <p className="mt-4 text-lg text-muted">{hero.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={hero.primaryCta.href} variant="cta">
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            {/* Brand story */}
            <section>
              <p className="text-xl font-semibold text-primary">{intro.lead}</p>
              <div className="mt-6 space-y-4 text-muted">
                {intro.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>

            {/* Unique technologies */}
            <section>
              <SectionHeading title={technologies.title} align="left" />
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {technologies.items.map((tech) => (
                  <li
                    key={tech.title}
                    className="flex items-start gap-4 rounded-lg border border-border bg-white p-6 shadow-card"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon name="sparkle" className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{tech.title}</h3>
                      <p className="mt-1 text-sm text-muted">{tech.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* Authorised dealer */}
            <section>
              <SectionHeading title={dealer.title} align="left" />
              <div className="mt-6 space-y-4 text-muted">
                {dealer.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className="mt-6">
                <Button href={dealer.cta.href} variant="cta">
                  {dealer.cta.label}
                </Button>
              </div>
            </section>

            {/* Our products */}
            <section>
              <SectionHeading title={products.title} align="left" />
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {products.items.map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </ul>
            </section>

            {/* Enquiry form */}
            <ServiceAppointmentForm
              eyebrow="Get in touch"
              heading="Request a Free Quote"
              intro="Send us a few details and our Auckland team will be in touch."
              note=""
            />
          </div>
        </div>
      </Container>

      {/* Online store CTA (full-width band) */}
      <section className="pb-16 lg:pb-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-md bg-primary px-6 py-12 text-center text-white sm:px-12">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {store.title}
            </h2>
            <p className="max-w-xl text-lg text-white/80">{store.body}</p>
            <Button href={store.cta.href} variant="cta" {...EXTERNAL}>
              {store.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

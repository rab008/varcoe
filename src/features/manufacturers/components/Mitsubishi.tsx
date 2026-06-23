import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import {
  mitsubishi,
  type MitsuProduct,
} from "@/features/manufacturers/mitsubishi-content";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

/** A single Mitsubishi product card with a Download Brochure link (external). */
function ProductCard({ product }: { product: MitsuProduct }) {
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

/**
 * Mitsubishi Electric brand page body. Static Server Component — hero intro,
 * brand story, unique technologies, authorised-dealer block, product grid (with
 * external brochures), online-store CTA, and an enquiry form. Testimonials and
 * brands are composed by the route after this component.
 */
export function Mitsubishi() {
  const { hero, intro, technologies, dealer, products, store } = mitsubishi;

  return (
    <>
      {/* Hero intro (H1 is the PageBanner; this is the lead-in) */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-cta">
            <span
              aria-hidden="true"
              className="h-0.5 w-6 rounded-full bg-cta"
            />
            {hero.eyebrow}
          </p>
          <p className="mt-4 text-lg text-muted">{hero.tagline}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={hero.primaryCta.href} variant="cta">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* Brand intro */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <p className="text-xl font-semibold text-primary">{intro.lead}</p>
          <div className="mt-6 space-y-4 text-muted">
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Unique technologies */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading title={technologies.title} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
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
        </Container>
      </section>

      {/* Authorised dealer */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
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
        </Container>
      </section>

      {/* Our products */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading title={products.title} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.items.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </ul>
        </Container>
      </section>

      {/* Online store CTA */}
      <section className="py-16 lg:py-20">
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

      {/* Enquiry form */}
      <section className="pb-16 lg:pb-24">
        <Container className="max-w-3xl">
          <ServiceAppointmentForm
            eyebrow="Get in touch"
            heading="Request a Free Quote"
            intro="Send us a few details and our Auckland team will be in touch about your Mitsubishi Electric system."
            note=""
          />
        </Container>
      </section>
    </>
  );
}

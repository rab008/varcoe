import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { manufacturersPage } from "@/features/manufacturers/manufacturers-page-content";
import { siteConfig } from "@/lib/site";

/** Tokenised placeholder figure for a brand row (swap for a real image later). */
function BrandFigure() {
  return (
    <div
      aria-hidden="true"
      className="grid aspect-4/3 w-full place-items-center rounded-lg bg-primary/5 text-primary/40 shadow-card"
    >
      <Icon name="snowflake" className="h-16 w-16" />
    </div>
  );
}

/**
 * `/manufacturers` editorial page body. Static Server Component — custom hero,
 * partnership feature cards, alternating brand rows, commercial/specialty,
 * how-we-work, and a get-started contact card + enquiry form. Internal links only.
 */
export function ManufacturersOverview() {
  const { hero, whyMatter, brands, commercial, howWeWork, getStarted } =
    manufacturersPage;
  const { phone, displayPhone, email, address } = siteConfig.business;

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="max-w-3xl text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-wide text-cta">
            <span
              aria-hidden="true"
              className="h-0.5 w-6 rounded-full bg-cta"
            />
            {hero.eyebrow}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {hero.title}
          </h1>
          <p className="mt-5 text-lg text-muted">{hero.intro}</p>
          <div className="mt-8">
            <Button href={hero.cta.href} variant="cta">
              {hero.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* Why partnerships matter */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading title={whyMatter.title} intro={whyMatter.intro} />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {whyMatter.points.map((point) => (
              <li
                key={point.title}
                className="rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon name={point.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Our key brands — alternating text + image rows */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading title={brands.title} />
          <div className="mt-12 space-y-12 lg:space-y-16">
            {brands.items.map((brand, i) => {
              const imageRight = i % 2 === 0;
              return (
                <article
                  key={brand.name}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  <div className={imageRight ? "" : "lg:order-last"}>
                    <h3 className="text-2xl font-bold text-ink">
                      {brand.name}
                    </h3>
                    <div className="mt-4 space-y-4 text-muted">
                      {brand.paragraphs.map((p) => (
                        <p key={p}>{p}</p>
                      ))}
                    </div>
                  </div>
                  <BrandFigure />
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Commercial & specialty */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-3xl">
          <SectionHeading title={commercial.title} align="left" />
          <div className="mt-6 space-y-4 text-muted">
            {commercial.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* How we work */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading title={howWeWork.title} intro={howWeWork.intro} />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {howWeWork.points.map((point) => (
              <li
                key={point.title}
                className="rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <h3 className="flex items-center gap-3 text-lg font-semibold text-ink">
                  <Icon
                    name="check"
                    className="h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  {point.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{point.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Get started — contact card + form */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading title={getStarted.title} intro={getStarted.intro} />
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="rounded-lg bg-dark p-8 text-white">
              <h3 className="text-xl font-bold">Talk to us</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent">
                      <Icon
                        name="phone"
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-white/60">
                        Freephone
                      </span>
                      <span className="block text-lg font-bold">
                        {displayPhone}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent">
                      <Icon
                        name="mail"
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-white/60">
                        Email
                      </span>
                      <span className="block text-lg font-bold">{email}</span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-accent">
                    <Icon name="pin" className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-white/60">
                      Showroom
                    </span>
                    <span className="block font-semibold">
                      {address.street}, {address.locality}, {address.region}
                    </span>
                  </span>
                </li>
              </ul>
            </div>

            <ServiceAppointmentForm
              eyebrow="Get in touch"
              heading="Request a Free Quote"
              intro="Send us a few details and our Auckland team will be in touch."
              note=""
            />
          </div>
        </Container>
      </section>
    </>
  );
}

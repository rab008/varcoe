import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { locations } from "@/features/locations/locations-data";
import type { LocationContent } from "@/features/locations/location-content";
import { siteConfig } from "@/lib/site";

/**
 * Left rail: locations nav (active area highlighted, with its suburbs as
 * sub-links — active suburb highlighted) + a localised contact CTA card.
 */
function LocationSidebar({
  name,
  currentAreaSlug,
  currentSuburbSlug,
}: {
  name: string;
  currentAreaSlug: string;
  currentSuburbSlug?: string;
}) {
  return (
    <aside className="space-y-8">
      <nav aria-label="Locations">
        <ul className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
          <li>
            <Link
              href="/locations"
              className="flex items-center justify-between gap-2 border-b border-border bg-surface px-5 py-4 font-semibold text-ink transition-colors hover:text-primary"
            >
              All Locations
              <Icon name="pin" className="h-4 w-4 text-muted" />
            </Link>
          </li>
          {locations.map((area) => {
            const areaActive = area.slug === currentAreaSlug;
            const showSuburbs = areaActive && area.suburbs.length > 0;
            return (
              <li
                key={area.slug}
                className="border-b border-border last:border-b-0"
              >
                <Link
                  href={`/locations/${area.slug}`}
                  aria-current={
                    areaActive && !currentSuburbSlug ? "page" : undefined
                  }
                  className={
                    areaActive
                      ? "flex items-center gap-3 border-l-4 border-accent bg-primary px-5 py-4 font-semibold text-white"
                      : "flex items-center gap-3 border-l-4 border-transparent px-5 py-4 font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                  }
                >
                  {area.name}
                </Link>

                {showSuburbs && (
                  <ul className="border-t border-border bg-surface">
                    {area.suburbs.map((suburb) => {
                      const suburbActive = suburb.slug === currentSuburbSlug;
                      return (
                        <li key={suburb.slug}>
                          <Link
                            href={`/locations/${area.slug}/${suburb.slug}`}
                            aria-current={suburbActive ? "page" : undefined}
                            className={
                              suburbActive
                                ? "flex items-center gap-2 border-l-4 border-accent bg-primary/5 py-3 pl-10 pr-5 text-sm font-semibold text-primary"
                                : "flex items-center gap-2 border-l-4 border-transparent py-3 pl-10 pr-5 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-primary"
                            }
                          >
                            {suburb.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-lg bg-surface p-6 text-center shadow-card">
        <h2 className="text-lg font-bold text-ink">Book a free assessment</h2>
        <p className="mt-2 text-sm text-muted">
          Tell us about your home and our {name} team will be in touch.
        </p>
        <Button href="/contact" variant="cta" className="mt-5">
          Get a Free Quote
        </Button>
      </div>
    </aside>
  );
}

/** Section heading + paragraphs helper. */
function Prose({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: readonly string[];
}) {
  return (
    <section aria-label={title}>
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <div className="mt-4 space-y-4 text-muted">
        {paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </section>
  );
}

/**
 * Location page body — two-column (sidebar + main), mirroring the service-detail
 * template. Static Server Component driven by `content`. Reviews, brands and the
 * closing CTA are composed by the route after this component.
 */
export function LocationDetail({
  content,
  currentAreaSlug,
  currentSuburbSlug,
}: {
  content: LocationContent;
  currentAreaSlug: string;
  currentSuburbSlug?: string;
}) {
  const {
    name,
    hero,
    keyTakeaways,
    whyChoose,
    whatWeProvide,
    howItWorks,
    systems,
    readyToUpgrade,
  } = content;
  const { phone, displayPhone, email } = siteConfig.business;

  return (
    <Container className="py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
        {/* Sidebar — after main in source order on mobile */}
        <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start">
          <LocationSidebar
            name={name}
            currentAreaSlug={currentAreaSlug}
            currentSuburbSlug={currentSuburbSlug}
          />
        </div>

        {/* Main column */}
        <div className="order-1 space-y-14 lg:order-2">
          {/* Hero intro */}
          <section>
            <p className="text-lg text-muted">{hero.intro}</p>
            <div className="mt-6">
              <Button href={hero.cta.href} variant="cta">
                {hero.cta.label}
              </Button>
            </div>
          </section>

          {/* Key Takeaways */}
          <section
            aria-label={keyTakeaways.title}
            className="rounded-lg border border-border bg-surface p-6 shadow-card sm:p-8"
          >
            <h2 className="text-2xl font-bold text-ink">
              {keyTakeaways.title}
            </h2>
            <p className="mt-3 text-muted">{keyTakeaways.intro}</p>
            <ol className="mt-5 space-y-4">
              {keyTakeaways.points.map((point, i) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-muted">{point}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Why choose Varcoe */}
          <section aria-label={whyChoose.title}>
            <h2 className="text-2xl font-bold text-ink">{whyChoose.title}</h2>
            <div className="mt-4 space-y-4 text-muted">
              {whyChoose.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 space-y-3">
              {whyChoose.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-muted">
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </section>

          <Prose
            title={whatWeProvide.title}
            paragraphs={whatWeProvide.paragraphs}
          />

          <Prose title={howItWorks.title} paragraphs={howItWorks.paragraphs} />

          <section aria-label={systems.title}>
            <h2 className="text-2xl font-bold text-ink">{systems.title}</h2>
            <p className="mt-4 text-muted">{systems.body}</p>
          </section>

          {/* Ready to upgrade — phone + email */}
          <section
            aria-label={readyToUpgrade.title}
            className="rounded-lg bg-dark p-8 text-white"
          >
            <h2 className="text-2xl font-bold">{readyToUpgrade.title}</h2>
            <p className="mt-3 text-white/80">{readyToUpgrade.body}</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon name="phone" className="h-4 w-4" aria-hidden="true" />
                {displayPhone}
              </a>
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <Icon name="mail" className="h-4 w-4" aria-hidden="true" />
                {email}
              </a>
            </div>
            <p className="mt-6 text-sm font-semibold text-accent">
              {readyToUpgrade.stat}
            </p>
          </section>

          <ServiceAppointmentForm
            eyebrow="Get in touch"
            heading="Request a Free Quote"
            intro={`Send us a few details and our ${name} team will be in touch.`}
            note=""
          />
        </div>
      </div>
    </Container>
  );
}

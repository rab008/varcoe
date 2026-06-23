import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/shared/SectionHeading";
import {
  heatPumpSpecials,
  type SpecialOffer,
} from "@/features/offers/heat-pump-specials-content";

/**
 * Shared tokenised placeholder figure (reused by "Why Choose Varcoe?" and
 * "How It Works"). Swap the inner markup for a `next/image` when a real image
 * is supplied — one change updates both sections.
 */
function SpecialsFigure({
  icon,
  className = "",
}: {
  icon: IconName;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`grid aspect-4/3 w-full place-items-center rounded-lg bg-primary/5 text-primary/40 shadow-card ${className}`}
    >
      <Icon name={icon} className="h-20 w-20" />
    </div>
  );
}

/** Bulleted list with a check icon. */
function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted">
          <Icon
            name="check"
            className="mt-0.5 h-5 w-5 shrink-0 text-primary"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** A single special-offer card. */
function OfferCard({ offer }: { offer: SpecialOffer }) {
  return (
    <article className="rounded-lg border border-border bg-white p-6 shadow-card sm:p-8">
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">{offer.title}</h2>
      {offer.lead && <p className="mt-3 text-muted">{offer.lead}</p>}

      {offer.deal && (
        <p className="mt-4 text-muted">
          {offer.dealLabel && (
            <span className="font-semibold text-ink">{offer.dealLabel} </span>
          )}
          {offer.deal}
        </p>
      )}

      {offer.bullets && (
        <div className="mt-5">
          {offer.bulletsLabel && (
            <h3 className="mb-3 font-semibold text-ink">
              {offer.bulletsLabel}
            </h3>
          )}
          <CheckList items={offer.bullets} />
        </div>
      )}

      {offer.reason && (
        <p className="mt-5 text-muted">
          {offer.reasonLabel && (
            <span className="font-semibold text-ink">{offer.reasonLabel} </span>
          )}
          {offer.reason}
        </p>
      )}

      {offer.qualify && (
        <div className="mt-5">
          {offer.qualifyLabel && (
            <h3 className="mb-3 font-semibold text-ink">
              {offer.qualifyLabel}
            </h3>
          )}
          <CheckList items={offer.qualify} />
        </div>
      )}

      {offer.steps && (
        <div className="mt-5">
          {offer.stepsLabel && (
            <h3 className="mb-3 font-semibold text-ink">{offer.stepsLabel}</h3>
          )}
          <ol className="ml-5 list-decimal space-y-2 text-muted marker:font-semibold marker:text-primary">
            {offer.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      {offer.example && (
        <p className="mt-5 rounded-md bg-surface p-4 text-sm text-ink">
          {offer.exampleLabel && (
            <span className="font-semibold">{offer.exampleLabel} </span>
          )}
          {offer.example}
        </p>
      )}

      <div className="mt-6">
        <Button href={offer.cta.href} variant="cta">
          {offer.cta.label}
        </Button>
      </div>
    </article>
  );
}

/**
 * `/offers` "Heat Pump Specials" page body. Static Server Component — custom
 * hero, special-offer cards, a Warmer Kiwi Homes CTA, why-Varcoe, how-it-works,
 * and a final CTA. All CTAs are internal links.
 */
export function HeatPumpSpecials() {
  const { hero, offers, wkhCta, whyVarcoe, howItWorks, finalCta } =
    heatPumpSpecials;

  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-16 lg:py-24">
        <Container className="max-w-3xl text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
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

      {/* Special offers */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            {offers.map((offer) => (
              <OfferCard key={offer.title} offer={offer} />
            ))}
          </div>
        </Container>
      </section>

      {/* Warmer Kiwi Homes CTA band */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-md bg-primary px-6 py-12 text-center text-white sm:px-12">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {wkhCta.title}
            </h2>
            <p className="max-w-xl text-lg text-white/80">{wkhCta.body}</p>
            <Button href={wkhCta.cta.href} variant="cta">
              {wkhCta.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* Why Choose Varcoe */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-xl">
              <SectionHeading
                title={whyVarcoe.title}
                intro={whyVarcoe.subtitle}
                align="left"
              />
              <p className="mt-6 text-muted">{whyVarcoe.body}</p>
              <div className="mt-6">
                <CheckList items={whyVarcoe.points} />
              </div>
            </div>
            <SpecialsFigure icon="medal" />
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <SpecialsFigure
              icon="headset"
              className="order-last lg:order-first"
            />
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {howItWorks.title}
              </h2>
              <ol className="mt-6 space-y-4">
                {howItWorks.steps.map((step, i) => (
                  <li key={step} className="flex items-start gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <span className="text-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 font-semibold text-ink">{howItWorks.note}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {finalCta.title}
          </h2>
          <div className="mt-8">
            <Button href={finalCta.cta.href} variant="cta">
              {finalCta.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Accordion } from "@/components/shared/Accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { warmerKiwiHomes } from "@/features/offers/warmer-kiwi-homes-content";
import { siteConfig } from "@/lib/site";

const PATH = "/offers/warmer-kiwi-homes";
const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

/** Bulleted list with a check icon — reused across the page. */
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

/**
 * Shared hero figure, reused in the hero, eligibility and benefits sections.
 * Tokenised placeholder for now — swap the inner markup for a `next/image` when
 * a real Warmer Kiwi Homes image is supplied (one change updates all three).
 */
function WkhFigure({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`grid aspect-4/3 w-full place-items-center rounded-lg bg-primary/5 text-primary/40 shadow-card ${className}`}
    >
      <Icon name="thermostat" className="h-20 w-20" />
    </div>
  );
}

/**
 * Warmer Kiwi Homes landing page view. Static Server Component rendered by the
 * `/offers/[slug]` route for the `warmer-kiwi-homes` slug. The brands and
 * testimonials sections are injected as `children` by the route (app layer) to
 * keep the offers feature decoupled from the home feature. EECA links open in a
 * new tab with rel="noopener noreferrer".
 */
export function WarmerKiwiHomes({ children }: { children?: ReactNode }) {
  const {
    hero,
    intro,
    whatIs,
    whyVarcoe,
    eligibility,
    process,
    benefits,
    faqs,
    finalCta,
  } = warmerKiwiHomes;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Offers",
          item: `${siteConfig.url}/offers`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Warmer Kiwi Homes",
          item: `${siteConfig.url}${PATH}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Offers", href: "/offers" },
          { label: "Warmer Kiwi Homes" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-cta">
                <span
                  aria-hidden="true"
                  className="h-0.5 w-6 rounded-full bg-cta"
                />
                {hero.eyebrow}
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                {hero.title}
              </h1>
              <p className="mt-5 text-lg text-muted">
                {hero.bodyBefore}
                <Link
                  href={hero.bodyLinkHref}
                  className="font-semibold text-primary hover:underline"
                >
                  {hero.bodyLinkLabel}
                </Link>
                {hero.bodyAfter}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href={hero.primaryCta.href} variant="cta" {...EXTERNAL}>
                  {hero.primaryCta.label}
                </Button>
                <Button href={hero.secondaryCta.href} variant="outline">
                  {hero.secondaryCta.label}
                </Button>
              </div>
            </div>

            <WkhFigure />
          </div>
        </Container>
      </section>

      {/* Intro band */}
      <section className="py-16 lg:py-24">
        <Container className="max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {intro.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{intro.body}</p>
          <div className="mt-8">
            <Button href={intro.cta.href} variant="cta" {...EXTERNAL}>
              {intro.cta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* What is Warmer Kiwi Homes */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow={whatIs.eyebrow} title={whatIs.title} />
          <div className="mx-auto mt-10 max-w-3xl">
            <p className="text-muted">{whatIs.intro}</p>
            <div className="mt-6">
              <CheckList items={whatIs.bullets} />
            </div>
            <div className="mt-8 rounded-lg border border-border bg-white p-6 shadow-card">
              <p className="text-ink">{whatIs.fundingNote}</p>
            </div>
            <p className="mt-8 text-center text-xl font-bold text-primary">
              {whatIs.stat}
            </p>
            <figure className="mt-6 text-center">
              <blockquote className="text-lg italic text-ink">
                “{whatIs.quote}”
              </blockquote>
              <figcaption className="mt-2">
                <a
                  href={whatIs.videoUrl}
                  {...EXTERNAL}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cta hover:underline"
                >
                  <Icon
                    name="facebook"
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                  {whatIs.videoLabel}
                </a>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Why Choose Varcoe */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow={whyVarcoe.eyebrow} title={whyVarcoe.title} />
          <div className="mx-auto mt-10 grid max-w-4xl gap-10 md:grid-cols-2">
            <div>
              <p className="text-muted">{whyVarcoe.body}</p>
              <h3 className="mt-6 text-lg font-semibold text-ink">
                {whyVarcoe.handlesTitle}
              </h3>
              <div className="mt-4">
                <CheckList items={whyVarcoe.handles} />
              </div>
            </div>
            <ul className="space-y-4">
              {whyVarcoe.trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 rounded-lg border border-border bg-white p-5 shadow-card"
                >
                  <Icon
                    name="medal"
                    className="h-6 w-6 shrink-0 text-cta"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-ink">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Eligibility */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-xl">
              <SectionHeading
                eyebrow={eligibility.eyebrow}
                title={eligibility.title}
                align="left"
              />
              <div className="mt-8">
                <CheckList items={eligibility.criteria} />
              </div>
              <div className="mt-8 rounded-lg border border-border bg-white p-6 shadow-card">
                <p className="text-muted">{eligibility.insulationNote}</p>
              </div>
              <p className="mt-6 font-semibold text-ink">
                {eligibility.closing}
              </p>
              <div className="mt-6">
                <Button href={eligibility.cta.href} variant="cta" {...EXTERNAL}>
                  {eligibility.cta.label}
                </Button>
              </div>
            </div>
            <WkhFigure />
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow={process.eyebrow} title={process.title} />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <li
                key={step.step}
                className="rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-lg font-bold text-white">
                  {step.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-muted">{process.note}</p>
        </Container>
      </section>

      {/* Why install a heat pump */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <WkhFigure className="order-last lg:order-first" />
            <div className="max-w-xl">
              <SectionHeading
                eyebrow={benefits.eyebrow}
                title={benefits.title}
                align="left"
              />
              <div className="mt-8">
                <CheckList items={benefits.items} />
              </div>
              <p className="mt-8 text-sm text-muted">{benefits.note}</p>
              <div className="mt-6">
                <Button href={benefits.cta.href} variant="cta" {...EXTERNAL}>
                  {benefits.cta.label}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Brands + testimonials injected by the route (app-layer composition) */}
      {children}

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Warmer Kiwi Homes Questions" />
          <div className="mx-auto mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="flex flex-col items-center gap-6 rounded-md bg-primary px-6 py-12 text-center text-white sm:px-12">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
              {finalCta.title}
            </h2>
            <p className="max-w-xl text-lg text-white/80">{finalCta.body}</p>
            <Button href={finalCta.cta.href} variant="cta" {...EXTERNAL}>
              {finalCta.cta.label}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CalculatorEmbed } from "@/features/calculator/components/CalculatorEmbed";
import { RichParagraph } from "@/features/calculator/components/RichText";
import { calculatorContent } from "@/features/calculator/calculator-content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heat Pump Calculator",
  description:
    "Use Varcoe's free heat pump calculator to size the right system for your Auckland home, plus an expert guide to sizing factors and common mistakes.",
  alternates: { canonical: "/heat-pump-calculator" },
  openGraph: {
    title: `Heat Pump Calculator | ${siteConfig.name}`,
    description:
      "Free heat pump sizing calculator + expert sizing guide for Auckland homes.",
    url: "/heat-pump-calculator",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Heat Pump Calculator",
      item: `${siteConfig.url}/heat-pump-calculator`,
    },
  ],
};

export default function HeatPumpCalculatorPage() {
  const c = calculatorContent;

  return (
    <>
      <script
        type="application/ld+json"
        // First-party, self-authored structured data — sanctioned use.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <PageBanner
        title={c.title}
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      >
        <div className="space-y-4 text-lg text-white/90 [&_a]:font-semibold [&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent">
          {c.intro.map((para, i) => (
            <RichParagraph key={i} parts={para} />
          ))}
        </div>
      </PageBanner>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Heat Pump Calculator" },
        ]}
      />

      {/* Calculator — full content width */}
      <Container className="py-16 lg:py-24">
        <CalculatorEmbed />
      </Container>

      {/* Three paths */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold text-ink lg:text-3xl">
            {c.pathsHeading}
          </h2>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {c.paths.map((path) => (
              <li
                key={path.title}
                className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={path.image.src}
                    alt={path.image.alt}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <span className="absolute bottom-3 left-3 grid h-11 w-11 place-items-center rounded-full bg-cta text-white shadow-card">
                    <Icon name={path.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-ink">{path.title}</h3>
                  {"subtitle" in path && path.subtitle && (
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {path.subtitle}
                    </p>
                  )}
                  <div className="mt-2 space-y-3 text-sm text-muted">
                    {path.body.map((para, i) => (
                      <RichParagraph key={i} parts={para} />
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Button href={c.consultCta.href} variant="cta">
              {c.consultCta.label}
            </Button>
          </div>
        </Container>
      </section>

      {/* Why sizing matters — image + text band */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-card ring-1 ring-border">
              <Image
                src={c.why.image.src}
                alt={c.why.image.alt}
                fill
                unoptimized
                sizes="(max-width: 992px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ink lg:text-3xl">
                {c.why.title}
              </h2>
              <div className="mt-4 space-y-4 text-muted">
                {c.why.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Key factors */}
      <section className="bg-surface py-16 lg:py-24">
        <Container>
          <SectionHeading title={c.factors.title} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {c.factors.items.map((item, i) => (
              <li
                key={item.title}
                className="relative rounded-lg border border-border bg-white p-6 shadow-card"
              >
                <span
                  aria-hidden="true"
                  className="absolute right-5 top-5 text-3xl font-extrabold text-primary/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{item.title}</h3>
                <div className="mt-2 space-y-3 text-sm text-muted">
                  {item.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Common mistakes */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading title={c.mistakes.title} />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2">
            {c.mistakes.items.map((item, i) => (
              <li
                key={item.title}
                className="flex gap-4 rounded-lg border border-border border-l-4 border-l-cta bg-white p-6 shadow-card"
              >
                <span className="text-2xl font-extrabold text-cta/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Next steps — two-column CTA band */}
      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="relative isolate grid overflow-hidden rounded-lg bg-linear-to-br from-primary to-dark text-white shadow-lg lg:grid-cols-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="px-6 py-12 sm:px-10 lg:py-14">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {c.nextSteps.title}
              </h2>
              <div className="mt-4 space-y-4 text-white/85 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-accent">
                {c.nextSteps.paragraphs.map((para, i) => (
                  <RichParagraph key={i} parts={para} />
                ))}
              </div>
              <Button
                href={c.nextSteps.cta.href}
                variant="cta"
                className="mt-8"
              >
                {c.nextSteps.cta.label}
              </Button>
            </div>
            <div className="relative min-h-64 lg:min-h-full">
              <Image
                src={c.nextSteps.image.src}
                alt={c.nextSteps.image.alt}
                fill
                unoptimized
                sizes="(max-width: 992px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

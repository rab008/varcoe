import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { CalculatorEmbed } from "@/features/calculator/components/CalculatorEmbed";
import { SubPageShell } from "@/features/services/components/SubPageShell";
import { sizeCalculatorContent } from "@/features/heat-pumps/size-calculator-content";
import { siteConfig } from "@/lib/site";

const CANONICAL = "/service/heat-pumps/size-calculator";

export const metadata: Metadata = {
  title: "Heat Pump Size Calculator",
  description:
    "Work out the right heat pump size for your Auckland room with Varcoe's simple sizing formula and quick guide — then book a free in-home assessment to confirm.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: `Heat Pump Size Calculator | ${siteConfig.name}`,
    description:
      "A simple heat pump sizing formula + quick guide for Auckland homes, from Varcoe.",
    url: CANONICAL,
    images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${siteConfig.url}/service`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Heat Pumps",
      item: `${siteConfig.url}/service/heat-pumps`,
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Heat Pump Size Calculator",
      item: `${siteConfig.url}${CANONICAL}`,
    },
  ],
};

export default function HeatPumpSizeCalculatorPage() {
  const c = sizeCalculatorContent;

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
        <div className="space-y-4 text-lg text-white/90">
          {c.intro.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </PageBanner>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/service" },
          { label: "Heat Pumps", href: "/service/heat-pumps" },
          { label: "Heat Pump Size Calculator" },
        ]}
      />

      <SubPageShell
        serviceSlug="heat-pumps"
        serviceLabel="Heat Pumps"
        serviceHref="/service/heat-pumps"
        currentHref={CANONICAL}
      >
        <div className="space-y-12">
          {/* Calculator widget */}
          <CalculatorEmbed />

          {/* The formula — highlighted card */}
          <div className="rounded-lg bg-primary px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/70">
              {c.formula.heading}
            </h2>
            <p className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              {c.formula.expression}
            </p>
            <p className="mx-auto mt-5 max-w-2xl text-white/85">
              {c.formula.example}
            </p>
          </div>

          {/* Baseline adjustments */}
          <section aria-label={c.baseline.heading}>
            <h2 className="text-2xl font-bold text-ink">
              {c.baseline.heading}
            </h2>
            <p className="mt-3 text-muted">{c.baseline.lead}</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {c.baseline.items.map((item) => (
                <li
                  key={item.label}
                  className="rounded-lg border border-border bg-white p-5 text-center shadow-card"
                >
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                  <p className="mt-1 text-sm text-muted">{item.label}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Sizes you'll see */}
          <section aria-label={c.sizes.heading}>
            <h2 className="text-2xl font-bold text-ink">{c.sizes.heading}</h2>
            <ul className="mt-6 divide-y divide-border overflow-hidden rounded-lg border border-border bg-white shadow-card">
              {c.sizes.items.map((item) => (
                <li
                  key={item.size}
                  className="flex items-center gap-4 px-5 py-3.5 sm:gap-6"
                >
                  <span className="w-20 shrink-0 text-lg font-bold text-primary sm:w-24">
                    {item.size}
                  </span>
                  <span className="text-muted">{item.use}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm font-semibold text-ink">
              {c.sizes.note}
            </p>
          </section>

          {/* Variables to factor in */}
          <section aria-label={c.variables.heading}>
            <h2 className="text-2xl font-bold text-ink">
              {c.variables.heading}
            </h2>
            <ul className="mt-6 space-y-3">
              {c.variables.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-muted"
                >
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-semibold text-ink">
                      {item.label}:{" "}
                    </span>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* What you shouldn't do */}
          <div className="rounded-lg border border-border border-l-4 border-l-cta bg-white p-6 shadow-card sm:p-8">
            <h2 className="text-2xl font-bold text-ink">
              {c.mistakes.heading}
            </h2>
            <p className="mt-4 text-muted">{c.mistakes.body}</p>
          </div>

          {/* Professional assessment */}
          <div className="rounded-lg border border-border bg-surface p-6 shadow-card sm:p-8">
            <h2 className="text-2xl font-bold text-ink">
              {c.assessment.heading}
            </h2>
            <p className="mt-4 text-muted">{c.assessment.lead}</p>
            <ul className="mt-5 space-y-3">
              {c.assessment.points.map((point) => (
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
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Button href={c.assessment.cta.href} variant="cta">
                {c.assessment.cta.label}
              </Button>
              <div className="relative hidden aspect-4/3 w-40 overflow-hidden rounded-lg ring-1 ring-border sm:block">
                <Image
                  src={c.assessment.image.src}
                  alt={c.assessment.image.alt}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Quick sizing guide — table */}
          <section aria-label={c.guide.heading}>
            <h2 className="text-2xl font-bold text-ink">{c.guide.heading}</h2>
            <div className="mt-6 overflow-x-auto rounded-lg border border-border bg-white shadow-card">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface">
                    <th
                      scope="col"
                      className="px-4 py-3 font-semibold text-ink"
                    >
                      Room
                    </th>
                    {c.guide.columns.map((col) => (
                      <th
                        key={col}
                        scope="col"
                        className="px-4 py-3 font-semibold text-ink"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {c.guide.rooms.map((room) => (
                    <tr
                      key={room.name}
                      className="border-b border-border last:border-b-0"
                    >
                      <th
                        scope="row"
                        className="px-4 py-3 align-top font-semibold text-ink"
                      >
                        {room.name}
                        <span className="block text-xs font-normal text-muted">
                          {room.dims}
                        </span>
                      </th>
                      {room.values.map((value, i) => (
                        <td
                          key={c.guide.columns[i]}
                          className="px-4 py-3 align-top text-muted"
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm font-semibold text-ink">
              {c.guide.note}
            </p>
          </section>

          {/* Installation matters */}
          <section aria-label={c.installation.heading}>
            <h2 className="text-2xl font-bold text-ink">
              {c.installation.heading}
            </h2>
            <p className="mt-4 text-muted">{c.installation.body}</p>
            <ul className="mt-5 space-y-3">
              {c.installation.points.map((point) => (
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
            <Link
              href={c.installation.link.href}
              className="mt-6 inline-block font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {c.installation.link.label} →
            </Link>
          </section>
        </div>
      </SubPageShell>
    </>
  );
}

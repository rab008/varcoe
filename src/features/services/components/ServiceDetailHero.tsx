import { Button } from "@/components/ui/Button";
import type { Service } from "@/features/services/services-data";

/**
 * Service-detail intro block: blue subtitle, intro paragraphs and a "Get a free
 * quote" CTA. The page title/`<h1>` lives in the top `PageBanner` hero, so this
 * block carries no heading or image. Server Component.
 */
export function ServiceDetailHero({ service }: { service: Service }) {
  const detail = service.detail;
  const paragraphs = detail?.intro ?? [service.description];

  return (
    <section aria-label="Overview">
      {detail?.heroSubtitle && (
        <p className="text-lg font-bold uppercase tracking-wide text-primary">
          {detail.heroSubtitle}
        </p>
      )}
      <div className="mt-4 space-y-4 text-muted">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
      {detail && (
        <Button href="/contact" variant="cta" className="mt-6">
          Get a free quote
        </Button>
      )}
    </section>
  );
}

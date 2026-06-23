import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { CommercialType } from "@/features/products/commercial-heat-pumps-content";

const EXTERNAL = { target: "_blank", rel: "noopener noreferrer" } as const;

/**
 * Commercial heat pump type cards (image + title + description + manufacturer
 * brochure links). Static Server Component. Brochures open external PDFs in a
 * new tab. Sits inside the product-detail main column.
 */
export function CommercialTypes({
  title,
  types,
}: {
  title: string;
  types: readonly CommercialType[];
}) {
  return (
    <section aria-label={title}>
      <h2 className="text-2xl font-bold text-ink">{title}</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {types.map((type) => (
          <li
            key={type.name}
            className="flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card"
          >
            <div className="relative aspect-4/3 w-full bg-primary/5">
              {type.image ? (
                <Image
                  src={type.image.src}
                  alt={type.image.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 992px) 100vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="grid h-full w-full place-items-center text-primary/40"
                >
                  <Icon name="wind" className="h-14 w-14" />
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold text-ink">{type.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">
                {type.description}
              </p>

              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">
                Download Brochures
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {type.brochures.map((b) => (
                  <li key={b.brand}>
                    <a
                      href={b.href}
                      {...EXTERNAL}
                      aria-label={`${b.brand} brochure — ${type.name} (PDF, opens in a new tab)`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-semibold text-ink transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <Icon
                        name="mail"
                        className="h-3.5 w-3.5 text-cta"
                        aria-hidden="true"
                      />
                      {b.brand}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

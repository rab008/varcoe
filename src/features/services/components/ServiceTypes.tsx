import Image from "next/image";
import type { ServiceDetail } from "@/features/services/services-data";

type Types = NonNullable<ServiceDetail["types"]>;

/** Bare "types" grid — sits inside the service-detail main column (no full-bleed wrapper). */
export function ServiceTypes({ types }: { types: Types }) {
  return (
    <section aria-label={types.title}>
      <h2 className="text-2xl font-bold text-ink">{types.title}</h2>
      {types.lead && <p className="mt-3 text-muted">{types.lead}</p>}
      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {types.items.map((type) => (
          <li
            key={type.name}
            className="group flex flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={type.image.src}
                alt={type.image.alt}
                fill
                sizes="(max-width: 992px) 100vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="font-semibold text-ink">{type.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted">
                {type.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {type.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {tag}
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

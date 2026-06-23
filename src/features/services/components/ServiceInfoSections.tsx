import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { ServiceDetail } from "@/features/services/services-data";

type InfoSection = NonNullable<ServiceDetail["infoSections"]>[number];

/** Bare alternating info sections — sit inside the service-detail main column (no full-bleed wrapper). */
export function ServiceInfoSections({ sections }: { sections: InfoSection[] }) {
  return (
    <div className="space-y-12">
      {sections.map((section, i) => {
        const reversed = i % 2 === 1;
        return (
          <section
            key={section.title}
            aria-label={section.title}
            className="grid items-center gap-8 lg:grid-cols-2"
          >
            {section.image && (
              <div
                className={`relative aspect-4/3 overflow-hidden rounded-lg shadow-card ring-1 ring-border ${
                  reversed ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(max-width: 992px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>
            )}
            <div className={section.image ? "" : "lg:col-span-2"}>
              <h2 className="text-2xl font-bold text-ink">{section.title}</h2>
              {section.paragraphs?.map((para) => (
                <p key={para.slice(0, 32)} className="mt-4 text-muted">
                  {para}
                </p>
              ))}
              <ul className="mt-6 space-y-3">
                {section.points.map((point) => (
                  <li
                    key={point.text}
                    className="flex items-start gap-2 text-ink"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    />
                    <span className="text-sm">
                      {point.label && (
                        <span className="font-semibold">{point.label} — </span>
                      )}
                      {point.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </div>
  );
}

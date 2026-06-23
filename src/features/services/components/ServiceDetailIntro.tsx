import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/features/services/services-data";

export function ServiceDetailIntro({ service }: { service: Service }) {
  const detail = service.detail;
  const paragraphs = detail?.intro ?? [service.description];

  return (
    <section className="py-16 lg:py-24">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        {detail?.heroImage && (
          <div className="relative aspect-4/3 overflow-hidden rounded-lg shadow-card ring-1 ring-border">
            <Image
              src={detail.heroImage.src}
              alt={detail.heroImage.alt}
              fill
              unoptimized
              priority
              sizes="(max-width: 992px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}

        <div className={detail?.heroImage ? "" : "lg:col-span-2"}>
          <p className="text-sm font-semibold uppercase tracking-wide text-cta">
            {detail?.heroSubtitle ?? "Service details"}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {service.title}
          </h2>
          {paragraphs.map((para) => (
            <p key={para.slice(0, 32)} className="mt-4 text-muted">
              {para}
            </p>
          ))}

          {detail && (
            <div className="mt-8">
              <Button href="/contact" variant="cta">
                Get a Free Quote
              </Button>
            </div>
          )}

          {detail?.features && detail.features.length > 0 && (
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {detail.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-ink">
                  <Icon
                    name="check"
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                  />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}

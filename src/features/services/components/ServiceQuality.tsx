import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import type { ServiceDetail } from "@/features/services/services-data";

type Quality = NonNullable<ServiceDetail["quality"]>;

export function ServiceQuality({ quality }: { quality: Quality }) {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative order-last lg:order-first">
          <Image
            src={quality.image.src}
            alt={quality.image.alt}
            width={640}
            height={560}
            unoptimized
            sizes="(max-width: 992px) 100vw, 50vw"
            className="h-auto w-full rounded-md shadow-card"
          />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cta">
            About quality
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {quality.title}
          </h2>
          {quality.paragraphs.map((para) => (
            <p key={para.slice(0, 32)} className="mt-4 text-muted">
              {para}
            </p>
          ))}
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {quality.points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-ink">
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

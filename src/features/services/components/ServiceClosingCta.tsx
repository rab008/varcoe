import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { ServiceDetail } from "@/features/services/services-data";

type ClosingCta = NonNullable<ServiceDetail["closingCta"]>;

/**
 * Closing CTA band. With an `image`, renders a two-column layout (text + button
 * on the brand gradient, image alongside); without one, falls back to a centered
 * single column. Server Component.
 */
export function ServiceClosingCta({ cta }: { cta: ClosingCta }) {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="relative isolate overflow-hidden rounded-lg bg-linear-to-br from-primary to-dark text-white shadow-lg">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          />

          {cta.image ? (
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="px-6 py-12 sm:px-10 lg:py-14">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {cta.title}
                </h2>
                <p className="mt-4 text-lg text-white/80">{cta.body}</p>
                <Button href={cta.cta.href} variant="cta" className="mt-8">
                  {cta.cta.label}
                </Button>
              </div>
              <div className="relative min-h-64 self-stretch lg:min-h-full">
                <Image
                  src={cta.image.src}
                  alt={cta.image.alt}
                  fill
                  sizes="(max-width: 992px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 px-6 py-14 text-center sm:px-12">
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
                {cta.title}
              </h2>
              <p className="max-w-2xl text-lg text-white/80">{cta.body}</p>
              <Button href={cta.cta.href} variant="cta">
                {cta.cta.label}
              </Button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

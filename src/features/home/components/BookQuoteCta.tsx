import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { bookQuote } from "@/features/home/home-content";
import { siteConfig } from "@/lib/site";

/**
 * Homepage "Book a quote" CTA band. Static Server Component rendered directly
 * below the Air Conditioning & Heat Pumps section. Two-column layout: a
 * placeholder image alongside the heading, supporting copy, a phone link, and a
 * "Book a free quote" button. The section sits on a primary-blue backdrop with
 * a white content card floating on top.
 */
export function BookQuoteCta() {
  const { title, body, cta, image } = bookQuote;
  const { phone, displayPhone, hoursDisplay } = siteConfig.business;

  return (
    <section className="bg-primary py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-8 overflow-hidden rounded-lg bg-white shadow-card md:grid-cols-2 md:gap-0">
          <div className="relative aspect-4/3 w-full bg-primary/5 md:h-full">
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div
                aria-hidden="true"
                className="grid h-full w-full place-items-center text-primary/40"
              >
                <Icon name="wind" className="h-16 w-16" />
              </div>
            )}
          </div>

          <div className="p-8 lg:p-12">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-muted">{body}</p>

            <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button href={cta.href} variant="cta">
                {cta.label}
              </Button>
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 rounded-md px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                  <Icon name="phone" className="h-6 w-6" aria-hidden="true" />
                </span>
                <span className="text-left">
                  <span className="block text-xs uppercase tracking-wide text-muted">
                    {hoursDisplay}
                  </span>
                  <span className="block text-xl font-bold text-ink">
                    {displayPhone}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

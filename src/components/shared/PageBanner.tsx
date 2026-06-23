import type { ReactNode } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

type PageBannerImage = { src: string; alt: string };

type PageBannerProps = {
  title: string;
  /**
   * Optional background image. When provided, the hero renders the image
   * full-bleed under a brand-blue overlay with the title left-aligned (the
   * "Contact Style" look). Without it, the hero is the centered brand gradient.
   */
  image?: PageBannerImage;
  /** Optional supporting content rendered directly under the `<h1>` (e.g. a lead intro). */
  children?: ReactNode;
};

/**
 * Reusable page hero band: an `<h1>` title on the brand gradient (centered), or
 * over a full-bleed background image with a brand-blue overlay (left-aligned)
 * when `image` is provided. The breadcrumb is rendered separately (the shared
 * `Breadcrumb` bar below this band) so it's consistent site-wide.
 */
export function PageBanner({ title, image, children }: PageBannerProps) {
  if (image) {
    return (
      <section className="relative isolate overflow-hidden bg-dark text-white">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
        />
        {/* Brand-blue overlay — solid on the left for legibility, fading right. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-r from-primary via-primary/85 to-primary/30"
        />
        <Container className="relative py-20 lg:py-28">
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {children && <div className="mt-5 max-w-2xl">{children}</div>}
        </Container>
      </section>
    );
  }

  return (
    <section className="relative isolate overflow-hidden bg-linear-to-br from-primary to-dark text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
      />
      <Container className="relative py-20 text-center lg:py-28">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {children && <div className="mx-auto mt-5 max-w-2xl">{children}</div>}
      </Container>
    </section>
  );
}

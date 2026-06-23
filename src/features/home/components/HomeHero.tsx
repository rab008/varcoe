import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ServiceAppointmentForm } from "@/features/services/components/ServiceAppointmentForm";
import { hero } from "@/features/home/home-content";

export function HomeHero() {
  return (
    <section className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-surface lg:min-h-[640px]">
      {/* Full-bleed background photo (LCP) */}
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%]"
      />

      {/* Legibility scrims: left→right light gradient (all sizes) + extra wash on mobile */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/40 lg:to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/30 md:hidden"
      />

      <Container className="relative py-16 lg:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-sm font-semibold text-accent-dark">
              <Icon name="shield" className="h-4 w-4" />
              {hero.eyebrow}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-4 text-xl font-semibold text-primary">
              {hero.promise}
            </p>
            <p className="mt-3 max-w-lg text-lg text-ink/80">
              {hero.supporting}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={hero.primaryCta.href} variant="cta">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink">
              <Icon name="check" className="h-5 w-5 text-primary" />
              {hero.promo}
            </p>
          </div>

          <div className="w-full rounded-lg bg-white/60 p-6 shadow-card backdrop-blur-md sm:p-8 lg:justify-self-end">
            <ServiceAppointmentForm
              eyebrow="Get in touch"
              heading="Book a Free Quote"
              intro="Send us a few details and our Auckland team will be in touch."
              note=""
              transparent
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

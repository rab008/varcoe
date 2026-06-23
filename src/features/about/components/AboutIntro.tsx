import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { aboutIntro } from "@/features/about/about-content";

export function AboutIntro() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cta">
            {aboutIntro.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {aboutIntro.title}
          </h2>
          {aboutIntro.paragraphs.map((para) => (
            <p key={para.slice(0, 32)} className="mt-4 text-muted">
              {para}
            </p>
          ))}
          <ul className="mt-6 space-y-3">
            {aboutIntro.points.map((point) => (
              <li key={point} className="flex items-start gap-2 text-ink">
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={aboutIntro.cta.href} variant="cta">
              {aboutIntro.cta.label}
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image
            src={aboutIntro.image.src}
            alt={aboutIntro.image.alt}
            width={aboutIntro.image.width}
            height={aboutIntro.image.height}
            sizes="(max-width: 992px) 100vw, 50vw"
            className="h-auto w-full rounded-md shadow-card"
          />
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { diagnostics } from "@/features/home/home-content";
import { siteConfig } from "@/lib/site";

export function DiagnosticsCta() {
  return (
    <section className="bg-dark py-12 text-white">
      <Container className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            {diagnostics.title}
          </h2>
          <p className="mt-2 text-white/75">{diagnostics.subtitle}</p>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="inline-flex items-center gap-3 rounded-md px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-white/10 text-accent">
              <Icon name="phone" className="h-6 w-6" />
            </span>
            <span className="text-left">
              <span className="block text-xs uppercase tracking-wide text-white/60">
                {siteConfig.business.hoursDisplay}
              </span>
              <span className="block text-xl font-bold">
                {siteConfig.business.displayPhone}
              </span>
            </span>
          </a>
          <Button href={diagnostics.cta.href} variant="cta">
            {diagnostics.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

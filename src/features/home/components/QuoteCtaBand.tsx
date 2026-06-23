import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { quoteCta } from "@/features/home/home-content";

export function QuoteCtaBand() {
  return (
    <section className="bg-surface py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-md bg-primary px-6 py-12 text-center text-white sm:px-12">
          <h2 className="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            {quoteCta.title}
          </h2>
          <p className="max-w-xl text-lg text-white/80">{quoteCta.subtitle}</p>
          <Button href={quoteCta.cta.href} variant="cta">
            {quoteCta.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}

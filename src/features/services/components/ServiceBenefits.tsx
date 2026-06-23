import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function ServiceBenefits({
  benefits,
  brochureUrl,
}: {
  benefits: string[];
  brochureUrl?: string;
}) {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Benefits of Our Service
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-ink">
                <Icon
                  name="check"
                  className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                />
                <span className="text-sm font-medium">{benefit}</span>
              </li>
            ))}
          </ul>
          {brochureUrl && (
            <div className="mt-8">
              <Button href={brochureUrl} variant="primary">
                Download Brochure
              </Button>
            </div>
          )}
        </div>

        <aside className="rounded-md bg-primary p-8 text-white shadow-card">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Available for any service
          </p>
          <p className="mt-3 text-2xl font-bold">We can help.</p>
          <p className="mt-2 text-white/80">
            Talk to our team about the right solution for your home or business.
          </p>
          <Button href="/contact" variant="cta" className="mt-6 w-full">
            Contact Us
          </Button>
        </aside>
      </Container>
    </section>
  );
}

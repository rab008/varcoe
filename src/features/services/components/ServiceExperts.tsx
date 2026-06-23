import { Container } from "@/components/ui/Container";
import type { ServiceDetail } from "@/features/services/services-data";

type Experts = NonNullable<ServiceDetail["experts"]>;

export function ServiceExperts({ experts }: { experts: Experts }) {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container className="max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {experts.title}
        </h2>
        {experts.paragraphs.map((para) => (
          <p key={para.slice(0, 32)} className="mt-4 text-muted">
            {para}
          </p>
        ))}
      </Container>
    </section>
  );
}

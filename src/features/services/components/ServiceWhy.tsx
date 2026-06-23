import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { ServiceDetail } from "@/features/services/services-data";

type WhyList = NonNullable<ServiceDetail["whyList"]>;

export function ServiceWhy({ whyList }: { whyList: WhyList }) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading title={whyList.title} align="left" />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyList.items.map((item) => (
            <li
              key={item.label ?? item.text}
              className="rounded-lg border border-border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon name="check" className="h-6 w-6 text-primary" />
              {item.label && (
                <p className="mt-3 font-semibold text-ink">{item.label}</p>
              )}
              <p className="mt-1 text-sm text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

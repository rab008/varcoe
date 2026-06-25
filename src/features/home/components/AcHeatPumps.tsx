import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AcHeatPumpCard } from "@/features/home/components/AcHeatPumpCard";
import { acHeatPumps } from "@/features/home/home-content";

/**
 * Homepage "Air Conditioning and Heat Pumps" section. Static Server Component
 * rendering category cards directly below the Services grid. Each card links to
 * the air conditioning (Cooling) and heat pump (Heating) service pages.
 */
export function AcHeatPumps() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={acHeatPumps.eyebrow}
          title={acHeatPumps.title}
          intro={acHeatPumps.intro}
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {acHeatPumps.items.map((category) => (
            <li key={category.title}>
              <AcHeatPumpCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

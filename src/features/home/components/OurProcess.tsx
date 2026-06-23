import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { process } from "@/features/home/home-content";

export function OurProcess() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          intro={process.intro}
        />
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.items.map((item) => (
            <li
              key={item.step}
              className="flex gap-4 rounded-md border border-border bg-white p-6 shadow-card"
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-white"
                aria-hidden="true"
              >
                {item.step}
              </span>
              <div>
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { advantages } from "@/features/home/home-content";

export function AdvantagesBand() {
  return (
    <section className="bg-primary py-16 text-white lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={advantages.eyebrow}
          title={advantages.title}
          intro={advantages.intro}
          invert
        />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.items.map((item) => (
            <li key={item.title} className="text-center sm:text-left">
              <span className="inline-grid h-14 w-14 place-items-center rounded-md bg-white/10 text-accent">
                <Icon name={item.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/75">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

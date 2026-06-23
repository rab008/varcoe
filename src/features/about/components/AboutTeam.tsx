import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { team } from "@/features/about/about-content";

export function AboutTeam() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Our professionals" title="Our Team" />
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li
              key={member.name}
              className="flex flex-col rounded-md border border-border bg-white p-6 shadow-card"
            >
              <Image
                src={member.image.src}
                alt={member.image.alt}
                width={96}
                height={96}
                unoptimized
                className="h-24 w-24 rounded-full"
              />
              <h3 className="mt-4 text-lg font-semibold text-ink">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-cta">{member.role}</p>
              <p className="mt-3 text-sm text-muted">{member.bio}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

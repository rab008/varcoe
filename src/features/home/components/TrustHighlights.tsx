import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { highlights } from "@/features/home/home-content";

export function TrustHighlights() {
  return (
    <section
      aria-label="Why customers trust us"
      className="border-b border-border bg-white py-10"
    >
      <Container>
        <ul className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-accent/15 text-accent-dark">
                <Icon name={item.icon} className="h-6 w-6" />
              </span>
              <div>
                <h2 className="text-base font-semibold text-ink">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

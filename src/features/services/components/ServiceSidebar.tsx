import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { services, serviceSidebar } from "@/features/services/services-data";

/**
 * Left rail for the service-detail layout: the full service nav (current service
 * highlighted), placeholder download cards, and a testimonial. Presentational —
 * Server Component, no client JS. Active state is driven by `currentSlug`.
 */
export function ServiceSidebar({ currentSlug }: { currentSlug: string }) {
  const { downloads, testimonial } = serviceSidebar;

  return (
    <aside className="space-y-8">
      {/* Service navigation */}
      <nav aria-label="Services">
        <ul className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
          <li>
            <Link
              href="/service"
              className="flex items-center justify-between gap-2 border-b border-border bg-surface px-5 py-4 font-semibold text-ink transition-colors hover:text-primary"
            >
              View All Services
              <Icon name="gear" className="h-4 w-4 text-muted" />
            </Link>
          </li>
          {services.map((service) => {
            const active = service.slug === currentSlug;
            return (
              <li
                key={service.slug}
                className="border-b border-border last:border-b-0"
              >
                <Link
                  href={`/service/${service.slug}`}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "flex items-center gap-3 border-l-4 border-accent bg-primary px-5 py-4 font-semibold text-white"
                      : "flex items-center gap-3 border-l-4 border-transparent px-5 py-4 font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                  }
                >
                  {service.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Download cards (placeholder assets) */}
      <ul className="space-y-3">
        {downloads.map((doc) => (
          <li key={doc.label}>
            <a
              href={doc.href}
              className="flex items-center gap-3 rounded-lg border border-border bg-white px-5 py-4 text-ink shadow-card transition-colors hover:border-primary hover:text-primary"
            >
              <Icon
                name={doc.kind === "pdf" ? "mail" : "check"}
                className="h-5 w-5 shrink-0 text-cta"
              />
              <span className="font-semibold">{doc.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* Testimonial */}
      <figure className="rounded-lg bg-surface p-6 shadow-card">
        <Icon
          name="sparkle"
          className="h-6 w-6 text-primary"
          aria-hidden="true"
        />
        <blockquote className="mt-3 text-sm text-muted">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-4 flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 font-bold text-primary">
            {testimonial.author.charAt(0)}
          </span>
          <span>
            <span className="block font-semibold text-ink">
              {testimonial.author}
              <span className="font-normal text-muted">
                {" "}
                &middot; {testimonial.role}
              </span>
            </span>
            <span
              className="mt-1 flex"
              role="img"
              aria-label={`${testimonial.rating} out of 5 stars`}
            >
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <svg
                  key={i}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-4 w-4 text-accent"
                >
                  <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.2l1-5.8L3.5 9.2l5.9-.9L12 3Z" />
                </svg>
              ))}
            </span>
          </span>
        </figcaption>
      </figure>
    </aside>
  );
}

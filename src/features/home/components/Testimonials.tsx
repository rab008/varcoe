import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { YouTubeFacade } from "@/features/home/components/YouTubeFacade";
import { testimonials } from "@/features/home/home-content";

export function Testimonials() {
  const { rating, videos } = testimonials;
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
        />

        {rating && (
          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-5 py-2.5 shadow-card"
              role="img"
              aria-label={`Rated ${rating.score} out of 5 from ${rating.count} ${rating.label}`}
            >
              <span className="text-2xl font-extrabold text-ink">
                {rating.score}
              </span>
              <span className="flex" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon
                    key={i}
                    name="star"
                    className="h-4 w-4 fill-current text-accent"
                  />
                ))}
              </span>
              <span className="text-sm font-medium text-muted">
                {rating.count} {rating.label}
              </span>
            </div>
          </div>
        )}

        {videos && videos.length > 0 && (
          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
            {videos.map((video) => (
              <li key={video.videoId}>
                <YouTubeFacade videoId={video.videoId} title={video.title} />
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.items.map((item) => (
            <li key={item.author}>
              <figure className="flex h-full flex-col rounded-md border border-border bg-surface p-6 shadow-card">
                <span
                  className="flex gap-1 text-accent"
                  aria-label="Rated 5 out of 5"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      className="h-4 w-4 fill-current"
                    />
                  ))}
                </span>
                <blockquote className="mt-4 flex-1 text-ink">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-semibold text-ink">
                    {item.author}
                  </span>
                  <span className="block text-sm text-muted">{item.role}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        {testimonials.link && (
          <div className="mt-10 text-center">
            <Link
              href={testimonials.link.href}
              className="inline-block font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {testimonials.link.label} &rarr;
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}

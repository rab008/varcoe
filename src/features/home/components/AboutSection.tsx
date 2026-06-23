import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { YouTubeFacade } from "@/features/home/components/YouTubeFacade";
import { about } from "@/features/home/home-content";

export function AboutSection() {
  return (
    <section className="py-16 lg:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <YouTubeFacade
            videoId={about.video.videoId}
            title={about.video.title}
          />
          <div className="pointer-events-none absolute bottom-4 left-4 z-10 rounded-md bg-primary px-5 py-4 text-white shadow-card">
            <p className="text-2xl font-bold">{about.stat.value}</p>
            <p className="text-sm text-white/80">{about.stat.label}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-cta">
            {about.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {about.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{about.body}</p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {about.points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-ink">
                <Icon name="check" className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

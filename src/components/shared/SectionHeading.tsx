import { Container } from "@/components/ui/Container";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  /** Render the eyebrow/title/intro on a dark band (inverts colors). */
  invert?: boolean;
};

/** Reusable section header: eyebrow + `<h2>` + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  invert = false,
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      {eyebrow && (
        <p
          className={`flex items-center gap-2 text-sm font-semibold uppercase tracking-wide ${
            align === "center" ? "justify-center" : ""
          } ${invert ? "text-accent" : "text-cta"}`}
        >
          <span
            aria-hidden="true"
            className="h-0.5 w-6 rounded-full bg-current"
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg ${invert ? "text-white/80" : "text-muted"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/** Convenience wrapper that places a SectionHeading inside a Container. */
export function SectionHeadingContained(props: SectionHeadingProps) {
  return (
    <Container>
      <SectionHeading {...props} />
    </Container>
  );
}

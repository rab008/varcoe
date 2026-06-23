import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

type PagePlaceholderProps = {
  title: string;
  intro: string;
  /** The /pm command that will replace this placeholder with the real page. */
  buildHint: string;
  children?: ReactNode;
};

/**
 * Skeleton page body used by every scaffolded route. The feature pipeline
 * (`/pm <page>`) replaces these with the real implementation.
 */
export function PagePlaceholder({
  title,
  intro,
  buildHint,
  children,
}: PagePlaceholderProps) {
  return (
    <section className="border-b border-border bg-surface py-20">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{intro}</p>
        {children}
        <p className="mt-8 inline-block rounded-md border border-border bg-white px-4 py-2 text-sm text-muted">
          Coming soon — built via <code className="text-ink">{buildHint}</code>
        </p>
      </Container>
    </section>
  );
}

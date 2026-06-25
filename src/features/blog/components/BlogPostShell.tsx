import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/**
 * Two-column post layout: article (left) + sticky sidebar (right) on desktop.
 * On ≤992px the sidebar stacks below the article (single column). Server Component.
 */
export function BlogPostShell({
  children,
  sidebar,
}: {
  children: ReactNode;
  sidebar: ReactNode;
}) {
  return (
    <Container className="py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
        <div className="min-w-0">{children}</div>
        <div className="lg:sticky lg:top-24 lg:self-start">{sidebar}</div>
      </div>
    </Container>
  );
}

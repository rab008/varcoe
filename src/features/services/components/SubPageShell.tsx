import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SubPageSidebar } from "@/features/services/components/SubPageSidebar";

/**
 * Two-column shell for service sub-pages — a contextual `SubPageSidebar` + the
 * page's main content — mirroring the service-detail layout. The sidebar follows
 * the main column in source order on mobile and sticks on desktop.
 */
export function SubPageShell({
  serviceSlug,
  serviceLabel,
  serviceHref,
  currentHref,
  children,
}: {
  serviceSlug: string;
  serviceLabel: string;
  serviceHref: string;
  currentHref: string;
  children: ReactNode;
}) {
  return (
    <Container className="py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12">
        <div className="order-2 lg:order-1 lg:sticky lg:top-24 lg:self-start">
          <SubPageSidebar
            serviceSlug={serviceSlug}
            serviceLabel={serviceLabel}
            serviceHref={serviceHref}
            currentHref={currentHref}
          />
        </div>
        <div className="order-1 min-w-0 lg:order-2">{children}</div>
      </div>
    </Container>
  );
}

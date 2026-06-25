import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { serviceChildren, type NavLink } from "@/lib/site";

/**
 * Contextual left rail for service sub-pages: the parent service + its sub-pages
 * (nested, current highlighted) + a quote CTA card. Driven by `serviceChildren`.
 * Static Server Component.
 */
export function SubPageSidebar({
  serviceSlug,
  serviceLabel,
  serviceHref,
  currentHref,
}: {
  serviceSlug: string;
  serviceLabel: string;
  serviceHref: string;
  currentHref: string;
}) {
  const children: NavLink[] = serviceChildren[serviceSlug] ?? [];

  return (
    <aside className="space-y-8">
      <nav aria-label={serviceLabel}>
        <ul className="overflow-hidden rounded-lg border border-border bg-white shadow-card">
          <li>
            <Link
              href={serviceHref}
              aria-current={currentHref === serviceHref ? "page" : undefined}
              className="flex items-center justify-between gap-2 border-b border-border bg-surface px-5 py-4 font-semibold text-ink transition-colors hover:text-primary"
            >
              {serviceLabel}
              <Icon name="gear" className="h-4 w-4 text-muted" />
            </Link>
          </li>
          {children.map((child) => {
            const active = currentHref === child.href;
            return (
              <li
                key={child.href}
                className="border-b border-border last:border-b-0"
              >
                <Link
                  href={child.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "flex items-center gap-3 border-l-4 border-accent bg-primary px-5 py-3.5 text-sm font-semibold text-white"
                      : "flex items-center gap-3 border-l-4 border-transparent px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-surface hover:text-primary"
                  }
                >
                  {child.label}
                </Link>

                {child.children && child.children.length > 0 && (
                  <ul className="border-t border-border bg-surface">
                    {child.children.map((grandchild) => {
                      const gcActive = currentHref === grandchild.href;
                      return (
                        <li key={grandchild.href}>
                          <Link
                            href={grandchild.href}
                            aria-current={gcActive ? "page" : undefined}
                            className={
                              gcActive
                                ? "flex items-center gap-2 border-l-4 border-accent bg-primary/5 py-2.5 pl-10 pr-5 text-sm font-semibold text-primary"
                                : "flex items-center gap-2 border-l-4 border-transparent py-2.5 pl-10 pr-5 text-sm font-medium text-muted transition-colors hover:bg-white hover:text-primary"
                            }
                          >
                            {grandchild.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-lg bg-surface p-6 text-center shadow-card">
        <h2 className="text-lg font-bold text-ink">Get a Free Quote</h2>
        <p className="mt-2 text-sm text-muted">
          Tell us about your project and our Auckland team will be in touch.
        </p>
        <Button href="/contact" variant="cta" className="mt-5">
          Get a Free Quote
        </Button>
      </div>
    </aside>
  );
}

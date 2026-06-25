import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/features/services/services-data";

/** Reusable service card linking to the service detail page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/service/${service.slug}`}
      className="group flex h-full flex-col rounded-lg border border-border bg-white p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-ink">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{service.summary}</p>
      <span className="mt-4 text-sm font-semibold text-cta group-hover:underline">
        Read more &rarr;
      </span>
    </Link>
  );
}

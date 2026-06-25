import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { AcHeatPumpCategory } from "@/features/home/types/home";

type AcHeatPumpCardProps = {
  category: AcHeatPumpCategory;
};

/**
 * Category card for the homepage Air Conditioning & Heat Pumps section.
 * Server Component — placeholder image, title, description, and two CTAs
 * (Cooling / Heating). Hrefs come from the category itself.
 */
export function AcHeatPumpCard({ category }: AcHeatPumpCardProps) {
  const { title, description, image, coolingHref, heatingHref } = category;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card">
      <div className="relative aspect-[16/9] w-full bg-surface">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="grid h-full w-full place-items-center bg-primary/5 text-primary/40"
          >
            <Icon name="wind" className="h-12 w-12" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{description}</p>

        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            href={coolingHref}
            variant="primary"
            className="px-5 py-2"
            aria-label={`Cooling — ${title}`}
          >
            <Icon name="snowflake" className="h-4 w-4" aria-hidden="true" />
            Cooling
          </Button>
          <Button
            href={heatingHref}
            variant="cta"
            className="px-5 py-2"
            aria-label={`Heating — ${title}`}
          >
            <Icon name="flame" className="h-4 w-4" aria-hidden="true" />
            Heating
          </Button>
        </div>
      </div>
    </article>
  );
}

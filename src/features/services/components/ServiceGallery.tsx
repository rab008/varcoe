import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { YouTubeFacade } from "@/features/home/components/YouTubeFacade";
import type { ServiceDetail } from "@/features/services/services-data";

type Gallery = NonNullable<ServiceDetail["gallery"]>;

export function ServiceGallery({
  gallery,
  serviceTitle,
}: {
  gallery: Gallery;
  serviceTitle: string;
}) {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading title="Images & Videos" align="left" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <ul className="grid grid-cols-2 gap-4">
            {gallery.images.map((img) => (
              <li key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  unoptimized
                  sizes="(max-width: 992px) 50vw, 25vw"
                  className="h-auto w-full rounded-md shadow-card"
                />
              </li>
            ))}
          </ul>
          {gallery.videoId && (
            <YouTubeFacade
              videoId={gallery.videoId}
              title={`${serviceTitle} — Varcoe`}
            />
          )}
        </div>
      </Container>
    </section>
  );
}

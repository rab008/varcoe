import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/features/services/services-data";
import { locationsContent } from "@/features/locations/locations-registry";

// Required for `output: 'export'` (static GitHub Pages build).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/faq",
    "/heat-pump-calculator",
    "/offers",
    "/offers/warmer-kiwi-homes",
    "/products",
    "/products/commercial-heat-pumps",
    "/manufacturers",
    "/manufacturers/mitsubishi",
    "/manufacturers/daikin",
    "/manufacturers/panasonic",
    "/locations",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
  }));

  // Indexable location pages — every key with bespoke content (areas + suburbs).
  const locationRoutes = Object.keys(locationsContent).map((key) => ({
    url: `${base}/locations/${key}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}

import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/features/services/services-data";

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
    "/products",
    "/manufacturers",
    "/locations",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes];
}

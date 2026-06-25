import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { services } from "@/features/services/services-data";
import { locationsContent } from "@/features/locations/locations-registry";
import { productsContent } from "@/features/products/product-content";
import { installationTypeList } from "@/features/heat-pumps/installation-types";
import { acSubPageList } from "@/features/air-conditioning/ac-content";

// Required for `output: 'export'` (static GitHub Pages build).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/service",
    "/service/heat-pumps/size-calculator",
    "/service/heat-pumps/installation",
    "/contact",
    "/faq",
    "/heat-pump-calculator",
    "/offers",
    "/offers/warmer-kiwi-homes",
    "/products",
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
    url: `${base}/service/${service.slug}`,
    lastModified: now,
  }));

  // Indexable location pages — every key with bespoke content (areas + suburbs).
  const locationRoutes = Object.keys(locationsContent).map((key) => ({
    url: `${base}/locations/${key}`,
    lastModified: now,
  }));

  // Indexable product pages — every slug with bespoke content.
  const productRoutes = Object.keys(productsContent).map((slug) => ({
    url: `${base}/products/${slug}`,
    lastModified: now,
  }));

  // Heat pump installation type sub-pages.
  const installationTypeRoutes = installationTypeList.map((t) => ({
    url: `${base}/service/heat-pumps/installation/${t.slug}`,
    lastModified: now,
  }));

  // Air conditioning sub-pages.
  const acSubPageRoutes = acSubPageList.map((p) => ({
    url: `${base}/service/air-conditioning/${p.slug}`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...productRoutes,
    ...installationTypeRoutes,
    ...acSubPageRoutes,
  ];
}

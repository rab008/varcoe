import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

// Required for `output: 'export'` (static GitHub Pages build).
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isProduction =
    process.env.VERCEL_ENV === "production" ||
    process.env.GITHUB_PAGES === "true";

  return {
    rules: isProduction
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

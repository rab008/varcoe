import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only, so the site is exported (`output: 'export'`)
 * and the image optimizer is disabled. It is published as a *project* page at
 * https://rab008.github.io/varcoe/, so a basePath is required — gated behind the
 * `GITHUB_PAGES` env (set by the deploy workflow) so local dev/build stay at root.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "varcoe";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isPages ? `/${repo}` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" }, // YouTube video thumbnails
    ],
  },
};

export default nextConfig;

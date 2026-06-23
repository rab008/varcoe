import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only, so the site is exported (`output: 'export'`)
 * and the image optimizer is disabled. It is published as a *project* page at
 * https://rab008.github.io/varcoe/, so a basePath is required — gated behind the
 * `GITHUB_PAGES` env (set by the deploy workflow) so local dev/build stay at root.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const repo = "varcoe";
const basePath = isPages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  // Inlined into the client bundle so the custom image loader can read it.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // GitHub Pages can't run the image optimizer. A custom loader returns the
    // original asset URL while prepending basePath — next/image omits basePath
    // for local images on a static export, which 404s under the /varcoe subpath.
    // (A custom loader, unlike `unoptimized`, is actually invoked.)
    loader: "custom",
    loaderFile: "./image-loader.js",
  },
};

export default nextConfig;

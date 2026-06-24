const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Prefix a local `public/` asset path with the deploy basePath so raw `<a href>`
 * links resolve under the GitHub Pages subpath (e.g. `/varcoe`). Absolute http(s)
 * URLs pass through unchanged.
 *
 * `next/image` already handles images via `image-loader.js`; use this for
 * non-image static assets linked with a plain anchor (e.g. brochure PDFs).
 * `NEXT_PUBLIC_BASE_PATH` is injected at build time from next.config.ts.
 */
export function assetPath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  return `${basePath}${path}`;
}

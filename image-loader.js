/**
 * Custom next/image loader for the static GitHub Pages export.
 *
 * GitHub Pages serves this site from a project subpath (/varcoe). next/image does
 * NOT prepend `basePath` to a local image `src` on a static export, so local public
 * assets 404 under the subpath. This loader prepends the basePath to local paths and
 * passes absolute (http/https) URLs through unchanged. Pages cannot resize images, so
 * `width`/`quality` are ignored and the original asset is returned.
 *
 * `NEXT_PUBLIC_BASE_PATH` is injected at build time from next.config.ts.
 *
 * @param {{ src: string }} params
 * @returns {string}
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function imageLoader({ src }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${basePath}${src}`;
}

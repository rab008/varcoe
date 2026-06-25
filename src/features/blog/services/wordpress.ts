import "server-only";
import { cache } from "react";
import sanitizeHtml from "sanitize-html";
import { z } from "zod";
import { Post, type TocItem } from "@/features/blog/types/blog";

/**
 * Build-time blog data access. Fetches posts from the client's WordPress REST
 * API, validates the response with Zod, maps to the internal `Post` shape, and
 * sanitises the post HTML server-side (allowlist) before it is ever rendered.
 *
 * Static export: the fetch runs at build (`force-cache`), deduped via React
 * `cache()`. There is no ISR on GitHub Pages — content updates on rebuild. A
 * failed fetch throws so the build fails loudly rather than shipping an empty blog.
 */
const WP_API = process.env.WORDPRESS_API_URL ?? "https://www.varcoe.co.nz";

// ---- Raw WP REST shapes (only the fields we consume) ----------------------
const WpMedia = z.object({
  source_url: z.string().url(),
  alt_text: z.string().optional(),
  media_details: z
    .object({ width: z.number().optional(), height: z.number().optional() })
    .partial()
    .optional(),
});

const WpRawPost = z.object({
  slug: z.string(),
  date: z.string(),
  modified: z.string().optional(),
  title: z.object({ rendered: z.string() }),
  excerpt: z.object({ rendered: z.string() }),
  content: z.object({ rendered: z.string() }),
  _embedded: z
    .object({
      "wp:featuredmedia": z.array(z.unknown()).optional(),
      author: z.array(z.object({ name: z.string() })).optional(),
    })
    .optional(),
});
type WpRawPost = z.infer<typeof WpRawPost>;

// ---- Sanitisation ---------------------------------------------------------
/** Strip all tags → decoded plain text (titles, excerpts, meta descriptions). */
function stripToText(html: string): string {
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: {} })
    .replace(/\s+/g, " ")
    .trim();
}

/** Allowlist sanitiser for post body HTML — no scripts/iframes/styles/handlers. */
function cleanContent(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [
      "h2",
      "h3",
      "h4",
      "h5",
      "p",
      "ul",
      "ol",
      "li",
      "a",
      "strong",
      "b",
      "em",
      "i",
      "blockquote",
      "br",
      "img",
      "figure",
      "figcaption",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
      "hr",
      "code",
      "pre",
      "span",
    ],
    allowedAttributes: {
      a: ["href", "title"],
      img: ["src", "alt", "width", "height"],
      "*": [],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    transformTags: {
      a: (tagName, attribs) => ({
        tagName,
        attribs: {
          ...attribs,
          rel: "nofollow noopener noreferrer",
          target: "_blank",
        },
      }),
      img: (tagName, attribs) => ({
        tagName,
        attribs: { ...attribs, loading: "lazy" },
      }),
    },
  });
}

// ---- Table of contents ----------------------------------------------------
/** Heading text → URL-safe anchor slug, constrained to [a-z0-9-]. */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, "")
    .replace(/&[a-z0-9#]+;/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Injects deterministic anchor `id`s into the H2/H3 headings of **already
 * sanitised** HTML and returns the matching table of contents. The `id` is the
 * slug (constrained to `[a-z0-9-]`), never the raw heading text — so no markup
 * can be reintroduced into the trusted HTML. Duplicate slugs are de-duplicated.
 */
function withHeadingIds(html: string): { html: string; toc: TocItem[] } {
  const seen = new Map<string, number>();
  const toc: TocItem[] = [];
  const out = html.replace(
    /<(h2|h3)>([\s\S]*?)<\/\1>/g,
    (_match, tag: string, inner: string) => {
      const text = inner.replace(/<[^>]*>/g, "").trim();
      const base = slugify(text) || "section";
      const count = (seen.get(base) ?? 0) + 1;
      seen.set(base, count);
      const id = count > 1 ? `${base}-${count}` : base;
      toc.push({ id, text, level: tag === "h2" ? 2 : 3 });
      return `<${tag} id="${id}">${inner}</${tag}>`;
    },
  );
  return { html: out, toc };
}

function mapWpPost(raw: WpRawPost): Post {
  const mediaParsed = WpMedia.safeParse(
    raw._embedded?.["wp:featuredmedia"]?.[0],
  );
  const featuredImage = mediaParsed.success
    ? {
        url: mediaParsed.data.source_url,
        alt: mediaParsed.data.alt_text ?? "",
        width: mediaParsed.data.media_details?.width,
        height: mediaParsed.data.media_details?.height,
      }
    : undefined;

  const { html: contentHtml, toc } = withHeadingIds(
    cleanContent(raw.content.rendered),
  );

  return Post.parse({
    slug: raw.slug,
    title: stripToText(raw.title.rendered),
    dateISO: new Date(raw.date).toISOString(),
    dateModifiedISO: raw.modified
      ? new Date(raw.modified).toISOString()
      : undefined,
    excerpt: stripToText(raw.excerpt.rendered),
    contentHtml,
    toc,
    author: raw._embedded?.author?.[0]?.name,
    featuredImage,
  });
}

/** All published posts, newest first (WP default order). Cached per build. */
export const getAllPosts = cache(async (): Promise<Post[]> => {
  const res = await fetch(`${WP_API}/wp-json/wp/v2/posts?per_page=100&_embed`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error(
      `WordPress posts fetch failed: ${res.status} ${res.statusText}`,
    );
  }
  const raw = z.array(WpRawPost).parse(await res.json());
  return raw.map(mapWpPost);
});

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return (await getAllPosts()).find((p) => p.slug === slug);
}

/** Slugs for `generateStaticParams`. */
export async function getPostSlugs(): Promise<string[]> {
  return (await getAllPosts()).map((p) => p.slug);
}

// ---- Pagination & related --------------------------------------------------
export const POSTS_PER_PAGE = 12;

/** Total number of archive pages (≥ 1). */
export async function getTotalPages(): Promise<number> {
  return Math.max(1, Math.ceil((await getAllPosts()).length / POSTS_PER_PAGE));
}

export type PostsPage = {
  posts: Post[];
  page: number;
  totalPages: number;
};

/**
 * One archive page (1-based). Page 1 = `/blogs`; pages 2..N = `/blogs/page/N`.
 * Returns an empty `posts` array for out-of-range pages (callers `notFound()`).
 */
export async function getPostsPage(page: number): Promise<PostsPage> {
  const all = await getAllPosts();
  const totalPages = Math.max(1, Math.ceil(all.length / POSTS_PER_PAGE));
  const start = (page - 1) * POSTS_PER_PAGE;
  return { posts: all.slice(start, start + POSTS_PER_PAGE), page, totalPages };
}

/** Most-recent posts, excluding `excludeSlug` (for the post sidebar). */
export async function getRecentPosts(
  excludeSlug?: string,
  limit = 6,
): Promise<Post[]> {
  return (await getAllPosts())
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, limit);
}

import { z } from "zod";

/**
 * Blog post schema — the project-internal shape, mapped from the WordPress REST
 * API in `src/features/blog/services/wordpress.ts`. `contentHtml` is already
 * sanitised server-side before it reaches any component.
 */
export const FeaturedImage = z.object({
  url: z.string().url(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
});
export type FeaturedImage = z.infer<typeof FeaturedImage>;

/** Table-of-contents entry, derived from the post's H2/H3 headings. */
export const TocItem = z.object({
  id: z.string(), // slugified anchor (constrained to [a-z0-9-])
  text: z.string(), // plain-text heading label
  level: z.union([z.literal(2), z.literal(3)]),
});
export type TocItem = z.infer<typeof TocItem>;

export const Post = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  dateISO: z.string(), // ISO 8601 publish date
  dateModifiedISO: z.string().optional(),
  excerpt: z.string(), // plain text (cards + meta description)
  contentHtml: z.string(), // SANITISED HTML (with injected heading ids)
  author: z.string().optional(),
  featuredImage: FeaturedImage.optional(),
  toc: z.array(TocItem).default([]), // built from H2/H3 in contentHtml
});
export type Post = z.infer<typeof Post>;

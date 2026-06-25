import { BlogCard } from "@/features/blog/components/BlogCard";
import { Pagination } from "@/features/blog/components/Pagination";
import type { Post } from "@/features/blog/types/blog";

/** A single archive page: post grid + pagination control. Server Component. */
export function BlogArchive({
  posts,
  page,
  totalPages,
}: {
  posts: Post[];
  page: number;
  totalPages: number;
}) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-muted">
        No articles yet — check back soon.
      </p>
    );
  }

  return (
    <>
      <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </ul>
      <Pagination page={page} totalPages={totalPages} />
    </>
  );
}

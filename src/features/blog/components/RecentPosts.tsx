import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Post } from "@/features/blog/types/blog";

const dateFmt = new Intl.DateTimeFormat("en-NZ", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

/** Recent-posts list for the post sidebar. Server Component. */
export function RecentPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) return null;

  return (
    <section
      aria-labelledby="recent-posts-heading"
      className="rounded-lg border border-border bg-white p-5"
    >
      <h2
        id="recent-posts-heading"
        className="mb-4 text-xs font-bold uppercase tracking-wide text-muted"
      >
        Recent posts
      </h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blogs/${post.slug}`}
              className="group flex gap-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-primary/5">
                {post.featuredImage ? (
                  <Image
                    src={post.featuredImage.url}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="grid h-full w-full place-items-center text-primary/30"
                  >
                    <Icon name="flame" className="h-5 w-5" />
                  </span>
                )}
              </span>
              <span className="min-w-0">
                <span className="line-clamp-2 text-sm font-semibold text-ink group-hover:text-primary">
                  {post.title}
                </span>
                <time
                  dateTime={post.dateISO}
                  className="mt-1 block text-xs text-muted"
                >
                  {dateFmt.format(new Date(post.dateISO))}
                </time>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

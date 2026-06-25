import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import type { Post } from "@/features/blog/types/blog";

const dateFmt = new Intl.DateTimeFormat("en-NZ", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

/** Archive card for a single blog post. Static Server Component. */
export function BlogCard({ post }: { post: Post }) {
  return (
    <li className="h-full">
      <Link
        href={`/blogs/${post.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-white shadow-card transition duration-200 hover:-translate-y-1 hover:border-primary hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <div className="relative aspect-16/9 w-full overflow-hidden bg-primary/5">
          {post.featuredImage ? (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div
              aria-hidden="true"
              className="grid h-full w-full place-items-center text-primary/30"
            >
              <Icon name="flame" className="h-12 w-12" />
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time
            dateTime={post.dateISO}
            className="text-xs font-semibold uppercase tracking-wide text-muted"
          >
            {dateFmt.format(new Date(post.dateISO))}
          </time>
          <h2 className="mt-2 text-lg font-bold text-ink group-hover:text-primary">
            {post.title}
          </h2>
          <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted">
            {post.excerpt}
          </p>
          <span className="mt-4 text-sm font-semibold text-primary">
            Read more →
          </span>
        </div>
      </Link>
    </li>
  );
}

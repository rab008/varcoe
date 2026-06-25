import { Button } from "@/components/ui/Button";
import { BlogToc } from "@/features/blog/components/BlogToc";
import { RecentPosts } from "@/features/blog/components/RecentPosts";
import type { Post, TocItem } from "@/features/blog/types/blog";

/** Composes the post sidebar: scroll-spy TOC + recent posts + quote CTA. Server. */
export function BlogPostSidebar({
  toc,
  recentPosts,
}: {
  toc: TocItem[];
  recentPosts: Post[];
}) {
  return (
    <aside aria-label="Article sidebar" className="space-y-8">
      {toc.length > 0 && <BlogToc items={toc} />}
      <RecentPosts posts={recentPosts} />
      <div className="rounded-lg bg-primary p-6 text-center shadow-card">
        <h2 className="text-lg font-bold text-white">Get a Free Quote</h2>
        <p className="mt-2 text-sm text-white/85">
          Auckland&apos;s heat pump &amp; air conditioning specialists since
          1975.
        </p>
        <Button href="/contact" variant="cta" className="mt-4 w-full">
          Get a Free Quote
        </Button>
      </div>
    </aside>
  );
}

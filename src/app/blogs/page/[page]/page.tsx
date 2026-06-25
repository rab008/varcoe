import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { Container } from "@/components/ui/Container";
import { BlogArchive } from "@/features/blog/components/BlogArchive";
import {
  getPostsPage,
  getTotalPages,
} from "@/features/blog/services/wordpress";

type Params = { page: string };

/** Pages 2..N — page 1 lives at /blogs. */
export async function generateStaticParams(): Promise<Params[]> {
  const total = await getTotalPages();
  const params: Params[] = [];
  for (let p = 2; p <= total; p++) params.push({ page: String(p) });
  return params;
}

/** Parse a paginated-route segment; only integers ≥ 2 are valid. */
function parsePage(raw: string): number | null {
  if (!/^\d+$/.test(raw)) return null;
  const n = Number(raw);
  return n >= 2 ? n : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { page } = await params;
  const n = parsePage(page);
  if (n === null) return {};
  return {
    title: `Blog — Page ${n}`,
    description: `Heat pump and air conditioning guides from Varcoe — page ${n}.`,
    alternates: { canonical: `/blogs/page/${n}` },
    // Paginated pages are followable but not indexed (page 1 /blogs is canonical entry).
    robots: { index: false, follow: true },
  };
}

export default async function BlogArchivePagedPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { page } = await params;
  const n = parsePage(page);
  if (n === null) notFound();

  const { posts, totalPages } = await getPostsPage(n);
  if (n > totalPages || posts.length === 0) notFound();

  return (
    <>
      <PageBanner
        title="Blog"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      >
        <p className="text-lg text-white/90">
          Page {n} of {totalPages}
        </p>
      </PageBanner>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: `Page ${n}` },
        ]}
      />

      <Container className="py-12 lg:py-16">
        <BlogArchive posts={posts} page={n} totalPages={totalPages} />
      </Container>
    </>
  );
}

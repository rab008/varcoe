import type { Metadata } from "next";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { Container } from "@/components/ui/Container";
import { BlogArchive } from "@/features/blog/components/BlogArchive";
import { getPostsPage } from "@/features/blog/services/wordpress";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Heat pump and air conditioning guides, tips and advice from Varcoe — Auckland's specialist since 1975.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: `Blog | ${siteConfig.name}`,
    description:
      "Heat pump and air conditioning guides, tips and advice from Varcoe.",
    url: "/blogs",
    images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${siteConfig.url}/blogs`,
    },
  ],
};

export default async function BlogArchivePage() {
  const { posts, page, totalPages } = await getPostsPage(1);

  return (
    <>
      <script
        type="application/ld+json"
        // First-party structured data; escape `<` for script-context safety.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageBanner
        title="Blog"
        image={{ src: "/images/home/hero-bg.jpg", alt: "" }}
      >
        <p className="text-lg text-white/90">
          Heat pump and air conditioning guides, tips and advice from
          Auckland&apos;s specialists.
        </p>
      </PageBanner>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />

      <Container className="py-12 lg:py-16">
        <BlogArchive posts={posts} page={page} totalPages={totalPages} />
      </Container>
    </>
  );
}

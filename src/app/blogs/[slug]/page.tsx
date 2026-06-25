import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { PageBanner } from "@/components/shared/PageBanner";
import { Button } from "@/components/ui/Button";
import { BlogPostShell } from "@/features/blog/components/BlogPostShell";
import { BlogPostSidebar } from "@/features/blog/components/BlogPostSidebar";
import { PostBody } from "@/features/blog/components/PostBody";
import {
  getPostBySlug,
  getPostSlugs,
  getRecentPosts,
} from "@/features/blog/services/wordpress";
import { siteConfig } from "@/lib/site";

type Params = { slug: string };

const dateFmt = new Intl.DateTimeFormat("en-NZ", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export async function generateStaticParams(): Promise<Params[]> {
  return (await getPostSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const canonical = `/blogs/${post.slug}`;
  const image = post.featuredImage?.url ?? "/og/home.svg";
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: canonical,
      publishedTime: post.dateISO,
      modifiedTime: post.dateModifiedISO,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const recentPosts = await getRecentPosts(post.slug, 6);
  const canonical = `${siteConfig.url}/blogs/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.dateISO,
        dateModified: post.dateModifiedISO ?? post.dateISO,
        ...(post.featuredImage ? { image: post.featuredImage.url } : {}),
        ...(post.author
          ? { author: { "@type": "Person", name: post.author } }
          : {}),
        publisher: {
          "@type": "Organization",
          name: siteConfig.legalName,
          url: siteConfig.url,
        },
        mainEntityOfPage: canonical,
        url: canonical,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteConfig.url}/blogs`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // First-party structured data; escape `<` so WP-derived fields can't
        // break out of the script context.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <PageBanner
        title={post.title}
        image={{
          src: post.featuredImage?.url ?? "/images/home/hero-bg.jpg",
          alt: "",
        }}
      />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blogs" },
          { label: post.title },
        ]}
      />

      <BlogPostShell
        sidebar={<BlogPostSidebar toc={post.toc} recentPosts={recentPosts} />}
      >
        <article>
          <p className="text-sm font-semibold uppercase tracking-wide text-muted">
            <time dateTime={post.dateISO}>
              {dateFmt.format(new Date(post.dateISO))}
            </time>
            {post.author && <span> · {post.author}</span>}
          </p>
          <div className="mt-8">
            <PostBody html={post.contentHtml} />
          </div>
        </article>

        {/* Closing CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-lg bg-surface p-8 text-center shadow-card">
          <h2 className="text-xl font-bold text-ink">
            Thinking about a heat pump?
          </h2>
          <p className="max-w-xl text-muted">
            Get expert advice and a free, no-obligation quote from
            Auckland&apos;s specialists.
          </p>
          <Button href="/contact" variant="cta">
            Get a Free Quote
          </Button>
        </div>
      </BlogPostShell>
    </>
  );
}

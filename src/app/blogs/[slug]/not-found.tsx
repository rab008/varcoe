import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function BlogPostNotFound() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-3xl font-bold text-ink">Article not found</h1>
        <p className="mt-3 text-muted">
          We couldn&apos;t find that article.{" "}
          <Link href="/blogs" className="text-primary hover:underline">
            Back to the blog
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

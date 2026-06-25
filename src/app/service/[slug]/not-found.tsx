import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function ServiceNotFound() {
  return (
    <section className="py-20">
      <Container>
        <h1 className="text-3xl font-bold text-ink">Service not found</h1>
        <p className="mt-3 text-muted">
          We couldn&apos;t find that service.{" "}
          <Link href="/service" className="text-primary hover:underline">
            View all services
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

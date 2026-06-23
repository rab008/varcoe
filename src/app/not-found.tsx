import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-start gap-4">
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Page not found
        </h1>
        <p className="max-w-md text-muted">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Button href="/" variant="primary">
          Back to home
        </Button>
      </Container>
    </section>
  );
}

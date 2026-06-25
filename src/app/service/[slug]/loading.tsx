import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="py-20">
      <Container>
        <div className="h-9 w-64 animate-pulse rounded-md bg-surface" />
        <div className="mt-4 h-5 w-96 max-w-full animate-pulse rounded-md bg-surface" />
      </Container>
    </section>
  );
}

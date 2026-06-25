import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <section className="py-20">
      <Container className="max-w-3xl">
        <div className="h-9 w-3/4 animate-pulse rounded-md bg-surface" />
        <div className="mt-4 h-5 w-40 animate-pulse rounded-md bg-surface" />
        <div className="mt-8 space-y-3">
          <div className="h-5 w-full animate-pulse rounded-md bg-surface" />
          <div className="h-5 w-full animate-pulse rounded-md bg-surface" />
          <div className="h-5 w-5/6 animate-pulse rounded-md bg-surface" />
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";

/** Page 1 lives at /blogs; pages 2+ at /blogs/page/N. */
const pageHref = (p: number): string =>
  p <= 1 ? "/blogs" : `/blogs/page/${p}`;

const cellBase =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const linkCell = `${cellBase} border-border text-ink hover:border-primary hover:text-primary`;
const activeCell = `${cellBase} border-primary bg-primary text-white`;

/** Numbered pagination control for the blog archive. Server Component. */
export function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-1.5"
    >
      {page > 1 && (
        <Link href={pageHref(page - 1)} rel="prev" className={linkCell}>
          <span aria-hidden="true">←</span>
          <span className="sr-only sm:not-sr-only sm:ml-1">Previous</span>
        </Link>
      )}

      <ul className="flex flex-wrap items-center gap-1.5">
        {pages.map((p) => (
          <li key={p}>
            {p === page ? (
              <span aria-current="page" className={activeCell}>
                {p}
              </span>
            ) : (
              <Link
                href={pageHref(p)}
                className={linkCell}
                aria-label={`Go to page ${p}`}
              >
                {p}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {page < totalPages && (
        <Link href={pageHref(page + 1)} rel="next" className={linkCell}>
          <span className="sr-only sm:not-sr-only sm:mr-1">Next</span>
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  );
}

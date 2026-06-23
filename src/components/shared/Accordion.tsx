export type AccordionItem = { question: string; answer: string };

/**
 * Site-wide accordion (the service-detail design): a bordered card of native
 * `<details>/<summary>` items with a plus/minus toggle, first item open,
 * answer on a surface background. Accessible, no client JS. Optional `<h2>`
 * heading; width is controlled by the caller.
 */
export function Accordion({
  items,
  title,
}: {
  items: readonly AccordionItem[];
  title?: string;
}) {
  return (
    <section aria-label={title ?? "Frequently asked questions"}>
      {title && <h2 className="text-2xl font-bold text-ink">{title}</h2>}
      <div
        className={`overflow-hidden rounded-lg border border-border bg-white shadow-card ${
          title ? "mt-6" : ""
        }`}
      >
        {items.map((item, i) => (
          <details
            key={item.question}
            open={i === 0}
            className="group border-b border-border last:border-b-0"
          >
            <summary className="flex cursor-pointer items-center gap-3 px-5 py-4 font-semibold text-ink marker:content-none group-open:text-primary focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary">
              <span
                aria-hidden="true"
                className="grid h-6 w-6 shrink-0 place-items-center rounded border border-border text-primary group-open:border-primary"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-open:hidden"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="hidden group-open:block"
                >
                  <path d="M5 12h14" />
                </svg>
              </span>
              {item.question}
            </summary>
            <div className="bg-surface px-5 py-4 pl-14 text-sm text-muted">
              {item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

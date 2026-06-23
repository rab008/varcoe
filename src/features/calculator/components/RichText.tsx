import type { RichText as RichTextType } from "@/features/calculator/calculator-content";

/**
 * Renders a paragraph made of text runs and inline links (the MD's links).
 * External links open in a new tab with rel="noopener noreferrer".
 */
export function RichParagraph({
  parts,
  className,
}: {
  parts: RichTextType;
  className?: string;
}) {
  return (
    <p className={className}>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          part
        ) : (
          <a
            key={i}
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary underline underline-offset-2 hover:text-primary-dark"
          >
            {part.text}
          </a>
        ),
      )}
    </p>
  );
}

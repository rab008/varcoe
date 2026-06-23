import Script from "next/script";
import { calculatorContent } from "@/features/calculator/calculator-content";

/**
 * Embeds the Mitsubishi Electric heat-pump selector (third-party iframe + its
 * companion script, lazy-loaded so it never blocks first paint). The container
 * keeps the vendor ids (`me-ifw`/`me-if`) the script expects, and reserves
 * height to limit layout shift. Server Component.
 */
export function CalculatorEmbed() {
  const { embed } = calculatorContent;

  return (
    <div className="rounded-lg border border-border bg-white p-4 shadow-card">
      <div id="me-ifw" className="min-h-[560px]">
        <iframe
          id="me-if"
          title={embed.title}
          src={embed.iframeSrc}
          scrolling="no"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[560px] w-full border-0"
        />
      </div>
      <Script src={embed.scriptSrc} strategy="lazyOnload" />
    </div>
  );
}

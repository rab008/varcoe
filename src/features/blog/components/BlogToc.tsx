"use client";

import { useEffect, useState, type MouseEvent } from "react";
import type { TocItem } from "@/features/blog/types/blog";

/**
 * Sticky table of contents with scroll-spy. Links are server-meaningful (`#id`
 * anchors that work without JS); this leaf adds active-section highlighting and
 * smooth-scroll on hydration. Honours `prefers-reduced-motion`.
 */
export function BlogToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -70% 0px", threshold: 0 },
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  return (
    <nav
      aria-label="Table of contents"
      className="rounded-lg border border-border bg-white p-5"
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-muted">
        On this page
      </p>
      <ul>
        {items.map((item) => {
          const active = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                aria-current={active ? "location" : undefined}
                className={
                  "block border-l-2 py-1.5 text-sm transition-colors " +
                  (item.level === 3 ? "pl-6 " : "pl-3 ") +
                  (active
                    ? "border-primary font-semibold text-primary"
                    : "border-transparent text-muted hover:text-ink")
                }
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

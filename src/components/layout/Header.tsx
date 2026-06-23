"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/lib/site";

type NavChild = { slug: string; title: string };
type LocationNavItem = { slug: string; title: string; suburbs: NavChild[] };

const DROPDOWN_HREFS = new Set([
  "/about",
  "/offers",
  "/services",
  "/products",
  "/manufacturers",
  "/locations",
]);

// Items moved into the "About" dropdown — hidden from the top-level header nav
// (still present in the footer via siteConfig.nav).
const DEMOTED_HREFS = new Set(["/faq", "/contact"]);

export function Header({
  services,
  products,
  manufacturers,
  locations,
  offers,
}: {
  services: NavChild[];
  products: NavChild[];
  manufacturers: NavChild[];
  locations: LocationNavItem[];
  offers: NavChild[];
}) {
  const [open, setOpen] = useState(false);
  // Which desktop dropdown is open (nav href), and which mobile accordion. One each at a time.
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpenMenu, setMobileOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const { business } = siteConfig;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const isCurrent = (href: string) => pathname === href;

  const openMenuFor = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(href);
  };
  // Small delay so a brief pointer excursion doesn't snap the menu shut.
  const scheduleCloseMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const closeAll = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(false);
    setOpenMenu(null);
    setMobileOpenMenu(null);
  };

  // Flat dropdown menus keyed by nav href (Locations is grouped, handled separately).
  const flatLinks: Record<string, { label: string; href: string }[]> = {
    "/about": [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    "/offers": [
      { label: "All Offers", href: "/offers" },
      ...offers.map((o) => ({ label: o.title, href: `/offers/${o.slug}` })),
    ],
    "/services": [
      { label: "All Services", href: "/services" },
      ...services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
    ],
    "/products": [
      { label: "All Products", href: "/products" },
      ...products.map((p) => ({ label: p.title, href: `/products/${p.slug}` })),
    ],
    "/manufacturers": [
      { label: "All Manufacturers", href: "/manufacturers" },
      ...manufacturers.map((m) => ({
        label: m.title,
        href: `/manufacturers/${m.slug}`,
      })),
    ],
  };

  const navLinkClass = (active: boolean) =>
    `text-sm font-semibold transition-colors hover:text-primary ${
      active ? "text-primary" : "text-ink"
    }`;

  const flatItemClass = (current: boolean) =>
    `block px-4 py-2 text-sm transition-colors focus-visible:bg-surface focus-visible:outline-none ${
      current
        ? "bg-surface font-semibold text-primary"
        : "text-ink hover:bg-surface hover:text-primary"
    }`;

  // Desktop dropdown panel body (flat list for Services, grouped for Locations).
  const renderDesktopPanel = (href: string, menuId: string) => {
    if (href === "/locations") {
      return (
        <div
          id={menuId}
          className="grid w-[min(88vw,40rem)] max-w-[calc(100vw-2rem)] grid-cols-2 gap-x-8 gap-y-4 rounded-lg border border-border bg-white p-5 shadow-lg lg:grid-cols-3"
        >
          <Link
            href="/locations"
            onClick={closeAll}
            aria-current={isCurrent("/locations") ? "page" : undefined}
            className={`col-span-full border-b border-border pb-2 text-sm font-semibold ${
              isCurrent("/locations")
                ? "text-primary"
                : "text-ink hover:text-primary"
            }`}
          >
            All Locations
          </Link>
          {locations.map((area) => {
            const areaHref = `/locations/${area.slug}`;
            return (
              <div key={area.slug}>
                <Link
                  href={areaHref}
                  onClick={closeAll}
                  aria-current={isCurrent(areaHref) ? "page" : undefined}
                  className={`block text-sm font-semibold ${
                    isCurrent(areaHref)
                      ? "text-primary"
                      : "text-ink hover:text-primary"
                  }`}
                >
                  {area.title}
                </Link>
                {area.suburbs.length > 0 && (
                  <ul className="mt-1.5 space-y-1">
                    {area.suburbs.map((suburb) => {
                      const subHref = `${areaHref}/${suburb.slug}`;
                      return (
                        <li key={suburb.slug}>
                          <Link
                            href={subHref}
                            onClick={closeAll}
                            aria-current={
                              isCurrent(subHref) ? "page" : undefined
                            }
                            className={`block text-sm transition-colors ${
                              isCurrent(subHref)
                                ? "font-semibold text-primary"
                                : "text-muted hover:text-primary"
                            }`}
                          >
                            {suburb.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <ul
        id={menuId}
        className="min-w-56 rounded-lg border border-border bg-white py-2 shadow-lg"
      >
        {(flatLinks[href] ?? []).map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              onClick={closeAll}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className={flatItemClass(isCurrent(link.href))}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  // Shared inner content for the red "talk to an expert" card (used in 3 placements).
  const expertInner = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-white/70 text-white">
        <Icon name="phone-chat" className="h-6 w-6" />
      </span>
      <span className="leading-tight">
        <span className="block text-xs text-white/85">
          Need help? Talk to an expert
        </span>
        <span className="block text-lg font-bold text-white">
          {business.displayPhone}
        </span>
      </span>
    </>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white text-ink shadow-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-label={`${siteConfig.name} — home`}
          onClick={closeAll}
        >
          <Logo variant="default" className="h-10 w-auto" />
        </Link>

        {/* Primary nav — desktop only (> 992px) */}
        <nav aria-label="Primary" className="hidden min-[993px]:block">
          <ul className="flex items-center gap-6">
            {siteConfig.nav.map((item) => {
              if (DEMOTED_HREFS.has(item.href)) return null;
              if (!DROPDOWN_HREFS.has(item.href)) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={navLinkClass(isActive(item.href))}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              }

              const isOpen = openMenu === item.href;
              const menuId = `${item.href.slice(1)}-menu`;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => openMenuFor(item.href)}
                  onMouseLeave={scheduleCloseMenu}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
                      setOpenMenu(null);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setOpenMenu(null);
                  }}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={navLinkClass(isActive(item.href))}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} menu`}
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      aria-haspopup="menu"
                      onClick={() => setOpenMenu(isOpen ? null : item.href)}
                      className="rounded p-0.5 text-ink hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  {/* Flush wrapper at top-full; transparent pt-3 bridges the
                      visual gap so the hover area stays contiguous (no drop-out). */}
                  <div
                    hidden={!isOpen}
                    className={`absolute top-full pt-3 ${
                      item.href === "/locations" ? "right-0" : "left-0"
                    }`}
                  >
                    {renderDesktopPanel(item.href, menuId)}
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right cluster: expert card (≥768) + hamburger (≤992) */}
        <div className="flex h-16 items-center gap-2">
          {/* Desktop expert card (> 992px): full-height red, bled to the band's right edge */}
          <a
            href={`tel:${business.phone}`}
            className="-mr-4 hidden h-16 items-center gap-3 bg-cta px-6 text-white transition-colors hover:bg-cta-dark focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white sm:-mr-6 lg:-mr-8 min-[993px]:flex"
          >
            {expertInner}
          </a>

          {/* Tablet expert card (768–992px): full-height red, inline before the hamburger */}
          <a
            href={`tel:${business.phone}`}
            className="hidden h-16 items-center gap-3 bg-cta px-5 text-white transition-colors hover:bg-cta-dark focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white min-[768px]:flex min-[993px]:hidden"
          >
            {expertInner}
          </a>

          {/* Hamburger — tablet & mobile (≤ 992px) */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink min-[993px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile expert card (≤ 767px): full-width red band below the white header band */}
      <a
        href={`tel:${business.phone}`}
        className="flex items-center gap-3 bg-cta px-4 py-3 text-white transition-colors hover:bg-cta-dark focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white min-[768px]:hidden"
      >
        {expertInner}
      </a>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-white min-[993px]:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => {
              if (DEMOTED_HREFS.has(item.href)) return null;
              if (!DROPDOWN_HREFS.has(item.href)) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeAll}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={`rounded-md px-3 py-2 text-base font-semibold ${
                      isActive(item.href)
                        ? "bg-surface text-primary"
                        : "text-ink hover:bg-surface"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }

              const isOpen = mobileOpenMenu === item.href;
              const subId = `mobile-${item.href.slice(1)}`;
              const isLocations = item.href === "/locations";
              return (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`flex-1 rounded-md px-3 py-2 text-base font-semibold ${
                        isActive(item.href)
                          ? "bg-surface text-primary"
                          : "text-ink hover:bg-surface"
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={isOpen}
                      aria-controls={subId}
                      onClick={() =>
                        setMobileOpenMenu(isOpen ? null : item.href)
                      }
                      className="rounded-md p-2 text-ink hover:bg-surface"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>

                  {isLocations ? (
                    <div
                      id={subId}
                      hidden={!isOpen}
                      className="ml-3 border-l border-border pl-3"
                    >
                      <Link
                        href="/locations"
                        onClick={closeAll}
                        aria-current={
                          isCurrent("/locations") ? "page" : undefined
                        }
                        className={`block rounded-md px-3 py-2 text-sm font-semibold ${
                          isCurrent("/locations")
                            ? "bg-surface text-primary"
                            : "text-ink hover:bg-surface hover:text-primary"
                        }`}
                      >
                        All Locations
                      </Link>
                      {locations.map((area) => {
                        const areaHref = `/locations/${area.slug}`;
                        return (
                          <div key={area.slug} className="mt-1">
                            <Link
                              href={areaHref}
                              onClick={closeAll}
                              aria-current={
                                isCurrent(areaHref) ? "page" : undefined
                              }
                              className={`block rounded-md px-3 py-2 text-sm font-semibold ${
                                isCurrent(areaHref)
                                  ? "bg-surface text-primary"
                                  : "text-ink hover:bg-surface hover:text-primary"
                              }`}
                            >
                              {area.title}
                            </Link>
                            {area.suburbs.length > 0 && (
                              <ul className="ml-3 border-l border-border pl-3">
                                {area.suburbs.map((suburb) => {
                                  const subHref = `${areaHref}/${suburb.slug}`;
                                  return (
                                    <li key={suburb.slug}>
                                      <Link
                                        href={subHref}
                                        onClick={closeAll}
                                        aria-current={
                                          isCurrent(subHref)
                                            ? "page"
                                            : undefined
                                        }
                                        className={`block rounded-md px-3 py-1.5 text-sm ${
                                          isCurrent(subHref)
                                            ? "bg-surface font-semibold text-primary"
                                            : "text-muted hover:bg-surface hover:text-primary"
                                        }`}
                                      >
                                        {suburb.title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <ul
                      id={subId}
                      hidden={!isOpen}
                      className="ml-3 border-l border-border pl-3"
                    >
                      {(flatLinks[item.href] ?? []).map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={closeAll}
                            aria-current={
                              isCurrent(link.href) ? "page" : undefined
                            }
                            className={`block rounded-md px-3 py-2 text-sm ${
                              isCurrent(link.href)
                                ? "bg-surface font-semibold text-primary"
                                : "text-muted hover:bg-surface hover:text-primary"
                            }`}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
            <a
              href={`tel:${business.phone}`}
              onClick={closeAll}
              className="mt-2 flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm font-semibold text-ink hover:bg-surface"
            >
              <Icon name="phone" className="h-4 w-4 text-cta" />
              Call {business.displayPhone}
            </a>
            <Button href="/contact" variant="cta" className="mt-2 w-full">
              Get a Quote
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}

import { serviceChildren, type NavLink } from "@/lib/site";
import { services } from "@/features/services/services-data";
import { offers } from "@/features/offers/offers-data";
import { products } from "@/features/products/products-data";
import { manufacturers } from "@/features/manufacturers/manufacturers-data";
import { locations } from "@/features/locations/locations-data";

/**
 * THE single source of truth for the header navigation menu — top-level items
 * plus every dropdown/sub-menu (recursive), assembled from the content registries
 * + `serviceChildren`.
 *
 * Lives in its own module (imported **only** by the server `layout.tsx`, which
 * passes it to the client `Header` as one prop) so the rich registry content
 * never enters the client bundle. To change the menu, edit this one file.
 *
 * FAQ/Contact are intentionally demoted into the About dropdown (the footer still
 * lists them flat via `siteConfig.nav`).
 */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Blog", href: "/blogs" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Offers",
    href: "/offers",
    children: [
      { label: "All Offers", href: "/offers" },
      ...offers.map((o) => ({ label: o.name, href: `/offers/${o.slug}` })),
    ],
  },
  {
    label: "Services",
    href: "/service",
    children: [
      { label: "All Services", href: "/service" },
      ...services.map((s) => ({
        label: s.title,
        href: `/service/${s.slug}`,
        children: serviceChildren[s.slug],
      })),
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      ...products.map((p) => ({ label: p.name, href: `/products/${p.slug}` })),
    ],
  },
  {
    label: "Manufacturers",
    href: "/manufacturers",
    children: [
      { label: "All Manufacturers", href: "/manufacturers" },
      ...manufacturers.map((m) => ({
        label: m.name,
        href: `/manufacturers/${m.slug}`,
      })),
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    grouped: true,
    children: locations.map((area) => ({
      label: area.name,
      href: `/locations/${area.slug}`,
      children: area.suburbs.map((suburb) => ({
        label: suburb.name,
        href: `/locations/${area.slug}/${suburb.slug}`,
      })),
    })),
  },
];

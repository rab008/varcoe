import type { Metadata } from "next";
import type { Service } from "@/features/services/services-data";
import { siteConfig } from "@/lib/site";
import { singleRoom } from "@/features/heat-pumps/room-types/single-room";
import { multiRoom } from "@/features/heat-pumps/room-types/multi-room";
import { floorConsoles } from "@/features/heat-pumps/room-types/floor-consoles";
import { ductedWholeHome } from "@/features/heat-pumps/room-types/ducted-whole-home-systems";
import { wifiControl } from "@/features/heat-pumps/room-types/wifi-control";

/**
 * Top-level system/configuration pages (heat-pump + air-conditioning categories).
 * Each is `Service`-shaped content reusing the service-detail design, rendered at
 * its own top-level route via `RoomTypeDetail`.
 */
export const roomTypes: Record<string, Service> = {
  "single-room": singleRoom,
  "multi-room": multiRoom,
  "floor-consoles": floorConsoles,
  "ducted-whole-home-systems": ductedWholeHome,
  "wifi-control": wifiControl,
};

export const roomTypeSlugs = Object.keys(roomTypes);

export function getRoomType(slug: string): Service | undefined {
  return roomTypes[slug];
}

/** IA parent for a page — drives breadcrumb, sidebar highlight, and JSON-LD. */
export type RoomTypeParent = {
  label: string;
  href: string;
  sidebarSlug: string;
};

const HEAT_PUMPS_PARENT: RoomTypeParent = {
  label: "Heat Pumps",
  href: "/service/heat-pumps",
  sidebarSlug: "heat-pumps",
};
const AIR_CONDITIONING_PARENT: RoomTypeParent = {
  label: "Air Conditioning",
  href: "/service/air-conditioning",
  sidebarSlug: "air-conditioning",
};

const roomTypeParents: Record<string, RoomTypeParent> = {
  "single-room": HEAT_PUMPS_PARENT,
  "multi-room": HEAT_PUMPS_PARENT,
  "floor-consoles": AIR_CONDITIONING_PARENT,
  "ducted-whole-home-systems": AIR_CONDITIONING_PARENT,
  "wifi-control": AIR_CONDITIONING_PARENT,
};

/** The IA parent for a page (defaults to Heat Pumps). */
export function getRoomTypeParent(slug: string): RoomTypeParent {
  return roomTypeParents[slug] ?? HEAT_PUMPS_PARENT;
}

/** Per-route metadata (title stored without the "| Varcoe" template suffix). */
export function roomTypeMetadata(slug: string): Metadata {
  const room = roomTypes[slug];
  if (!room) return {};
  const title = room.detail?.heroTitle ?? room.title;
  return {
    title,
    description: room.summary,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: `${room.title} | ${siteConfig.name}`,
      description: room.summary,
      url: `/${slug}`,
      images: [{ url: "/og/home.svg", width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", images: ["/og/home.svg"] },
  };
}

import type { Metadata } from "next";
import { RoomTypeDetail } from "@/features/heat-pumps/components/RoomTypeDetail";
import { roomTypeMetadata } from "@/features/heat-pumps/room-types";

export const metadata: Metadata = roomTypeMetadata("ducted-whole-home-systems");

export default function DuctedWholeHomeSystemsPage() {
  return <RoomTypeDetail slug="ducted-whole-home-systems" />;
}

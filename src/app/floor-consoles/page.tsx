import type { Metadata } from "next";
import { RoomTypeDetail } from "@/features/heat-pumps/components/RoomTypeDetail";
import { roomTypeMetadata } from "@/features/heat-pumps/room-types";

export const metadata: Metadata = roomTypeMetadata("floor-consoles");

export default function FloorConsolesPage() {
  return <RoomTypeDetail slug="floor-consoles" />;
}

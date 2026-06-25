import type { Metadata } from "next";
import { RoomTypeDetail } from "@/features/heat-pumps/components/RoomTypeDetail";
import { roomTypeMetadata } from "@/features/heat-pumps/room-types";

export const metadata: Metadata = roomTypeMetadata("wifi-control");

export default function WifiControlPage() {
  return <RoomTypeDetail slug="wifi-control" />;
}

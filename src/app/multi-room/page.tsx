import type { Metadata } from "next";
import { RoomTypeDetail } from "@/features/heat-pumps/components/RoomTypeDetail";
import { roomTypeMetadata } from "@/features/heat-pumps/room-types";

export const metadata: Metadata = roomTypeMetadata("multi-room");

export default function MultiRoomPage() {
  return <RoomTypeDetail slug="multi-room" />;
}

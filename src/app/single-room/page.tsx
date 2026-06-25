import type { Metadata } from "next";
import { RoomTypeDetail } from "@/features/heat-pumps/components/RoomTypeDetail";
import { roomTypeMetadata } from "@/features/heat-pumps/room-types";

export const metadata: Metadata = roomTypeMetadata("single-room");

export default function SingleRoomPage() {
  return <RoomTypeDetail slug="single-room" />;
}

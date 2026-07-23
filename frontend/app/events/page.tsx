import type { Metadata } from "next";

import EventsPage from "@/app/components/Events/EventsPage";

export const metadata: Metadata = {
  title: "Events | DLT Africa Bootcamp",
  description:
    "Explore past DLT Africa Bootcamp community events, meetups, launch parties, and workshops — by DLT Hub.",
};

export default function CollaborateEventPage() {
  return <EventsPage />;
}

import type { Metadata } from "next";

import EventsPage from "@/app/components/Events/EventsPage";

export const metadata: Metadata = {
  title: "Events | DLT Africa",
  description:
    "Explore past DLT Africa community events, meetups, launch parties, and workshops.",
};

export default function CollaborateEventPage() {
  return <EventsPage />;
}

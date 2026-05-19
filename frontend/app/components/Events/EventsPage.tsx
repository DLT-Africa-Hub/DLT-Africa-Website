"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import EventCard from "@/app/components/Events/EventCard";
import EventCardSkeleton from "@/app/components/Events/EventCardSkeleton";
import EventsHero from "@/app/components/Events/EventsHero";
import EventsMomentsStrip from "@/app/components/Events/EventsMomentsStrip";
import EventsPartnersRow from "@/app/components/Events/EventsPartnersRow";
import FeaturedEventCard from "@/app/components/Events/FeaturedEventCard";
import type {
  EventRecord,
  EventsListResponse,
} from "@/app/components/Events/event.types";
import { getUniqueCompanies } from "@/app/components/Events/event.utils";
import { buttonVariants } from "@/app/constants/buttonStyles";
import { apiClient, getApiErrorMessage } from "@/lib/apiClient";

export default function EventsPage() {
  const [events, setEvents] = useState<EventRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchEvents() {
      setLoading(true);
      setError(null);
      try {
        const { data } = await apiClient.get<EventsListResponse>(
          "/events/get-all-events",
          {
            signal: controller.signal,
            params: { limit: 100, sortOrder: "desc" },
          }
        );
        setEvents(data.data ?? []);
      } catch (err) {
        if (controller.signal.aborted) return;
        setError(getApiErrorMessage(err));
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    fetchEvents();
    return () => controller.abort();
  }, []);

  const partners = useMemo(() => getUniqueCompanies(events), [events]);
  const [featured, ...rest] = events;

  const venueCount = useMemo(() => {
    const venues = new Set(
      events.map((e) => e.eventVenue?.trim().toLowerCase()).filter(Boolean)
    );
    return venues.size;
  }, [events]);

  return (
    <main className="min-h-screen bg-[#F7FAF8]">
      <EventsHero
        eventCount={events.length}
        partnerCount={partners.length}
        venueCount={venueCount || 1}
      />

      <EventsMomentsStrip />

      <EventsPartnersRow companies={partners} />

      <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-poppins text-sm font-semibold uppercase tracking-widest text-[#1C7800]">
                Archive
              </p>
              <h2 className="font-sfPro text-2xl font-bold text-[#083700] sm:text-3xl">
                Past events &amp; meetups
              </h2>
            </div>
            {!loading && events.length > 0 ? (
              <p className="font-poppins text-sm text-[#5C6670]">
                Showing{" "}
                <span className="font-semibold text-[#083700]">
                  {events.length}
                </span>{" "}
                {events.length === 1 ? "event" : "events"}
              </p>
            ) : null}
          </div>

          {loading ? (
            <div className="space-y-8">
              <EventCardSkeleton featured />
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[0, 1, 2].map((i) => (
                  <EventCardSkeleton key={i} />
                ))}
              </div>
            </div>
          ) : null}

          {!loading && error ? (
            <div className="rounded-3xl border border-red-200/80 bg-red-50 px-8 py-10 text-center">
              <p className="font-sfPro text-lg font-semibold text-red-900">
                Could not load events
              </p>
              <p className="mt-2 font-poppins text-sm text-red-700">{error}</p>
            </div>
          ) : null}

          {!loading && !error && events.length === 0 ? (
            <div className="rounded-3xl border border-[#E4E8EC] bg-white px-8 py-16 text-center shadow-sm">
              <p className="font-sfPro text-xl font-semibold text-[#083700]">
                No events yet
              </p>
              <p className="mt-2 font-poppins text-sm text-[#5C6670]">
                Check back soon for upcoming community events and meetups.
              </p>
            </div>
          ) : null}

          {!loading && !error && events.length > 0 ? (
            <div className="space-y-10">
              {featured ? (
                <FeaturedEventCard event={featured} index={0} />
              ) : null}

              {rest.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((event, i) => (
                    <EventCard key={event._id} event={event} index={i + 1} />
                  ))}
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-t border-[#E4E8EC] bg-[#041504] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
          <p className="font-poppins text-sm font-medium uppercase tracking-widest text-[#7AE84A]">
            Want to collaborate?
          </p>
          <h2 className="max-w-2xl font-sfPro text-3xl font-bold text-white sm:text-4xl">
            Host your next event at DLT Africa
          </h2>
          <p className="max-w-xl font-poppins text-base text-white/60">
            Partner with us for workshops, launch parties, and community
            meetups at our tech hub in Ota — or co-host across Nigeria.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className={buttonVariants.solidGreen}>
              Get in touch
            </Link>
            <Link
              href="/talent-pool"
              className="inline-flex items-center justify-center gap-[10px] rounded-[10px] border border-white/25 px-6 py-3 font-sfPro text-[16px] text-white transition hover:bg-white/10"
            >
              Hire talent
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

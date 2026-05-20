"use client";

import Link from "next/link";
import {
  LuArrowUpRight,
  LuCalendar,
  LuClock,
  LuImage,
  LuMapPin,
} from "react-icons/lu";

import CompanyBadge from "@/app/components/Events/CompanyBadge";
import EventPosterMedia from "@/app/components/Events/EventPosterMedia";
import { buttonVariants } from "@/app/constants/buttonStyles";

import type { EventRecord } from "./event.types";
import {
  formatEventDate,
  getEventImage,
  getEventYear,
  hasEventGallery,
  isPastEvent,
} from "./event.utils";

export default function FeaturedEventCard({
  event,
  index = 0,
}: {
  event: EventRecord;
  index?: number;
}) {
  const imageSrc = getEventImage(event, index);
  const posterSrc = event.poster?.trim() || imageSrc;
  const past = isPastEvent(event.startDate);
  const galleryUrl = hasEventGallery(event) ? event.media!.trim() : null;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-[#1C7800]/20 bg-white shadow-[0_24px_64px_-24px_rgba(8,55,0,0.35)] transition duration-500 hover:shadow-[0_32px_80px_-20px_rgba(28,120,0,0.25)] lg:grid lg:grid-cols-[1.1fr_1fr]">
      <div className="relative min-h-[280px] overflow-hidden sm:min-h-[320px] lg:min-h-[400px]">
        <EventPosterMedia
          src={posterSrc}
          fallbackSrc={imageSrc}
          alt={event.eventName}
          sizes="(max-width: 1024px) 100vw, 55vw"
          priority
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041504]/90 via-[#041504]/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#041504]/10 lg:to-[#041504]/80" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2 sm:left-6 sm:top-6">
          {event.company ? (
            <CompanyBadge company={event.company} size="lg" />
          ) : null}
          <span className="rounded-full bg-[#FF8A00] px-3 py-1 font-poppins text-xs font-semibold uppercase tracking-wider text-white">
            Spotlight
          </span>
          <span className="rounded-full bg-white/15 px-3 py-1 font-poppins text-xs font-medium text-white backdrop-blur-md">
            {getEventYear(event.startDate)}
          </span>
        </div>
      </div>

      <div className="relative flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        {event.company ? (
          <p className="font-poppins text-sm font-medium text-[#1C7800]">
            Hosted with{" "}
            <span className="font-semibold">{event.company}</span>
          </p>
        ) : null}

        <div className={`flex flex-wrap gap-2 ${event.company ? "mt-3" : ""}`}>
          <span className="rounded-full bg-[#EFFFE2] px-3 py-1 font-poppins text-xs font-semibold text-[#1C7800]">
            {event.eventCategory}
          </span>
          <span className="rounded-full border border-[#E4E8EC] px-3 py-1 font-poppins text-xs text-[#5C6670]">
            {event.eventType}
          </span>
        </div>

        <h2 className="mt-4 font-sfPro text-2xl font-bold leading-tight text-[#083700] sm:text-3xl lg:text-4xl">
          {event.eventName}
        </h2>

        <p className="mt-3 font-poppins text-sm leading-relaxed text-[#5C6670] sm:text-base">
          {event.eventDescription}
        </p>

        <ul className="mt-6 space-y-2.5 font-poppins text-sm text-[#2E3A46]">
          <li className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFFFE2] text-[#1C7800]">
              <LuCalendar className="h-4 w-4" aria-hidden />
            </span>
            {formatEventDate(event.startDate)}
          </li>
          <li className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#EFFFE2] text-[#1C7800]">
              <LuClock className="h-4 w-4" aria-hidden />
            </span>
            {event.duration}
          </li>
          <li className="flex items-start gap-2.5">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EFFFE2] text-[#1C7800]">
              <LuMapPin className="h-4 w-4" aria-hidden />
            </span>
            <span>{event.eventVenue}</span>
          </li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {galleryUrl ? (
            <Link
              href={galleryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants.solidGreen} gap-2 px-5 py-2.5 text-sm`}
            >
              <LuImage className="h-4 w-4" aria-hidden />
              View moments
            </Link>
          ) : null}
          {!past && event.eventRegLink ? (
            <Link
              href={event.eventRegLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonVariants.neutral} gap-2 px-5 py-2.5 text-sm`}
            >
              Register
              <LuArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : past ? (
            <span className="inline-flex items-center gap-2 rounded-[10px] border border-dashed border-[#1C7800]/40 bg-[#F7FAF8] px-5 py-2.5 font-poppins text-sm font-medium text-[#1C7800]">
              Past meetup · {getEventYear(event.startDate)}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}

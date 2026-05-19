"use client";

import Image from "next/image";
import Link from "next/link";
import {
  LuArrowUpRight,
  LuCalendar,
  LuClock,
  LuImage,
  LuMapPin,
} from "react-icons/lu";

import CompanyBadge from "@/app/components/Events/CompanyBadge";

import type { EventRecord } from "./event.types";
import {
  formatEventDate,
  getEventImage,
  getEventYear,
  isPastEvent,
} from "./event.utils";

export default function EventCard({
  event,
  index = 0,
}: {
  event: EventRecord;
  index?: number;
}) {
  const imageSrc = getEventImage(event, index);
  const isExternal = imageSrc.startsWith("http");
  const past = isPastEvent(event.startDate);
  const hasMedia = Boolean(event.media?.trim());

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E4E8EC]/80 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:border-[#1C7800]/30 hover:shadow-[0_20px_48px_-16px_rgba(28,120,0,0.2)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={event.eventName}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized={isExternal}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041504]/75 via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 sm:left-4 sm:top-4">
          <CompanyBadge company={event.company} size="sm" />
          {!event.company ? (
            <span className="rounded-full bg-white/90 px-2.5 py-1 font-poppins text-[10px] font-semibold uppercase tracking-wide text-[#083700] shadow-sm backdrop-blur-sm sm:text-xs">
              {event.eventCategory}
            </span>
          ) : null}
          {past ? (
            <span className="rounded-full bg-[#083700]/80 px-2.5 py-1 font-poppins text-[10px] font-medium text-white backdrop-blur-sm sm:text-xs">
              {getEventYear(event.startDate)}
            </span>
          ) : null}
        </div>
        <p className="absolute bottom-3 left-3 right-3 font-sfPro text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl">
          {event.eventName}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap gap-2">
          <span className="w-fit rounded-full border border-[#E4E8EC] px-2.5 py-0.5 font-poppins text-xs text-[#5C6670]">
            {event.eventType}
          </span>
          <span className="w-fit rounded-full bg-[#EFFFE2] px-2.5 py-0.5 font-poppins text-xs font-medium text-[#1C7800]">
            {event.eventCategory}
          </span>
        </div>

        <p className="mt-2 line-clamp-2 flex-1 font-poppins text-sm leading-relaxed text-[#5C6670]">
          {event.eventDescription}
        </p>

        <ul className="mt-4 space-y-1.5 border-t border-[#EEF1F4] pt-4 font-poppins text-xs text-[#2E3A46] sm:text-sm">
          <li className="flex items-center gap-2">
            <LuCalendar className="h-3.5 w-3.5 shrink-0 text-[#1C7800]" aria-hidden />
            {formatEventDate(event.startDate)}
          </li>
          <li className="flex items-center gap-2">
            <LuClock className="h-3.5 w-3.5 shrink-0 text-[#1C7800]" aria-hidden />
            {event.duration}
          </li>
          <li className="flex items-start gap-2">
            <LuMapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1C7800]" aria-hidden />
            <span className="line-clamp-2">{event.eventVenue}</span>
          </li>
        </ul>

        <div className="mt-4 flex gap-2">
          {hasMedia ? (
            <Link
              href={event.media!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#EFFFE2] py-2.5 font-poppins text-xs font-semibold text-[#1C7800] transition hover:bg-[#DFF5D0] sm:text-sm"
            >
              <LuImage className="h-4 w-4" aria-hidden />
              Gallery
            </Link>
          ) : null}
          {!past && event.eventRegLink ? (
            <Link
              href={event.eventRegLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#1C7800] py-2.5 font-poppins text-xs font-semibold text-white transition hover:bg-[#166100] sm:text-sm"
            >
              Register
              <LuArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

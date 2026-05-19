"use client";

import { LuBuilding2, LuCalendarDays, LuMapPin, LuSparkles } from "react-icons/lu";

interface EventsHeroProps {
  eventCount: number;
  partnerCount: number;
  venueCount: number;
}

export default function EventsHero({
  eventCount,
  partnerCount,
  venueCount,
}: EventsHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#041504] px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(28,120,0,0.45),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#1C7800]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#FF8A00]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
          <LuSparkles className="h-4 w-4 text-[#7AE84A]" aria-hidden />
          <span className="font-poppins text-xs font-medium tracking-wide text-white/80 sm:text-sm">
            Collaborate · Community
          </span>
        </div>

        <h1 className="mt-6 font-sfPro text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          Where builders meet,{" "}
          <span className="bg-gradient-to-r from-[#7AE84A] via-[#B8F070] to-[#FFBD59] bg-clip-text text-transparent">
            stories get made
          </span>
        </h1>

        <p className="mt-5 max-w-2xl font-poppins text-base leading-relaxed text-white/65 sm:text-lg">
          Relive launch parties, hackathons, workshops, and partner meetups from
          across the DLT Africa ecosystem — from Lagos to Ota and beyond.
        </p>

        <dl className="mt-10 grid w-full max-w-xl grid-cols-3 gap-3 sm:gap-4">
          <StatPill
            icon={LuCalendarDays}
            value={String(eventCount)}
            label="Events hosted"
          />
          <StatPill
            icon={LuBuilding2}
            value={String(partnerCount)}
            label="Partners"
          />
          <StatPill icon={LuMapPin} value={String(venueCount)} label="Venues" />
        </dl>
      </div>
    </section>
  );
}

function StatPill({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof LuCalendarDays;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-sm sm:px-4">
      <Icon className="mb-2 h-5 w-5 text-[#7AE84A]" aria-hidden />
      <dt className="font-sfPro text-2xl font-bold text-white sm:text-3xl">
        {value}
      </dt>
      <dd className="mt-0.5 font-poppins text-[10px] text-white/50 sm:text-xs">
        {label}
      </dd>
    </div>
  );
}

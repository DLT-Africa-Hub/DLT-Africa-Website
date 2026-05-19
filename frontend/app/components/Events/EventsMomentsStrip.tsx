"use client";

import Image from "next/image";

import { withBasePath } from "@/lib/basePath";

const MOMENTS = [
  "/splash/crossfi-mainnet.svg",
  "/splash/morph.svg",
  "/splash/akure.svg",
  "/splash/summer-crash.svg",
  "/splash/live-training.svg",
  "/splash/predemo.svg",
  "/splash/friday-games.svg",
  "/splash/live-chat.svg",
  "/splash/crossfi-mainnet.svg",
  "/splash/morph.svg",
] as const;

export default function EventsMomentsStrip() {
  const images = MOMENTS.map((p) => withBasePath(p));

  return (
    <div className="relative overflow-hidden border-y border-[#E4E8EC]/60 bg-[#041504] py-4">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#041504] to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#041504] to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="flex w-max animate-[events-marquee_40s_linear_infinite] gap-4 px-4"
        aria-hidden
      >
        {[...images, ...images].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className="relative h-20 w-32 shrink-0 overflow-hidden rounded-xl border border-white/10 opacity-80 sm:h-24 sm:w-40"
          >
            <Image src={src} alt="" fill className="object-cover" sizes="160px" />
          </div>
        ))}
      </div>
    </div>
  );
}

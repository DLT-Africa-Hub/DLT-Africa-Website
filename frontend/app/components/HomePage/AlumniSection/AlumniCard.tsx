"use client";

import Image from "next/image";

import type { AlumniCardProps } from "./alumniCard.types";

const themeShell: Record<AlumniCardProps["theme"], string> = {
  coral: "bg-[#FFE8D6] text-[#1C1C1C]",
  brown: "bg-[#4A3728] text-white",
  green: "bg-[#1C7800] text-white",
};

const themeQuoteMuted: Record<AlumniCardProps["theme"], string> = {
  coral: "text-[#4B5563]",
  brown: "text-white/90",
  green: "text-white/90",
};

const themeRoleMuted: Record<AlumniCardProps["theme"], string> = {
  coral: "text-[#5C6670]",
  brown: "text-white/80",
  green: "text-white/80",
};

const LOGO_SRC = "/images/ban.png";

export function AlumniCard({
  name,
  role,
  quote,
  image,
  imageAlt,
  theme,
  layoutClassName = "",
}: AlumniCardProps) {
  const logoNeedsInvert = theme === "brown" || theme === "green";

  return (
    <article
      className={`relative cursor-pointer flex w-full max-w-[320px] flex-col rounded-3xl p-6 shadow-md sm:p-7 hover:scale-105 transition-all duration-300 ${themeShell[theme]} ${layoutClassName}`.trim()}
    >
      <div className="flex items-start gap-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-black/10">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="56px"
          />
        </div>
        <div className="min-w-0">
          <p className="font-sfPro text-base font-bold leading-tight">{name}</p>
          <p className={`mt-0.5 font-poppins text-xs sm:text-sm ${themeRoleMuted[theme]}`}>
            {role}
          </p>
        </div>
      </div>
      <p
        className={`mt-4 font-poppins text-sm leading-relaxed sm:text-[15px] ${themeQuoteMuted[theme]}`}
      >
        {quote}
      </p>
      {/* <div className="mt-6 flex justify-end">
        <Image
          src={LOGO_SRC}
          alt="DLT Africa"
          width={40}
          height={40}
          className={`h-9 w-auto object-contain opacity-90 sm:h-10 ${logoNeedsInvert ? "brightness-0 invert" : ""}`}
        />
      </div> */}
    </article>
  );
}

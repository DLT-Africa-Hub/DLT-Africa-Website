"use client";

import React, { useEffect, useLayoutEffect, useRef } from "react";

interface PartnerItem {
  id: number;
  img: string;
  url: string;
}

const partnerItems: PartnerItem[] = [
  { id: 1, img: "/images/canza.png", url: "https://canza.io" },
  { id: 2, img: "/images/celo.png", url: "https://celo.org" },
  { id: 3, img: "/images/lisk-black.png", url: "https://lisk.com" },
  { id: 4, img: "/images/bitmama.png", url: "https://bitmama.io" },
  { id: 5, img: "/images/cartesi.png", url: "https://cartesi.io" },
  { id: 6, img: "/images/kotanipay.png", url: "https://kotanipay.com" },
];

/** Pause between each nudge (ms). */
const INTERVAL_MS = 2000;
/** How long each nudge takes (ms). */
const SLIDE_MS = 450;
/** Fallback step if a cell cannot be measured yet. */
const STEP_FALLBACK_PX = 48;

const logoImgClass =
  "h-[26px] w-auto sm:h-[30px] md:h-[44px] lg:h-[48px] xl:h-[80px]";

const maskClass =
  "min-w-0 flex-1 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-96px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-120px),transparent_100%)]";

const stripClass =
  "flex shrink-0 flex-nowrap items-center justify-start [&_img]:max-w-none";

function PartnerLogo({ partner }: { partner: PartnerItem }) {
  return (
    <div className="partner-logo-cell m-2 py-2 sm:m-3 sm:py-3">
      <a href={partner.url} target="_blank" rel="noopener noreferrer">
        <img
          src={partner.img}
          alt={partner.url}
          loading="lazy"
          className={logoImgClass}
        />
      </a>
    </div>
  );
}

function PartnerStrip({
  stripIndex,
  ariaHidden,
}: {
  stripIndex: number;
  ariaHidden: boolean;
}) {
  return (
    <div
      className={stripClass}
      {...(stripIndex === 0 ? { "data-partner-strip": "" } : {})}
      aria-hidden={ariaHidden}
    >
      {partnerItems.map((partner) => (
        <PartnerLogo key={`${stripIndex}-${partner.id}`} partner={partner} />
      ))}
    </div>
  );
}

const Partners: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const stripWidthRef = useRef(0);
  const offsetRef = useRef(0);
  const stepRef = useRef(STEP_FALLBACK_PX);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const strip = track.querySelector<HTMLElement>("[data-partner-strip]");
      if (!strip) return;
      stripWidthRef.current = strip.scrollWidth;
      const cell = strip.querySelector<HTMLElement>(".partner-logo-cell");
      if (cell?.offsetWidth) {
        stepRef.current = Math.max(
          28,
          Math.min(72, Math.round(cell.offsetWidth * 0.5))
        );
      }
    };

    measure();
    const strip = track.querySelector<HTMLElement>("[data-partner-strip]");
    const ro = strip ? new ResizeObserver(measure) : null;
    if (strip) ro?.observe(strip);
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    track.style.willChange = "transform";
    track.style.transition = "none";
    track.style.transform = "translate3d(0,0,0)";
    void track.offsetHeight;
    track.style.transition = `transform ${SLIDE_MS}ms ease-out`;

    const tick = () => {
      const stripW = stripWidthRef.current;
      if (stripW <= 0) return;

      let offset = offsetRef.current + stepRef.current;

      if (offset >= stripW) {
        track.style.transition = "none";
        offset -= stripW;
        offsetRef.current = offset;
        track.style.transform = `translate3d(-${offset}px,0,0)`;
        void track.offsetHeight;
        track.style.transition = `transform ${SLIDE_MS}ms ease-out`;
        return;
      }

      offsetRef.current = offset;
      track.style.transition = `transform ${SLIDE_MS}ms ease-out`;
      track.style.transform = `translate3d(-${offset}px,0,0)`;
    };

    const id = window.setInterval(tick, INTERVAL_MS);
    return () => {
      window.clearInterval(id);
      track.style.willChange = "auto";
    };
  }, []);

  return (
    <section
      className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      aria-label="Partner organizations"
    >
      <div className="mx-auto flex max-w-9xl flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 lg:gap-12">
        <p className="shrink-0 font-poppins text-sm font-medium leading-snug text-[#1C1C1C]  sm:text-[15px] lg:text-base">
          Our Network of Connections
        </p>
        <div className={maskClass}>
          <div ref={trackRef} className="flex w-max flex-nowrap">
            <PartnerStrip stripIndex={0} ariaHidden={false} />
            <PartnerStrip stripIndex={1} ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;

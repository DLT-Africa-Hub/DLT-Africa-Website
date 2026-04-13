"use client";

import Link from "next/link";
import { forwardRef } from "react";

import { buttonVariants } from "@/app/constants/buttonStyles";
import { withBasePath } from "@/lib/basePath";
import Image from "next/image";

interface HeroSectionProps {
  className?: string;
}

export const HERO_SECTION_ILLUSTRATION = withBasePath(
  "/images/hero-illustration.png",
);
function HeroSparkles() {
  const spots = [
    "left-[8%] top-[12%] h-5 w-5 opacity-[0.22]",
    "left-[18%] top-[28%] h-5 w-5 opacity-[0.18]",
    "right-[12%] top-[16%] h-5 w-5 opacity-[0.2]",
    "right-[22%] top-[35%] h-5 w-5 opacity-[0.16]",
    "left-[14%] top-[42%] h-5 w-5 opacity-[0.25]",
    "right-[30%] top-[22%] h-5 w-5 opacity-[0.2]",
    "left-[40%] top-[8%] h-5 w-5 opacity-[0.15]",
  ];
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 h-[55%] overflow-hidden"
      aria-hidden
    >
      {spots.map((cls, i) => (
        <svg
          key={i}
          className={`absolute text-[#1C7800] ${cls}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 1.5l2.2 7.3L21 12l-6.8 3.2L12 22.5l-2.2-7.3L3 12l6.8-3.2L12 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function HeroIllustration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden
    >
      <div className="absolute -left-24 top-0 h-[300px] w-[360px] xl:-left-28 xl:h-[340px] xl:w-[420px]">
        <Image
          src={HERO_SECTION_ILLUSTRATION}
          alt=""
          fill
          className="object-contain opacity-80"
        />
      </div>
      <div className="absolute -right-20 bottom-4 h-[280px] w-[340px] xl:-right-24 xl:h-[320px] xl:w-[390px]">
        <Image
          src={HERO_SECTION_ILLUSTRATION}
          alt=""
          fill
          className="object-contain opacity-70"
        />
      </div>
    </div>
  );
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ className = "" }, ref) => {
    return (
      <section
        ref={ref}
        className={`relative overflow-hidden ${className}`.trim()}
      >
        <div
          className="relative px-4 pb-6 pt-14 sm:px-6 sm:pb-10 sm:pt-16 md:pb-0 md:pt-20 lg:px-8 h-[800px]"
          style={{
            background:
              "radial-gradient(ellipse 115% 75% at 50% -5%, rgba(239, 255, 226, 0.42) 0%, transparent 52%), linear-gradient(180deg, #FFFFFF 0%, #FAFDF9 22%, #F2FCE8 40%, #E2F5D4 58%, #D0ECC4 78%, #C2E2B6 100%)",
          }}
        >
          <HeroSparkles />
          <HeroIllustration />

          <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center text-center">
            <h1 className="font-sfPro text-[25px] font-bold leading-[1.2] tracking-tight text-[#083700] sm:text-4xl md:text-[48px] lg:text-[48px] lg:leading-[1.15]">
              Join our intensive{" "}
              <span className="font-dmSerifDisplay text-[48px] font-normal italic text-[#1C7800]">
                Bootcamp
              </span>{" "}
              and learn to ship with confidence
            </h1>

            <p className="mt-5 max-w-2xl font-poppins text-sm leading-relaxed text-[#5C6670] sm:mt-6 sm:text-base md:text-lg">
              Hands-on cohort training in full-stack development—live
              instruction, peer support, and portfolio-ready projects from day
              one.
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col items-stretch gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-4">
              <Link
                href="/application"
                className={`${buttonVariants.neutral} w-full justify-center sm:w-auto sm:min-w-[160px]`}
              >
                Enroll now
              </Link>
              <Link
                href="#courses"
                className={`${buttonVariants.solidGreen} w-full justify-center sm:w-auto sm:min-w-[160px]`}
                scroll
              >
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = "HeroSection";

export default HeroSection;

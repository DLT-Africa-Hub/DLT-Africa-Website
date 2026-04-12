"use client";

import Image from "next/image";
import Link from "next/link";
import { FiMonitor } from "react-icons/fi";
import { LuClock, LuMapPin } from "react-icons/lu";

import { buttonVariants } from "@/app/constants/buttonStyles";

import type { CourseCardProps } from "./courseCard.types";

const cardShell =
  "flex overflow-hidden rounded-2xl border border-[#E4E8EC] bg-white shadow-sm";

const categoryClass =
  "font-poppins text-xs font-medium text-[#FFA751] sm:text-sm";

const titleClass =
  "mt-1 font-sfPro text-lg font-bold leading-tight text-[#1C1C1C] sm:text-xl";

const metaClass =
  "mt-4 flex flex-wrap gap-x-5 gap-y-2 font-poppins text-sm text-[#5C6670]";

const priceClass = "font-sfPro text-lg font-bold text-[#1C7800] sm:text-xl";

const enrollClass = `${buttonVariants.neutral} shrink-0 px-4 py-2 text-sm`;

/** Same radius on every corner of each image (matches card rounding). */
const imageRadius = "rounded-2xl";
const imageFrame = `overflow-hidden ${imageRadius}`;

function CourseMeta({
  duration,
  location,
}: {
  duration: string;
  location: string;
}) {
  const isVirtual = /virtual/i.test(location);
  const LocationIcon = isVirtual ? FiMonitor : LuMapPin;

  return (
    <div className={metaClass}>
      <span className="inline-flex items-center gap-2">
        <LuClock className="h-4 w-4 shrink-0 text-[#5C6670]" aria-hidden />
        {duration}
      </span>
      <span className="inline-flex items-center gap-2">
        <LocationIcon className="h-4 w-4 shrink-0 text-[#5C6670]" aria-hidden />
        {location}
      </span>
    </div>
  );
}

function CourseFooter({
  price,
  enrollHref,
}: {
  price: string;
  enrollHref: string;
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#EEF1F4] pt-5">
      <span className={priceClass}>{price}</span>
      <Link href={enrollHref} className={enrollClass}>
        Enroll now
      </Link>
    </div>
  );
}

export function CourseCard(props: CourseCardProps) {
  const enrollHref = props.enrollHref ?? "/courses";

  if (props.variant === "horizontal") {
    const compact = props.compactImage === true;
    const imageShell = compact
      ? `relative mx-auto h-[200px] w-full max-w-[260px] shrink-0 ${imageFrame} sm:h-[210px] sm:max-w-[280px] lg:mx-0 lg:h-[220px] lg:w-[240px] lg:max-w-[240px] xl:w-[260px] xl:max-w-[260px]`
      : `relative aspect-[16/10] w-full shrink-0 ${imageFrame} lg:aspect-auto lg:min-h-[280px] lg:w-full lg:flex-1`;

    const imageColumnClass = compact
      ? "w-full shrink-0 p-3 sm:p-4"
      : "flex w-full shrink-0 flex-col p-3 sm:p-4 lg:w-[min(46%,420px)] lg:min-h-0 lg:max-w-none lg:self-stretch lg:p-5";

    return (
      <article className={`${cardShell} flex-col lg:flex-row lg:items-stretch`}>
        <div className={imageColumnClass}>
          <div className={imageShell}>
            <Image
              src={props.image}
              alt={props.imageAlt}
              fill
              className={`object-cover ${imageRadius}`}
              sizes={
                compact
                  ? "(max-width: 1024px) 280px, 260px"
                  : "(max-width: 1024px) 100vw, 42vw"
              }
            />
          </div>
        </div>
        <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-8">
          <p className={categoryClass}>{props.category}</p>
          <h3 className={titleClass}>{props.title}</h3>
          <p className="mt-3 font-poppins text-sm leading-relaxed text-[#5C6670] sm:text-base">
            {props.description}
          </p>
          <CourseMeta duration={props.duration} location={props.location} />
          <div className="mt-auto">
            <CourseFooter price={props.price} enrollHref={enrollHref} />
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`${cardShell} h-full flex-col`}>
      <div className="px-3 pt-3 sm:px-4 sm:pt-4">
        <div
          className={`relative h-[148px] w-full shrink-0 sm:h-[168px] ${imageFrame}`}
        >
          <Image
            src={props.image}
            alt={props.imageAlt}
            fill
            className={`object-cover ${imageRadius}`}
            sizes="(max-width: 768px) 100vw, 360px"
          />
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4 sm:p-5">
        <p className={categoryClass}>{props.category}</p>
        <h3 className="mt-1 font-sfPro text-base font-bold leading-tight text-[#1C1C1C] sm:text-lg">
          {props.title}
        </h3>
        <div className="mt-4 border-t border-[#EEF1F4] pt-4">
          <VerticalCourseMeta
            duration={props.duration}
            location={props.location}
          />
        </div>
        <div className="mt-auto">
          <VerticalCourseFooter price={props.price} enrollHref={enrollHref} />
        </div>
      </div>
    </article>
  );
}

function VerticalCourseMeta({
  duration,
  location,
}: {
  duration: string;
  location: string;
}) {
  const isVirtual = /virtual/i.test(location);
  const LocationIcon = isVirtual ? FiMonitor : LuMapPin;

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 font-poppins text-xs text-[#5C6670] sm:text-[13px]">
      <span className="inline-flex items-center gap-1.5">
        <LuClock className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {duration}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <LocationIcon className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {location}
      </span>
    </div>
  );
}

function VerticalCourseFooter({
  price,
  enrollHref,
}: {
  price: string;
  enrollHref: string;
}) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#EEF1F4] pt-3">
      <span className="font-sfPro text-base font-bold text-[#1C7800] sm:text-lg">
        {price}
      </span>
      <Link
        href={enrollHref}
        className={`${buttonVariants.neutral} shrink-0 px-3 py-1.5 text-xs sm:text-sm`}
      >
        Enroll now
      </Link>
    </div>
  );
}

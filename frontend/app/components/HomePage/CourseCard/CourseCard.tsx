"use client";

import Image from "next/image";
import Link from "next/link";
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

function CourseMeta({
  duration,
  location,
}: {
  duration: string;
  location: string;
}) {
  return (
    <div className={metaClass}>
      <span className="inline-flex items-center gap-2">
        <LuClock className="h-4 w-4 shrink-0 text-[#5C6670]" aria-hidden />
        {duration}
      </span>
      <span className="inline-flex items-center gap-2">
        <LuMapPin className="h-4 w-4 shrink-0 text-[#5C6670]" aria-hidden />
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
    return (
      <article className={`${cardShell} flex-col lg:flex-row lg:items-stretch`}>
        <div className="relative aspect-[16/10] w-full shrink-0 lg:aspect-auto lg:w-[min(46%,420px)] lg:min-h-[280px]">
          <Image
            src={props.image}
            alt={props.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 42vw"
          />
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
      <div className="relative h-[160px] w-full shrink-0 sm:h-[180px]">
        <Image
          src={props.image}
          alt={props.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 360px"
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-4">
        <p className="font-poppins text-[11px] font-medium text-[#FFA751] sm:text-xs">
          {props.category}
        </p>
        <h3 className="mt-0.5 font-sfPro text-base font-bold leading-tight text-[#1C1C1C] sm:text-lg">
          {props.title}
        </h3>
        <VerticalCourseMeta duration={props.duration} location={props.location} />
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
  return (
    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 font-poppins text-xs text-[#5C6670] sm:text-[13px]">
      <span className="inline-flex items-center gap-1.5">
        <LuClock className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {duration}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <LuMapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
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

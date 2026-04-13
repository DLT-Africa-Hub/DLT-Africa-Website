"use client";

import Image from "next/image";

import {
  INTERNSHIP_IMAGE,
  INTERNSHIP_IMAGE_ALT,
  INTERNSHIP_TITLE,
  INTERNSHIP_DESCRIPTION,
  INTERNSHIP_DATA,
} from "./internship.data";
import { FaqAccordion } from "@/app/components/FaqAccordion/FaqAccordion";

const InternOpportunity: React.FC = () => {
  return (
    <section
      className="grid grid-cols-1 items-center gap-8 bg-[#441606] px-4 py-12 sm:px-6 sm:py-14 md:gap-10 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16"
      aria-labelledby="internship-opportunity-heading"
    >
      <div className="relative mx-auto h-[220px] w-full max-w-[min(100%,360px)] overflow-hidden rounded-2xl sm:h-[228px] sm:max-w-[min(100%,440px)] md:h-[300px] md:max-w-[min(100%,500px)] lg:mx-0 lg:h-[370px] lg:max-w-[min(100%,620px)] lg:justify-self-start">
        <Image
          src={INTERNSHIP_IMAGE}
          alt={INTERNSHIP_IMAGE_ALT}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 360px, (max-width: 768px) 440px, (max-width: 1024px) 500px, 620px"
        />
      </div>

      <div className="w-full">
        <div className="mx-auto w-full max-w-[760px]">
          <h2
            id="internship-opportunity-heading"
            className="text-left font-sfPro text-[32px] font-bold tracking-tight text-[#FAFAFA] sm:text-[38px] lg:text-[40px]"
          >
            {INTERNSHIP_TITLE}
          </h2>
          <p className="mt-2 text-left font-poppins text-[16px] leading-relaxed text-[#FAFAFA]">
            {INTERNSHIP_DESCRIPTION}
          </p>
        </div>
        <FaqAccordion
          items={INTERNSHIP_DATA}
          variant="pills"
          tone="dark"
          className="mt-4 min-w-0 bg-transparent"
        />
      </div>
    </section>
  );
};

export default InternOpportunity;

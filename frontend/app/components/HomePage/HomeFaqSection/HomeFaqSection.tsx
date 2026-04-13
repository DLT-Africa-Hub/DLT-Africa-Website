"use client";

import Image from "next/image";

import { FaqAccordion } from "@/app/components/FaqAccordion/FaqAccordion";

import {
  HOME_FAQ_IMAGE,
  HOME_FAQ_IMAGE_ALT,
  homeFaqItems,
} from "./homeFaqData";

const HomeFaqSection: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="home-faq-heading"
    >
      <div className="w-full">
        <h2
          id="home-faq-heading"
          className="text-center font-sfPro text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
        >
          <span className="text-[#083700]">Frequently </span>
          <span className="text-[#FFA751]">asked questions?</span>
        </h2>

        <div className="mt-10 grid items-start gap-10 lg:mt-14 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <FaqAccordion items={homeFaqItems} variant="pills" className="min-w-0" />

          {/* Fixed height so wider breakpoints add width only, not height (object-cover crops sides/top as needed). */}
          <div className="relative mx-auto h-[220px] w-full max-w-[min(100%,360px)] overflow-hidden rounded-2xl sm:h-[228px] sm:max-w-[min(100%,440px)] md:h-[333px] md:max-w-[min(100%,500px)] lg:mx-0  lg:max-w-[min(100%,580px)] lg:justify-self-start xl:max-w-[min(100%,640px)]">
            <Image
              src={HOME_FAQ_IMAGE}
              alt={HOME_FAQ_IMAGE_ALT}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 360px, (max-width: 768px) 440px, (max-width: 1024px) 500px, (max-width: 1280px) 580px, 640px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFaqSection;

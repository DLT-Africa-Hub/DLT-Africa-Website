"use client";

import Image from "next/image";

import { JourneyStepBox } from "./JourneyStepBox";
import {
  JOURNEY_IMAGE,
  JOURNEY_IMAGE_ALT,
  journeyDescription,
  journeyQuote,
  journeySteps,
  journeyTitle,
} from "./journeyData";

const JourneySection: React.FC = () => {
  return (
    <section
      className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:px-[70px]"
      aria-labelledby="journey-section-heading"
    >
      <div className="w-full">
        <div className="rounded-2xl bg-[#1C7800] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 xl:py-[99px] xl:px-[69px]">
          <div className="flex flex-col md:flex-row gap-6 xl:gap-[90px] md:gap-8 justify-center xl:justify-start  items-center">
            <div className="relative w-full xl:w-fit  ">
              <div className="relative h-[380px] w-full overflow-hidden rounded-xl xl:rounded-[30px] sm:h-[380px] md:w-[560px] lg:w-[620px] xl:h-[580px] xl:w-[562px]">
                <Image
                  src={JOURNEY_IMAGE}
                  alt={JOURNEY_IMAGE_ALT}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 560px, (max-width: 1280px) 620px, 680px"
                />
              </div>
              <figure className="absolute bottom-20 left-0 xl:left-[-100px] z-10 w-[118px] xl:w-[218px] rounded-md bg-[#FFA751] px-2.5 py-2 shadow-md sm:-left-10">
                <blockquote className="font-dmSerifDisplay text-[11px] xl:text-[34px] italic  xl:leading-[1] leading-snug text-white sm:text-xs">
                  "{journeyQuote}"
                </blockquote>
              </figure>
            </div>

            <div className="xl:flex flex-col xl:gap-[30px]  min-w-0  w-full max-w-[731px] ">
              <h2
                id="journey-section-heading"
                className="font-sfPro text-lg leading-[1.25] tracking-normal text-white sm:text-xl lg:text-[1.35rem]  xl:leading-[1] xl:text-[48px] text-wrap"
              >
                {journeyTitle}
              </h2>
              <p className="mt-2 font-poppins w-full text-xs leading-relaxed text-white/90 sm:text-[13px] xl:text-[20px]  text-wrap">
                {journeyDescription}
              </p>
              <div className="mt-4 grid w-full gap-2 sm:mt-5 sm:gap-2.5 grid-cols-2  xl:gap-x-[10px] xl:gap-y-[20px]">
                {journeySteps.map((item) => (
                  <JourneyStepBox key={item.step} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;

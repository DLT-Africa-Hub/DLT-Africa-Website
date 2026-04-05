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
      className="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      aria-labelledby="journey-section-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl bg-[#1C7800] px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-center">
            <div className="relative w-full">
              <div className="relative h-[380px] w-full overflow-hidden rounded-xl sm:h-[380px] md:w-[462px]">
                <Image
                  src={JOURNEY_IMAGE}
                  alt={JOURNEY_IMAGE_ALT}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
              <figure className="absolute bottom-20 left-0 z-10 w-[118px] rounded-md bg-[#FFA751] px-2.5 py-2 shadow-md sm:-left-10">
                <blockquote className="font-dmSerifDisplay text-[11px] italic leading-snug text-white sm:text-xs">
                  {journeyQuote}
                </blockquote>
              </figure>
            </div>

            <div className="min-w-0">
              <h2
                id="journey-section-heading"
                className="font-sfPro text-lg font-bold w-full leading-snug tracking-tight text-white sm:text-xl lg:text-[1.35rem]  text-wrap"
              >
                {journeyTitle}
              </h2>
              <p className="mt-2 font-poppins w-full text-xs leading-relaxed text-white/90 sm:text-[13px]  text-wrap">
                {journeyDescription}
              </p>
              <div className="mt-4 grid w-full gap-2 sm:mt-5 sm:gap-2.5 grid-cols-2 ">
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

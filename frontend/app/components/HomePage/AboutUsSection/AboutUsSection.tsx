"use client";

import Image from "next/image";

import { withBasePath } from "@/lib/basePath";

import { FaqAccordion } from "@/app/components/FaqAccordion/FaqAccordion";

import { ABOUT_OFFER_FAQ } from "./offerFaq";

const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-9xl">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[800px]">
            <p className="font-poppins text-sm font-medium text-[#FFA751]">
              About us
            </p>
            <h2 className="mt-2 font-sfPro text-3xl font-bold tracking-tight text-[#083700] sm:text-4xl lg:text-[48px] lg:leading-tight">
              What we offer?
            </h2>
            <p className="mt-5 font-poppins text-sm leading-relaxed text-[#5C6670] sm:text-base">
              With DLT Africa, top talents gain access to extensive training
              spanning through full-stack development. Top projects receive all
              needed technical support in building their projects to allow them
              focus on the business side of the project through our exceptional
              in-house engineers.
            </p>
            <FaqAccordion items={ABOUT_OFFER_FAQ} className="mt-8" />
          </div>

          <div>
            <div className="relative h-[240px] w-full overflow-hidden rounded-[2rem] sm:h-[300px] md:h-[360px] lg:h-[440px] xl:h-[500px]">
              <Image
                src={withBasePath("/images/aboutus.jpg")}
                alt="DLT Africa cohort collaborating at laptops"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

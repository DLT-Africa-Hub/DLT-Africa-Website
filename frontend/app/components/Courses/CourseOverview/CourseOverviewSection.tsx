"use client";

import React from "react";

interface OverviewCardItem {
  id: number;
  title: string;
  text: string;
  icon: React.ReactNode;
}

interface CourseOverviewSectionProps {
  title: string;
  description: string;
  cards: OverviewCardItem[];
  imageSrc: string;
  imageAlt: string;
}

const CourseOverviewSection: React.FC<CourseOverviewSectionProps> = ({
  title,
  description,
  cards,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="bg-[#F6F6F6] px-6 py-[90px] md:px-12 lg:px-[70px]">
      <div className="mx-auto grid  grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="pt-1 flex flex-col gap-4">
          <h3 className="font-sfPro text-[32px] font-bold leading-[120%] text-[#1C1C1C]">
            {title}
          </h3>
          <p className="mt-4 font-poppins text-[18px] leading-[175%] text-[#5F5F5F]">
            {description}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.id}
                className="rounded-[18px] border border-[#D8D8D8] bg-transparent p-5"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F9B25D] text-[#1C1C1C]">
                  {card.icon}
                </div>
                <h4 className="mt-10 font-sfPro text-[22px] font-semibold leading-[125%] text-[#1C1C1C]">
                  {card.title}
                </h4>
                <p className="mt-3 font-poppins text-[15px] leading-[170%] text-[#5F5F5F]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-[635px] w-[784px] rounded-[20px] object-cover sm:h-[340px] md:h-[420px] lg:h-[635px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CourseOverviewSection;

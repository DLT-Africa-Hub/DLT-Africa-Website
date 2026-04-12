"use client";

import React from "react";

interface CareerOpportunityItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface CareerOpportunitiesSectionProps {
  title: string;
  opportunities: CareerOpportunityItem[];
}

const CareerOpportunitiesSection: React.FC<CareerOpportunitiesSectionProps> = ({
  title,
  opportunities,
}) => {
  return (
    <section className="bg-[#F6F6F6] px-6 py-16 md:px-12 lg:px-16 min-h-[60vh] flex items-center justify-center">
      <div className="mx-auto w-full">
        <h3 className="text-center font-sfPro text-[32px] font-bold leading-[120%] text-[#1C1C1C]">
          {title}
        </h3>

        <div className="mt-10 grid grid-cols-1 gap-x-[52px] gap-y-[32px] sm:grid-cols-2 lg:grid-cols-3">
          {opportunities.map((opportunity) => (
            <article
              key={opportunity.id}
              className="rounded-[18px] border border-[#D3D3D3] px-5 py-5"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F9B25D] text-[#1C1C1C]">
                {opportunity.icon}
              </div>
              <p className="mt-7 font-sfPro text-[20px] font-medium font-500 leading-[130%] text-[#1C1C1C]">
                {opportunity.title}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;

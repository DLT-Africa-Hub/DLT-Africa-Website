"use client";

import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

interface CourseModuleItem {
  id: number;
  title: string;
  details?: string;
}

interface CourseOutlineSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  modules: CourseModuleItem[];
}

const CourseOutlineSection: React.FC<CourseOutlineSectionProps> = ({
  title,
  imageSrc,
  imageAlt,
  modules,
}) => {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section className="bg-[#F6F6F6] px-6 pb-10 md:px-12 lg:px-16">
      <div className="mx-auto grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
        <div>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-[260px] w-full rounded-[20px] object-cover sm:h-[340px] md:h-[420px] lg:h-[530px]"
            loading="lazy"
          />
        </div>

        <div className="pt-3">
          <h3 className="font-sfPro text-[32px] font-bold leading-[120%] text-[#1C1C1C]">
            {title}
          </h3>

          <div className="mt-8 space-y-4">
            {modules.map((module) => {
              const isOpen = openId === module.id;

              return (
                <div
                  key={module.id}
                  className={`border border-[#CDCDCD] bg-transparent px-6 py-4 ${isOpen ? "rounded-[24px]" : "rounded-[9999px]"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : module.id)}
                    className="flex w-full items-center gap-4 text-left"
                  >
                    <FiPlus className="h-6 w-6 shrink-0 text-[#202020]" />
                    <span className="font-sfPro text-[20px] font-semibold leading-[130%] text-[#292929]">
                      {module.title}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
                      }`}
                  >
                    {module.details && (
                      <p className="pl-10 font-poppins text-[15px] leading-[170%] text-[#4E4E4E]">
                        {module.details}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOutlineSection;

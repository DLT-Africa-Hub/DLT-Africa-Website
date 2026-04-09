"use client";

import { FaArrowDown, FaCheckCircle } from "react-icons/fa";
import { LuLaptop } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CourseSectionProps {
  title: string;
  intro?: string;
  text?: string;
  headline4?: string;
  showCheckbox?: boolean;
  virtual?: string;
  physical?: string;
  virtualPrice?: string;
  physicalPrice?: string;
  button1?: string;
  button2?: string;
  img: string;
}

const CourseSection: React.FC<CourseSectionProps> = (props) => {
  const [pathname, setPathname] = useState<string>("");
  const hasPricingData = Boolean(
    props.virtual || props.physical || props.virtualPrice || props.physicalPrice
  );

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window === "undefined") {
      return;
    }

    setPathname(window.location.pathname);

    const handlePathnameChange = (): void => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePathnameChange);

    return () => {
      window.removeEventListener("popstate", handlePathnameChange);
    };
  }, []);

  return (
    <div className="flex flex-col gap-[63px] font-sfPro">
      <div
        className="flex flex-col-reverse md:flex-row md:justify-between lg:gap-[40px] lg:px-[70px] lg:pt-[70px] md:gap-[63px]"
      >
        <div
          className="lg:w-[673px] md:w-[345px] sm:w-[390px] lg:pl-[50px] md:px-[50px] px-[32px] lg:mt-[28px] mt-[24px]"
        >
          <p
            className="inline-block w-fit rounded-full px-4 py-2.5 border border-solid font-[400] leading-normal border-[#B8D26A] text-[#FAAF5A] text-[24px]"
          >
            {props.intro}
          </p>
          <h4
            className="w-full font-[700] leading-[120%] lg:mb-[14px] md:mb-[10px] sm:mt-[30px] sm:font-[700] sm:mb-[10px] font-sfPro text-offWhite lg:text-[54px] md:text-[34px] text-[40px]"
          >
            {props.title === "Become a Fullstack Developer" ? (
              <>
                Become a
                <br />
                Fullstack Developer
              </>
            ) : (
              props.title
            )}
          </h4>
          {props.text && (
            <p
              className="flex flex-wrap mb-4 lg:text-[20px] md:text-[16px] sm:[12px] font-poppins lg:font-normal leading-[120%] lg:w-[640px] md:w-[326px] sm:w-[326px] sm:text-[16px] mt-[10px] sm:font-[400] text-[#C8E2BE]"
            >
              {props.text}
            </p>
          )}

          {hasPricingData && (
            <div className="mt-[50px] flex items-center gap-10 text-[#FAAF5A]">
              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-2 text-[20px] font-medium text-offWhite">
                  <LuLaptop className="h-5 w-5" />
                  {props.virtual}
                </p>
                <p className="mt-2 text-[48px] leading-none font-semibold">
                  {props.virtualPrice}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-2 text-[20px] font-medium text-offWhite">
                  <IoLocationOutline className="h-5 w-5" />
                  {props.physical}
                </p>
                <p className="mt-2 text-[48px] leading-none font-semibold">
                  {props.physicalPrice}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-2.5 lg:py-[36px]">
            {pathname === "/blockchain" ? (
              <p className="text-red-600">
                Currently Not Available!!... <br /> check back later
              </p>
            ) : (
              <Link href="/application" legacyBehavior={true}>
                <a
                  className="w-full md:w-[175px] sm:w-[326px] h-[55px] p-[10px] flex justify-center items-center md:text-[16px] text-offWhite font-bold rounded-[10px] border border-solid border-offWhite lg:w-[206px] hover:bg-[#1B7700] transition-colors duration-300 ease-in-out"
                >
                  {props.button1}
                </a>
              </Link>
            )}

            {pathname === "/blockchain" ? null : (
              <Link href="/application" legacyBehavior={true}>
                <a
                  className="bg-[#FFA751] w-full md:w-[175px] sm:w-[326px] h-[55px] p-[10px] flex justify-center items-center md:text-[16px] text-offWhite font-bold rounded-[10px] lg:w-[206px] hover:bg-[#1B7700] hover:text-[#F7FCFE] transition-colors duration-300 ease-in-out"
                >
                  {props.button2}
                </a>
              </Link>
            )}
          </div>
          <p className="text-gray-700">{props.headline4}</p>
        </div>

        <div className="px-[23px] lg:mt-[70px] md:mt-[36px] mt-[20px]">
          <img
            className="flex flex-wrap items-center object-cover rounded-[20px] lg:h-[448px] lg:w-[673px] md:w-[750px] sm:w-[345px]"
            src={props.img}
            loading="lazy"
            alt={props.title}
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 justify-center text-offWhite mb-[41px]">
        <p className="text-[20px]">Scroll down to see more</p>
        <FaArrowDown className="w-6 h-6" />
      </div>
    </div>
  );
};

export default CourseSection;
"use client";

import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { LuLaptop, LuPhoneForwarded, LuX } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { BsEnvelope } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import footerConfig from "@/app/components/Footer/footer.json";

const GRAPHICS_OR_PRODUCT_PATHS = new Set([
  "/product",
  "/graphics",
  "/graphics-design",
]);

interface CourseSectionProps {
  intro?: string;
  title: string;
  description?: string;
  virtual?: string;
  physical?: string;
  virtualPrice?: string;
  physicalPrice?: string;
  button1?: string;
  button2?: string;
  img: string;
  showCheckbox?: boolean;
}

const CourseSection: React.FC<CourseSectionProps> = (props) => {
  const pathname = usePathname();
  const isGraphicsOrProduct =
    pathname != null &&
    GRAPHICS_OR_PRODUCT_PATHS.has(pathname.replace(/\/$/, "") || "/");

  const [contactModalOpen, setContactModalOpen] = useState(false);
  const { phone, phoneRaw, email } = footerConfig.contact;

  const hasPricingData = Boolean(
    props.virtual ||
    props.physical ||
    props.virtualPrice ||
    props.physicalPrice,
  );

  useEffect(() => {
    if (!contactModalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setContactModalOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactModalOpen]);

  return (
    <div className="flex flex-col gap-[63px] font-sfPro">
      <div className="flex flex-col-reverse md:flex-row md:justify-between lg:gap-[40px] lg:px-[70px] lg:pt-[70px] md:gap-[63px]">
        <div className="lg:w-[673px] md:w-[345px] sm:w-[390px] lg:pl-[50px] md:px-[50px] px-[32px] lg:mt-[28px] mt-[24px]">
          <p
            className={`w-fit rounded-full px-[15px] py-[10px] border font-[400] leading-normal text-[20px] hidden lg:block ${
              isGraphicsOrProduct
                ? "border-[#1C7800] text-[#1C7800]"
                : "border-[#FFA751] text-[#FAAF5A]"
            }`}
          >
            {props.intro}
          </p>
          <h4 className="w-full font-[700] leading-[120%] lg:mb-[14px] md:mb-[10px] sm:mt-[30px] sm:font-[700] sm:mb-[10px] font-sfPro text-offWhite lg:text-[48px] md:text-[34px] text-[28px]">
            {props.title.startsWith("Become a") ? (
              <>
                Become a
                <br />
                {props.title.replace("Become a ", "")}
              </>
            ) : (
              props.title
            )}
          </h4>
          {props.description && (
            <p
              className={`flex flex-wrap mb-4 lg:text-[20px] md:text-[16px] sm:[12px] font-poppins lg:font-normal leading-[120%] lg:w-[640px] md:w-[326px] sm:w-[326px] sm:text-[16px] mt-[10px] sm:font-[400] ${
                isGraphicsOrProduct ? "text-[#FFFFFF]" : "text-[#C8E2BE]"
              }`}
            >
              {props.description}
            </p>
          )}

          {hasPricingData && (
            <div className="mt-[50px] flex items-center text-[#FAAF5A] gap-[40px]">
              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-2 text-[20px] text-offWhite">
                  <LuLaptop />
                  {props.virtual}
                </p>
                <p
                  className={`mt-2 text-[32px] leading-none font-semibold ${
                    isGraphicsOrProduct ? "text-[#1C7800]" : ""
                  }`}
                >
                  {props.virtualPrice}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="flex items-center gap-2 text-[20px] text-offWhite">
                  <IoLocationOutline />
                  {props.physical}
                </p>
                <p
                  className={`mt-2 text-[32px] leading-none font-semibold ${
                    isGraphicsOrProduct ? "text-[#1C7800]" : ""
                  }`}
                >
                  {props.physicalPrice}
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col mt-[50px] lg:flex-row gap-2.5 lg:py-[36px]">
            <Link href="/application" legacyBehavior={true}>
              <a className="w-full md:w-[175px] sm:w-[326px] h-[55px] p-[10px] flex justify-center items-center md:text-[16px] text-offWhite font-bold rounded-[10px] border border-solid border-offWhite hover:border-none lg:w-[206px] hover:bg-[#1B7700] transition-colors duration-300 ease-in-out">
                {props.button1}
              </a>
            </Link>

            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className={`w-full md:w-[175px] sm:w-[326px] h-[55px] p-[10px] flex justify-center items-center md:text-[16px] text-offWhite font-bold rounded-[10px] lg:w-[206px] border-2 border-transparent transition-colors duration-300 ease-in-out ${
                isGraphicsOrProduct
                  ? "bg-[#1C7800] hover:bg-[#FFA751] hover:border-white"
                  : "bg-[#FFA751] hover:bg-[#1B7700] hover:text-[#F7FCFE]"
              }`}
            >
              {props.button2}
            </button>
          </div>
        </div>

        <div className="px-[23px] lg:mt-[70px] md:mt-[36px] mt-[20px]">
          <Image
            width={673}
            height={448}
            className="flex flex-wrap items-center object-cover rounded-[20px] lg:h-[448px] lg:w-[673px] md:w-[750px] sm:w-[345px]"
            src={props.img}
            loading="lazy"
            alt={props.title}
          />
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center gap-2 overflow-x-hidden pb-[41px] pt-8 text-center text-[16px] text-offWhite">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 h-[min(380px,70vw)] w-[min(120%,56rem)] max-w-[100vw] -translate-x-1/2 bg-[radial-gradient(ellipse_130%_100%_at_50%_100%,rgba(255,255,255,0.32)_0%,rgba(255,255,255,0.11)_24%,rgba(255,255,255,0.04)_48%,rgba(255,255,255,0.012)_72%,rgba(255,255,255,0)_92%)] blur-3xl"
        />
        <p className="relative z-10">Scroll down to see more</p>
        <FaArrowDown className="relative z-10" />
      </div>

      {contactModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
          role="presentation"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-hero-contact-title"
            className="relative w-full max-w-sm rounded-[12px] bg-[#F6F6F6] p-6 text-[#1C1C1C] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="absolute right-3 top-3 rounded-md p-1 text-[#252A24] transition-colors hover:bg-black/10"
              aria-label="Close"
            >
              <LuX className="h-5 w-5" />
            </button>
            <h2
              id="course-hero-contact-title"
              className="pr-8 font-sfPro text-lg font-bold"
            >
              Contact us
            </h2>
            <ul className="mt-4 space-y-3 font-sfPro text-sm md:text-base">
              <li className="flex items-start gap-2">
                <LuPhoneForwarded
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1B7700]"
                  aria-hidden
                />
                <a
                  href={`tel:${phoneRaw}`}
                  className="text-[#1B7700] underline-offset-2 hover:underline"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <BsEnvelope
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#1B7700]"
                  aria-hidden
                />
                <a
                  href={`mailto:${email}`}
                  className="break-all text-[#1B7700] underline-offset-2 hover:underline"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseSection;

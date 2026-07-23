"use client";

import { useEffect } from "react";
import dynamicImport from "next/dynamic";
import CookieConsentDrawer from "@/app/components/CookieConsent/CookieConsentDrawer";

const IndexHome = dynamicImport(
  () => import("@/app/components/HomePage/Home"),
  {
    ssr: false,
    loading: () => (
      <div className="relative">
        <section className="flex flex-col-reverse md:flex-row bg-[#F6F7F6] lg:gap-[30px] md:gap-[22.76px] p-[30px] 2xl:px-[60px] items-center justify-between min-h-[657px] relative">
          <div className="lg:w-[500px] mt-[30px] md:mt-0 md:w-[369px] xl:w-[800px] 2xl:w-[800px] flex flex-col md:justify-center">
            <div className="h-16 bg-gray-300 rounded animate-pulse mb-4"></div>
            <div className="h-16 bg-gray-300 rounded animate-pulse mb-4"></div>
            <div className="h-6 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="h-6 bg-gray-300 rounded animate-pulse mb-2"></div>
            <div className="h-6 bg-gray-300 rounded animate-pulse mb-4 w-3/4"></div>
            <div className="h-[55px] bg-gray-300 rounded-[10px] animate-pulse"></div>
          </div>
          <div className="flex">
            <div className="w-[400px] h-[400px] bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </section>
      </div>
    ),
  }
);

export default function BootcampHomeEntry() {
  useEffect(() => {
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <IndexHome />
      <CookieConsentDrawer />
    </>
  );
}

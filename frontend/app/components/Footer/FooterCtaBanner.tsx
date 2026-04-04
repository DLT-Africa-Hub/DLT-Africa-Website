import Link from "next/link";

import { buttonVariants } from "@/app/constants/buttonStyles";

import FooterCtaGraphic from "./FooterCtaGraphic";
import { FOOTER_CTA_BANNER_BACKGROUND } from "./footerGradient";
import type { FooterCta } from "./footer.types";

type Props = { cta: FooterCta };

export default function FooterCtaBanner({ cta }: Props) {
  return (
    <div className="bg-white px-4 pb-4 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          className="relative flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[1.75rem] px-6 py-10 text-center shadow-lg sm:px-10 sm:py-12 md:min-h-[320px] md:flex-row md:items-center md:justify-between md:gap-6 md:px-10 md:py-12 md:text-left lg:min-h-[360px] lg:rounded-[2rem] lg:px-12 lg:py-12"
          style={{ background: FOOTER_CTA_BANNER_BACKGROUND }}
        >
          <div className="relative z-10 flex w-full max-w-xl flex-col items-center md:items-start md:flex-1">
            <h2 className="font-sfPro text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
              {cta.title}
            </h2>
            <p className="mt-3 max-w-md font-sfPro text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
              {cta.subtitle}
            </p>
            <Link
              href={cta.buttonHref}
              className={`${buttonVariants.softGreen} mx-auto mt-6 inline-flex font-semibold !text-[#1C7800] md:mx-0`}
            >
              {cta.buttonLabel}
            </Link>
          </div>
          <FooterCtaGraphic />
        </div>
      </div>
    </div>
  );
}

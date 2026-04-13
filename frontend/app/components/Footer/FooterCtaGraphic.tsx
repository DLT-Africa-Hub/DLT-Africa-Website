import Image from "next/image";

import { withBasePath } from "@/lib/basePath";

/** Hidden below `md`; bottom-right bleed on larger viewports. */
export default function FooterCtaGraphic() {
  return (
    <div
      className="hidden md:pointer-events-none md:absolute md:bottom-[-6px] md:right-[2px] md:top-[11%] md:z-0 md:mt-0 md:block md:h-auto md:w-[min(44%,400px)] md:min-w-[260px] md:max-w-none lg:right-[10px] lg:w-[min(38%,440px)]"
      aria-hidden
    >
      <div className="relative h-full min-h-[280px] w-full">
        <Image
          src={withBasePath("/images/banner-dlt.png")}
          alt=""
          fill
          sizes="(max-width: 1024px) 42vw, 440px"
          className="object-contain object-[right_bottom] md:scale-[1.12] md:-translate-x-[4%] md:translate-y-[3%]"
          priority={false}
        />
      </div>
    </div>
  );
}

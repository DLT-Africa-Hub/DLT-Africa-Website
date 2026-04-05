import Image from "next/image";
import Link from "next/link";

import type { FooterBrand as FooterBrandData } from "./footer.types";

type Props = { brand: FooterBrandData };

export default function FooterBrand({ brand }: Props) {
  return (
    <div className="flex flex-col items-center justify-center text-center md:items-start">
      <div
        className="inline-block"
      >
        <Image
          src={brand.logoSrc}
          alt={brand.logoAlt}
          width={126}
          height={51}
          className="h-[51px] w-[126px] object-contain"
        />
      </div>
      <p className="mt-4 max-w-xs font-poppins text-sm text-[#1C1C1C] md:text-base">
        {brand.tagline}
      </p>
    </div>
  );
}

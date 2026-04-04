import FooterBrand from "./FooterBrand";
import FooterContact from "./FooterContact";
import FooterQuickLinks from "./FooterQuickLinks";
import { FOOTER_MAIN_GRADIENT } from "./footerGradient";
import type { FooterConfig } from "./footer.types";

type Props = Pick<FooterConfig, "brand" | "contact" | "quickLinks" | "social">;

export default function FooterBottom({
  brand,
  contact,
  quickLinks,
  social,
}: Props) {
  return (
    <div
      className="px-4 pb-10 pt-12 sm:px-6 sm:pt-14 lg:px-8"
      style={{ background: FOOTER_MAIN_GRADIENT }}
    >
      <div className="mx-auto w-full max-w-10xl">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-x-8 xl:gap-x-12">
          <div className="lg:col-span-4">
            <FooterBrand brand={brand} />
          </div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 md:gap-x-10 lg:col-span-8 lg:gap-x-12 xl:gap-x-16">
            <div className="min-w-0">
              <FooterContact contact={contact} />
            </div>
            <div className="min-w-0">
              <FooterQuickLinks links={quickLinks} social={social} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

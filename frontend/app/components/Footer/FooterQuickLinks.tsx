import Link from "next/link";

import { navLinkInteractiveClass } from "@/app/constants/navLinkStyles";

import FooterSocial from "./FooterSocial";
import type { FooterQuickLink, FooterSocialItem } from "./footer.types";

type Props = {
  links: FooterQuickLink[];
  social: FooterSocialItem[];
};

export default function FooterQuickLinks({ links, social }: Props) {
  return (
    <div>
      <h3 className="font-sfPro text-lg font-bold text-[#1C1C1C] md:text-xl">
        Quick Links
      </h3>
      <ul className="mt-6 space-y-2 font-sfPro text-sm md:text-base">
        {links.map((item) => (
          <li key={item.href + item.label}>
            <Link
              href={item.href}
              className={`text-[#252A24] ${navLinkInteractiveClass}`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <FooterSocial items={social} />
    </div>
  );
}

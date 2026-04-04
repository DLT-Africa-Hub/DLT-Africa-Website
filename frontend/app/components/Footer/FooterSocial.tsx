import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import type { IconType } from "react-icons";

import type { FooterSocialItem } from "./footer.types";

const ICONS: Record<FooterSocialItem["icon"], IconType> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  twitter: FaTwitter,
  github: FaGithub,
};

type Props = { items: FooterSocialItem[] };

export default function FooterSocial({ items }: Props) {
  return (
    <div className="mt-2 flex flex-wrap gap-3">
      {items.map(({ href, label, icon }) => {
        const Icon = ICONS[icon];
        return (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-35 w-35 items-center justify-center rounded-full transition-transform duration-300 ease-out hover:-translate-y-1 hover:scale-105"
          >
            <Icon className="h-[18px] w-[18px]" />
          </a>
        );
      })}
    </div>
  );
}

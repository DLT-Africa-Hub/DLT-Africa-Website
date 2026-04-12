
import { LuMapPin, LuPhoneForwarded } from "react-icons/lu";
import { BsEnvelope } from "react-icons/bs";
import type { FooterContact as FooterContactData } from "./footer.types";

type Props = { contact: FooterContactData };

const iconStyles = "h-[16.67px] w-[13.3px] shrink-0 text-[#1C7800]";
const listStyles = "flex items-center gap-2";
const linkStyles = "transition-colors hover:text-[#1C7800]";
const headingStyles = "font-sfPro text-[20px] font-bold text-[#1C1C1C] md:text-xl";
const listItemStyles = "mt-6 space-y-2 font-sfPro text-sm text-[#252A24] md:text-base";

export default function FooterContact({ contact }: Props) {
  return (
    <div>
      <h3 className={headingStyles}>
        Contact
      </h3>
      <ul className={listItemStyles}>
        <li className="flex gap-2">
          <LuMapPin
            className={iconStyles}
            aria-hidden
          />
          <span className="min-w-0 max-w-xl flex-[.7] leading-relaxed">
            {contact.address}
          </span>
        </li>
        <li className={listStyles}>
          <LuPhoneForwarded
            className={iconStyles}
            aria-hidden
          />
          <a
            href={`tel:${contact.phoneRaw}`}
            className={linkStyles}
          >
            {contact.phone}
          </a>
        </li>
        <li className={listStyles}>
          <BsEnvelope
            className={iconStyles}
            aria-hidden
          />
          <a
            href={`mailto:${contact.email}`}
            className={linkStyles}
          >
            {contact.email}
          </a>
        </li>
      </ul>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";

import footerData from "@/app/components/Footer/footer.json";

import {
  CONTACT_HERO_ALT,
  CONTACT_HERO_IMAGE,
  CONTACT_WORKING_HOURS,
} from "./Contact.items";

const { contact } = footerData;

type ContactRow = {
  id: string;
  label: string;
  value: string;
  href?: string;
  Icon: IconType;
};

const rows: ContactRow[] = [
  {
    id: "phone",
    label: "Phone (Call / WhatsApp)",
    value: contact.phone,
    href: `tel:${contact.phoneRaw}`,
    Icon: LuPhone,
  },
  {
    id: "address",
    label: "Address",
    value: contact.address,
    Icon: LuMapPin,
  },
  {
    id: "email",
    label: "General inquiries",
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: LuMail,
  },
  {
    id: "hours",
    label: "Working hours",
    value: CONTACT_WORKING_HOURS,
    Icon: LuClock,
  },
];

function ContactRowBlock({ row }: { row: ContactRow }) {
  const { Icon, label, value, href } = row;
  const valueNode = href ? (
    <Link
      href={href}
      className="mt-0.5 block font-poppins text-sm leading-relaxed text-[#5C6670] underline-offset-2 hover:text-[#083700] hover:underline sm:text-[15px]"
    >
      {value}
    </Link>
  ) : (
    <p className="mt-0.5 font-poppins text-sm leading-relaxed text-[#5C6670] sm:text-[15px]">
      {value}
    </p>
  );

  return (
    <div className="flex gap-4 sm:gap-5">
      <div
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1C7800] text-[#1C7800] sm:h-12 sm:w-12"
        aria-hidden
      >
        <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 pt-0.5">
        <p className="font-sfPro text-sm font-semibold text-[#083700] sm:text-[15px]">
          {label}
        </p>
        {valueNode}
      </div>
    </div>
  );
}

export default function ContactComponent() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-16">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-[#F0F2F4] lg:mx-0 lg:max-w-none lg:min-h-[min(100%,520px)] lg:aspect-auto">
          <Image
            src={CONTACT_HERO_IMAGE}
            alt={CONTACT_HERO_ALT}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex min-w-0 flex-col justify-center lg:py-2">
          <h1 className="font-sfPro text-3xl font-bold tracking-tight text-[#083700] sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
            Contact Us
          </h1>
          <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:gap-9">
            {rows.map((row) => (
              <ContactRowBlock key={row.id} row={row} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

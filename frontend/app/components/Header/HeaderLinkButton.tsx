"use client";

import Link from "next/link";

import {
  buttonVariants,
  type ButtonVariantName,
} from "@/app/constants/buttonStyles";
import {
  navLinkActiveClass,
  navLinkInteractiveClass,
} from "@/app/constants/navLinkStyles";

function isExternalHref(href: string, external?: boolean) {
  return Boolean(external || /^https?:\/\//i.test(href));
}

export type HeaderLinkButtonProps = {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  intent: "nav" | "cta";
  /** `intent="nav"` — highlights when route matches */
  active?: boolean;
  /** `intent="cta"` — maps to `buttonStyles` tokens */
  ctaVariant?: ButtonVariantName;
  /** e.g. close mobile drawer after navigation */
  onClick?: () => void;
};

export default function HeaderLinkButton({
  href,
  external,
  children,
  className = "",
  intent,
  active = false,
  ctaVariant = "solidGreen",
  onClick,
}: HeaderLinkButtonProps) {
  const navClassName =
    `${navLinkInteractiveClass} ${active ? navLinkActiveClass : ""} ${className}`.trim();

  const ctaClassName =
    `${buttonVariants[ctaVariant]} ${className}`.trim();

  const merged = intent === "nav" ? navClassName : ctaClassName;

  if (isExternalHref(href, external)) {
    return (
      <a
        href={href}
        className={merged}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={merged} onClick={onClick}>
      {children}
    </Link>
  );
}

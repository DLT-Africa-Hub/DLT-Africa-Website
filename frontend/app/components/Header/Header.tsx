"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { createPortal } from "react-dom";
import { FaChevronDown } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import headerConfig from "./header.json";
import HeaderLinkButton from "./HeaderLinkButton";
import type { ButtonVariantName } from "@/app/constants/buttonStyles";
import {
  navLinkActiveClass,
  navLinkInteractiveClass,
} from "@/app/constants/navLinkStyles";

type NavDropdownItem = { label: string; href: string; external?: boolean };

type NavItemConfig = {
  label: string;
  href: string;
  external?: boolean;
  items?: NavDropdownItem[];
};

type CtaItem = {
  label: string;
  href: string;
  external?: boolean;
  buttonStyle?: ButtonVariantName;
};

type HeaderJson = {
  logo: { src: string; alt: string; href: string };
  nav: NavItemConfig[];
  cta: CtaItem[];
};

const { logo, nav, cta } = headerConfig as HeaderJson;

function isExternalHref(href: string, external?: boolean) {
  return Boolean(external || /^https?:\/\//i.test(href));
}

function NavOrCtaLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  if (isExternalHref(href, external)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function navItemActive(pathname: string, item: NavItemConfig): boolean {
  if (isExternalHref(item.href, item.external)) return false;
  const selfMatch =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href));
  if (selfMatch) return true;
  if (item.items?.length) {
    return item.items.some((sub) => {
      if (isExternalHref(sub.href, sub.external)) return false;
      return (
        pathname === sub.href ||
        (sub.href !== "/" && pathname.startsWith(sub.href))
      );
    });
  }
  return false;
}

const dropdownPanelClass =
  "min-w-[260px] rounded-xl border border-gray-200 bg-white py-2 shadow-lg";

const dropdownItemClass =
  "block px-4 py-2.5 text-left text-[14px] font-medium text-[#1C1C1C] transition-colors hover:bg-[#F4F6F8] hover:text-[#1C7800]";

function NavDesktopItem({
  item,
  pathname,
}: {
  item: NavItemConfig;
  pathname: string;
}) {
  const active = navItemActive(pathname, item);
  const hasItems = Boolean(item.items && item.items.length > 0);

  return (
    <div className="group relative flex items-center py-1">
      <NavOrCtaLink
        href={item.href}
        external={item.external}
        className={`inline-flex items-center gap-1.5 ${navLinkInteractiveClass} ${
          active ? navLinkActiveClass : ""
        }`}
      >
        <span>{item.label}</span>
        <FaChevronDown
          className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-rotate-180"
          aria-hidden
        />
      </NavOrCtaLink>
      <div className="invisible absolute left-0 top-full z-[120] pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100">
        {hasItems ? (
          <ul
            className={dropdownPanelClass}
            role="menu"
            aria-label={item.label}
          >
            {item.items!.map((sub) => (
              <li key={sub.label + sub.href} role="none">
                <NavOrCtaLink
                  href={sub.href}
                  external={sub.external}
                  className={dropdownItemClass}
                >
                  {sub.label}
                </NavOrCtaLink>
              </li>
            ))}
          </ul>
        ) : (
          <div
            className={`${dropdownPanelClass} min-h-[2.5rem] py-3`}
            aria-hidden
          />
        )}
      </div>
    </div>
  );
}

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
  const drawerTitleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMenu();
    setMobileOpenIndex(null);
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!menuOpen) setMobileOpenIndex(null);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen, closeMenu]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (mq.matches) closeMenu();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMenu]);

  const mobileDrawer =
    mounted &&
    createPortal(
      <div
        className={`fixed inset-0 z-[100] lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          tabIndex={menuOpen ? 0 : -1}
          className={`absolute inset-0 z-0 bg-black/40 transition-opacity duration-300 ease-out ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          onClick={closeMenu}
        />

        <aside
          id="header-mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby={drawerTitleId}
          aria-hidden={!menuOpen}
          className={`absolute left-0 top-0 z-10 flex h-full w-[min(100vw-2.5rem,20rem)] max-w-[min(100vw-2.5rem,320px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="sr-only">
            <h2 id={drawerTitleId}>Menu</h2>
          </div>

          <div className="mt-12 flex flex-1 flex-col overflow-y-auto px-4 pb-8 pt-4">
            <div className="flex flex-col">
              {nav.map((item, i) => {
                const hasItems = Boolean(item.items && item.items.length > 0);
                const expanded = mobileOpenIndex === i;

                return (
                  <div
                    key={item.label + item.href}
                    className={`border-b border-gray-100 transition-all duration-300 ease-out ${
                      menuOpen
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                    style={{
                      transitionDelay: menuOpen ? `${80 + i * 45}ms` : "0ms",
                    }}
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-2 py-3.5 text-left text-[15px] font-medium text-[#1C1C1C]"
                      aria-expanded={expanded}
                      onClick={() => setMobileOpenIndex(expanded ? null : i)}
                    >
                      <span className="min-w-0 flex-1">{item.label}</span>
                      <FaChevronDown
                        className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                          expanded ? "-rotate-180" : ""
                        }`}
                        aria-hidden
                      />
                    </button>

                    {expanded && hasItems && (
                      <div className="border-t border-gray-50 pb-3 pl-2 pt-1">
                        {item.items!.map((sub) => (
                          <HeaderLinkButton
                            key={sub.label + sub.href}
                            intent="nav"
                            href={sub.href}
                            external={sub.external}
                            active={
                              !isExternalHref(sub.href, sub.external) &&
                              (pathname === sub.href ||
                                (sub.href !== "/" &&
                                  pathname.startsWith(sub.href)))
                            }
                            className="block w-full rounded-lg py-2.5 pl-6 pr-2 text-left text-[14px]"
                            onClick={closeMenu}
                          >
                            {sub.label}
                          </HeaderLinkButton>
                        ))}
                      </div>
                    )}

                    {expanded && !hasItems && (
                      <div
                        className="border-t border-gray-50 pb-3 pl-6 pt-2 text-sm text-[#9CA3AF]"
                        aria-hidden
                      />
                    )}
                  </div>
                );
              })}
            </div>

            <div
              className={`mt-6 flex flex-col gap-3 transition-all duration-300 ease-out ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-2 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen
                  ? `${80 + nav.length * 45 + 60}ms`
                  : "0ms",
              }}
            >
              {cta.map((item, index) => (
                <HeaderLinkButton
                  key={item.label + item.href}
                  intent="cta"
                  href={item.href}
                  external={item.external}
                  ctaVariant={
                    item.buttonStyle ?? (index === 0 ? "solidGreen" : "neutral")
                  }
                  className="w-full justify-center"
                  onClick={closeMenu}
                >
                  {item.label}
                </HeaderLinkButton>
              ))}
            </div>
          </div>
        </aside>
      </div>,
      document.body,
    );

  return (
    <header className="sticky top-0 z-[110] border-b border-gray-200/80 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="relative flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavOrCtaLink
          href={logo.href}
          className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
        >
          <Image
            src={logo.src}
            alt={logo.alt}
            width={120}
            height={36}
            className="h-8 w-auto"
            priority
          />
        </NavOrCtaLink>

        <nav
          className="hidden flex-1 justify-center gap-6 text-[14px] font-medium text-[#1C1C1C] lg:flex lg:gap-8"
          aria-label="Main"
        >
          {nav.map((item) => (
            <NavDesktopItem
              key={item.label + item.href}
              item={item}
              pathname={pathname}
            />
          ))}
        </nav>

        <div className="hidden shrink-0 flex-wrap items-center justify-end gap-2 sm:gap-3 lg:flex">
          {cta.map((item, index) => (
            <HeaderLinkButton
              key={item.label + item.href}
              intent="cta"
              href={item.href}
              external={item.external}
              ctaVariant={
                item.buttonStyle ?? (index === 0 ? "solidGreen" : "neutral")
              }
            >
              {item.label}
            </HeaderLinkButton>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-[#1C1C1C] transition-colors hover:bg-gray-100 hover:text-[#1C7800] lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="header-mobile-drawer"
          aria-haspopup="dialog"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <HiX className="h-7 w-7" aria-hidden />
          ) : (
            <HiMenuAlt3 className="h-7 w-7" aria-hidden />
          )}
        </button>
      </div>

      {mobileDrawer}
    </header>
  );
};

export default Header;

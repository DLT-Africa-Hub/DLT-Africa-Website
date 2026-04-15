"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/app/constants/buttonStyles";

const STORAGE_KEY = "dlt-cookie-consent";

export type CookieConsentChoice = "all" | "essential";

type StoredConsent = {
  choice: CookieConsentChoice;
  savedAt: number;
};

function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (parsed.choice !== "all" && parsed.choice !== "essential") return null;
    return {
      choice: parsed.choice,
      savedAt: typeof parsed.savedAt === "number" ? parsed.savedAt : Date.now(),
    };
  } catch {
    return null;
  }
}

function writeConsent(choice: CookieConsentChoice) {
  const payload: StoredConsent = { choice, savedAt: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

export default function CookieConsentDrawer() {
  const [phase, setPhase] = useState<"checking" | "show" | "hidden">(
    "checking",
  );
  const [lifted, setLifted] = useState(false);

  useEffect(() => {
    const existing = readStoredConsent();
    setPhase(existing ? "hidden" : "show");
  }, []);

  useEffect(() => {
    if (phase !== "show") return;
    const id = requestAnimationFrame(() => setLifted(true));
    return () => cancelAnimationFrame(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "show") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  const handleChoice = (choice: CookieConsentChoice) => {
    writeConsent(choice);
    setLifted(false);
    window.setTimeout(() => setPhase("hidden"), 280);
  };

  if (phase === "checking" || phase === "hidden") {
    return null;
  }

  return (
    <>
      <div
        className={`fixed inset-0 z-[200] bg-black/40 transition-opacity duration-300 ${
          lifted ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden
      />
      <div
        className="fixed inset-x-0 bottom-0 z-[210] flex justify-center px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-desc"
      >
        <div
          className={`pointer-events-auto w-full max-w-3xl rounded-t-2xl border border-neutral-200 bg-white p-5 shadow-[0_-8px_32px_rgba(0,0,0,0.12)] transition-transform duration-300 ease-out sm:p-6 ${
            lifted ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <h2
            id="cookie-consent-title"
            className="font-sfPro text-lg font-semibold text-neutral-900 sm:text-xl"
          >
            Cookies &amp; privacy
          </h2>
          <p
            id="cookie-consent-desc"
            className="mt-2 font-sfPro text-sm leading-relaxed text-neutral-600 sm:text-[15px]"
          >
            We use cookies to improve your experience, remember preferences, and
            understand how our site is used. You can accept all cookies or only
            those required for the site to work.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
            <button
              type="button"
              className={`${buttonVariants.neutral} w-full sm:w-auto`}
              onClick={() => handleChoice("essential")}
            >
              Essential only
            </button>
            <button
              type="button"
              className={`${buttonVariants.solidGreen} w-full sm:w-auto`}
              onClick={() => handleChoice("all")}
            >
              Accept all
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

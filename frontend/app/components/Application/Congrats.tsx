"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";
import { buttonVariants } from "@/app/constants/buttonStyles";
import {
  buildDefaultWhatsAppUrl,
  buildWhatsAppConfirmationUrl,
  readRegistrationSuccess,
  type RegistrationSuccessSummary,
} from "./registrationSuccess";

const Congrats: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [summary, setSummary] = useState<RegistrationSuccessSummary | null>(
    null,
  );

  useEffect(() => {
    setSummary(readRegistrationSuccess());
  }, []);

  useEffect(() => {
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const whatsAppHref = useMemo(() => {
    if (summary) return buildWhatsAppConfirmationUrl(summary);
    return buildDefaultWhatsAppUrl();
  }, [summary]);

  const modeDisplay =
    summary?.mode === "Physical"
      ? "Physical"
      : summary?.mode === "Virtual"
        ? "Virtual"
        : null;

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FFFBF5] to-[#F5F9F3]">
      {dimensions.width > 0 && (
        <div className="pointer-events-none fixed inset-0 z-0">
          <Confetti
            width={dimensions.width}
            height={dimensions.height}
            recycle={false}
            numberOfPieces={180}
            gravity={0.35}
            colors={["#FC7C13", "#1C7800", "#FFD699", "#EFFFE2", "#FFFFFF"]}
          />
        </div>
      )}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">
        <div className="w-full max-w-lg">
          <div className="rounded-[1.75rem] border border-[#FC7C13]/15 bg-white/90 p-8 shadow-[0_24px_80px_-12px_rgba(28,120,0,0.12)] backdrop-blur-sm sm:p-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#EFFFE2] ring-4 ring-[#1C7800]/10">
              <svg
                className="h-9 w-9 text-[#1C7800]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.25}
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h1 className="font-sfPro mt-6 text-center text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl">
              <span className="bg-gradient-to-r from-[#FC7C13] to-[#E86A00] bg-clip-text text-transparent">
                Registration successful
              </span>{" "}
              <span aria-hidden>✅</span>
            </h1>

            <p className="font-sfPro mt-4 text-center text-base leading-relaxed text-[#3d3d3d]/90 sm:text-[17px]">
              {summary ? (
                <>
                  Thanks,{" "}
                  <span className="font-semibold text-[#1a1a1a]">
                    {summary.fullName}
                  </span>
                  . Here&apos;s a quick recap of what you signed up for.
                </>
              ) : (
                <>
                  Your application was submitted. If you don&apos;t see your
                  details below, you can still reach us on WhatsApp to confirm.
                </>
              )}
            </p>

            {summary && (
              <dl className="font-sfPro mt-8 space-y-3 rounded-2xl border border-[#E8ECF0] bg-[#F9FAF8] p-5 text-left text-sm sm:text-[15px]">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="shrink-0 font-semibold text-[#083700]">Name</dt>
                  <dd className="text-[#252A24] sm:text-right">{summary.fullName}</dd>
                </div>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="shrink-0 font-semibold text-[#083700]">Course</dt>
                  <dd className="text-[#252A24] sm:text-right">
                    {summary.courseName}
                  </dd>
                </div>
                {modeDisplay && (
                  <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <dt className="shrink-0 font-semibold text-[#083700]">Mode</dt>
                    <dd className="text-[#252A24] sm:text-right">
                      {modeDisplay}
                    </dd>
                  </div>
                )}
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <dt className="shrink-0 font-semibold text-[#083700]">Price</dt>
                  <dd className="font-semibold text-[#083700] sm:text-right">
                    {summary.priceLabel}
                  </dd>
                </div>
              </dl>
            )}

            <div className="mt-10 flex flex-col items-stretch gap-3">
              <a
                href={whatsAppHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonVariants.solidGreen} w-full justify-center text-center font-semibold`}
              >
                Send confirmation via WhatsApp
              </a>
              <Link
                href="/"
                className={`${buttonVariants.neutral} w-full justify-center text-center font-semibold`}
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Congrats;

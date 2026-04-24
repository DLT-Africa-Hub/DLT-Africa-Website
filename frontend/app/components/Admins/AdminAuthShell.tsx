"use client";

import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export default function AdminAuthShell({ title, subtitle, children }: Props) {
  return (
    <div className="bg-[#F7FAF8] px-4 py-6 sm:py-8">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-[#E4E8EC] bg-white p-6 shadow-sm sm:p-10">
        <h1 className="font-sfPro text-3xl font-bold text-[#083700] sm:text-4xl">
          {title}
        </h1>
        <p className="mt-2 font-poppins text-sm text-[#5C6670]">{subtitle}</p>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}

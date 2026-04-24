"use client";

import Link from "next/link";

const NAV_ITEMS = [
  { href: "/admin-dashboard", label: "Admission List" },
  { href: "/team-list", label: "Team List" },
  { href: "/waitlist", label: "Waitlist" },
];

type Props = {
  activePath: string;
  onExportCsv?: () => void;
  exportLabel?: string;
};

export default function AdminTopNav({
  activePath,
  onExportCsv,
  exportLabel = "Export CSV",
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex flex-wrap gap-2">
        {NAV_ITEMS.map((item) => {
          const isActive = activePath === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-[#1C7800] text-white shadow-sm"
                  : "bg-white text-[#2E3A46] border border-[#E4E8EC] hover:border-[#1C7800]/40 hover:text-[#1C7800]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      {onExportCsv && (
        <button
          type="button"
          onClick={onExportCsv}
          className="ml-auto rounded-xl bg-[#1C7800] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#166100]"
        >
          {exportLabel}
        </button>
      )}
    </div>
  );
}

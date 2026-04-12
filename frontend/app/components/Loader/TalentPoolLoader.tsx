import React from "react";

/** Minimal loading state while the Talent Pool client bundle loads. */
const TalentPoolLoader: React.FC = () => {
  return (
    <div
      className="flex min-h-[50vh] w-full flex-col items-center justify-center gap-4 bg-[#F5F6F6] px-4"
      role="status"
      aria-live="polite"
    >
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-[#1C7800]/25 border-t-[#1C7800]"
        aria-hidden
      />
      <span className="sr-only">Loading talent pool</span>
      <p className="font-poppins text-sm text-[#1C1C1C]/50">Loading…</p>
    </div>
  );
};

export default TalentPoolLoader;

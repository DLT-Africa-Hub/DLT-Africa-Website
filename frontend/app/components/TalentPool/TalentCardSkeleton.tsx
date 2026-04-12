import React from "react";

const TalentCardSkeleton: React.FC = () => {
  return (
    <div className="relative m-0 flex h-[500px] flex-col justify-end overflow-hidden rounded-2xl bg-neutral-200/80 shadow-md ring-1 ring-black/[0.06] md:h-[473px]">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200 animate-pulse" />
      <div className="relative z-10 space-y-3 bg-gradient-to-t from-black/20 to-transparent px-4 pb-5 pt-16">
        <div className="h-7 w-3/4 max-w-[200px] rounded-md bg-white/40" />
        <div className="h-4 w-1/2 max-w-[120px] rounded-md bg-white/30" />
      </div>
    </div>
  );
};

export default TalentCardSkeleton;

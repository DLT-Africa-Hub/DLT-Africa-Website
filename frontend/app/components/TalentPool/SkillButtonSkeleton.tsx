import React from "react";

const SkillButtonSkeleton: React.FC = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="h-10 w-24 animate-pulse rounded-full bg-neutral-200/90 sm:h-11 sm:w-28"
          style={{ animationDelay: `${index * 80}ms` }}
        />
      ))}
    </>
  );
};

export default SkillButtonSkeleton;

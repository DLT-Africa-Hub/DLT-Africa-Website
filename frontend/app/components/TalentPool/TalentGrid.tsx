import React from "react";
import TalentCard from "./TalentCard";
import TalentCardSkeleton from "./TalentCardSkeleton";
import { ERROR_MESSAGES } from "./constants";

interface Talent {
  _id: string;
  fullName: string;
  role: string;
  description: string;
  skills: string[];
  profileImage: string;
  bgImage: string;
  uploadResume: string;
  gitHubLink: string;
}

interface TalentGridProps {
  talents: Talent[];
  selectedTalent: Talent | null;
  loading: boolean;
  itemsPerPage: number;
  onCardClick: (talent: Talent) => void;
  onContactClick: (talent: Talent) => void;
}

const TalentGrid: React.FC<TalentGridProps> = ({
  talents,
  selectedTalent,
  loading,
  itemsPerPage,
  onCardClick,
  onContactClick,
}) => {
  const gridClass =
    "grid w-full grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3";

  if (loading) {
    return (
      <div className={`${gridClass} pb-8`}>
        {Array.from({ length: itemsPerPage }).map((_, index) => (
          <TalentCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (talents.length === 0) {
    return (
      <div className="w-full pb-12 pt-4">
        <p className="text-center font-poppins text-base text-[#1C1C1C]/60 sm:text-lg">
          {ERROR_MESSAGES.NO_TALENTS}
        </p>
        <p className="mx-auto mt-2 max-w-md text-center font-poppins text-sm text-[#1C1C1C]/45">
          Try toggling a different combination of skills above.
        </p>
      </div>
    );
  }

  return (
    <div className={`${gridClass} pb-4`}>
      {talents.map((talent, index) => (
        <TalentCard
          key={talent._id || index}
          talent={talent}
          isSelected={selectedTalent === talent}
          onCardClick={onCardClick}
          onContactClick={onContactClick}
        />
      ))}
    </div>
  );
};

export default TalentGrid;

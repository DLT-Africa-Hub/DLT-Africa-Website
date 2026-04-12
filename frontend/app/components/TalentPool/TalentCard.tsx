import React from "react";
import { UI_CONFIG, ACCESSIBILITY_CONFIG } from "./constants";

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

interface TalentCardProps {
  talent: Talent;
  isSelected: boolean;
  onCardClick: (talent: Talent) => void;
  onContactClick: (talent: Talent) => void;
}

const TalentCard: React.FC<TalentCardProps> = ({
  talent,
  isSelected,
  onCardClick,
  onContactClick,
}) => {
  const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div
      className={`${UI_CONFIG.CARD_HEIGHT.MOBILE} ${
        UI_CONFIG.CARD_HEIGHT.DESKTOP
      } relative m-0 flex cursor-pointer flex-col justify-end overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/[0.06] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C7800] ${
        isSelected ? "ring-2 ring-[#1C7800] ring-offset-2 ring-offset-[#F5F6F6]" : ""
      }`}
      onClick={() => onCardClick(talent)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onCardClick(talent);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${talent.fullName}, ${talent.role}`}
      aria-expanded={isSelected}
    >
      {isSelected ? (
        <div className="detail-card flex h-full w-full flex-col items-center gap-4 px-5 py-6 sm:gap-5 sm:px-8 sm:py-8">
          <div className="w-full flex flex-col items-center gap-[10px]">
            <img
              loading="lazy"
              src={talent.profileImage}
              className="w-[80px] sm:w-[100px] md:w-[180px] h-[80px] sm:h-[100px] md:h-[180px] rounded-full"
              alt={`${talent.fullName} profile`}
            />
            <p className="font-sfPro text-lg font-semibold text-[#1C1C1C] md:text-xl">
              {talent.fullName}
            </p>
            <p className="text-center font-poppins text-sm font-medium text-[#1C7800] sm:text-base">
              {capitalizeFirstLetter(talent.role)}
            </p>
          </div>

          <div className="w-full flex min-h-[50px] items-center justify-center">
            <p className="description break-words text-center font-poppins text-xs font-light leading-relaxed text-[#1C1C1C]/75 sm:text-sm">
              {talent.description.length > UI_CONFIG.DESCRIPTION_MAX_LENGTH
                ? `${talent.description.substring(
                    0,
                    UI_CONFIG.DESCRIPTION_MAX_LENGTH
                  )}...`
                : talent.description}
            </p>
          </div>

          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            role="group"
            aria-label={ACCESSIBILITY_CONFIG.ARIA_LABELS.TALENT_ACTIONS}
          >
            <a
              href={talent.uploadResume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#1C7800] bg-white px-3 py-2 font-poppins text-xs font-medium text-[#1C7800] transition hover:bg-[#1C7800] hover:text-white sm:text-sm"
              aria-label={`View ${talent.fullName}'s resume`}
              onClick={(e) => e.stopPropagation()}
            >
              Resume
            </a>

            <a
              href={talent.gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#1C7800] bg-white px-3 py-2 font-poppins text-xs font-medium text-[#1C7800] transition hover:bg-[#1C7800] hover:text-white sm:text-sm"
              aria-label={`View ${talent.fullName}'s GitHub profile`}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub
            </a>

            <button
              type="button"
              className="rounded-lg border border-[#1C7800] bg-[#1C7800] px-3 py-2 font-poppins text-xs font-medium text-white transition hover:bg-[#155f00] sm:text-sm"
              onClick={(e) => {
                e.stopPropagation();
                onContactClick(talent);
              }}
              aria-label={`Contact ${talent.fullName}`}
            >
              Contact
            </button>
          </div>
        </div>
      ) : (
        <div className="relative h-full w-full">
          <img
            src={talent.bgImage}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/35 to-transparent px-4 pb-5 pt-20">
            <h2 className="font-sfPro text-xl font-semibold text-white drop-shadow sm:text-2xl">
              {talent.fullName}
            </h2>
            <p className="mt-1 capitalize font-poppins text-sm font-medium text-white/95 sm:text-base">
              {talent.role}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentCard;

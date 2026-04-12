import React from "react";
import { ACCESSIBILITY_CONFIG } from "./constants";
import SkillButtonSkeleton from "./SkillButtonSkeleton";

interface SkillFilterProps {
  availableSkills: string[];
  selectedSkills: string[];
  onSkillChange: (skill: string) => void;
  loading: boolean;
}

const SkillFilter: React.FC<SkillFilterProps> = ({
  availableSkills,
  selectedSkills,
  onSkillChange,
  loading,
}) => {
  if (loading) {
    return (
      <div
        className="mb-10 flex w-full max-w-4xl flex-wrap justify-center gap-2 sm:gap-3"
        role="group"
        aria-label={ACCESSIBILITY_CONFIG.ARIA_LABELS.SKILL_FILTERS}
        aria-busy="true"
      >
        <SkillButtonSkeleton />
      </div>
    );
  }

  return (
    <div
      className="mb-10 flex w-full max-w-4xl flex-wrap justify-center gap-2 sm:mb-12 sm:gap-3"
      role="group"
      aria-label={ACCESSIBILITY_CONFIG.ARIA_LABELS.SKILL_FILTERS}
    >
      {availableSkills.map((skill) => {
        const isSelected = selectedSkills.includes(skill);
        const id = `skill-filter-${skill.replace(/\s+/g, "-").toLowerCase()}`;

        return (
          <label
            key={skill}
            htmlFor={id}
            className={`inline-flex cursor-pointer select-none items-center rounded-full border px-4 py-2.5 font-poppins text-sm font-medium transition focus-within:ring-2 focus-within:ring-[#1C7800] focus-within:ring-offset-2 sm:text-[15px] ${
              isSelected
                ? "border-[#1C7800] bg-[#1C7800] text-white shadow-sm"
                : "border-neutral-300 bg-white text-[#1C1C1C] hover:border-[#1C7800]/45 hover:bg-white"
            }`}
          >
            <input
              id={id}
              type="checkbox"
              name="skill"
              value={skill}
              checked={isSelected}
              onChange={() => onSkillChange(skill)}
              className="sr-only"
            />
            <span className="capitalize">{skill}</span>
          </label>
        );
      })}
    </div>
  );
};

export default SkillFilter;

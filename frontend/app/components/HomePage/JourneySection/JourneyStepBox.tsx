import type { JourneyStepBoxProps } from "./journeyStepBox.types";

const variantClass: Record<JourneyStepBoxProps["variant"], string> = {
  orange: "border-[#FFA751] text-[#FFA751]",
  mint: "border-[#D4F2B7] text-[#D4F2B7]",
};

export function JourneyStepBox({ step, text, variant }: JourneyStepBoxProps) {
  return (
    <div
      className={`rounded-lg border border-current px-2.5 py-2 sm:px-3 sm:py-2.5 ${variantClass[variant]} w-[153px]`}
    >
      <p className="font-sfPro text-[11px] font-semibold leading-snug sm:text-xs">
        <span className="mr-0.5">{step}.</span>
        {text}
      </p>
    </div>
  );
}

import type { JourneyStepBoxProps } from "./journeyStepBox.types";

const variantClass: Record<JourneyStepBoxProps["variant"], string> = {
  orange: "border-[#FFA751] text-[#FFA751]",
  mint: "border-[#D4F2B7] text-[#D4F2B7]",
};

export function JourneyStepBox({ step, text, variant }: JourneyStepBoxProps) {
  return (
    <div
      className={`rounded-lg border  border-current px-2.5 py-2 sm:px-3 xl:w-[249px] xl:h-[97px] sm:py-2.5    ${variantClass[variant]} w-[153px]`}
    >
      <p className="font-sfPro flex items-center justify-center h-full w-full gap-[12.5px] text-[11px] font-semibold leading-snug sm:text-xs xl:text-[48px]">
        <span className="mr-0.5 ">{step}.</span>
        <p className="xl:text-[20px]">{text}</p>
      </p>
    </div>
  );
}

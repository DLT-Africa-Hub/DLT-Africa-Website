export type JourneyStepVariant = "orange" | "mint";

export type JourneyStepBoxProps = {
  step: number;
  text: string;
  variant: JourneyStepVariant;
};

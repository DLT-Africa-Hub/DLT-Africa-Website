import type { JourneyStepBoxProps } from "./journeyStepBox.types";

/** Replace with your asset under `public/images/`. */
import { withBasePath } from "@/lib/basePath";

export const JOURNEY_IMAGE = withBasePath("/images/zainab.jpg");

export const JOURNEY_IMAGE_ALT =
  "Placeholder: learner working with code on screen";

export const journeyQuote =
  "Lorem ipsum dolor sit amet, consectetur.";

export const journeyTitle = "Your Journey to Becoming Tech-Savvy";

export const journeyDescription =
  "Learn to build complete web applications from start to finish, combining frontend design, backend logic, and database management into one powerful skill set.";

export const journeySteps: JourneyStepBoxProps[] = [
  { step: 1, text: "Enroll for a course", variant: "orange" },
  { step: 2, text: "Enroll for a course", variant: "mint" },
  { step: 3, text: "Enroll for a course", variant: "mint" },
  { step: 4, text: "Enroll for a course", variant: "orange" },
];

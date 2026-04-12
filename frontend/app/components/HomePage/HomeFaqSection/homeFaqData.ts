import type { FaqAccordionItem } from "@/app/components/FaqAccordion/FaqAccordion";

export const HOME_FAQ_IMAGE = "/images/lateefat.png";
export const HOME_FAQ_IMAGE_ALT =
  "Placeholder: team member supporting learners online";

export const homeFaqItems: readonly FaqAccordionItem[] = [
  {
    id: "home-training-hours",
    question: "300 hours of extensive training",
    answer:
      "You get a full roadmap with guided projects, code reviews, and checkpoints. Live instruction, pair work, and solo build time are balanced so skills stick before you move on.",
  },
  {
    id: "home-schedule",
    question: "What does a typical week in the cohort look like?",
    answer:
      "Expect live sessions, labs, and assignments with clear due dates. You will have mentor feedback, peer channels, and office hours so you are never stuck for long.",
  },
  {
    id: "home-dev-env",
    question: "Guidance on setting up your own coding environment",
    answer:
      "We walk you through editor, Git, Node, package managers, and deployment basics so your machine matches what teams use. Office hours cover Windows, macOS, and Linux edge cases.",
  },
  {
    id: "home-progress-ui",
    question: "A progress-oriented user interface and experience",
    answer:
      "Your learning hub tracks modules, submissions, and instructor feedback in one place so you always know what is next and how you are doing.",
  },
  {
    id: "home-enroll",
    question: "How do I enroll and when does the next cohort start?",
    answer:
      "Apply from the bootcamp or courses page, complete the short form, and our team will confirm your seat and start date. Cohort dates are posted on the site and shared by email.",
  },
];

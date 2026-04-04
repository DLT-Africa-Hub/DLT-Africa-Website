import type { FaqAccordionItem } from "@/app/components/FaqAccordion/FaqAccordion";

export const ABOUT_OFFER_FAQ: readonly FaqAccordionItem[] = [
  {
    id: "training-hours",
    question: "300 hours of extensive training",
    answer:
      "You get a full-stack roadmap with guided projects, code reviews, and milestone checkpoints. Expect a mix of live instruction, pair work, and independent build time so concepts stick before you move on.",
  },
  {
    id: "dev-environment",
    question: "Guidance on setting up your own coding environment",
    answer:
      "We walk you through tooling step by step—editor, Git, Node, package managers, and deployment basics—so your machine matches what teams use in production. Office hours cover edge cases on Windows, macOS, and Linux.",
  },
  {
    id: "progress-ui",
    question: "A progress-oriented user interface and experience",
    answer:
      "Our post product launch support includes regular implementation of user request and 24/7 dedicated developers support for all projects in our portfolio.",
  },
];

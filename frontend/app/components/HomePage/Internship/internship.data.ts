import type { FaqAccordionItem } from "@/app/components/FaqAccordion/FaqAccordion";

import { withBasePath } from "@/lib/basePath";

export const INTERNSHIP_TITLE = "Want to intern with us?";
export const INTERNSHIP_DESCRIPTION = "Get hands-on experience, work on real projects, and build skills that actually matter in the industry.";
export const INTERNSHIP_IMAGE = withBasePath("/images/lateefat.png");
export const INTERNSHIP_IMAGE_ALT =
    "Placeholder: team member supporting learners online";

export const INTERNSHIP_DATA: readonly FaqAccordionItem[] = [
    {
        id: "internship-1",
        question: "What is the internship program about?",
        answer:
            "It's a 3-month hands-on program where you contribute to real internal projects, collaborate with the team, and gain practical industry experience.",
    },
    {
        id: "internship-2",
        question: "What kind of projects will I work on?",
        answer:
            "Interns work on internal tools, platform features, and product improvements that are actively used within the organization.",
    },
    {
        id: "internship-3",
        question: "Who can apply?",
        answer:
            "Anyone with foundational knowledge in a relevant field who is ready to learn by building and contributing to real work.",
    },
    {
        id: "internship-4",
        question: "Is the internship paid?",
        answer:
            "The program is designed as a hands-on learning experience. While it is not a salaried role, exceptional contributions may be rewarded, and top performers are prioritized for paid opportunities within the team.",
    }
];
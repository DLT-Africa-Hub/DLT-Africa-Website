import type { AlumniTestimonialEntry } from "./alumniCard.types";

import { withBasePath } from "@/lib/basePath";

const AVATAR = withBasePath("/images/alumni-avatar-placeholder.svg");

export const alumniTestimonials: AlumniTestimonialEntry[] = [
  {
    id: "alumni-1",
    name: "Naheem Oloyede",
    role: "Software Developer ",
    quote:
      "DLT gave me more than theory—I shipped real projects, got comfortable with the stack employers ask for, and left with a portfolio I’m proud to show in interviews.",
    image: AVATAR,
    imageAlt: "Naheem Oloyede",
    theme: "coral",
    layoutClassName: "md:-rotate-[4deg] md:translate-y-2",
  },
  {
    id: "alumni-2",
    name: "Kehinde Abubakar",
    role: "Frontend Developer",
    quote:
      "The cohort was intense in the best way: clear structure, supportive mentors, and peers who pushed me to think like a PM—not just pass assignments.",
    image: AVATAR,
    imageAlt: "Kehinde Abubakar",
    theme: "brown",
    layoutClassName: "md:z-10 md:-translate-y-10 md:scale-[1.02]",
  },
  {
    id: "alumni-3",
    name: "Opeyemi Abolaji",
    role: "Product Designer & Manager",
    quote:
      "I joined to level up my career; I left with confidence running sprints, communicating with engineers, and owning outcomes end to end.",
    image: AVATAR,
    imageAlt: "Opeyemi Abolaji",
    theme: "green",
    layoutClassName: "md:rotate-[4deg] md:translate-y-2",
  },
];

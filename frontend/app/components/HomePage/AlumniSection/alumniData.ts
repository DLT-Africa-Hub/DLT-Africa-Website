import type { AlumniTestimonialEntry } from "./alumniCard.types";

const AVATAR = "/images/alumni-avatar-placeholder.svg";

const PLACEHOLDER_QUOTE =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

export const alumniTestimonials: AlumniTestimonialEntry[] = [
  {
    id: "alumni-1",
    name: "John Tope",
    role: "Product Design Cohort",
    quote: PLACEHOLDER_QUOTE,
    image: AVATAR,
    imageAlt: "John Tope",
    theme: "coral",
    layoutClassName: "md:-rotate-[4deg] md:translate-y-2",
  },
  {
    id: "alumni-2",
    name: "John Tope",
    role: "Project manager",
    quote: PLACEHOLDER_QUOTE,
    image: AVATAR,
    imageAlt: "John Tope",
    theme: "brown",
    layoutClassName: "md:z-10 md:-translate-y-10 md:scale-[1.02]",
  },
  {
    id: "alumni-3",
    name: "John Tope",
    role: "Project manager",
    quote: PLACEHOLDER_QUOTE,
    image: AVATAR,
    imageAlt: "John Tope",
    theme: "green",
    layoutClassName: "md:rotate-[4deg] md:translate-y-2",
  },
];

import type { CourseCardProps } from "../CourseCard/courseCard.types";

export const PLACEHOLDER_IMAGE = "/images/course-placeholder.svg";

export const homeFeaturedCourse: Extract<
  CourseCardProps,
  { variant: "horizontal" }
> = {
  variant: "horizontal",
  compactImage: true,
  image: PLACEHOLDER_IMAGE,
  imageAlt: "Front-end development cohort in session",
  category: "Engineering",
  title: "FrontEnd Development",
  description:
    "Learn modern interfaces with HTML, CSS, JavaScript, and component-driven frameworks—responsive layouts, accessibility, and performance so you can ship polished UIs.",
  duration: "3 months",
  location: "Virtual",
  price: "#100,000",
  enrollHref: "/courses",
};

export const homeGridCourses: Extract<
  CourseCardProps,
  { variant: "vertical" }
>[] = [
  {
    variant: "vertical",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Product design course",
    category: "Design",
    title: "Product Design",
    duration: "3 months",
    location: "Virtual",
    price: "#50,000",
    enrollHref: "/courses",
  },
  {
    variant: "vertical",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Graphic design course",
    category: "Design",
    title: "Graphic Design",
    duration: "2 months",
    location: "Virtual",
    price: "#40,000",
    enrollHref: "/courses",
  },
  {
    variant: "vertical",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Full stack development course",
    category: "Engineering",
    title: "Full Stack Development",
    duration: "6 months",
    location: "On-site",
    price: "#640,000",
    enrollHref: "/courses",
  },
];

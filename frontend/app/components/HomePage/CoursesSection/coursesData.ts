import type { CourseCardProps } from "../CourseCard/courseCard.types";

export const PLACEHOLDER_IMAGE = "/images/course-placeholder.svg";

export const homeCourses: Extract<
  CourseCardProps,
  { variant: "vertical" }
>[] = [
  {
    variant: "vertical",
    image: PLACEHOLDER_IMAGE,
    imageAlt: "Front-end development course",
    category: "Engineering",
    title: "FrontEnd Development",
    duration: "3 months",
    location: "Virtual",
    price: "#100,000",
    enrollHref: "/courses",
  },
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
];

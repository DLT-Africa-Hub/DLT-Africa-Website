import type { CourseCardProps } from "../CourseCard/courseCard.types";

/** Swap these paths when your course images are ready. */
import { withBasePath } from "@/lib/basePath";

export const PLACEHOLDER_IMAGE = withBasePath("/images/course-placeholder.svg");
export const FrontendImage = withBasePath("/images/home-frontend.jpg");
export const FullStackImage = withBasePath("/images/hm-fs.jpg");
export const ProductDesignImage = withBasePath("/images/home-pd.jpg");
export const GraphicDesignImage = withBasePath("/images/home-gd.png");

export const homeOnlineCourses: Extract<
  CourseCardProps,
  { variant: "vertical" }
>[] = [
  {
    variant: "vertical",
    image: FrontendImage,
    imageAlt: "Frontend development course",
    category: "Engineering",
    title: "FrontEnd Development",
    duration: "4 months",
    location: "Virtual",
    price: "₦100,000",
    enrollHref: "/application",
  },
  {
    variant: "vertical",
    image: ProductDesignImage,
    imageAlt: "Product design course",
    category: "Design",
    title: "Product Design",
    duration: "4 months",
    location: "Virtual",
    price: "₦70,000",
    enrollHref: "/application",
  },
  {
    variant: "vertical",
    image: GraphicDesignImage,
    imageAlt: "Graphic design course",
    category: "Design",
    title: "Graphic Design",
    duration: "4 months",
    location: "Virtual",
    price: "₦40,000",
    enrollHref: "/application",
  },
];

export const homeOnsiteCourse: Extract<
  CourseCardProps,
  { variant: "horizontal" }
> = {
  variant: "horizontal",
  image: FullStackImage,
  imageAlt: "Full stack development bootcamp",
  category: "Engineering",
  title: "Full Stack Development",
  description:
    "Build end-to-end web applications with modern front-end frameworks, APIs, databases, and deployment—intensive onsite training at our bootcamp for deeper focus and mentorship.",
  duration: "6 months",
  location: "On-Site",
  price: "₦630,000",
  enrollHref: "/application",
};

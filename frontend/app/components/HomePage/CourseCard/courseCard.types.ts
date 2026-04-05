export type CourseCardVariant = "horizontal" | "vertical";

type CourseCardShared = {
  image: string;
  imageAlt: string;
  category: string;
  title: string;
  duration: string;
  location: string;
  price: string;
  /** Defaults to `/courses` when omitted. */
  enrollHref?: string;
};

export type CourseCardProps =
  | (CourseCardShared & {
      variant: "horizontal";
      description: string;
      /** Smaller image column for the home featured course. */
      compactImage?: boolean;
    })
  | (CourseCardShared & {
      variant: "vertical";
      description?: string;
    });

export type AlumniCardTheme = "coral" | "brown" | "green";

export type AlumniCardProps = {
  name: string;
  role: string;
  quote: string;
  image: string;
  imageAlt: string;
  theme: AlumniCardTheme;
  /** Tailwind rotation / offset utilities, e.g. `-rotate-3 md:-mr-2` */
  layoutClassName?: string;
};

export type AlumniTestimonialEntry = AlumniCardProps & { id: string };

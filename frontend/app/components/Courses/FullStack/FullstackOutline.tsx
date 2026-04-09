import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";

const FullstackOutline: React.FC = () => {
  return (
    <CourseOutlineSection
      title="Course Outline & Modules"
      imageSrc="/images/full-stack-hero.png"
      imageAlt="Fullstack course outline"
      modules={[
        {
          id: 1,
          title: "Level 1 - Frontend Development (Weeks 1-1)",
          details:
            "Embark on a transformative journey with DLT Africa's Full-stack curriculum, designed to empower aspiring developers and seasoned professionals alike.",
        },
        {
          id: 2,
          title: "Level 2 - Backend Development (Weeks 1-1)",
          details:
            "Embark on a transformative journey with DLT Africa's Full-stack curriculum, designed to empower aspiring developers and seasoned professionals alike.",
        },
        {
          id: 3,
          title: "Level 3 - Full Stack Integration (Weeks 1-1)",
          details:
            "Embark on a transformative journey with DLT Africa's Full-stack curriculum, designed to empower aspiring developers and seasoned professionals alike.",
        },
      ]}
    />
  );
};

export default FullstackOutline;

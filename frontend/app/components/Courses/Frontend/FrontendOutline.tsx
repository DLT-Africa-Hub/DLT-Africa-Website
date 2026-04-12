import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";

import { withBasePath } from "@/lib/basePath";

const FrontendOutline: React.FC = () => {
  return (
    <CourseOutlineSection
      title="Course Outline & Modules"
      imageSrc={withBasePath("/images/course-overview-two.jpg")}
      imageAlt="Frontend course outline"
      modules={[
        {
          id: 1,
          title: "Level 1 - HTML, CSS & JavaScript ",
          details:
            "Start with semantic HTML5, forms, and document structure. Master CSS layout (including Flexbox and Grid), typography, and responsive breakpoints so layouts work on real devices. Add JavaScript for the DOM, events, and fundamentals—variables, functions, and modules—so you can script behavior before frameworks.",
        },
        {
          id: 2,
          title: "Level 2 - Modern Frontend Development ",
          details:
            "Move into React: JSX, components and composition, props, state, hooks, and client-side routing. Organize UI with reusable patterns, manage application state cleanly, and use a modern toolchain so you can build interfaces that scale as features grow.",
        },
        {
          id: 3,
          title: "Level 3 - Advanced Projects & Optimization",
          details:
            "Ship portfolio-ready work: integrate REST APIs and async data, tune performance (loading strategies and perceived speed), and strengthen accessibility and responsive polish. Finish with a capstone—design, build, and deploy a complete frontend application end to end.",
        },
      ]}
    />
  );
};

export default FrontendOutline;

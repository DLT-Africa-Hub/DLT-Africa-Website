import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";
import { withBasePath } from "@/lib/basePath";

const FullstackOutline: React.FC = () => {
  return (
    <CourseOutlineSection
      title="Course Outline & Modules"
      imageSrc={withBasePath("/images/course-overview-two.jpg")}
      imageAlt="Fullstack course outline"
      modules={[
        {
          id: 1,
          title: "Level 1 - Frontend Development",
          details:
            "Learn the client side from the ground up: HTML structure, CSS layout and responsive design, and JavaScript for interactivity and DOM manipulation. Move into React—components, props, state, hooks, and routing—and use VS Code and Figma alongside best practices for accessible, maintainable UIs.",
        },
        {
          id: 2,
          title: "Level 2 - Backend Development",
          details:
            "Build APIs and services with Node.js and Express: REST design, middleware, validation, and error handling. Work with MongoDB for schemas, queries, and persistence; add authentication and authorization; configure environments and test endpoints so your backend is ready for real apps.",
        },
        {
          id: 3,
          title: "Level 3 - Full Stack Integration",
          details:
            "Connect your React frontend to your Express API end to end: data flow, protected routes, and deployment. Practice integration testing, debugging across the stack, and shipping a capstone—a full application you develop, deploy, and present.",
        },
      ]}
    />
  );
};

export default FullstackOutline;

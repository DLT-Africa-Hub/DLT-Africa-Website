import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";
import { withBasePath } from "@/lib/basePath";

const BackendOutline: React.FC = () => {
  return (
    <CourseOutlineSection
      title="Course Outline & Modules"
      imageSrc={withBasePath("/images/course-overview-two.jpg")}
      imageAlt="Backend course outline"
      modules={[
        {
          id: 1,
          title: "Level 1 - Backend Fundamentals",
          details:
            "Understand how the web actually works behind the scenes—HTTP, servers, and request/response cycles. Learn a backend language runtime, build basic APIs, handle routing, and structure applications properly while writing clean, maintainable code.",
        },
        {
          id: 2,
          title: "Level 2 - APIs, Databases & Authentication",
          details:
            "Design and build RESTful APIs, connect to relational and NoSQL databases, and manage data efficiently. Implement authentication and authorization, validate inputs, and handle errors like a production-ready system.",
        },
        {
          id: 3,
          title: "Level 3 - System Design & Deployment",
          details:
            "Scale your backend skills with caching, background jobs, and performance optimization. Learn system design basics, work with cloud services, and deploy real backend applications with proper monitoring and environment management.",
        },
      ]}
    />
  );
};

export default BackendOutline;

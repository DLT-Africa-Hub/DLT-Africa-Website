import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";

const FrontendOutline: React.FC = () => {
    return (
        <CourseOutlineSection
            title="Course Outline & Modules"
            imageSrc="/images/fullstack-course-outline.png"
            imageAlt="Frontend course outline"
            modules={[
                {
                    id: 1,
                    title: "Level 1 - HTML, CSS & JavaScript (Weeks 1–4)",
                    details:
                        "Learn the building blocks of the web—HTML for structure, CSS for styling, and JavaScript for interactivity. You’ll create responsive web pages and understand core programming concepts.",
                },
                {
                    id: 2,
                    title: "Level 2 - Modern Frontend Development (Weeks 5–8)",
                    details:
                        "Dive into modern tools and frameworks like React. Learn component-based architecture, state management, and how to build scalable, maintainable user interfaces.",
                },
                {
                    id: 3,
                    title: "Level 3 - Advanced Projects & Optimization (Weeks 9–12)",
                    details:
                        "Build real-world applications, optimize performance, and apply best practices such as accessibility, responsiveness, and API integration to become job-ready.",
                },
            ]}
        />
    );
};

export default FrontendOutline;
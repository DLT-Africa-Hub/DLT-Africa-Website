import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";
import { withBasePath } from "@/lib/basePath";

const ProductDesignOutline: React.FC = () => {
    return (
        <CourseOutlineSection
            title="Course Outline & Modules"
            imageSrc={withBasePath("/images/course-overview-two.jpg")}
            imageAlt="Product design course outline"
            modules={[
                {
                    id: 1,
                    title: "Level 1 - UI/UX Fundamentals ",
                    details:
                        "Learn core principles of user interface and user experience design, including layout, typography, color systems, and usability best practices.",
                },
                {
                    id: 2,
                    title: "Level 2 - User Research & Prototyping ",
                    details:
                        "Understand user behavior through research and translate insights into wireframes and interactive prototypes using tools like Figma.",
                },
                {
                    id: 3,
                    title: "Level 3 - Product Design Projects ",
                    details:
                        "Work on end-to-end product design projects—from idea to final design—building a portfolio that showcases your problem-solving and design thinking skills.",
                },
            ]}
        />
    );
};

export default ProductDesignOutline;
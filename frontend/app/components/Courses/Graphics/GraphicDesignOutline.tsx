import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";
import { withBasePath } from "@/lib/basePath";

const GraphicDesignOutline: React.FC = () => {
    return (
        <CourseOutlineSection
            title="Course Outline & Modules"
            imageSrc={withBasePath("/images/course-overview-two.jpg")}
            imageAlt="Graphics design course outline"
            modules={[
                {
                    id: 1,
                    title: "Level 1 - Design Fundamentals ",
                    details:
                        "Learn the core principles of design including color theory, typography, layout, and composition using tools like Photoshop and Illustrator.",
                },
                {
                    id: 2,
                    title: "Level 2 - Visual & Brand Design ",
                    details:
                        "Create logos, social media graphics, flyers, and brand identities while learning how to communicate ideas effectively through visual design using tools like Photoshop and Illustrator.",
                },
                {
                    id: 3,
                    title: "Level 3 - Portfolio & Real-World Projects ",
                    details:
                        "Work on real-world design projects such as logos, flyers, social media graphics, and branding materials to build a strong portfolio.",
                },
            ]}
        />
    );
};

export default GraphicDesignOutline;
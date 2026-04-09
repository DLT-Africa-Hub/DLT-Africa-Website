import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";

const GraphicDesignOutline: React.FC = () => {
    return (
        <CourseOutlineSection
            title="Course Outline & Modules"
            imageSrc="/images/fullstack-course-outline.png"
            imageAlt="Graphics design course outline"
            modules={[
                {
                    id: 1,
                    title: "Level 1 - Design Fundamentals (Weeks 1–4)",
                    details:
                        "Learn the core principles of design including color theory, typography, layout, and composition. Get hands-on with tools like Photoshop and Illustrator.",
                },
                {
                    id: 2,
                    title: "Level 2 - Visual & Brand Design (Weeks 5–8)",
                    details:
                        "Create logos, social media graphics, flyers, and brand identities while learning how to communicate ideas effectively through visual design.",
                },
                {
                    id: 3,
                    title: "Level 3 - Portfolio & Real-World Projects (Weeks 9–12)",
                    details:
                        "Work on real-world design projects and build a professional portfolio that showcases your creativity and ability to solve design problems.",
                },
            ]}
        />
    );
};

export default GraphicDesignOutline;
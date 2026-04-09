import React from "react";
import CourseOutlineSection from "../CourseOutline/CourseOutlineSection";

const ProductDesignOutline: React.FC = () => {
    return (
        <CourseOutlineSection
            title="Course Outline & Modules"
            imageSrc="/images/full-stack-hero.png"
            imageAlt="Product design course outline"
            modules={[
                {
                    id: 1,
                    title: "Level 1 - UI/UX Fundamentals (Weeks 1–4)",
                    details:
                        "Understand the basics of user interface and user experience design, including layout, typography, color systems, and usability principles.",
                },
                {
                    id: 2,
                    title: "Level 2 - User Research & Prototyping (Weeks 5–8)",
                    details:
                        "Learn how to conduct user research, create wireframes, and design interactive prototypes using tools like Figma.",
                },
                {
                    id: 3,
                    title: "Level 3 - Product Design Projects (Weeks 9–12)",
                    details:
                        "Design complete digital products from idea to final UI, building a strong portfolio that demonstrates your problem-solving and design thinking skills.",
                },
            ]}
        />
    );
};

export default ProductDesignOutline;
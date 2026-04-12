import React from "react";
import { PiHandCoins } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import CourseOverviewSection from "../CourseOverview/CourseOverviewSection";
import { withBasePath } from "@/lib/basePath";

const ProductDesignOverview: React.FC = () => {
    return (
        <CourseOverviewSection
            title="Course Overview"
            description="The Product Design Program is built to help you become a skilled product designer, creating intuitive and engaging digital experiences. You'll learn user-centered design principles, interaction design, prototyping, and usability testing. Using tools like Figma, Adobe XD, Sketch, and Miro, you'll work on real-world projects—from wireframes to high-fidelity prototypes—culminating in a portfolio-ready capstone project."
            cards={[
                {
                    id: 1,
                    title: "Flexible Payment Plan",
                    text: "Start learning with ease—choose a payment plan that works for you, with installments or a simple deposit.",
                    icon: <PiHandCoins className="h-5 w-5" />,
                },
                {
                    id: 2,
                    title: "Learn Anywhere",
                    text: "Attend interactive online classes or join hands-on in-person workshops. Both options give you the same practical experience.",
                    icon: <TbWorld className="h-5 w-5" />,
                }
            ]}
            imageSrc={withBasePath("/images/course-overview-one.jpg")}
            imageAlt="Product design course overview"
        />
    );
};

export default ProductDesignOverview;
import React from "react";
import { PiHandCoins } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { MdBrush } from "react-icons/md";
import CourseOverviewSection from "../CourseOverview/CourseOverviewSection";

const GraphicDesignOverview: React.FC = () => {
    return (
        <CourseOverviewSection
            title="Course Overview"
            description="The Graphic Design Program is crafted to help you become a professional visual designer. You'll learn essential design principles, typography, color theory, layout composition, and digital illustration. Using tools like Figma, Adobe Photoshop, Illustrator, and Canva, you’ll work on practical projects, from branding and web graphics to social media campaigns. Each stage is hands-on, culminating in a major capstone project where you'll create a complete visual design portfolio."
            cards={[
                {
                    id: 1,
                    title: "Flexible Payment Plan",
                    text: "Start your creative journey without stress. Pay in easy installments or begin with a simple deposit.",
                    icon: <PiHandCoins className="h-5 w-5" />,
                },
                {
                    id: 2,
                    title: "Learn Anywhere",
                    text: "Join interactive online classes or attend our in-person workshops. Both options offer the same hands-on experience.",
                    icon: <TbWorld className="h-5 w-5" />,
                }
            ]}
            imageSrc="/images/full-stack-overview.png"
            imageAlt="Graphic design course overview"
        />
    );
};

export default GraphicDesignOverview;
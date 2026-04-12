import React from "react";
import { PiHandCoins } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import CourseOverviewSection from "../CourseOverview/CourseOverviewSection";
import { withBasePath } from "@/lib/basePath";

const FrontendOverview: React.FC = () => {
    return (
        <CourseOverviewSection
            title="Course Overview"
            description="The Frontend Development Program is designed to help you become a skilled frontend developer, creating visually stunning and highly interactive web applications. You will master modern frontend technologies like HTML, CSS, JavaScript, and ReactJS, while learning best practices in responsive design, UI/UX principles, and performance optimization. Each module is hands-on, with mini-projects and a major capstone project where you'll design, build, and deploy a complete frontend application."
            cards={[
                {
                    id: 1,
                    title: "Flexible Payment Plan",
                    text: "Start learning at your own pace with our easy installment plan or begin with a simple deposit.",
                    icon: <PiHandCoins className="h-5 w-5" />,
                },
                {
                    id: 2,
                    title: "Learn Anywhere",
                    text: "Attend sessions online or join our in-person workshops. Both options give you the same practical, interactive experience.",
                    icon: <TbWorld className="h-5 w-5" />,
                },
            ]}
            imageSrc={withBasePath("/images/course-overview-one.jpg")}
            imageAlt="Frontend course overview"
        />
    );
};

export default FrontendOverview;
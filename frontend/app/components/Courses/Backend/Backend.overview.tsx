import React from "react";
import { PiHandCoins } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import CourseOverviewSection from "../CourseOverview/CourseOverviewSection";
import { withBasePath } from "@/lib/basePath";

const BackendOverview: React.FC = () => {
  return (
    <CourseOverviewSection
      title="Course Overview"
      description="The Backend Development Program is designed to help you become a skilled backend engineer, building the systems that power modern applications. You’ll learn how to design APIs, manage databases, handle authentication, and structure scalable server-side applications. The program is hands-on, with practical projects and a final capstone where you’ll build and deploy a production-ready backend system."
      cards={[
        {
          id: 1,
          title: "Flexible Payment Plan",
          text: "Start learning at your own pace with our easy installment options or begin with a simple deposit.",
          icon: <PiHandCoins className="h-5 w-5" />,
        },
        {
          id: 2,
          title: "Learn Anywhere",
          text: "Join live online sessions or attend in-person workshops, with the same practical, hands-on backend experience.",
          icon: <TbWorld className="h-5 w-5" />,
        },
      ]}
      imageSrc={withBasePath("/images/course-overview-one.jpg")}
      imageAlt="Backend course overview"
    />
  );
};

export default BackendOverview;

import React from "react";
import { PiHandCoins } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import CourseOverviewSection from "../CourseOverview/CourseOverviewSection";
import { withBasePath } from "@/lib/basePath";

const FullstackOverview: React.FC = () => {
  return (
    <CourseOverviewSection
      title="Course Overview"
      description="The DLT Full - Stack Development Program is designed to help you master the full web development journey, from crafting beautiful user interfaces to building robust backend systems that power real-world applications. Across development, and full-stack integration using the same modern technologies employed by professional developers worldwide. You will work with tools like VS Code, Command Center, Figma, MongoDB and languages like JavaScript, ReactJS, Node.JS, Express, and many more. This program focuses more on practice over theory so get ready to get your hands dirty, each stage includes mini-projects and a major capstone where you'll develop, deploy and present a fully functional web application."
      cards={[
        {
          id: 1,
          title: "Flexible Payment Plan",
          text: "Start learning with ease, we made a plan that aids your budget. Pay in installment or begin with a deposit.",
          icon: <PiHandCoins className="h-5 w-5" />,
        },
        {
          id: 2,
          title: "Learn Physically or Virtually",
          text: "Join classes at our physical bootcamp or attend live sessions online from anywhere in the world. Whichever you choose you get the same DLT practical, interactive and innovative experience.",
          icon: <TbWorld className="h-5 w-5" />,
        },
      ]}
      imageSrc={withBasePath("/images/course-overview-one.jpg")}
      imageAlt="Fullstack course overview"
    />
  );
};

export default FullstackOverview;

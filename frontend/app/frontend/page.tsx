"use client";

import FrontendHero from "@/app/components/Courses/Frontend/FrontendHero";
import FrontendOverview from "../components/Courses/Frontend/FrontendOverview";
import FrontendOutline from "../components/Courses/Frontend/FrontendOutline";
import FrontendCareerOpportunities from "../components/Courses/Frontend/FrontendCareerOpportunities";

const page = () => {
  return (
    <div>
      <FrontendHero />
      <FrontendOverview />
      <FrontendOutline />
      <FrontendCareerOpportunities />
    </div>
  );
};

export default page;

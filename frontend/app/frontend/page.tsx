"use client";

import FrontendHero from "@/app/components/Courses/Frontend/FrontendHero";
import FrontendOverview from "../components/Courses/Frontend/FrontendOverview";
import FrontendOutline from "../components/Courses/Frontend/FrontendOutline";
import FrontendCareerOpportunities from "../components/Courses/Frontend/FrontendCareerOpportunities";
import FrontendOffer from "../components/Courses/Frontend/FrontendOffer";

const page = () => {
  return (
    <div>
      <FrontendHero />
      <FrontendOverview />
      <FrontendOutline />
      <FrontendCareerOpportunities />
      <FrontendOffer />
    </div>
  );
};

export default page;

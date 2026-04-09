"use client";

import FullStackHero from "@/app/components/Courses/FullStack/FullstackHero";
import FullstackOverview from "@/app/components/Courses/FullStack/FullstackOverview";
import FullstackOutline from "@/app/components/Courses/FullStack/FullstackOutline";
import FullstackCareerOpportunities from "@/app/components/Courses/FullStack/FullstackCareerOpportunities";
import FullstackOffer from "../components/Courses/FullStack/FullstackOffer";

const page = () => {
  return (
    <div>
      <FullStackHero />
      <FullstackOverview />
      <FullstackOutline />
      <FullstackCareerOpportunities />
      <FullstackOffer />
    </div>
  );
};

export default page;

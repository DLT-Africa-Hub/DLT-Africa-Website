"use client";

import FullStackHero from "@/app/components/Courses/FullStack/FullstackHero";
import FullstackIconSection from "@/app/components/Courses/FullStack/FullstackIconSection";
import FullstackOverview from "@/app/components/Courses/FullStack/FullstackOverview";
import FullstackOutline from "@/app/components/Courses/FullStack/FullstackOutline";
import FullstackCareerOpportunities from "@/app/components/Courses/FullStack/FullstackCareerOpportunities";
import FullstackDetail from "@/app/components/Courses/FullStack/FullstackDetail";
import FullstackOffer from "../components/Courses/FullStack/FullstackOffer";

const page = () => {
  return (
    <div>
      <FullStackHero />
      <FullstackOverview />
      <FullstackOutline />
      <FullstackCareerOpportunities />
      <FullstackOffer />
      {/* <FullstackIconSection />
      <FullstackDetail /> */}
    </div>
  );
};

export default page;

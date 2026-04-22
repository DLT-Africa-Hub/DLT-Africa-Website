"use client";

import BackendHero from "@/app/components/Courses/Backend/Backend.hero";
import BackendOverview from "@/app/components/Courses/Backend/Backend.overview";
import BackendOutline from "@/app/components/Courses/Backend/Backend.outline";
import BackendOffers from "@/app/components/Courses/Backend/Backend.offers";
import BackendCareerPerks from "@/app/components/Courses/Backend/BackendCareer.perks";

const page = () => {
  return (
    <div>
      <BackendHero />
      <BackendOverview />
      <BackendOutline />
      <BackendOffers />
      <BackendCareerPerks />
    </div>
  );
};

export default page;

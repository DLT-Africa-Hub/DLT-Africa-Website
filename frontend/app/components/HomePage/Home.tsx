"use client";

import AboutUsSection from "./AboutUsSection/AboutUsSection";
import CoursesSection from "./CoursesSection/CoursesSection";
import HeroSection from "./HeroSection/HeroSection";
import JourneySection from "./JourneySection/JourneySection";
import Partners from "./Partners/Partners";

const IndexHome: React.FC = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutUsSection />
      <Partners />
      <CoursesSection />
      <JourneySection />
    </div>
  );
};

export default IndexHome;

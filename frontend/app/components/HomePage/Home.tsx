"use client";

import AboutUsSection from "./AboutUsSection/AboutUsSection";
import AlumniSection from "./AlumniSection/AlumniSection";
import CoursesSection from "./CoursesSection/CoursesSection";
import HeroSection from "./HeroSection/HeroSection";
import HomeFaqSection from "./HomeFaqSection/HomeFaqSection";
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
      <HomeFaqSection />
      <AlumniSection />
    </div>
  );
};

export default IndexHome;

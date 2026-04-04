"use client";

import AboutUsSection from "./AboutUsSection/AboutUsSection";
import HeroSection from "./HeroSection/HeroSection";
import Partners from "./Partners/Partners";

const IndexHome: React.FC = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutUsSection />
      <Partners />
    </div>
  );
};

export default IndexHome;

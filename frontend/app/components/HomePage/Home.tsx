"use client";

import AboutUsSection from "./AboutUsSection/AboutUsSection";
import HeroSection from "./HeroSection/HeroSection";

const IndexHome: React.FC = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutUsSection />
    </div>
  );
};

export default IndexHome;

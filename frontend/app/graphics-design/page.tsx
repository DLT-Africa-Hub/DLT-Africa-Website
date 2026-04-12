"use client";

import GraphicDesignHero from "@/app/components/Courses/Graphics/GraphicDesignHero";
import GraphicDesignOverview from "../components/Courses/Graphics/GraphicDesignOverview";
import GraphicDesignOutline from "../components/Courses/Graphics/GraphicDesignOutline";
import GraphicDesignCareerOpportunities from "../components/Courses/Graphics/GraphicDesignCareerOpportunities";

const page = () => {
  return (
    <div>
      <GraphicDesignHero />
      <GraphicDesignOverview />
      <GraphicDesignOutline />
      <GraphicDesignCareerOpportunities />
    </div>
  );
};

export default page;

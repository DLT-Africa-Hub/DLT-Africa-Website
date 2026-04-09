"use client";

import GraphicDesignHero from "@/app/components/Courses/Graphics/GraphicDesignHero";
import GraphicDesignOverview from "../components/Courses/Graphics/GraphicDesignOverview";
import GraphicDesignOutline from "../components/Courses/Graphics/GraphicDesignOutline";
import GraphicDesignCareerOpportunities from "../components/Courses/Graphics/GraphicDesignCareerOpportunities";
import GraphicDesignOffer from "../components/Courses/Graphics/GraphicDesignOffer";

const page = () => {
  return (
    <div>
      <GraphicDesignHero />
      <GraphicDesignOverview />
      <GraphicDesignOutline />
      <GraphicDesignCareerOpportunities />
      <GraphicDesignOffer />
    </div>
  );
};

export default page;

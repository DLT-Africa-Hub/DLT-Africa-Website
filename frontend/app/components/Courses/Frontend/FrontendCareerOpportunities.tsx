import React from "react";
import {
  LuComponent,
  LuGlobe,
  LuLayers,
  LuMonitor,
  LuPalette,
  LuPenTool,
} from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const FrontendCareerOpportunities: React.FC = () => {
  return (
    <CareerOpportunitiesSection
      title="Frontend Career Opportunities"
      opportunities={[
        {
          id: 1,
          title: "Frontend Developer",
          icon: <LuMonitor className="h-5 w-5" />,
        },
        {
          id: 2,
          title: "UI Developer",
          icon: <LuPalette className="h-5 w-5" />,
        },
        {
          id: 3,
          title: "React Developer",
          icon: <LuComponent className="h-5 w-5" />,
        },
        {
          id: 4,
          title: "Web Developer",
          icon: <LuGlobe className="h-5 w-5" />,
        },
        {
          id: 5,
          title: "UI/UX Engineer",
          icon: <LuPenTool className="h-5 w-5" />,
        },
        {
          id: 6,
          title: "Frontend Architect",
          icon: <LuLayers className="h-5 w-5" />,
        },
      ]}
    />
  );
};

export default FrontendCareerOpportunities;

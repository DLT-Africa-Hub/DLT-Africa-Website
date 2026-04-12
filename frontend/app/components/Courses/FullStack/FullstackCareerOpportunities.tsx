import React from "react";
import {
  LuCloudCog,
  LuFileJson,
  LuLayers,
  LuMonitor,
  LuServer,
  LuTable2,
} from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const FullstackCareerOpportunities: React.FC = () => {
  return (
    <CareerOpportunitiesSection
      title="Career Opportunities"
      opportunities={[
        {
          id: 1,
          title: "Full Stack Developer",
          icon: <LuLayers className="h-5 w-5" />,
        },
        {
          id: 2,
          title: "Frontend Developer",
          icon: <LuMonitor className="h-5 w-5" />,
        },
        {
          id: 3,
          title: "Backend Developer",
          icon: <LuServer className="h-5 w-5" />,
        },
        {
          id: 4,
          title: "API Developer",
          icon: <LuFileJson className="h-5 w-5" />,
        },
        {
          id: 5,
          title: "Database Developer",
          icon: <LuTable2 className="h-5 w-5" />,
        },
        {
          id: 6,
          title: "DevOps Engineer",
          icon: <LuCloudCog className="h-5 w-5" />,
        },
      ]}
    />
  );
};

export default FullstackCareerOpportunities;

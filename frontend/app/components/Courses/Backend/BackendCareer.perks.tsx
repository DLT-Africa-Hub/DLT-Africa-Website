import React from "react";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";
import {
  LuServer,
  LuBadgeCheck,
  LuDatabase,
  LuCloud,
  LuSettings,
  LuLayers,
} from "react-icons/lu";

const BackendCareerPerks: React.FC = () => {
  return (
    <CareerOpportunitiesSection
      title="Career Path in Backend Development"
      opportunities={[
        {
          id: 1,
          title: "Backend Developer",
          icon: <LuServer className="h-5 w-5" />,
        },
        {
          id: 2,
          title: "API Engineer",
          icon: <LuBadgeCheck className="h-5 w-5" />,
        },
        {
          id: 3,
          title: "Database Engineer",
          icon: <LuDatabase className="h-5 w-5" />,
        },
        {
          id: 4,
          title: "Cloud Engineer",
          icon: <LuCloud className="h-5 w-5" />,
        },
        {
          id: 5,
          title: "DevOps Engineer",
          icon: <LuSettings className="h-5 w-5" />,
        },
        {
          id: 6,
          title: "Software Architect",
          icon: <LuLayers className="h-5 w-5" />,
        },
      ]}
    />
  );
};

export default BackendCareerPerks;

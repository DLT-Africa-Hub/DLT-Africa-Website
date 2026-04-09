import React from "react";
import { LuUserRound } from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const FullstackCareerOpportunities: React.FC = () => {
  return (
    <CareerOpportunitiesSection
      title="Career Opportunities"
      opportunities={[
        { id: 1, title: "Full Stack Developer", icon: <LuUserRound className="h-5 w-5" /> },
        { id: 2, title: "Frontend Developer", icon: <LuUserRound className="h-5 w-5" /> },
        { id: 3, title: "Backend Developer", icon: <LuUserRound className="h-5 w-5" /> },
        { id: 4, title: "API Engineer", icon: <LuUserRound className="h-5 w-5" /> },
        { id: 5, title: "Blockchain Engineering", icon: <LuUserRound className="h-5 w-5" /> },
        { id: 6, title: "Backend Developer", icon: <LuUserRound className="h-5 w-5" /> },
      ]}
    />
  );
};

export default FullstackCareerOpportunities;

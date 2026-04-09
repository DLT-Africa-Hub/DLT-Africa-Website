import React from "react";
import { LuUserRound } from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const FrontendCareerOpportunities: React.FC = () => {
    return (
        <CareerOpportunitiesSection
            title="Frontend Career Opportunities"
            opportunities={[
                { id: 1, title: "Frontend Developer", icon: <LuUserRound className="h-5 w-5" /> },
                { id: 2, title: "UI Developer", icon: <LuUserRound className="h-5 w-5" /> },
                { id: 3, title: "React Developer", icon: <LuUserRound className="h-5 w-5" /> },
                { id: 4, title: "Web Developer", icon: <LuUserRound className="h-5 w-5" /> },
                { id: 5, title: "UI/UX Engineer", icon: <LuUserRound className="h-5 w-5" /> },
                { id: 6, title: "Frontend Architect", icon: <LuUserRound className="h-5 w-5" /> },
            ]}
        />
    );
};

export default FrontendCareerOpportunities;
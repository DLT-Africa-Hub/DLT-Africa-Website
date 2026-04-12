import React from "react";
import {
    LuBriefcase,
    LuLayoutTemplate,
    LuMicroscope,
    LuMousePointerClick,
    LuPalette,
    LuTarget,
} from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const ProductDesignCareerOpportunities: React.FC = () => {
    return (
        <CareerOpportunitiesSection
            title="Product Design Career Opportunities"
            opportunities={[
                {
                    id: 1,
                    title: "Product Designer",
                    icon: <LuTarget className="h-5 w-5" />,
                },
                {
                    id: 2,
                    title: "UI/UX Designer",
                    icon: <LuLayoutTemplate className="h-5 w-5" />,
                },
                {
                    id: 3,
                    title: "UX Researcher",
                    icon: <LuMicroscope className="h-5 w-5" />,
                },
                {
                    id: 4,
                    title: "Interaction Designer",
                    icon: <LuMousePointerClick className="h-5 w-5" />,
                },
                {
                    id: 5,
                    title: "Visual Designer",
                    icon: <LuPalette className="h-5 w-5" />,
                },
                {
                    id: 6,
                    title: "Product Manager",
                    icon: <LuBriefcase className="h-5 w-5" />,
                },
            ]}
        />
    );
};

export default ProductDesignCareerOpportunities;

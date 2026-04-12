import React from "react";
import {
    LuAperture,
    LuBrush,
    LuClapperboard,
    LuLayoutTemplate,
    LuPalette,
    LuTag,
} from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const GraphicDesignCareerOpportunities: React.FC = () => {
    return (
        <CareerOpportunitiesSection
            title="Graphics Design Career Opportunities"
            opportunities={[
                {
                    id: 1,
                    title: "Graphic Designer",
                    icon: <LuPalette className="h-5 w-5" />,
                },
                {
                    id: 2,
                    title: "Brand Designer",
                    icon: <LuTag className="h-5 w-5" />,
                },
                {
                    id: 3,
                    title: "UI Designer",
                    icon: <LuLayoutTemplate className="h-5 w-5" />,
                },
                {
                    id: 4,
                    title: "Illustrator",
                    icon: <LuBrush className="h-5 w-5" />,
                },
                {
                    id: 5,
                    title: "Motion Graphics Designer",
                    icon: <LuClapperboard className="h-5 w-5" />,
                },
                {
                    id: 6,
                    title: "Photo Editor",
                    icon: <LuAperture className="h-5 w-5" />,
                },
            ]}
        />
    );
};

export default GraphicDesignCareerOpportunities;

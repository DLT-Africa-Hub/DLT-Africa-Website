import React from "react";
import { LuPalette, LuPenTool, LuImage, LuBrush, LuLayers, LuLayoutDashboard } from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const GraphicDesignCareerOpportunities: React.FC = () => {
    return (
        <CareerOpportunitiesSection
            title="Graphics Design Career Opportunities"
            opportunities={[
                { id: 1, title: "Graphic Designer", icon: <LuPalette className="h-5 w-5" /> },
                { id: 2, title: "Brand Designer", icon: <LuPenTool className="h-5 w-5" /> },
                { id: 3, title: "UI Designer", icon: <LuLayoutDashboard className="h-5 w-5" /> },
                { id: 4, title: "Illustrator", icon: <LuBrush className="h-5 w-5" /> },
                { id: 5, title: "Motion Graphics Designer", icon: <LuLayers className="h-5 w-5" /> },
                { id: 6, title: "Photo Editor", icon: <LuImage className="h-5 w-5" /> },
            ]}
        />
    );
};

export default GraphicDesignCareerOpportunities;
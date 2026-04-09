import React from "react";
import { LuPenTool, LuLayers, LuUsers, LuPalette, LuClipboardList, LuLayoutDashboard } from "react-icons/lu";
import CareerOpportunitiesSection from "../CareerOpportunities/CareerOpportunitiesSection";

const ProductDesignCareerOpportunities: React.FC = () => {
    return (
        <CareerOpportunitiesSection
            title="Product Design Career Opportunities"
            opportunities={[
                { id: 1, title: "Product Designer", icon: <LuLayoutDashboard className="h-5 w-5" /> },
                { id: 2, title: "UI/UX Designer", icon: <LuPenTool className="h-5 w-5" /> },
                { id: 3, title: "UX Researcher", icon: <LuUsers className="h-5 w-5" /> },
                { id: 4, title: "Interaction Designer", icon: <LuLayers className="h-5 w-5" /> },
                { id: 5, title: "Visual Designer", icon: <LuPalette className="h-5 w-5" /> },
                { id: 6, title: "Product Manager", icon: <LuClipboardList className="h-5 w-5" /> },
            ]}
        />
    );
};

export default ProductDesignCareerOpportunities;
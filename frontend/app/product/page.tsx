"use client";

import ProductDesignHero from "@/app/components/Courses/Product/ProductDesignHero";
import ProductDesignOverview from "../components/Courses/Product/ProductDesignOverview";
import ProductDesignCareerOpportunities from "../components/Courses/Product/ProductDesignCareerOpportunities";
import ProductDesignOutline from "../components/Courses/Product/ProductDesignOutline";

const page = () => {
  return (
    <div>
      <ProductDesignHero />
      <ProductDesignOverview />
      <ProductDesignOutline />
      <ProductDesignCareerOpportunities />
    </div>
  );
};

export default page;

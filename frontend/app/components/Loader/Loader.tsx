"use client";
import React from "react";
import dynamic from "next/dynamic";
import animationData from "../../json-data/logo.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white flex items-center justify-center z-50">
      <Lottie
        animationData={animationData}
        loop={true}
        className="w-[30rem] h-[30rem]"
      />
    </div>
  );
};

export default Loader;

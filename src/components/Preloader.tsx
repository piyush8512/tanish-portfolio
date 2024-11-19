
"use client";

import React from "react";


const Portfolio: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-center">
      {/* Container for title and subtitle */}
      <div className="relative">
        {/* Main title */}
        <h1 className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-9xl font-bold uppercase text-transparent">
          PORTFOLIO
        </h1>
        {/* Subtitle */}
        <div className="absolute top-28 left-[6.5rem] text-4xl text-orange-500">
          Video editor
        </div>
        {/* Signature */}
        <p className="absolute top-20 right-[4rem] text-7xl font-[DancingScript] text-white">
          Tanish
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
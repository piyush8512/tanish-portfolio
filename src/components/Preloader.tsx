
// "use client";

// import React from "react";


// const Portfolio: React.FC = () => {
//   return (
//     <div className="flex min-h-screen flex-col items-center justify-center bg-black text-center">
//       {/* Container for title and subtitle */}
//       <div className="relative">
//         {/* Main title */}
//         <h1 className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-9xl font-bold uppercase text-transparent">
//           PORTFOLIO
//         </h1>
//         {/* Subtitle */}
//         <div className="absolute top-28 left-[6.5rem] text-4xl text-orange-500">
//           Video editor
//         </div>
//         {/* Signature */}
//         <p className="absolute top-20 right-[4rem] text-7xl font-[DancingScript] text-white">
//           Tanish
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

"use client";

import React from "react";

const Portfolio: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-center">
      {/* Container for title and subtitle */}
      <div className="relative px-4 md:px-0">
        {/* Main title */}
        <h1 className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold uppercase text-transparent">
          PORTFOLIO
        </h1>
        {/* Subtitle */}
        <div className="absolute top-12 sm:top-16 md:top-20 lg:top-28 left-1/2 transform -translate-x-1/2 sm:left-[6rem] md:left-[6.5rem] text-lg sm:text-2xl md:text-3xl lg:text-4xl text-orange-500">
          Video editor
        </div>
        {/* Signature */}
        <p className="absolute top-8 sm:top-12 md:top-16 lg:top-20 right-2 sm:right-8 md:right-[4rem] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[DancingScript] text-white">
          Tanish
        </p>
      </div>
    </div>
  );
};

export default Portfolio;

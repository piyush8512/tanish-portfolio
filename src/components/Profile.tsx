// "use client";

// import React from "react";

// const Profile: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
//       {/* Header */}
//       <div className="absolute top-8 left-8 text-sm uppercase">
//         <h1 className="font-bold">Tanish</h1>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:w-[80%] lg:gap-12">
//         {/* Text Section */}
//         <div className="mt-8 lg:mt-0 text-center lg:text-right space-y-4">
//           <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Tanish</h1>
//           <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
//             New Delhi, India
//           </p>
//           <p className="text-green-500 text-sm sm:text-base">
//             ● Available for a full-time position
//           </p>
//         </div>

//         {/* Image Section */}
//         <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 animate-pulse"></div>
//           <img
//             src="/profile.png"
//             alt="Profile"
//             className="relative z-10 rounded-full w-full h-full object-cover border-4 border-black"
//           />
//         </div>

//         {/* Role Section */}
//         <div className="mt-8 lg:mt-0 text-center lg:text-left space-y-4">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
//             Video Editor & Thumbnail Designer
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

"use client";

import React from "react";
import Image from "next/image";

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white px-6">
      {/* Header */}
      <div className="absolute top-8 left-8 text-sm uppercase">
        <h1 className="font-bold">Tanish</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center lg:gap-16 w-full">
        {/* Text Section */}
        <div className="mt-8 lg:mt-0 text-center lg:text-right space-y-4 ">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">Tanish</h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">
            New Delhi, India
          </p>
          <p className="text-green-500 text-sm sm:text-base">
            ● Available for a full-time position
          </p>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 animate-pulse"></div>
            <Image
  src="/profile.png"
  alt="Profile"
  width={200} // Replace 200 with the desired width in pixels
  height={200} // Replace 200 with the desired height in pixels
  className="relative z-10 rounded-full w-full h-full object-cover border-4 border-black"
/>

          </div>
        </div>

        {/* Role Section */}
        <div className="mt-8 lg:mt-0 text-center lg:text-left space-y-4 lg:order-3">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Video Editor & Thumbnail Designer
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React from "react";
import Image from "next/image";

const Connect: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 bg-black text-white rounded-lg lg:flex-row lg:justify-between lg:py-16 lg:px-20">
      {/* Image Section */}
      <div className="mb-8 lg:mb-0 lg:w-1/2">
        <Image
          src="/connect.avif"
          alt="Avatar"
          width={256} // Set the desired width
          height={256} // Set the desired height
          className="w-48 h-48 mx-auto lg:w-64 lg:h-64"
        />
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Let&apos;s Create <br /> Magic Together.
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          If you appreciate my work or would like to connect, feel free to
          reach out to me anytime.
        </p>
        <button className="px-6 py-3 mt-6 font-semibold text-black bg-orange-500 rounded-lg shadow-md hover:bg-orange-600">
          Get in touch
        </button>
      </div>
    </section>
  );
};

export default Connect;

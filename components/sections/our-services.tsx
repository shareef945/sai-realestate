import React from "react";
import PropertyCard from "./property-card";

const OurServices: React.FC = () => {
  return (
    <section className="our-services p-4 sm:p-6 md:p-8 min-h-[400px] md:h-[46.625rem] bg-[#151515] flex flex-col justify-center">
      <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
        <p className="text-3xl md:text-4xl lg:text-[60px] font-semibold text-center">
          Our Services
        </p>
        <p className="text-secondary text-center text-sm md:text-base mt-2 md:mt-4 max-w-2xl">
          At SAI Real Estate, we offer a full range of real estate services
          tailored to your needs.
        </p>
      </div>
      <div className="mt-8 md:mt-12">
        <PropertyCard />
      </div>
    </section>
  );
};

export default OurServices;

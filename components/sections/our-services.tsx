import React from "react";
import PropertyCard from "./property-card";

const OurServices: React.FC = () => {
  return (
    <section className="our-services p-8 h-[46.625rem] bg-[#151515]">
      <div className="flex flex-col items-center">
        <p className="text-[60px] font-semibold">Our Services</p>
        <p className="text-secondary">
          At SAI Real Estate, we offer a full range of real estate services
          tailored to your needs.
        </p>
      </div>
      <div>
        <PropertyCard />
      </div>
    </section>
  );
};

export default OurServices;

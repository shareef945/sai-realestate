import React from "react";
import Image from "next/image";

const WhatWeOffer = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-20 py-12 px-4">
      <div className="flex flex-col items-center text-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          What We Offer
        </p>
        <p className="text-lg text-secondary w-full md:w-2/3 lg:w-1/3">
          Explore our exclusive listings and discover the perfect place to call
          home.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[566px]">
          <Image
            src="/vista-grande/12.JPG"
            alt="Property features"
            fill
            className="object-cover rounded-md"
            priority={true}
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-bold">Property Sales</p>
            <p className="text-secondary">
            Expert guidance through every step of your property purchase journey, from market analysis to closing. We help you find the perfect property that matches your requirements and budget.

            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-bold">Rentals & Leasing</p>
            <p className="text-secondary">
            Comprehensive rental and leasing services for both landlords and tenants. We handle property listings, tenant screening, lease agreements, and ensure smooth transitions throughout the rental process.

            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-bold">
              Digital Tools for Property Management
            </p>
            <p className="text-secondary">
            Modern property management solutions including online rent collection, maintenance request tracking, and digital documentation to streamline your property management experience.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeOffer;

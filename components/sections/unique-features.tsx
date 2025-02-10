import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const UniqueFeatures = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-20 py-12">
      <div className="flex flex-col items-center text-center px-4">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Unique Features
        </p>
        <p className="text-lg text-secondary w-full md:w-2/3 lg:w-1/3">
          Explore our exclusive listings and discover the perfect place to call
          home.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-bold">Spacious Homes</p>
            <p className="text-secondary">
              3-4 bedroom layouts with open-concept designs and premium
              finishes.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-bold">Breathtaking Views</p>
            <p className="text-secondary">
              3-4 bedroom layouts with open-concept designs and premium
              finishes.
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-bold">Modern Amenities</p>
            <p className="text-secondary">
              3-4 bedroom layouts with open-concept designs and premium
              finishes.
            </p>
          </div>
          <Button className="w-full md:w-auto">Contact</Button>
        </div>

        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[566px]">
          <Image
            src="/aubens-place/IMG_6532.JPG"
            alt="Property features"
            fill
            className="object-cover rounded-md"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const UniqueFeatures = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col items-center">
        <p className="text-6xl font-bold">Unique Features</p>
        <p className="text-lg text-secondary w-1/3 text-center">
          Explore our exclusive listings and discover the perfect place to call
          home.
        </p>
      </div>
      <div className="grid grid-cols-4 items-center">
        <div className="col-span-2 space-y-6">
          <p className="text-2xl font-bold">Spacious Homes</p>
          <p className="text-secondary">
            3-4 bedroom layouts with open-concept designs and premium finishes.
          </p>
          <p className="text-2xl font-bold">Breathtaking Views</p>
          <p className="text-secondary">
            3-4 bedroom layouts with open-concept designs and premium finishes.
          </p>
          <p className="text-2xl font-bold">Modern Amenities</p>
          <p className="text-secondary">
            3-4 bedroom layouts with open-concept designs and premium finishes.
          </p>
          <Button>Contact</Button>
        </div>

        <div className="col-span-2">
          <Image
            src={"/aubens-place/IMG_6532.JPG"}
            alt={"alt"}
            className="w-full h-[20rem] sm:h-[26rem] md:h-[30rem] lg:h-[35.4375rem] object-cover rounded-md mb-2 sm:mb-3 md:mb-4"
            width={100}
            height={400}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;

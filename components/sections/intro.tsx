import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-8">
      <div className="">
        <div className="py-8 sm:py-12 lg:py-16 flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[70px] text-white font-light leading-tight w-full lg:w-[80%]">
            At SAI Real Estate, we specialize in helping you buy, sell, or rent
            properties that match your lifestyle and aspirations.
          </p>
          <Button className="w-full sm:w-auto sm:max-w-[12.5rem]">
            Read More
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-8">
          <div className="w-full sm:w-1/2 aspect-square relative">
            <Image
              src="/general-media/interior.JPG"
              alt="First property"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="w-full sm:w-1/2 aspect-square relative">
            <Image
              src="/general-media/exterior.JPG"
              alt="Second property"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

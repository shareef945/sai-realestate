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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-8">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/vista-grande/3.JPG"
              alt="First property"
              fill
              className="object-contain rounded-lg"
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
          <div className="relative w-full aspect-[4/3]">
            <Image
              src="/general-media/exterior.JPG"
              alt="Second property"
              fill
              className="object-contain rounded-lg"
              priority
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

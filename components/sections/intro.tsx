import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="h-[88.125rem] px-8 ">
      <div className="">
        <div className="py-16 flex flex-col gap-8">
          <p className="text-[70px] text-white  font-light leading-tight  w-[80%]">
            At SAI Real Estate, we specialize in helping you buy, sell, or rent
            properties that match your lifestyle and aspirations.
          </p>
          <Button className="max-w-[12.5rem]">Read More</Button>
        </div>
        <div className="flex gap-4 mt-8">
          {/* <div className="p-6"> */}
          <div className="w-1/2 aspect-square relative">
            <Image
              src="/general-media/interior.JPG"
              alt="First property"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="w-1/2 aspect-square relative">
            <Image
              src="/general-media/exterior.JPG"
              alt="Second property"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;

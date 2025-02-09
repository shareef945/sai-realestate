import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="h-[88.125rem] p-8">
      <div className="">
        <p className="text-[70px] text-white  font-light leading-tight pb-8 pt-8 w-[80%]">
          At SAI Real Estate, we specialize in helping you buy, sell, or rent
          properties that match your lifestyle and aspirations.
        </p>
        <Button>Read More</Button>
        <div className="flex gap-4 mt-8">
          {/* <div className="p-6"> */}
            <div className="w-1/2 aspect-square relative">
              <Image
                src="/general-media/interior.JPG"
                alt="First property"
                fill
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/2 aspect-square relative">
              <Image
                src="/general-media/exterior.JPG"
                alt="Second property"
                fill
                className="object-cover w-full h-full"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;

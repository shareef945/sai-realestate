import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Landing = () => {
  return (
    <section className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/general-media/landing.JPG')" }}
      />
      <div className="absolute inset-0 bg-black/50" />{" "}
      <div className="relative p-4 sm:p-6 md:p-8 flex flex-col md:flex-row min-h-screen text-white">
        <div className="flex-1 text-3xl sm:text-5xl md:text-6xl lg:text-[68px] flex flex-col font-white font-extrabold justify-center">
          <div className="w-full md:w-4/5 leading-tight">Welcome to </div>
          <div className="w-full md:w-4/5 leading-tight">SAI Real Estate</div>
        </div>
        <div className="flex-1 flex flex-col font-white font-bold items-start justify-center md:justify-end py-10 md:py-40">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-[23px] w-full md:w-3/4 py-4 md:py-8">
            Your Trusted Partner in Finding Your Dream Property
          </p>
          <Link href={"/contact"}>
            <Button className="text-sm sm:text-base">Contact</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;

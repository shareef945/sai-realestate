import React from 'react'
import { Button } from '../ui/button';

const Landing = () => {
  return (
    <section className="relative min-h-screen w-full">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/general-media/landing.JPG')" }}
      />
      <div className="absolute inset-0 bg-black/50" />{" "}
      <div className="relative p-8 flex min-h-screen text-white">
        <div className="flex-1 text-[68px] flex flex-col font-white font-extrabold justify-center">
          <div className="w-4/5 leading-tight">Welcome to</div>
          <div className="w-4/5 leading-tight">SAI Real Estate</div>
        </div>
        <div className="flex-1 flex flex-col font-white font-bold items-start justify-end py-40">
          <p className="text-[23px] w-3/4 py-8">
            Your Trusted Partner in Finding Your Dream Property
          </p>
          <Button>
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Landing
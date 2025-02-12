import TheTeam from "@/components/sections/the-team";
import WhatWeOffer from "@/components/sections/what-we-offer";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <section className="relative h-[50vh] md:min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/vista-grande/IMG_5676.JPG)" }}
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Text container */}
        <div className="absolute inset-0 flex items-center md:items-end">
          <div className="text-white p-6 md:p-12 lg:p-24 lg:pb-40">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold ">
              About us
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full px-4 md:px-8 py-12">
        <div className="w-full">
          <div className="mb-12 ">
            <p className="font-bold text-2xl pb-6">
              Your Trusted Partner in Real Estate
            </p>
            <p className="text-2xl leading-relaxed">
              At SAI Real Estate, we believe that finding the perfect home or
              investment property should be a seamless and rewarding experience.
              Whether you’re buying, selling, or renting, our mission is to
              connect you with the best properties that match your needs and
              aspirations.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mb-12 pt-20">
              <div className="w-full md:w-1/3 relative aspect-[3/4] md:h-[647px]">
                <Image
                  src="/vista-grande/4.JPG"
                  alt="Real Estate Image 1"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="w-full md:w-2/3 relative aspect-[3/4] md:h-[647px]">
                <Image
                  src="/vista-grande/IMG_5680.JPG"
                  alt="Real Estate Image 2"
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <ContactForm /> */}
      </section>
      <div className="p-8">
        <p className="text-[60px] font-bold">Who We Are</p>
        <p className="w-full md:w-1/2 font-light">
          SAI Real Estate is a leading real estate agency specializing in
          property sales and rentals. With a commitment to excellence, we offer
          a diverse portfolio of premium homes, modern apartments, and
          investment properties designed to suit every lifestyle. With years of
          industry expertise, our team ensures that every client receives
          personalized service, market insights, and professional guidance at
          every step of their real estate journey.
        </p>
      </div>
      <WhatWeOffer />
      <WhyChooseUs />
      <TheTeam />
    </>
  );
};

export default About;

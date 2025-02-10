import React from "react";

const About = () => {
  return (
    <>
      <section className="relative h-[50vh] md:min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/vista-grande/10.JPG)" }}
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
      <section className="w-full px-4 md:px-8 py-12 bg-[#151515]">
        <div className="">
          <div className="mb-12 max-w-3xl">
            <p className="text-2xl leading-relaxed">
              At SAI Real Estates, we&apos;re here to help you find the perfect
              property, whether you&apos;re buying, selling, or renting. Reach
              out to us today, and let&apos;s make your real estate dreams a
              reality.
            </p>
          </div>
        </div>
        {/* <ContactForm /> */}
      </section>
    </>
  );
};

export default About;

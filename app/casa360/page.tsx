import PricingPlans from "@/components/sections/pricing-plans";
import WhoIsCasaFor from "@/components/sections/who-is-casa-for";
import WhyChooseCasa360 from "@/components/sections/why-choose-casa360";
import Image from "next/image";
import React from "react";

const Casa360 = () => {
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
              Casa360 – Smarter Property Management, Simplified
            </h1>
          </div>
        </div>
      </section>
      <section className="w-full px-4 md:px-8 py-12">
        <div className="w-full">
          <div className="mb-12 ">
            <p className="font-bold text-2xl pb-6">
              Effortless Property Management for Landlords, Tenants & Vendors
            </p>
            <p className="text-2xl leading-relaxed">
              Streamline your property operations with an all-in-one platform
              for managing properties, leases, tenants, maintenance, and rent
              collection.
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
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <ContactForm /> */}
      </section>
      <WhyChooseCasa360 />
      <PricingPlans />
      <WhoIsCasaFor />
    </>
  );
};

export default Casa360;

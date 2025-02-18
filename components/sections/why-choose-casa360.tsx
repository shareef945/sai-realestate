import React from "react";
import WhyChooseUsCard from "./why-choose-us-card";

const WhyChooseCasa360: React.FC = () => {
  return (
    <section className="our-services p-4 sm:p-6 md:p-8 min-h-[400px] md:h-[46.625rem] flex flex-col justify-center">
      <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
        <p className="text-3xl md:text-4xl lg:text-[60px] font-semibold text-center">
          Why Choose Casa360?
        </p>
      </div>
      <div className="mt-8 md:mt-12">
        <WhyChooseUsCard />
      </div>
    </section>
  );
};

export default WhyChooseCasa360;

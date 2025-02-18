import React from "react";
import PricingPlansCard from "./pricing-plans-card";

const PricingPlans: React.FC = () => {
  return (
    <section className="our-services p-4 sm:p-6 md:p-8 min-h-[400px] md:h-[46.625rem] flex flex-col justify-center">
      <div className="flex flex-col items-center max-w-6xl mx-auto w-full text-center gap-6">
        <p className="text-3xl md:text-4xl lg:text-[60px] font-semibold text-center">
          Pricing Plans
        </p>
        <p className="text-secondary w-1/2">
           Flexible pricing to fit your needs. No hidden fees—just transparent,
          scalable plans.
        </p>
      </div>
      <div className="mt-8 md:mt-12">
        <PricingPlansCard />
      </div>
    </section>
  );
};

export default PricingPlans;

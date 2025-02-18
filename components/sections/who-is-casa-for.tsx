import React from "react";
import WhoIsCasaForCard from "./who-is-casa-for-card";

const WhoIsCasaFor: React.FC = () => {
  return (
    <section className="our-services p-4 sm:p-6 md:p-8 min-h-[400px] md:h-[46.625rem] flex flex-col justify-center">
      <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
        <p className="text-3xl md:text-4xl lg:text-[60px] font-semibold text-center">
         Who is Casa360 for?
        </p>
      </div>
      <div className="mt-8 md:mt-12">
        <WhoIsCasaForCard />
      </div>
    </section>
  );
};

export default WhoIsCasaFor;

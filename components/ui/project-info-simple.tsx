import Image from "next/image";
import React from "react";

const ProjectInfoSimple = () => {
  return (
    <div className="bg-[#191919] border border-[#ffffff0a] rounded-lg">
      <div className="flex flex-col md:flex-row justify-between gap-6 p-4 md:p-6">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-secondary text-sm md:text-base">2 Bedroom</p>
            <p className="text-2xl md:text-3xl">$150,000</p>
          </div>
          {/* <div>
            <p className="text-secondary text-sm md:text-base">5 Bedroom</p>
            <p className="text-2xl md:text-3xl">$799,000</p>
          </div> */}
        </div>
        <div className="flex flex-wrap gap-8 justify-start md:justify-end">
          <div className="flex flex-col items-center">
            <Image
              src="/logos/rooms.png"
              alt="bedrooms"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-secondary text-sm md:text-base">2 Bedroom</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/logos/baths.png"
              alt="bathrooms"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-secondary text-sm md:text-base">2.5 Bathroom</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/logos/garage.png"
              alt="parking"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-secondary text-sm md:text-base">Parks 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoSimple;

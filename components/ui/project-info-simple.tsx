import Image from "next/image";
import React from "react";

const ProjectInfoSimple = () => {
  return (
    <div className="bg-[#191919] h-[8.25rem] border border-[#ffffff0a] flex justify-between items-center p-4">
      <div className="flex gap-8">
        <div>
          <p className="text-secondary">3 Bedroom</p>
          <p className="text-3xl">$699,000</p>
        </div>
        <div>
          <p className="text-secondary">5 Bedroom</p>
          <p className="text-3xl">$799,000</p>
        </div>
      </div>
      <div className="flex gap-8 items-end ">
        <div className="flex flex-col items-center">
          <Image src="/logos/rooms.png" alt="bedrooms" width={40} height={40} />
          <p className="text-secondary">3 Bedroom</p>
        </div>
        <div className="flex flex-col items-center">
          <Image src="/logos/baths.png" alt="bedrooms" width={40} height={40} />
          <p className="text-secondary">2 Bathroom</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/logos/garage.png"
            alt="bedrooms"
            width={40}
            height={40}
          />
          <p className="text-secondary">Parks 2</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoSimple;

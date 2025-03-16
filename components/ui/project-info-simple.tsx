import Image from "next/image";
import React from "react";
// import { HugeiconsIcon } from '@hugeicons/react';
// import { Home01Icon } from '@hugeicons-pro/core-stroke-standard';

interface ProjectInfoProps {
  info: {
    price: string;
    bedrooms: string;
    bathrooms: string;
    parking: string;
    units?: string; // Add this new field
  };
}

const ProjectInfoSimple = ({ info }: ProjectInfoProps) => {
  return (
    <div className="bg-[#191919] border border-[#ffffff0a] rounded-lg">
      <div className="flex flex-col md:flex-row justify-between gap-6 p-4 md:p-6">
        <div className="flex flex-wrap gap-8">
          <div>
            <p className="text-secondary text-sm md:text-base">{info.bedrooms} Bedroom</p>
            <p className="text-2xl md:text-3xl">{info.price}</p>
          </div>
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
            <p className="text-secondary text-sm md:text-base">{info.bedrooms} Bedroom</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/logos/baths.png"
              alt="bathrooms"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-secondary text-sm md:text-base">{info.bathrooms} Bathroom</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/logos/garage.png"
              alt="parking"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-secondary text-sm md:text-base">Parks {info.parking}</p>
          </div>
          {/* <div className="flex flex-col items-center">
          <HugeiconsIcon icon={Home01Icon} />
            <Image
              src="/logos/units.png"
              alt="available units"
              width={32}
              height={32}
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <p className="text-secondary text-sm md:text-base">{info.units} Units</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoSimple;

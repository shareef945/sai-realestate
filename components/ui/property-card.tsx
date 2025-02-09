import React from "react";
import { Button } from "./button";
import Image from "next/image";
interface PropertyCardProps {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
}

const PropertyCard = ({
  id,
  title,
  description,
  location,
  image,
}: PropertyCardProps) => {
  return (
    <div className="h-[47rem]">
      <div className="flex h-full">
        <div className="w-3/4 border-[#ffffff0a] h-full bg-[#191919] mr-6 border flex flex-col justify-between">
          <div className="flex-1 bg-[#191919] p-4 text-[40px] text-secondary">
            {String(id).padStart(2, "0")}.
          </div>
          <div className="h-[38.125rem] relative">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        </div>
        <div className="w-1/4 border-[#ffffff0a] h-full bg-[#191919] border">
          <div className="h-full flex flex-col justify-between p-6">
            <p className="text-[54px] font-semibold">{title}</p>
            <div className="space-y-4">
              <p>{location}</p>
              <p className="text-secondary">{description}</p>
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard
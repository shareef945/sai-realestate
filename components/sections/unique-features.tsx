import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface FeaturesProps {
  features: {
    title: string;
    description: string;
    items: Array<{ title: string; description: string }>;
    featureImage: string;
  };
}

const UniqueFeatures = ({ features }: FeaturesProps) => {
  return (
    <div className="flex flex-col gap-8 md:gap-20 py-12">
      <div className="flex flex-col items-center text-center px-4">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {features.title}
        </p>
        <p className="text-lg text-secondary w-full md:w-2/3 lg:w-1/3">
          {features.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="space-y-6">
          {features.items.map((item, index) => (
            <div key={index} className="space-y-2">
              <p className="text-xl md:text-2xl font-bold">{item.title}</p>
              <p className="text-secondary">{item.description}</p>
            </div>
          ))}
          <Link href="/contact">
            <Button className="w-full md:w-auto mt-8">Contact</Button>
          </Link>
        </div>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[566px]">
          <Image
            src={features.featureImage}
            alt="Property features"
            fill
            className="object-cover rounded-md"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueFeatures;

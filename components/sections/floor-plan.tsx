import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const FloorPlan = () => {
  return (
    <div className="flex flex-col py-12 space-y-8 md:space-y-12">
      <div className="flex flex-col items-center text-center px-4">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Floor Plans
        </p>
        <p className="text-lg text-secondary w-full md:w-2/3 lg:w-1/3">
          Explore our exclusive listings and discover the perfect place to call
          home.
        </p>
      </div>
      <div className="w-full px-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="w-full flex justify-center mb-6">
            <TabsList>
              <TabsTrigger value="all">3 bedroom</TabsTrigger>
              <TabsTrigger value="rental">2 bedroom</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="all">
            <div className="relative w-full aspect-[1.54/1]">
              <Image
                src="/vista-grande/floor-plan.png"
                alt="3 bedroom floor plan"
                fill
                className="object-contain"
              />
            </div>
          </TabsContent>
          <TabsContent value="rental">
            <div className="relative w-full aspect-[1.54/1]">
              <Image
                src="/vista-grande/floor-plan.png"
                alt="2 bedroom floor plan"
                fill
                className="object-contain"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FloorPlan;

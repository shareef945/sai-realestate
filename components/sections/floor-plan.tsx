import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface FloorPlanProps {
  floorPlans: {
    title: string;
    description: string;
    plans: Array<{ type: string; image: string }>;
  };
}

const FloorPlan = ({ floorPlans }: FloorPlanProps) => {
  return (
    <div className="flex flex-col py-12 space-y-8 md:space-y-12">
      <div className="flex flex-col items-center text-center px-4">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          {floorPlans.title}
        </p>
        <p className="text-lg text-secondary w-full md:w-2/3 lg:w-1/3">
          {floorPlans.description}
        </p>
      </div>
      <div className="w-full px-4">
        <Tabs defaultValue={floorPlans.plans[0].type} className="w-full">
          <div className="w-full flex justify-center mb-6">
            <TabsList>
              {floorPlans.plans.map((plan, index) => (
                <TabsTrigger key={index} value={plan.type}>
                  {plan.type}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          {floorPlans.plans.map((plan, index) => (
            <TabsContent key={index} value={plan.type}>
              <div className="relative w-full aspect-[1.54/1]">
                <Image
                  src={plan.image}
                  alt={`${plan.type} floor plan`}
                  fill
                  className="object-contain"
                  priority={index === 0}
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default FloorPlan;

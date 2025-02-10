import React from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const FloorPlan = () => {
  return (
    <div className="flex flex-col h-[94.5625rem]">
      <div className="flex flex-col items-center">
        <p className="text-6xl font-bold">Floor Plans</p>
        <p className="text-lg text-secondary w-1/3 text-center">
          Explore our exclusive listings and discover the perfect place to call
          home.
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        <Tabs defaultValue="all" className="w-full">
          <div className="w-full sm:max-w-2xl mx-auto flex justify-center">
            <TabsList className="">
              <TabsTrigger className="px-2 py-1.5 sm:px-4 sm:py-2" value="all">
                3 bedroom
              </TabsTrigger>
              <TabsTrigger
                className="px-2 py-1.5 sm:px-4 sm:py-2"
                value="rental"
              >
                2 bedroom
              </TabsTrigger>
            </TabsList>
          </div>
          <div className="mt-6 sm:mt-8">
            <TabsContent value="all">
              <Image
                src={"/vista-grande/floor-plan.png"}
                alt="ecre"
                width={1000}
                height={10000}
                className="max-h-[62.875rem] max-w-[96.75rem]"
              />
            </TabsContent>
            <TabsContent value="rental" className="justify-center">
              <Image
                src={"/vista-grande/floor-plan.png"}
                alt="ecre"
                width={1000}
                height={10000}
                className="max-h-[62.875rem] max-w-[96.75rem]"
              />{" "}
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default FloorPlan;

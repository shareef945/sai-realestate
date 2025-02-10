import React from "react";
import ProjectsGrid from "@/components/sections/projects-grid";

const Projects = () => {
  return (
    <main className="min-h-screen pt-16 md:pt-24 pb-8 md:pb-16 px-4 md:px-8">
      <div className="py-8 md:py-16">
        <p className="text-3xl md:text-5xl lg:text-[68px] font-semibold w-full md:w-4/5 lg:w-3/4">
          Discover Exclusive Homes & Investment Opportunities
        </p>
        <p className="text-lg md:text-xl lg:text-[23px] w-full md:w-2/3 lg:w-1/2 font-extralight mt-4">
          We offer a diverse selection of premium properties, from modern
          apartments to luxurious estates.
        </p>
      </div>
      <ProjectsGrid />
    </main>
  );
};

export default Projects;

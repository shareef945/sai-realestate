"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import ProjectsList from "../ui/projects-list";

export interface Project {
  id: string;
  title: string;
  description: string;
  type: "rental" | "sale";
  price: number;
  location: string;
  imageUrl: string;
  imageAspectRatio?: "square" | "portrait" | "landscape";
  imageBlur?: string; // For blur placeholder
}

const mockProjects: Project[] = [
  {
    id: "project-1",
    title: "Vista Grande",
    description: "Modern 3-bedroom apartment in an upcoming neighbourhood",
    type: "sale" as const,
    price: 150000,
    location: "Teshie Nungua Estates",
    imageUrl: "/vista-grande/IMG_5678.JPG",
    imageAspectRatio: "square",
  },
  {
    id: "project-2",
    title: "Auben's Place",
    description: "Elegant Living Spaces",
    type: "rental" as const,
    price: 1500,
    location: "Tse Addo",
    imageUrl: "/aubens-place/IMG_6534.jpg",
    // imageAspectRatio: "landscape",
  },
];

const ProjectsGrid = () => {
  const [projects /*setProjects*/] = useState<Project[]>(mockProjects);
  const allProjects = projects;
  const rentalProjects = projects.filter(
    (project) => project.type === "rental"
  );


  const saleProjects = projects.filter((project) => project.type === "sale");

  return (
    <div className="w-full mx-auto">
      <Tabs defaultValue="all" className="w-full">
        <div className="w-full sm:max-w-2xl mr-auto">
          <TabsList className="grid w-full grid-cols-3 gap-2">
            <TabsTrigger className="px-2 py-1.5 sm:px-4 sm:py-2" value="all">
              All
            </TabsTrigger>
            <TabsTrigger className="px-2 py-1.5 sm:px-4 sm:py-2" value="rental">
              Rental
            </TabsTrigger>
            <TabsTrigger className="px-2 py-1.5 sm:px-4 sm:py-2" value="sale">
              Sale
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="mt-6 sm:mt-8">
          <TabsContent value="all">
            <ProjectsList projects={allProjects} />
          </TabsContent>
          <TabsContent value="rental">
            <ProjectsList projects={rentalProjects} />
          </TabsContent>
          <TabsContent value="sale">
            <ProjectsList projects={saleProjects} />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default ProjectsGrid;

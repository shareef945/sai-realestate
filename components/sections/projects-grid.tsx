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
}

const mockProjects: Project[] = [
  {
    id: "project-1",
    title: "Luxury Apartment",
    description: "Modern 3-bedroom apartment with stunning city views",
    type: "rental" as const,
    price: 2500,
    location: "Downtown Manhattan",
    imageUrl: "https://picsum.photos/seed/1/400/300",
  },
  {
    id: "project-2",
    title: "Beach House",
    description: "Spacious beachfront property with private access",
    type: "sale" as const,
    price: 750000,
    location: "Miami Beach",
    imageUrl: "https://picsum.photos/seed/2/400/300",
  },
  {
    id: "project-3",
    title: "Studio Loft",
    description: "Contemporary studio in artistic district",
    type: "rental" as const,
    price: 1800,
    location: "Brooklyn",
    imageUrl: "https://picsum.photos/seed/3/400/300",
  },
  {
    id: "project-4",
    title: "Mountain Cabin",
    description: "Cozy 2-bedroom cabin with mountain views",
    type: "sale" as const,
    price: 450000,
    location: "Aspen",
    imageUrl: "https://picsum.photos/seed/4/400/300",
  },
  {
    id: "project-5",
    title: "City Penthouse",
    description: "Luxurious penthouse with rooftop terrace",
    type: "sale" as const,
    price: 1200000,
    location: "Los Angeles",
    imageUrl: "https://picsum.photos/seed/5/400/300",
  },
  {
    id: "project-6",
    title: "Garden Apartment",
    description: "Ground floor apartment with private garden",
    type: "rental" as const,
    price: 3200,
    location: "San Francisco",
    imageUrl: "https://picsum.photos/seed/6/400/300",
  },
];

const ProjectsGrid = () => {
  const [projects, setProjects] = useState<Project[]>(mockProjects);
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

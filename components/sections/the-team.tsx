import React from "react";
import ProjectImage from "@/components/ui/project-image";

const teamMembers = [
  {
    id: 1,
    image: "/people/shareef.JPG",
    name: "Shareef Ali",
    description: "CEO",
  },
  {
    id: 2,
    image: "/people/nilla.JPG",
    name: "Nilla Selormey",
    description: "COO",
  },
  {
    id: 3,
    image: "/people/hamza.JPG",
    name: "Hamza Kamara",
    description: "Head of Property Management",
  },
  // Add more team members as needed
];

const TheTeam = () => {
  return (
    <div className="p-8 flex flex-col items-center w-full">
      <p className="text-[60px] font-bold mb-12">The Team</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {teamMembers.map((member) => (
          <div key={member.id} className="flex flex-col items-start">
            <ProjectImage
              src={member.image}
              alt={member.name}
              aspectRatio="portrait"
              className="w-full"
            />
            <p className="mt-2 text-xl font-medium">{member.name}</p>
            <p className="text-xl font-medium text-secondary">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;

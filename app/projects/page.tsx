import React from "react";
import Link from "next/link";

const projects = [
  {
    id: "1",
    name: "Auben's Place",
    location: "Tse Addo",
    address: "123 Tse Addo Road, Greater Accra"
  },
  {
    id: "2",
    name: "Vista Grande",
    location: "Teshie Nungua Estates",
    address: "45 Nungua Estate Road, Teshie"
  },
];
const Projects = () => {
  return (
    <div className="p-8">
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            <Link href={`/projects/${project.name}`}>
              <p className="text-white hover:underline">{project.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;

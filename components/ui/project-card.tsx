import Image from "next/image";
import { Project } from "../sections/projects-grid";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="h-[42.625rem] my-6">
      <Image
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-[35.4375rem] object-cover rounded-md mb-4"
        width={100}
        height={400}
      />
      <div className="h-[7.1875rem]">
        <h3 className="font-bold text-[30px]">{project.title}</h3>
        <p className="text-secondary">{project.description}</p>
        <div className="mt-2">
          <span className="font-semibold">
            {project.type === "rental"
              ? `$${project.price}/month`
              : `$${project.price.toLocaleString()}`}
          </span>
          <span className="ml-2 text-gray-500">{project.location}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

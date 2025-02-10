// import Image from "next/image";
import { Project } from "../sections/projects-grid";
import Link from "next/link";
import ProjectImage from "./project-image";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="block h-auto sm:h-[32rem] md:h-[38rem] lg:h-[42.625rem] my-3 sm:my-4 md:my-6"
    >
      <ProjectImage
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-[20rem] sm:h-[26rem] md:h-[30rem] lg:h-[35.4375rem] object-cover rounded-md mb-2 sm:mb-3 md:mb-4"
        // width={100}
        // height={400}
        // priority
      />
      <div className="h-auto sm:h-[6rem] md:h-[6.5rem] lg:h-[7.1875rem]">
        <h3 className="font-bold text-xl sm:text-2xl md:text-[26px] lg:text-[30px]">
          {project.title}
        </h3>
        <p className="text-secondary text-sm sm:text-base">
          {project.description}
        </p>
        <div className="mt-1 sm:mt-2">
          <span className="font-semibold">
            {project.type === "rental"
              ? `$${project.price}/month`
              : `$${project.price.toLocaleString()}`}
          </span>
          <span className="ml-2 text-gray-500">{project.location}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;

"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";


const ProjectDetail = () => {
  const pathname = usePathname();
  const id = decodeURIComponent(pathname.split("/").pop() || "");

const projectDetailsMap = {
  "Auben's Place": {
    address: "123 Tse Addo Road, Greater Accra",
    location: "Tse Addo",
    images: [
      { src: "/aubens-place/IMG_6530.jpg", alt: "Auben's Place Image 1" },
      { src: "/aubens-place/IMG_6532.jpg", alt: "Auben's Place Image 2" },
      { src: "/aubens-place/IMG_6534.jpg", alt: "Auben's Place Image 2" },
    ],
  },
  "Vista Grande": {
    address: "45 Nungua Estate Road, Teshie",
    location: "Teshie Nungua Estates",
    images: [
      { src: "/vista-grande/IMG_5675.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5676.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5677.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5678.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5679.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5680.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5681.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5692.JPG", alt: "Project 1 Image" },
      { src: "/vista-grande/IMG_5693.JPG", alt: "Project 1 Image" },
    ],
  },
};

  const projectDetails =
    projectDetailsMap[id as keyof typeof projectDetailsMap];

  if (!projectDetails) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4 text-white">{id}</h1>
      <p className="text-gray-400 mb-6">{projectDetails.location}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectDetails.images.map((image, index) => (
          <div
            key={index}
            className="flex justify-center items-center overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;

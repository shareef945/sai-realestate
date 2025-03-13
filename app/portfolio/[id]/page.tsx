"use client";
import FloorPlan from "@/components/sections/floor-plan";
import Gallery from "@/components/sections/gallery";
import UniqueFeatures from "@/components/sections/unique-features";
import { Button } from "@/components/ui/button";
import ProjectInfoSimple from "@/components/ui/project-info-simple";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const projectDetailsMap = {
  "aubens-place": {
    title: "Auben's Place",
    address: "123 Tse Addo Road, Greater Accra",
    location: "Tse Addo",
    images: [
      { src: "/aubens-place/IMG_6530.jpg", alt: "Auben's Place Image 1" },
      { src: "/aubens-place/IMG_6532.jpg", alt: "Auben's Place Image 2" },
      { src: "/aubens-place/IMG_6534.jpg", alt: "Auben's Place Image 3" },
    ],
  },
  "vista-grande": {
    title: "Vista Grande",
    address: "45 Nungua Estate Road, Teshie",
    location: "Teshie Nungua Estates",
    images: [
      { src: "/vista-grande/IMG_5675.JPG", alt: "Vista Grande Image 1" },
      // ... rest of the images ...
    ],
  },
};

const ProjectDetail = () => {
  const pathname = usePathname();
  const id = decodeURIComponent(pathname.split("/").pop() || "");

  const projectDetails =
    projectDetailsMap[id as keyof typeof projectDetailsMap];

  if (!projectDetails) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <section className="relative min-h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${projectDetails.images[0].src}` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        {/* Add overlay text */}
        <div className="absolute bottom-8 left-8 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            {projectDetails.title}
          </h1>
          <p className="text-lg md:text-xl">{projectDetails.address}</p>
        </div>
      </section>
      <section className="w-full px-4 md:px-8 py-12 space-y-16">
        <ProjectInfoSimple />
        <div className="flex flex-col gap-10 py-8">
          <p className="font-bold text-3xl">Where Luxury Meets Serenity</p>
          <p className="text-xl font-light">
            Welcome to Vista Grande, a premier residential community designed
            for those who seek elegance, comfort, and a connection to nature.
            Nestled in a prime location, Vista Grande offers a perfect blend of
            modern living and tranquil surroundings. Whether you&apos;re looking
            to buy or rent, this is the place to call home.
          </p>
          <Link href="/contact">
            <Button className="w-fit">Contact</Button>
          </Link>
        </div>
        <div className="relative w-full aspect-[1.85/1] max-h-[761px]">
          <Image
            src={projectDetails.images[0].src}
            alt="property details"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <UniqueFeatures />
        <FloorPlan />
        <Gallery />
      </section>
    </>
  );
};

export default ProjectDetail;

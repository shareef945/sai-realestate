"use client";
import { Button } from "@/components/ui/button";
import ProjectInfoSimple from "@/components/ui/project-info-simple";
// import Image from "next/image";
import { usePathname } from "next/navigation";

const projectDetailsMap = {
  "project-1": {
    title: "Auben's Place",
    address: "123 Tse Addo Road, Greater Accra",
    location: "Tse Addo",
    images: [
      { src: "/aubens-place/IMG_6530.jpg", alt: "Auben's Place Image 1" },
      { src: "/aubens-place/IMG_6532.jpg", alt: "Auben's Place Image 2" },
      { src: "/aubens-place/IMG_6534.jpg", alt: "Auben's Place Image 3" },
    ],
  },
  "project-2": {
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
      </section>
      <section className="h-[93.6875rem] p-8 w-full">
        <ProjectInfoSimple />
        <div className="flex flex-col gap-10 py-8">
          <p className="font-bold text-3xl">Where Luxury Meets Serenity</p>
          <p className="text-xl font-light">
            Welcome to Vista Grande, a premier residential community designed
            for those who seek elegance, comfort, and a connection to nature.
            Nestled in a prime location, Vista Grande offers a perfect blend of
            modern living and tranquil surroundings. Whether you’re looking to
            buy or rent, this is the place to call home.
          </p>
          <Button className="w-fit">Contact</Button>
        </div>
        {/* <div className="h-[95.125rem]">
          <Image
            src={projectDetails.images[0].src}
            alt="property details"
            width={1412}
            height={761}
            priority
          />
        </div> */}
        {/* <UniqueFeatures /> */}
        {/* <FloorPlan /> */}
      </section>
    </>
  );
};

export default ProjectDetail;

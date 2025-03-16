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
    address: "Flat 3 Cotton Loop Road, Tse Addo, Accra",
    location: "Tse Addo",
    description: "Welcome to Auben's Place, where modern comfort meets elegant design. Nestled in the heart of Tse Addo, this exclusive development offers a perfect blend of luxury and functionality. Each residence is thoughtfully designed to provide an unparalleled living experience with premium finishes and contemporary amenities.",
    images: [
      { src: "/aubens-place/IMG_6530.jpg", alt: "Auben's Place Image 1" },
      { src: "/aubens-place/IMG_6532.jpg", alt: "Auben's Place Image 2" },
      { src: "/aubens-place/IMG_6534.jpg", alt: "Auben's Place Image 3" },
    ],
    features: {
      title: "Unique Features",
      description: "Explore our exclusive listings and discover the perfect place to call home.",
      items: [
        {
          title: "Spacious Homes",
          description: "Experience luxurious living with generously sized rooms, high ceilings, and thoughtfully designed floor plans that maximize both comfort and functionality."
        },
        {
          title: "Breathtaking Views",
          description: "Enjoy stunning panoramic views from your windows, offering a perfect blend of natural scenery and urban landscapes that create an inspiring living environment."
        },
        {
          title: "Modern Amenities",
          description: "Access state-of-the-art facilities including smart home features, energy-efficient appliances, and contemporary fixtures designed for modern living."
        }
      ],
      featureImage: "/aubens-place/IMG_6532.jpg"
    },
    floorPlans: {
      title: "Floor Plans",
      description: "Explore our exclusive listings and discover the perfect place to call home.",
      plans: [
        {
          type: "3 bedroom",
          image: "/aubens-place/IMG_6530.jpg"
        },
        {
          type: "2 bedroom",
          image: "/aubens-place/IMG_6532.jpg"
        }
      ]
    },
    projectInfo: {
      price: "$150,000",
      bedrooms: "2",
      bathrooms: "2.5",
      parking: "2"
    },
    gallery: {
      title: "Gallery",
      description: "Take a virtual tour and see why it's the perfect place to call home.",
      mainImage: "/aubens-place/IMG_6530.jpg",
      gridImages: [
        "/aubens-place/IMG_6532.jpg",
        "/aubens-place/IMG_6534.jpg",
        "/aubens-place/IMG_6530.jpg",
        "/aubens-place/IMG_6532.jpg"
      ]
    }
  },
  "vista-grande": {
    title: "Vista Grande",
    address: "#8 Jasmine Lane, Teshie Nungua Estate, Accra, Ghana",
    location: "Teshie Nungua Estates",
    description: "Welcome to Vista Grande, a premier residential community designed for those who seek elegance, comfort, and a connection to nature. Nestled in the prestigious Teshie Nungua Estate, Vista Grande offers a perfect blend of modern living and tranquil surroundings. Whether you're looking to buy or rent, this is the place to call home.",
    images: [
      { src: "/vista-grande/IMG_5675.JPG", alt: "Vista Grande Image 1" },
      { src: "/vista-grande/IMG_5676.JPG", alt: "Vista Grande Image 2" },
      { src: "/vista-grande/IMG_5677.JPG", alt: "Vista Grande Image 3" },
      { src: "/vista-grande/IMG_5678.JPG", alt: "Vista Grande Image 4" },
      { src: "/vista-grande/IMG_5679.JPG", alt: "Vista Grande Image 5" }
    ],
    features: {
      title: "Unique Features",
      description: "Discover what makes Vista Grande an exceptional living experience.",
      items: [
        {
          title: "Premium Location",
          description: "Situated in the prestigious Teshie Nungua Estate, offering easy access to major amenities while maintaining a serene environment."
        },
        {
          title: "Luxury Finishes",
          description: "Premium materials and expert craftsmanship throughout, from marble countertops to hardwood flooring."
        },
        {
          title: "Smart Home Integration",
          description: "State-of-the-art home automation systems, including security, climate control, and entertainment solutions."
        }
      ],
      featureImage: "/vista-grande/IMG_5675.JPG"
    },
    floorPlans: {
      title: "Floor Plans",
      description: "Thoughtfully designed layouts that maximize space and comfort.",
      plans: [
        {
          type: "3 bedroom",
          image: "/vista-grande/floor-plan.png"
        },
        {
          type: "2 bedroom",
          image: "/vista-grande/floor-plan.png"
        }
      ]
    },
    projectInfo: {
      price: "$150,000",
      bedrooms: "3",
      bathrooms: "3.5",
      parking: "2"
    },
    gallery: {
      title: "Gallery",
      description: "Experience the beauty and elegance of Vista Grande through our photo gallery.",
      mainImage: "/vista-grande/IMG_5675.JPG",
      gridImages: [
        "/vista-grande/IMG_5676.JPG",
        "/vista-grande/IMG_5677.JPG",
        "/vista-grande/IMG_5678.JPG",
        "/vista-grande/IMG_5679.JPG"
      ]
    }
  }
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
        <ProjectInfoSimple info={projectDetails.projectInfo} />
        <div className="flex flex-col gap-10 py-8">
          <p className="font-bold text-3xl">Where Luxury Meets Serenity</p>
          <p className="text-xl font-light">{projectDetails.description}</p>
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
        <UniqueFeatures features={projectDetails.features} />
        <FloorPlan floorPlans={projectDetails.floorPlans} />
        <Gallery gallery={projectDetails.gallery} />
      </section>
    </>
  );
};

export default ProjectDetail;

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  return (
    <div className="flex flex-col py-12 space-y-8 md:space-y-12">
      {/* Header section */}
      <div className="flex flex-col items-center text-center px-4">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Gallery
        </p>
        <p className="text-lg text-secondary w-full md:w-2/3 lg:w-1/3">
          Take a virtual tour of Vista Grande and see why it’s the perfect place
          to call home.
        </p>
      </div>

      {/* Photo Gallery Section */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="relative grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-4">
          {/* Main large image */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/vista-grande/IMG_5675.JPG"
              alt="Vista Grande main view"
              className="object-cover rounded-lg md:rounded-r-none"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
          </div>

          {/* Right column grid */}
          <div className="grid grid-cols-2 grid-rows-2 h-full gap-4">
            {/* Top row */}
            <div className="relative w-full h-full">
              <Image
                src="/vista-grande/IMG_5676.JPG"
                alt="Vista Grande interior"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/vista-grande/IMG_5677.JPG"
                alt="Vista Grande living space"
                className="object-cover md:rounded-tr-lg"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>

            {/* Bottom row */}
            <div className="relative w-full h-full">
              <Image
                src="/vista-grande/IMG_5678.JPG"
                alt="Vista Grande feature"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
            <div className="relative w-full h-full">
              <Image
                src="/vista-grande/IMG_5679.JPG"
                alt="Vista Grande overview"
                className="object-cover md:rounded-br-lg"
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
              />
            </div>
          </div>

          {/* Button overlay */}
          <div className="absolute bottom-4 right-4">
            <Button  className="font-medium">
              Show all photos
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

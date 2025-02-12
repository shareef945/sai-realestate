"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("/api/images");
      const data = await response.json();
      setImages(data.images);
    };

    fetchImages();
  }, []);

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
            <Dialog>
              <DialogTrigger asChild>
                <Button className="font-medium">Show all photos</Button>
              </DialogTrigger>
              <DialogContent className="w-full h-full bg-[#151515] max-w-[90vw] max-h-[90vh] border-none">
                <DialogHeader>
                  <DialogTitle className="text-4xl font-bold text-center mb-2">
                    Vista Grande Gallery
                  </DialogTitle>
                  <DialogDescription className="text-center text-gray-400">
                    Browse through all photos of our beautiful property
                  </DialogDescription>
                </DialogHeader>
                <div className="overflow-y-auto h-[calc(90vh-120px)]">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                    {images.map((src, index) => (
                      <div key={index} className="relative aspect-[4/3] w-full">
                        <Image
                          src={src}
                          alt={`Vista Grande photo ${index + 1}`}
                          fill
                          className="object-cover rounded-lg hover:opacity-90 transition-opacity"
                          sizes="(max-width: 640px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 22vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

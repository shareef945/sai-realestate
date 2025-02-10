import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  aspectRatio?: "square" | "portrait" | "landscape";
  className?: string;
}

const ProjectImage = ({
  src,
  alt,
  aspectRatio = "square",
  className,
}: ProjectImageProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-100",
        {
          "aspect-square": aspectRatio === "square",
          "aspect-[3/4]": aspectRatio === "portrait",
          "aspect-[4/3]": aspectRatio === "landscape",
        },
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ProjectImage;

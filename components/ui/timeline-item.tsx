import { Button } from "./button";
import Image from "next/image";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TimelineItemProps {
  title: string;
  description: string;
  year: string;
  buttonText?: string;
  onButtonClick?: () => void;
  imagePath: string;
}

const TimelineItem = ({
  title,
  description,
  year,
  buttonText = "Visit",
  onButtonClick,
  imagePath,
}: TimelineItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-8 py-8 md:py-20"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0.3,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div className="col-span-1 md:col-span-4 order-2 md:order-1">
        <div className="flex flex-col gap-3 md:gap-4">
          <p className="text-lg md:text-xl font-medium">{title}</p>
          <p className="text-secondary text-sm md:text-base">{description}</p>
          {buttonText && (
            <Button
              className="w-full sm:w-2/3 md:w-1/2"
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>
          )}
        </div>
        <div>
          <p className="text-[80px] sm:text-[120px] md:text-[160px] text-[#303030] font-semibold leading-none mt-4 md:mt-6">
            {year}
          </p>
        </div>
      </div>
      <div className="col-span-1 md:col-span-6 relative h-[250px] sm:h-[300px] md:h-[400px] order-1 md:order-2">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
        />
      </div>
    </div>
  );
};

export default TimelineItem;

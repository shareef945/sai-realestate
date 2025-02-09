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
      className="grid grid-cols-10 gap-8 py-20"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0.3,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      <div className="col-span-4">
        <div className="flex flex-col gap-4">
          <p>{title}</p>
          <p className="text-secondary">{description}</p>
          {buttonText && (
            <Button className="w-1/2" onClick={onButtonClick}>
              {buttonText}
            </Button>
          )}
        </div>
        <div>
          <p className="text-[160px] text-[#303030] font-semibold">{year}</p>
        </div>
      </div>
      <div className="col-span-6 relative h-[400px]">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default TimelineItem;

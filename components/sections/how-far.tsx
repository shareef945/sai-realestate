import React from "react";
import TracingBeam from "../ui/tracing-beam";

import TimelineItem from "../ui/timeline-item";

const timelineData = [
  {
    title: "Vista Grande",
    description:
      "Bringing luxury to an emerging neighborhood, setting new standards for modern living at competitive prices.",
    year: "2025",
    imagePath: "/vista-grande/IMG_5678.JPG",
  },
  {
    title: "Auben's Place",
    description:
      "Premium living made accessible in a prime location, combining sophisticated design with exceptional value.",
    year: "2023",
    imagePath: "/aubens-place/IMG_6534.jpg",
  },
];
const HowFar = () => {
  return (
    <section className="min-h-screen bg-[#151515] px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8">
      <p className="text-3xl md:text-4xl lg:text-[60px] font-semibold pb-12 md:pb-16 lg:pb-24">
        How far we have come
      </p>
      <TracingBeam className="px-2 sm:px-4 md:px-6">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            description={item.description}
            year={item.year}
            imagePath={item.imagePath}
          />
        ))}
      </TracingBeam>
    </section>
  );
};

export default HowFar;

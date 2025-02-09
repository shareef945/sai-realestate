import React from "react";
import TracingBeam from "../ui/tracing-beam";

import TimelineItem from "../ui/timeline-item";

const timelineData = [
  {
    title: "Vista Grande Launch",
    description:
      "We launched Vista Grande with a vision to redefine luxury living in prime locations, focusing on both comfort and aesthetics.",
    year: "2020",
    imagePath: "/vista-grande/IMG_5678.JPG",
  },
  {
    title: "Interior Excellence",
    description:
      "Our commitment to interior design excellence set new standards in the industry, with carefully curated spaces that blend functionality and style.",
    year: "2021",
    imagePath: "/vista-grande/IMG_5679.JPG",
  },
  {
    title: "Community Spaces",
    description:
      "Development of shared spaces and amenities that foster community interaction while maintaining privacy and exclusivity.",
    year: "2022",
    imagePath: "/vista-grande/IMG_5680.JPG",
  },
  {
    title: "Auben's Place",
    description:
      "Our latest development brings together all our learnings and expertise, creating a contemporary urban living space that sets new benchmarks.",
    year: "2024",
    imagePath: "/vista-grande/IMG_5681.JPG",
  },
];
const HowFar = () => {
  return (
    <section className="min-h-screen bg-[#151515] px-8 pb-8">
      <p className="text-[60px] font-semibold pb-24">How far we have come</p>
      <TracingBeam className="px-6">
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

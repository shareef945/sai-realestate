"use client";

import FeaturedProperties from "@/components/sections/featured-properties";
import HowFar from "@/components/sections/how-far";
import Intro from "@/components/sections/intro";
import Landing from "@/components/sections/landing";
import OurServices from "@/components/sections/our-services";

export default function Home() {
  return (
    <>
      <Landing />
      <Intro />
      <FeaturedProperties />
      <OurServices />
      <HowFar />
    </>
  );
}

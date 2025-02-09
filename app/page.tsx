"use client";

import FeaturedProperties from "@/components/sections/featured-properties";
import Intro from "@/components/sections/intro";
import Landing from "@/components/sections/landing";

export default function Home() {
  return (
    <>
      <Landing />
      <Intro />
      <FeaturedProperties />
    </>
  );
}

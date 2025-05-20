import React from "react";
import Carousel from "../../components/ui/Carousel";
import Hero from "./Hero-section/Hero";
import Live_Projects from "./Live-Project/Live-Projects";
import { Last_section } from "./Last-section/Last-section";

function Landing_Page() {
  return (
    <>
      <section className="flex flex-col items-start pt-40  size-full ">
        <Hero />
        <Carousel />
        <Live_Projects />
        <Last_section />
      </section>
    </>
  );
}

export default Landing_Page;

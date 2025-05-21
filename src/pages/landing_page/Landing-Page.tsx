import React from "react";
import Carousel from "../../components/ui/Carousel";
import Hero from "./Hero-section/Hero";
import Live_Projects from "./Live-Project/Live-Projects";
import { Last_section } from "./Last-section/Last-section";
import useBackToTop from "../../hooks/use-back-to-top";

function Landing_Page() {
  const scrollToTop = useBackToTop();

  return (
    <>
      <section
        ref={scrollToTop}
        className="flex flex-col items-start md:pt-40 pt-30 size-full "
      >
        <Hero />
        <Carousel />
        <Live_Projects />
        <Last_section />
      </section>
    </>
  );
}

export default Landing_Page;

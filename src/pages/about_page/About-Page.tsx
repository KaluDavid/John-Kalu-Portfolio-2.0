import React from "react";
import { Hero } from "./Hero/Hero";
import { Resume } from "./Resume/Resume";
import useBackToTop from "../../hooks/use-back-to-top";

function About_Page() {
  const scrollToTop = useBackToTop();

  return (
    <section
      ref={scrollToTop}
      className="flex xl:px-20 sm:px-12.5 px-5 flex-col items-start pt-40  size-full "
    >
      <Hero />
      <Resume />
    </section>
  );
}

export default About_Page;

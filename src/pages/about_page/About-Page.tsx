import React from "react";
import { Hero } from "./Hero/Hero";
import { Resume } from "./Resume/Resume";

function About_Page() {
  return (
    <section className="flex px-20 flex-col items-start pt-40  size-full ">
      <Hero />
      <Resume />
    </section>
  );
}

export default About_Page;

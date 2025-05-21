import React from "react";
import Live_Project_Temp from "../../components/common/Live-Project-Temp";
import viscio from "/images/viscio.png";
import { H_Tags } from "../../components/common/H-Tags";
import { Hr } from "../../components/common/Hr";
import { Project_about } from "../../components/ui/Project_about";
import Last_section_Flex from "../../components/common/Last-section-Flex";

function Project_1() {
  return (
    <section className="flex xl:px-20 sm:px-12.5 px-5 flex-col items-start gap-30 md:pt-40 pt-30  size-full ">
      <div className="flex items-center flex-col  gap-20">
        <H_Tags
          style="xl:w-[80%] sm:text-center"
          text="We make Farm2Market Agro-Logistics Efficient, Predictable and Affordable"
        />

        <Live_Project_Temp
          img={viscio}
          role="Web Design"
          text="Redesigned the company website, leading to a 5% increase in visibility and revenue"
        />
      </div>

      <Project_about
        heading1="Viscio Logistics"
        heading2="Maximizing Efficiency in Agro-Logistics"
        redirectApp="https://www.viscio.com.ng/"
      >
        <Last_section_Flex
          text1="About Viscio:"
          text2="We make back-loading logistics profitable for agro-logistics providers and enable farmers/food aggregators move their produce from farm to market affordably & predictably.The African logistics scene is riddled with infrastructure gaps, high operating costs and overly fragmented activities."
          style="text-xl"
        />
        <Hr />{" "}
        <Last_section_Flex text1="Why Viscio:">
          <ul>
            <li>
              With 1780+ successful trips, we ensure your agricultural products
              reach their destination safely and on time.
            </li>
            <li>
              Serving 650+ satisfied customers and working with 300+ active
              vendors, we connect you with a vast and trusted supply chain.
            </li>
            <li>
              Operating from 17+ strategic bases, we cover key agricultural
              regions, ensuring broad and efficient service.
            </li>
          </ul>
        </Last_section_Flex>
        <Hr />{" "}
        <Last_section_Flex text1="What we do:">
          <ul>
            <li>We Minimize Empty Miles for general cargo logistics</li>
            <li>Re-engineer Food Security by reducing Agro-logistics costs</li>
            <li>
              Cut down avoidable Carbon Emissions by un-maximized mobility
              assets
            </li>
          </ul>
        </Last_section_Flex>
      </Project_about>
    </section>
  );
}
export default Project_1;

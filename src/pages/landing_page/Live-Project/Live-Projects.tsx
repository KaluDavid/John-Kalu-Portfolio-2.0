import React from "react";
import { Live } from "../../../components/common/Live";
import Live_Project_Temp from "../../../components/common/Live-Project-Temp";
import viscio from "/images/viscio.png";
import eco_canada from "/images/eco_canada.png";
import siucash from "/images/suicash.png";
import siuIOS from "/images/siuIOS.png";

export default function Live_Projects() {
  return (
    <>
      <section className="flex items-start justify-start px-20 py-20 flex-col gap-20">
        <Live text="Live Projects" />

        <Live_Project_Temp
          to="/project_1"
          img={viscio}
          role="Web Design"
          text="Redesigned the company website, leading to a 5% increase in visibility and revenue"
        />
        <Live_Project_Temp
          to="/project_2"
          img={eco_canada}
          role="Web Design"
          text="Redesigned an Environmental workforce through training, certification, research and funding, it is estimated to make an increase of 20% in visibility & revenue"
        />
        <Live_Project_Temp
          to="/project_3"
          style="relative px-25"
          img={siucash}
          role="Web Design, Mobile app Design"
          text="Designed a Simplify digital Fin Tech payments platform for both IOS and Android."
        >
          <img
            src={siuIOS}
            alt=""
            className="w-[30%] absolute bottom-0 right-0"
          />
        </Live_Project_Temp>
      </section>
    </>
  );
}

import React from "react";
import { H_Tags } from "../../../components/common/H-Tags";
import { Hr } from "../../../components/common/Hr";
import Last_section_Flex from "../../../components/common/Last-section-Flex";
import { Optima } from "../../../components/common/Optima";

export function Last_section() {
  return (
    <div className=" flex flex-col items-start justify-center gap-10 sm:px-12.5 px-5 xl:px-20 w-full">
      <H_Tags>
        My design Journey so far. <br /> Walk with me
      </H_Tags>

      <div className="flex flex-col items-center justify-center gap-14 w-full ">
        <Hr />
        <Last_section_Flex
          text1="4 years Pioneering Unique Solutions"
          text2="4+ years of working with Dynamic Teams and as a Freelancer to transform ideas into great Products"
        />
        <Hr />
        <div className="w-full flex items-start justify-between gap-8 ">
          <Optima
            text="75+ Mentees across Africa"
            style="text-xl md:leading-12 lg:text-nowrap"
          />
          <p className="md:text-3xl sm:text-2xl w-[240px] md:leading-12 font-optima font-bold md:w-[500px]  xl:w-[604px]">
            Overtime i have been able to mentor both Newbies and already
            experienced designers. I achieved this in {""}
            <span className="text-codar">Codar Tech.</span>
          </p>
        </div>

        <Hr />
        <Last_section_Flex
          text1="25+ Completed Projects"
          text2="Successfully completed different projects across industries both as a freelancer and as Team. "
        />
      </div>
    </div>
  );
}

import React from "react";
import { H_Tags } from "../../../components/common/H-Tags";
import { Hr } from "../../../components/common/Hr";
import Last_section_Flex from "../../../components/common/Last-section-Flex";
import { Optima } from "../../../components/common/Optima";

export function Last_section() {
  return (
    <div className=" flex flex-col items-start justify-center gap-10 px-20 w-full">
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
        <div className="w-full flex items-start justify-between ">
          <Optima
            text="75+ Mentees across Africa"
            style="text-xl leading-12 text-nowrap"
          />
          <p className="text-3xl leading-12 font-optima font-bold  w-[604px]">
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

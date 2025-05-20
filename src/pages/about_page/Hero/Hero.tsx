import React from "react";
import { Roles } from "../../../components/common/Roles";
import { H_Tags } from "../../../components/common/H-Tags";
import { Message } from "../../../components/ui/Message";

export function Hero() {
  return (
    <div className="flex  pb-35 flex-col items-start justify-center gap-5 w-full">
      <Roles>
        <span>ABOUT ME</span>
        <span className="rounded-full bg-gray-800 size-2.5"></span>
      </Roles>
      <fieldset className="flex justify-between w-full  items-center">
        <H_Tags text="I craft products that not only meet organizational objectives but also deliver exceptional user experiences." />
        <img src="/images/profile.png" alt="john kalu" className="w-[464px]" />
      </fieldset>
      <Message>
        <a
          href="mailto:Mrkalujohn@gmail.com"
          className="flex items-center gap-2"
        >
          View my Resume
        </a>
      </Message>
    </div>
  );
}

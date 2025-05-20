import React from "react";
import { H_Tags } from "../../../components/common/H-Tags";
import { Roles } from "../../../components/common/Roles";
import { Message } from "../../../components/ui/Message";

export default function Hero() {
  return (
    <div className="flex px-20 pb-35 flex-col items-start justify-center gap-5">
      <Roles>
        <span>Ui/Ux Designer</span>
        <span className="rounded-full bg-gray-800 size-2.5"></span>
        <span>Design Instructor</span>
        <span className="rounded-full bg-gray-800 size-2.5"></span>
        <span>Design Mentor</span>
      </Roles>{" "}
      <H_Tags>
        I craft digital <span className="text-pantone-green"> products </span>{" "}
        that enhances
        <br /> Business Growth and Customer satisfaction.
      </H_Tags>
      <Message>
        <a
          href="mailto:Mrkalujohn@gmail.com"
          className="flex items-center gap-2"
        >
          Send me an Email <img src="/images/gmail.svg" alt="gmail" />
        </a>
      </Message>
    </div>
  );
}

import React from "react";
import { Optima } from "../../../components/common/Optima";
import { Resume_list } from "../../../components/common/Resume_list";
import { Hr } from "../../../components/common/Hr";

export function Resume() {
  return (
    <div className="flex flex-col items-start lg:items-center justify-center gap-20 w-full">
      <Resume_list
        live="My Career Journey"
        optima1="Codar Tech Africa, 2025"
        optima2="Ui/Ux Design Instructor"
      >
        <div>
          <Optima text="Viscio Logistics, 2023 - Present" style="text-2xl" />
          <Optima text="Ui/Ux Designer" style="text-lg" />
        </div>
        <div>
          <Hr />
          <Optima text="Zeph Agency, 2024 - 2025" style="text-2xl" />
          <Optima text="Ui/Ux Designer" style="text-lg" />
        </div>
      </Resume_list>

      <Resume_list
        live="Education"
        optima1="Abia State University, 2022"
        optima2="B.Eng, Computer Engineering"
      >
        <div>
          <Optima text="Certificate in Product Design" style="text-2xl py-2" />
          <Optima text="Inkal, 2021" style="text-lg" />
        </div>
      </Resume_list>

      <Resume_list live="Community" optima1="ACM SIGCHI Lagos" optima2="Member">
        <div>
          <Optima text="HNG Community" style="text-2xl py-2" />
          <Optima text="Design Mentor " style="text-lg" />
        </div>
        <div>
          <Hr />
          <Optima text="Abia Tech Hub" style="text-2xl py-2" />
          <Optima text="Volunteer" style="text-lg" />
        </div>
        <div>
          <Hr />
          <Optima text="World usability Day" style="text-2xl py-2" />
          <Optima text="Volunteer" style="text-lg" />
        </div>
      </Resume_list>
    </div>
  );
}

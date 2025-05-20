import React from "react";
import { Roles } from "../common/Roles";

export default function Carousel() {
  return (
    <div className="bg-salem w-full h-16.5 flex items-center justify-center   ">
      <Roles styles="gap-12 text-white">
        <span>Codar Tech Academy</span>
        <span className="rounded-full bg-white size-2.5"></span>
        <span>Viscio Logistics</span>
        <span className="rounded-full bg-white size-2.5"></span>
        <span>Zeph Agency</span>{" "}
        <span className="rounded-full bg-white size-2.5"></span>
        <span>Greenie Web</span>
      </Roles>
    </div>
  );
}

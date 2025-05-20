import React from "react";
import { Optima } from "../common/Optima";
import { Hr } from "../common/Hr";

export function Project_about({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col items-start justify-center gap-20 w-full ">
      <div className="flex flex-col items-start  justify-center gap-20 w-full">
        <div className="flex items-start gap-5 flex-col">
          <Optima text="Viscio Logistics" style="text-5xl" />
          <Optima
            text="Maximizing Efficiency in Agro-Logistics"
            style="text-xl"
          />
        </div>
        <Hr />
        <div className="gap-[56px] w-full flex flex-col items-start justify-center *:flex *:items-start *:justify-between  ">
          {children}
        </div>
      </div>
      <Optima
        text="VIEW WEBSITE"
        style="text-salem font-black text-[32px] underline text-center items-center"
      />
    </section>
  );
}

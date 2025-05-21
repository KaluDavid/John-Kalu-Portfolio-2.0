import React, { use } from "react";
import { Optima } from "../common/Optima";
import { Hr } from "../common/Hr";
import { redirect } from "react-router-dom";
import useRedirect from "../../hooks/use-redirect";

export function Project_about({
  children,
  heading1,
  heading2,
  redirectApp,
}: {
  children: React.ReactNode;
  heading1: string;
  heading2: string;
  redirectApp: string;
}) {
  const redirect = useRedirect({ redirectLink: `${redirectApp}` });
  return (
    <section className="flex flex-col items-center justify-center gap-20 w-full ">
      <div className="flex flex-col items-start  justify-center gap-20 w-full">
        <div className="flex items-start gap-5 flex-col">
          <Optima text={heading1} style="text-5xl" />
          <Optima text={heading2} style="text-xl" />
        </div>
        <Hr />
        <div className="gap-[56px] w-full flex flex-col items-start justify-center *:flex *:items-start *:justify-between  ">
          {children}
        </div>
      </div>
      <span onClick={redirect}>
        <Optima
          text="VIEW WEBSITE"
          style="text-salem cursor-pointer font-black text-[32px] underline text-center items-center"
        />
      </span>
    </section>
  );
}

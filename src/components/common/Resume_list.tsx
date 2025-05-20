import React from "react";
import { Live } from "./Live";
import { Hr } from "./Hr";
import { Optima } from "./Optima";

function Resume_list({
  live,
  children,
  optima1,
  optima2,
}: {
  live: string;
  children: React.ReactNode;
  optima1: string;
  optima2: string;
}) {
  return (
    <>
      <section className="flex w-full flex-col items-end gap-10">
        <div className="flex flex-col w-full items-center gap-10">
          <div className="flex w-full items-start justify-between">
            <Live style="!text-4xl" text={live} />
            <div className="flex  w-[454px] flex-col gap-2.5">
              <Optima text={optima1} style="text-2xl" />
              <Optima text={optima2} style="text-lg" />
            </div>
          </div>
          <Hr />
        </div>

        <div className="flex w-full flex-col items-end gap-18 *:flex  *:flex-col *:items-start *:gap-2.5 *:w-[454px]">
          {children}
        </div>
      </section>
    </>
  );
}

export { Resume_list };

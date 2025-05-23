import React from "react";
import { Optima } from "./Optima";

export default function Last_section_Flex({
  text1,
  text2,
  children,
  style,
}: {
  text1: string;
  text2?: string;
  children?: React.ReactNode;
  style?: string;
}) {
  return (
    <div className=" flex sm:flex-row flex-col max-sm:gap-5 items-start justify-between w-full  ">
      <Optima text={text1} style="lg:text-nowrap gap-8 text-2xl" />
      {children ? (
        <div className="font-optima md:*:w-[500px] xl:w-[604px] w-full font-bold flex items-center max-sm:px-5 text-xl *:flex *:flex-col *:gap-4 *:list-disc">
          {children}
        </div>
      ) : (
        <Optima
          text={`${text2}`}
          style={`md:text-3xl  sm:text-2xl text-xl max-sm:font-medium  md:w-[500px] xl:w-[604px]   md:leading-12 ${style}`}
        />
      )}
    </div>
  );
}

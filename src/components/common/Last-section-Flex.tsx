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
    <div className=" flex items-start justify-between w-full  ">
      <Optima text={text1} style="text-nowrap text-xl" />
      {children ? (
        <div className="font-optima w-[604px]  font-bold flex items-center text-xl *:flex *:flex-col *:gap-4 *:list-disc">
          {children}
        </div>
      ) : (
        <Optima text={text2} style={`text-3xl w-[604px] leading-12 ${style}`} />
      )}
    </div>
  );
}

import React, { type ReactNode } from "react";
import { Optima } from "./Optima";
import { Roles } from "./Roles";
import { Link } from "react-router-dom";

export default function Live_Project_Temp({
  img,
  role,
  text,
  style,
  children,
  to,
}: {
  img: string;
  role: string;
  text: string;
  style?: string;
  children?: ReactNode;
  to?: string;
}) {
  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <Link to={to}>
        <fieldset
          className={`flex items-center justify-center bg-buttercream rounded-2xl p-12 ${style}`}
        >
          <img src={img} alt={img} className="max-w-full" />

          {children}
        </fieldset>
      </Link>

      <div className=" flex items-start justify-between gap-[200px] ">
        <Optima text={text} style=" text-3xxl" />
        <Roles>
          <span>{role}</span>
          <span className="rounded-full bg-gray-800 size-2.5"></span>
        </Roles>
      </div>
    </div>
  );
}

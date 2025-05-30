import { type ReactNode } from "react";
import { Optima } from "./Optima";
import { Roles } from "./Roles";
import { Link } from "react-router-dom";
import useWindowWidth from "../../hooks/use-window-width";

export default function Live_Project_Temp({
  img,
  role,
  text,
  style,
  children,
  to,
  roleStyle,
}: {
  img: string;
  role: string;
  text: string;
  style?: string;
  children?: ReactNode;
  to?: string;
  roleStyle?: string;
}) {
  const { windowWidth } = useWindowWidth();
  return (
    <div className=" flex flex-col items-center justify-center gap-6">
      <Link to={`${to}`}>
        <fieldset
          className={`flex items-center justify-center bg-buttercream rounded-2xl px-8 py-5 sm:p-12 ${style}`}
        >
          <img src={img} alt={img} className="max-w-full" />

          {children}
        </fieldset>
      </Link>

      <div className=" flex sm:flex-row flex-col sm:items-start items-end  justify-between lg:gap-[200px] sm:gap-20.5 gap-5 ">
        {windowWidth > 500 ? (
          <>
            <Optima text={text} style=" sm:text-xl text-xx lg:text-3xxl" />
            <Roles styles={`max-sm:text-xxs  max-sm:gap-3 ${roleStyle}`}>
              <span className="rounded-full bg-gray-800 size-2.5"></span>
              <span>{role}</span>
            </Roles>
          </>
        ) : (
          <>
            <Roles styles={` gap-3 ${roleStyle}`}>
              <span className="rounded-full bg-gray-800 size-2.5"></span>
              <span>{role}</span>
            </Roles>
            <Optima text={text} style=" text-xl font-medium" />
          </>
        )}
      </div>
    </div>
  );
}

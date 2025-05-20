import { Optima } from "../common/Optima";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col items-center justify-center w-full gap-20 pt-40 pb-20">
        <div className="flex flex-col items-center gap-6.5">
          <Optima text="Turn that Idea into a Great Product" style="text-2xl" />
          <a
            href="mailto:Mrkalujohn@gmail.com"
            className="flex items-center gap-6"
          >
            <Optima text="Mrkalujohn@gmail.com" style="text-codar text-5xl" />
            <span className="text-3xl rounded-full bg-codar text-white p-[10px]">
              <ImArrowUpRight2 />
            </span>
          </a>
        </div>

        <div className="px-[150px] gap-16 py-[30px] bg-gray-800 rounded-full flex items-center justify-between text-white ">
          <Optima
            text="Connect on LinkedIn"
            style="text-xl leading-12 text-nowrap"
          />{" "}
          <Optima
            text="@ 2025 John Kalu. All rights Reserved"
            style="text-xl leading-12 text-nowrap"
          />
        </div>
      </footer>
    </>
  );
}

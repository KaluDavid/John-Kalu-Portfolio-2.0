import { Link } from "react-router-dom";
import useRedirect from "../../hooks/use-redirect";
import { Optima } from "../common/Optima";
import { ImArrowUpRight2 } from "react-icons/im";

export default function Footer() {
  const redirect = useRedirect({
    redirectLink: "https://www.linkedin.com/in/john-kalu-962357230/",
  });

  return (
    <>
      <footer className="flex flex-col items-center justify-center w-full sm:gap-15 gap-8 lg:gap-20 sm:pt-40 pt-24 sm:pb-20 pb-10 max-md:px-12.5 px-5">
        <div className="flex flex-col items-center sm:gap-6.5 gap-4">
          <Optima
            text="Turn that Idea into a Great Product"
            style="lg:text-2xl sm:text-xl text-lg "
          />
          <Link
            to="mailto:Mrkalujohn@gmail.com"
            className="flex items-center gap-2 sm-lg:gap-6 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <Optima
              text="Mrkalujohn@gmail.com"
              style="text-codar lg:text-5xl sm:text-3xxl sm-sm:text-3xl text-[27px]"
            />
            <span className="lg:text-3xl sm-lg:text-xl sm:text-2xl rounded-full bg-codar text-white sm:p-[10px] p-2 ">
              <ImArrowUpRight2 />
            </span>
          </Link>
        </div>

        <div className="lg:px-[150px] sm:flex-row flex-col  tabS7:px-20 max-lg:w-full  md:gap-16 sm:gap-6 py-4 sm:py-[30px]  bg-gray-800 max-sm:px-42 sm:rounded-full rounded-[90px] flex items-center lg:justify-between justify-center text-white ">
          <span onClick={redirect} className="cursor-pointer">
            <Optima
              text="Connect on LinkedIn"
              style="md:text-xl text-lg sm:text-sm sm:leading-12 text-nowrap"
            />
          </span>
          <Optima
            text="@ 2025 John Kalu. All rights Reserved"
            style="text-lg sm:text-sm md:text-xl leading-12 text-nowrap"
          />
        </div>
      </footer>
    </>
  );
}

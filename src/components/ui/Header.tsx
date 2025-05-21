import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../common/Button";
import useRedirect from "../../hooks/use-redirect";
export default function Header() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // update window width on resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // cleanUp function on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // close menu when switching to desktop view
  useEffect(() => {
    if (windowWidth > 1024 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [windowWidth, isMenuOpen]);

  // toggle menu open state
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // redirect link
  const redirect = useRedirect({
    redirectLink:
      "https://drive.google.com/file/d/13-mBbmTJj8tned1SXeIod9rnCNqk-s1D/view?usp=sharing",
  });
  const redirectWhatsapp = useRedirect({
    redirectLink: "https://wa.link/276pe5",
  });
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center top-0 fixed bg-white z-50 py-[30px] justify-between max-lg:px-[50px] max-sm:px-[20px] lg:max-xl:px-[50px] xl:px-20 font-open-sans text-gray-900 w-full"
      >
        <NavLink to="/">
          <h1 className="font-oleo-script text-2xl sm-xl:text-3xl ">
            John Kalu
          </h1>
        </NavLink>

        {windowWidth > 1024 && (
          <>
            <ul className="flex  text-nowrap  items-center gap-6  sm-xl:*:text-xl *:text-lg font-normal ">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-salem" : "")}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-salem" : "")}
              >
                <li>About</li>
              </NavLink>

              <li onClick={redirect}>Resume</li>
            </ul>
            <Button
              HandleClick={redirectWhatsapp}
              style="hover:border hover:border-salem hover:text-salem hover:bg-white"
            >
              Hire Me
            </Button>
          </>
        )}
        {/* Hamburger menu for mobile view */}
        {windowWidth <= 1024 && (
          <div
            onClick={toggleMenu}
            className="flex items-center flex-col *:w-[27px] *:sm:w-[35px] sm:gap-2 *:h-[2px] *:bg-salem gap-2 "
          >
            {!isMenuOpen ? (
              <>
                <span className="  transition-all duration-300"></span>
                <span className="  transition-all duration-300"></span>
                <span className="  transition-all duration-300"></span>
              </>
            ) : (
              <>
                <span className="  rotate-45  translate-y-1.5 transition-all duration-300"></span>
                <span className="  -rotate-45 sm:-translate-y-1 -translate-y-1 transition-all duration-300"></span>
              </>
            )}
          </div>
        )}
      </motion.header>

      {isMenuOpen && (
        <div className="sm:px-[50px] px-[20px] sm:items-start items-center gap-8 bg-white pt-[40px] fixed top-20 smButton:w-1/2 w-3/4 h-full flex flex-col z-40 left-0 ">
          <ul className="flex flex-col *:text-nowrap  items-center sm:items-start gap-6  *:text-xl *:font-normal w-full ">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "text-salem" : "")}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) => (isActive ? "text-salem" : "")}
            >
              <li>About</li>
            </NavLink>
            <li onClick={redirect}>Resume</li>
          </ul>
          <Button HandleClick={redirectWhatsapp} style="max-sm:w-full">
            Hire Me
          </Button>
        </div>
      )}
    </>
  );
}

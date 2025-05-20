import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../common/Button";
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
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex items-center top-0 fixed w-full bg-white z-50 py-[30px] justify-between max-lg:px-[50px] max-sm:px-[20px] lg:max-xl:px-[50px] xl:px-20 font-open-sans text-gray-900"
      >
        <NavLink to="/">
          <h1 className="font-oleo-script text-3xl ">John Kalu</h1>
        </NavLink>

        {windowWidth > 1024 && (
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
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "text-salem" : "")}
            >
              <li>Resume</li>
            </NavLink>
          </ul>
        )}
        <Button
          to="/hire_me"
          style="hover:border hover:border-salem hover:text-salem hover:bg-white"
        >
          Hire Me
        </Button>

        {windowWidth <= 1024 && (
          <div
            onClick={toggleMenu}
            className="flex items-center flex-col *:w-[24px] *:sm:w-[35px] sm:gap-2 *:h-[3px] *:bg-blue-600 gap-2 "
          >
            {!isMenuOpen ? (
              <>
                <span className="  transition-all duration-300"></span>
                <span className="  transition-all duration-300"></span>
                <span className="  transition-all duration-300"></span>
              </>
            ) : (
              <>
                <span className="  rotate-45 sm:translate-y-1.5 translate-y-1 transition-all duration-300"></span>
                <span className="  -rotate-45 sm:-translate-y-1 -translate-y-1 transition-all duration-300"></span>
              </>
            )}
          </div>
        )}
      </motion.header>

      {isMenuOpen && (
        <div className=" items-center gap-8 bg-white pt-[40px] fixed top-20 smButton:w-1/2 w-3/4 h-full flex flex-col z-40">
          <ul className="flex flex-col *:text-nowrap  items-center gap-6 text-salem *:text-xl *:font-normal ">
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
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "text-salem" : "")}
            >
              <li>Resume</li>
            </NavLink>
          </ul>
          <Button to="/hire_me">Hire Me</Button>
        </div>
      )}
    </>
  );
}

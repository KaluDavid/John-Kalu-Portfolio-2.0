import React, { type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useHoverButton from "../../utils/motion/useHoverButton";
interface ButtonProps {
  children: ReactNode;
  style?: string;
  to?: string;
  HandleClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export function Button({ children, style, to, HandleClick }: ButtonProps) {
  const hoverScale = useHoverButton();
  return (
    <>
      <Link
        to={`${to}`}
        onClick={HandleClick}
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          {...hoverScale}
          className={`flex flex-nowrap text-nowrap bg-salem rounded-lg w-full items-center justify-center gap-1.5 text-white  text-lg  px-10 py-3  font-semibold cursor-pointer ${style}`}
        >
          {children}
        </motion.button>
      </Link>
    </>
  );
}

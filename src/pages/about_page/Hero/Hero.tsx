import { Roles } from "../../../components/common/Roles";
import { H_Tags } from "../../../components/common/H-Tags";
import { Message } from "../../../components/ui/Message";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export function Hero() {
  return (
    <div className="flex xl:flex-row flex-col sm:pb-35  pb-20.5 justify-between w-full  items-start xl:gap-0 gap-20">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 3,
          type: "spring",
        }}
        className="flex items-start flex-col gap-5"
      >
        <Roles>
          <span>ABOUT ME</span>
          <span className="rounded-full bg-gray-800 size-2.5"></span>
        </Roles>
        <H_Tags style="xl:w-[90%]">
          <span>
            I craft <span className="text-pantone-green"> products </span> that
            not only meet organizational objectives but also{" "}
            <br className="xl:block hidden" /> deliver exceptional user
            experiences."
          </span>
        </H_Tags>
        <Message>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://drive.google.com/file/d/1Y6bYmeVanfLYDc1EZ-bdcR-S-q2k0F94/view?usp=sharing
"
            className="flex items-center gap-2 text-lg"
          >
            View my Resume
          </Link>
        </Message>
      </motion.div>
      <motion.fieldset
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 4,
          type: "spring",
          delay: 0.2,
        }}
        className="flex xl:flex-row flex-col  justify-between w-full  items-center"
      >
        <img
          src="/images/johnny.jpg"
          alt="john kalu"
          className=" min-w-[30%] object-contain rounded-lg rounded-e-full rounded-b-full border border-pantone-green"
        />
      </motion.fieldset>
    </div>
  );
}

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";
import { experience_info } from "@/experience_info";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      // w-[60%]
      className="my-8 first:mt-0 last:mb-0 w-[70%] sm:w-[60%] mx-auto flex flex-col text-sm sm:text-base items-baseline justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring", damping: 7 }}
        className="sm:ml-0 flex flex-col flex-wrap overflow-wrap"
      >
        <h3 className="font-bold capitalize text-2xl">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize inline"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium ">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start of target to hit end of container
    // center of target element should be aligned with top of viewport
    offset: ["start center", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-4xl mb-16  md:text-6xl md:mb-32 lg:text-8xl w-full text-center">
        Experience
      </h2>

      {/*   */}
      <div ref={ref} className="w-full  md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          transition={{ duration: 5, type: "spring", damping: 7 }}
          className="absolute left-[20px] md:left-[30px] lg:left-9 md:w-[4px] top-1 w-[2px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start">
          {experience_info.map((item) => (
            <Details {...item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;

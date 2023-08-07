import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="font-bold capitalize text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start of target to hit end of container
    // center of target element should be aligned with top of viewport
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-4xl mb-16 md:text-6xl md:mb-32 lg:text-8xl w-full text-center">
        Education
      </h2>

      <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          ref={ref}
          className="absolute left-[20px] md:left-[30px] lg:left-9 top-1 w-[2px] md:w-[4px] h-full bg-dark origin-top dark:bg-light"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start">
          <Details
            type="Masters of Science in Computer Science"
            time="2023 - 2024"
            place="the Georgia Institute of Technology"
            info="Computer Vision | Natural Language Processing | Artificial Intelligence | Neural Networks | CreateX "
          />
          <Details
            type="Bachelor of Science in Computer Science"
            time="2021 - 2023"
            place="the Georgia Institute of Technology"
            info="Machine Learning | Deep Learning | AI | Java | JavaFX | C | Assembly Code for the LC3 Microprocessor | Drone Robotics | Computer Graphics | Computer Animation | "
          />
          <Details
            type="Diploma"
            time="2014 - 2019"
            place="Thomas Stone Highschool"
            info="Valedictorian (Class Rank #1) | Suma Cum Laude | Gave speech to over 1000 people at Graduation"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;

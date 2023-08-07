import { motion, useScroll } from "framer-motion";
const LiIcon = ({ reference }) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className="absolute left-0 stroke-dark dark:stroke-light">
      <svg
        className="-rotate-90 h-[42px] w-[42px] md:w-[65px] md:h-[65px] lg:w-[75px] lg:h-[75px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          className="stroke-primary dark:stroke-primaryDark stroke-1 fill-none"
          cx="75"
          cy="50"
          r="20"
        />
        <motion.circle
          className="stroke-[5px] fill-light dark:fill-dark"
          cx="75"
          cy="50"
          r="20"
          style={{
            pathLength: scrollYProgress,
          }}
        />
        <circle
          className="animate-pulse stroke-1 dark:fill-primaryDark fill-primary"
          cx="75"
          cy="50"
          r="10"
        />
      </svg>
    </figure>
  );
};

export default LiIcon;

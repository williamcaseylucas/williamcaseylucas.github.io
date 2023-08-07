import { CircularText } from "./icons";
import Link from "next/link";

const HireMe = () => {
  return (
    <div className="fixed right-8 left-auto top-0 bottom-auto lg:left-4 lg:bottom-4 lg:right-auto lg:top-auto  flex items-center justify-center overflow-hidden ">
      <div className="w-24 lg:w-48  h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark animate-spin-slow dark:fill-light" />
        <Link
          href="mailto:wrunyon3@gatech.edu"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-12 h-12 text-[10px] lg:text-[16px] lg:w-20 lg:h-20 rounded-full font-semibold hover:bg-light hover:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light  dark:bg-light dark:text-dark "
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;

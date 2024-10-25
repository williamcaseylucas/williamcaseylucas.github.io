import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  SunIcon,
  MoonIcon,
  PythonIcon,
} from "./icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { useState } from "react";

const CustomLink = ({ href, title, className }) => {
  const router = useRouter();
  return (
    <Link className={`${className} relative group`} href={href}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className, toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      href={href}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full  py-8 font-medium flex items-center justify-between text-dark dark:text-light relative z-10 xl:px-32 lg:px-16 md:px-12 px-8">
      {/* Hamburger button */}

      <div className="lg:hidden">
        <button
          className="flex-col justify-center items-center flex "
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm -translate-y-0.5 ${
              isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          />
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm -translate-y-0.5 ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          />
        </button>
      </div>

      {/* Shows menu in middle of screen for mobile */}
      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center mt-2">
            <CustomMobileLink href="/" title="Home" toggle={handleClick} />
            <CustomMobileLink
              href="/about"
              title="About"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              toggle={handleClick}
            />
            {/* <CustomMobileLink
              href="/articles"
              title="Articles"
              toggle={handleClick}
            /> */}
          </nav>
          {/* justify-normal */}
          <nav className="flex items-center justify-center flex-wrap mt-2">
            {/* <motion.a
              className="w-6 mr-3 sm:mx-1"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="https://twitter.com"
              target="_blank"
            >
              <TwitterIcon />
            </motion.a> */}
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
              href="https://github.com/williamcaseylucas"
              target="_blank"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 sm:mx-1"
              href="https://www.linkedin.com/in/william-runyon-494793223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9TD7GZAlThuMqLpanY9%2BCw%3D%3D"
              target="_blank"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              className={`mx-3 w-6 sm:mx-1 flex items-center justify-center rounded-full 
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
              onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            >
              {mode === "dark" ? (
                <div>
                  <SunIcon className="fill-dark w-[24px] h-[24px]" />
                </div>
              ) : (
                <div>
                  <MoonIcon className="fill-dark w-[24px] h-[24px]" />
                </div>
              )}
            </button>

            {/* <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 bg-light  rounded-full sm:mx-1"
              href="https://pinterest.com"
              target="_blank"
            >
              <PinterestIcon />
            </motion.a> */}
            {/* <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 ml-3 sm:mx-1"
              href="https://dribble.com"
              target="_blank"
            >
              <DribbbleIcon />
            </motion.a> */}
          </nav>
        </motion.div>
      ) : (
        ""
      )}

      {/* Normal desktop */}
      <div className="w-full lg:flex justify-between items-center hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          {/* <CustomLink href="/articles" title="Articles" className="mx-4" /> */}
        </nav>
        <nav className="flex items-center justify-normal flex-wrap">
          {/* <motion.a
            className="w-6 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            href="https://twitter.com"
            target="_blank"
          >
            <TwitterIcon />
          </motion.a> */}
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1"
            href="https://github.com/williamcaseylucas"
            target="_blank"
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 sm:mx-1"
            href="https://www.linkedin.com/in/william-runyon-494793223?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9TD7GZAlThuMqLpanY9%2BCw%3D%3D"
            target="_blank"
          >
            <LinkedInIcon />
          </motion.a>

          {/* <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3 bg-light rounded-full"
            href="https://pinterest.com"
            target="_blank"
          >
            <PinterestIcon />
          </motion.a> */}
          {/* <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 ml-3"
            href="https://dribble.com"
            target="_blank"
          >
            <DribbbleIcon />
          </motion.a> */}

          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            {mode === "dark" ? (
              <div>
                <SunIcon className="fill-dark w-[24px] h-[24px]" />
              </div>
            ) : (
              <div>
                <MoonIcon className="fill-dark w-[24px] h-[24px]" />
              </div>
            )}
          </button>
        </nav>
      </div>
      <div className="absolute left-[50%] top-2  translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;

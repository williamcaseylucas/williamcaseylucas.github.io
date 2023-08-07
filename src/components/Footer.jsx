import Layout from "./Layout";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-sold border-dark font-medium text-base sm:text-lg text-dark dark:text-light dark:border-light">
      <Layout className="py-6 flex flex-col lg:flex-row lg:py-8 items-center justify-between ">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center py-2 ">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>{" "}
          by &nbsp;
          <Link
            href="/"
            className="underline underline-offset-2"
            target="_blank"
          >
            William
          </Link>
        </div>
        <Link target="_blank" href="/">
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;

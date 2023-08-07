import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import profilePic from "public/images/profile/william-removebg.png";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/HireMe";
import lightBulb from "public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>William's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark dark:text-light  w-full min-h-screen ">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full flex-col lg:flex-row">
            <div className="w-1/3">
              <Image
                src={profilePic}
                className="h-auto w-full"
                alt="CodeBucks"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col w-2/3 items-center self-center pl-8 lg:text-center">
              <AnimatedText
                text="Welcome to my Portfolio Website!"
                className="xl:!text-6xl sm:!text-5xl !text-3xl"
              />
              <p className="my-4 font-medium lg:text-lg md:text-base lg:text-left text-xs">
                Feel free to review my resume, learn more about me, see some of
                the projects I've been working on, and contact me!
              </p>
              <div className="flex items-center lg:self-start self-center mt-2 ">
                <Link
                  className="flex items-center bg-dark text-light p-2 px-4 text-base md:p-2.5 md:px-6 md:text-lg rounded-lg  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light  dark:bg-light dark:text-dark "
                  // download={true}
                  href="/Resume-White-Official.pdf"
                  target="_blank"
                >
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  className="ml-4 text-base md:text-lg font-medium capitalize text-dark underline dark:text-light "
                  href="mailto:wrunyon3@gatech.edu"
                  target="_blank"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 w-24 hidden lg:inline-block">
          <Image src={lightBulb} alt="Codebucks" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
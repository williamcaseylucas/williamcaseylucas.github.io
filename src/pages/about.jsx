import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import profilePic from "public/images/profile/william_profile.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, []);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>William | About Page</title>
        <meta name="description" content="Any description" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center text-dark dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Here's a littl bit about me!"
            className="lg:!text-7xl sm:!text-6xl !text-4xl mb-8 sm:mb-16"
          />
          <div className="grid w-full grid-cols-8 lg:gap-16 gap-8">
            {/* Biography */}
            <div className="col-span-8 md:col-span-4 lg:col-span-3 flex flex-col items-start justify-start order-2 md:order-1">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75  ">
                Biography
              </h2>
              <p className="font-medium">
                My name is William Runyon and I am a candidate for a Bachelor of
                Science in Computer Science at the Georgia Institute of
                Technology (GA Tech) in Atlanta, GA. I have a strong academic
                background, being a Dean's List and Faculty Honors student and
                earning a GPA of 4.0. Prior to attending GA Tech, I graduated as
                valedictorian of my high school class in May 2019.
              </p>
              <p className="my-4 font-medium">
                I have a diverse range of experience in the field of computer
                science, including working on various projects and participating
                in research at GA Tech. Some highlights of my experience include
                collaborating with a team to create a 2D "Tower Defense" game
                using JavaFX and design patterns, constructing and developing a
                Convolutional Neural Network to classify Hiragana characters
                with PyTorch, and contributing to the development of a drone
                delivery system at GA Tech. In addition, I have also gained
                practical experience by contributing to the Marta ARMY, LLC
                website and developing a COVID-19 web-based tracker and a
                Facebook Messenger clone.
              </p>
              <p className="my-4 font-medium">
                Outside of my studies and work, I have also been involved in
                research at GA Tech's Augmented Environments Lab, where I have
                incorporated AR and VR elements into interactive web-based
                projects. In my free time, I enjoy staying up to date with the
                latest developments in the field of computer science and
                exploring new technologies. I am expected to graduate in the
                Fall of 2023 and am eager to apply my knowledge and skills to
                real-world challenges. I am interested in working as a full
                stack web developer and a machine learning engineer.
              </p>
            </div>
            {/* Pic */}
            <div className="col-span-8 md:col-span-4 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light order-1 md:order-2">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Codebucks"
                className="w-full h-auto bg-black rounded-[2rem]"
                priority
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
              />
            </div>
            {/* Stats */}
            <div className="col-span-8 lg:col-span-2 flex lg:flex-col items-center lg:items-end justify-between order-3">
              <div className="flex flex-col items-center lg:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  technologies learned
                </h2>
              </div>
              <div className="flex flex-col items-center lg:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-center lg:items-end justify-center">
                <span className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;

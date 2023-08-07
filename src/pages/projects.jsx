import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import deepLearningProject from "public/images/projects/deep-learning.jpg";
import fuelEconomyProject from "public/images/projects/Fuel-Economy.jpg";
import machineLearningProject from "public/images/projects/machine-learning-project.png";
import towerDefenseProject from "public/images/projects/tower-defense.png";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative w-full flex flex-col lg:flex-row p-4 sm:p-8 lg:p-12 items-center justify-between xs:rounded-3xl xs:rounded-br-2xl rounded-2xl rounded-br-3xl border border-solid border-dark bg-light shadow-2xl   dark:bg-dark dark:border-light mb-10">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        className="w-full pb-6 lg:pb-0 lg:pl-6 lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_ blank"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-2xl">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-dark dark:text-light text-left text-4xl font-bold ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary} </p>
        <div className="flex mt-2 items-center ">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon className="bg-dark rounded-full" />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:bg-light dark:text-dark hover:dark:border-primaryDark"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light mb-10 h-full">
      <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_ blank"
      >
        <FramerImage
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark font-medium text-2xl">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-dark dark:text-light text-left text-3xl font-bold ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary} </p>
        <div className="flex mt-2 items-center w-full justify-between">
          <Link
            className="text-lg font-semibold underline "
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8" href={github} target="_blank">
            <GithubIcon className="bg-dark rounded-full" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>William | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Some Projects I've been working on"
            className="lg:!text-7xl sm:!text-6xl !text-4xl mb-8 sm:mb-16"
          />

          <div className="grid grid-cols-12 lg:gap-24 lg:gap-y-32 lg:gap-x-8 md:gap-y-24 gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Deep Learning - Predict if Brain Tumor is Benign or Malignant"
                summary="Developed deep learning models that accurately detected brain tumors by identifying abnormalities and diseases in MRI scans from patients with nearly 80% accuracy. (RNN, CNN, Attention, Decision Trees)"
                img={deepLearningProject}
                link="https://drive.google.com/file/d/1L2Q5HMXMFAHfp5cqngXX9j0g0YO0UeQi/view"
                github=""
              />
            </div>
            <div className="md:col-span-6 col-span-12">
              <Project
                type="Project"
                title="Machine Learning - Landscape Image Classification"
                summary="Preprocessed 4,000 images and applied unsupervised and supervised techniques to achieve an accuracy of 70% (KMeans, Gaussian Mixture Model, DB-Scan, Silhouette Coefficient, Calinski Score)"
                img={machineLearningProject}
                link="https://www.youtube.com/watch?v=rz7OoKlQDd8"
                github=""
              />
            </div>
            <div className="md:col-span-6 col-span-12">
              <Project
                type="Project"
                title="2D Tower Defense Game"
                summary="Led the development of a 2D 'Tower Defense' game using SceneBuilder, Agile/Scrum
                methodologies, and Design Patterns like Singleton and Factory Method (Java,  JavaFX, JUnits)
                "
                img={towerDefenseProject}
                link="https://www.youtube.com/watch?v=fEl2JX4xtHE"
                github=""
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Project"
                title="Vehicle with Greatest Fuel Economy Report"
                summary="Collaborated with team to create statistical models that determined the most fuel-efficient vehicle using multivariable analyses (R)"
                img={fuelEconomyProject}
                link="https://drive.google.com/file/d/1UNwd74NT0bqiqq2S6nOeU_dJMexX6WsR/view"
                github=""
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

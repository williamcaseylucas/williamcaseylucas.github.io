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
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// Carousel images
import {
  memoriesImages,
  djangoRealtorImages,
  djangoNotesImages,
  expenseTrackerFirebase,
  attendance_tracker,
  cloudCents,
} from "../../public/images/projects/carousel";

const FramerImage = motion(Image);
const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  setOpenModal = null,
  setImages = null,
  images = null,
}) => {
  return (
    <article className="relative w-full flex flex-col lg:flex-row p-4 sm:p-8 lg:p-12 items-center justify-between xs:rounded-3xl xs:rounded-br-2xl rounded-2xl rounded-br-3xl border border-solid border-dark bg-light shadow-2xl   dark:bg-dark dark:border-light mb-10">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      {link === "" ? (
        <FramerImage
          onClick={() => {
            setOpenModal(true);
            setImages(images);
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full lg:w-1/2 max-h-[400px] object-top object-cover rounded-lg overflow-hidden cursor-pointer"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      ) : (
        <Link
          className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg"
          href={link}
          target="_ blank"
        >
          <FramerImage
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            src={img}
            alt={title}
            className="w-full max-h-[400px] object-top object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
          />
        </Link>
      )}

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between lg:pl-6">
        <span className="text-primary dark:text-primaryDark font-medium text-2xl">
          {type}
        </span>
        <h2 className="my-2 w-full text-dark dark:text-light text-left text-4xl font-bold underline underline-offset-4">
          {title}
        </h2>
        {/* <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        ></Link> */}
        <p className="my-2 font-medium text-dark dark:text-light">{summary} </p>
        <div className="flex mt-2 items-center ">
          {link !== "" ? (
            <>
              {github !== "" ? (
                <>
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
                </>
              ) : (
                <Link
                  className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:bg-light dark:text-dark hover:dark:border-primaryDark"
                  href={link}
                  target="_blank"
                >
                  Visit Project
                </Link>
              )}
            </>
          ) : (
            <div
              onClick={() => {
                setImages(images);
                setOpenModal(true);
              }}
              className="rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold  dark:bg-light dark:text-dark hover:dark:border-primaryDark cursor-pointer"
            >
              View Project Photos
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  setOpenModal = null,
  setImages = null,
  images = null,
}) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light mb-10 h-full">
      {/* Background black */}
      <div className="absolute top-0 -right-2 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      {link === "" ? (
        <FramerImage
          onClick={() => {
            setImages(images);
            setOpenModal(true);
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={img}
          alt={title}
          className="w-full max-h-[400px] object-top object-cover cursor-pointer rounded-lg"
          priority
          sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      ) : (
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
            className="w-full max-h-[400px]"
            priority
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
          />
        </Link>
      )}
      <div className="w-full flex flex-col justify-evenly items-start mt-4">
        <div className="flex flex-col h-full">
          <span className="text-primary dark:text-primaryDark font-medium text-2xl">
            {type}
          </span>
          <h2 className="my-2 w-full text-dark dark:text-light text-left text-3xl font-bold ">
            {title}
          </h2>

          {/* <Link
            className="hover:underline underline-offset-2"
            href={link}
            target="_blank"
          ></Link> */}
          <p className="my-2 font-medium text-dark dark:text-light">
            {summary}{" "}
          </p>
        </div>
        <div className="flex mt-2 items-center w-full justify-between">
          {link !== "" ? (
            <Link
              className="text-dark dark:text-light text-lg font-semibold underline"
              href={link}
              target="_blank"
            >
              Visit
            </Link>
          ) : (
            <>
              {images ? (
                <div
                  className="text-dark dark:text-light text-lg font-semibold underline cursor-pointer"
                  onClick={() => {
                    setImages(images);
                    setOpenModal(true);
                  }}
                >
                  View Images
                </div>
              ) : (
                <div></div>
              )}
            </>
          )}

          {github !== "" ? (
            <Link className="w-8" href={github} target="_blank">
              <GithubIcon className="bg-dark rounded-full" />
            </Link>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </article>
  );
};

const Carousel = ({ setOpenModal, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="w-full h-full group max-h-[750px] overflow-auto">
      <img
        src={images[currentIndex].src}
        className="w-full object-cover rounded-2xl bg-center bg-cover duration-500"
      />
      {/* <div
        style={{
          backgroundImage: `url(${slides[currentIndex].url})`,
        }}
        className="w-full h-full object-cover rounded-2xl bg-center bg-cover duration-500"
      /> */}
      <div>
        <p
          onClick={(prev) => setOpenModal(!prev)}
          className="fixed top-[8px] right-[18px] cursor-pointer bg-blue-500 w-6 h-6 rounded-lg flex items-center justify-center"
        >
          X
        </p>
        <div className="fixed top-1/2 left-[18px] cursor-pointer hidden group-hover:flex  bg-blue-500 w-6 h-6 rounded-lg  items-center justify-center">
          <AiOutlineLeft onClick={prevSlide} size={24} />
        </div>
        <div className="fixed top-1/2 right-[18px] cursor-pointer hidden group-hover:flex bg-blue-500 w-6 h-6 rounded-lg  items-center justify-center">
          <AiOutlineRight onClick={nextSlide} size={24} />
        </div>
      </div>
    </div>
  );
};

const Modal = ({ images, setOpenModal }) => {
  return (
    <>
      <div className="bg-slate-200/50 fixed top-0 left-0 w-full h-full z-10">
        <div className="max-w-[1200px] w-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0px_0px_18px_0px_rgba(0,0,0,0.75)] rounded-2xl">
          <Carousel setOpenModal={setOpenModal} images={images} />
        </div>
      </div>
    </>
  );
};

const projects = () => {
  console.log(djangoRealtorImages);
  const [openModal, setOpenModal] = useState(false);
  const [images, setImages] = useState([
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg",
    "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    "https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928_640.jpg",
  ]);

  return (
    <>
      <Head>
        <title>William | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          {openModal ? (
            <Modal setOpenModal={setOpenModal} images={images} />
          ) : (
            ""
          )}
          <AnimatedText
            text="Some Projects I've been working on"
            className="lg:!text-7xl sm:!text-6xl !text-4xl mb-8 sm:mb-16"
          />
          {/* Projects */}
          <div className="grid grid-cols-12 lg:gap-24 lg:gap-y-32 lg:gap-x-8 md:gap-y-24 gap-x-0">
            {/* Featured Attendance Tracker */}
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Attendance Tracker - Full Stack (FARM)"
                summary="This app was developed as a means of logging the attendance of 50+ students in Georgia Tech's VIP Environmental Flights lab (which focuses on drone-based solutions). This app utilizes NextJS, Typescript, moment.js, and NextAuth in the frontend, and FastAPI with websockets and MongoDB through PyMongo. Only users who are on an email list can view the app. When the user logs in, they can either add students manually or import a csv with a 'name' and 'email' column to import many students at once. The client can also download a csv of the current attendance log of the students with a click of a button and they have a refresh button to resync with the backend. Once the client clicks 'create session', the client's location is passed to the data base as the center of origin and a qr code is displayed for others to login. Once others scan the qr code, allow their location to be logged (they have to be within a mile of the client's location), and they enter a valid email that exists in the database, the students attendance goes up by 1 and a little circle appears on the client's end using websockets to indicate realtime logged students. Once the client clicks 'close session', every student who didn't submit their email address within the last hour of the session being created are marked as absent automatically."
                img={attendance_tracker[1]}
                link=""
                github=""
                setOpenModal={setOpenModal}
                setImages={setImages}
                images={attendance_tracker}
              />
            </div>
            {/* Study notes App */}
            <div className="md:col-span-6 col-span-12 mb-10">
              <Project
                type="Project"
                title="Study Notes App - Full Stack (React + Django + jsonServer)"
                summary="The study notes app is a full stack application intended to mimick the notes app on the iPhone. The user can create a new note, update a note, and delete a note. The app was first constructed using JSON server to simulate an api, and then it was converted to utilizing Django REST framework with CORS properties and a MVC template. This app also took advantage of a Makefile, which allowed me to run custom commands to make migrations and run the database's server."
                img={djangoNotesImages[5]}
                link=""
                github="https://github.com/williamcaseylucas/django-react-studynotes/tree/main"
                setOpenModal={setOpenModal}
                setImages={setImages}
                images={djangoNotesImages}
              />
            </div>
            {/* Firebase App */}
            <div className="md:col-span-6 col-span-12 mb-10">
              <Project
                type="Project"
                title="Expense Tracker App - Full Stack (NextJS, TypeScript, Firebase)"
                summary="This app was written in NextJS with TypeScript and ESLint for the frontend and utilized Firebase for the backend. The expense tracker could add new values, delete old values, and would display a running total on the bottom. "
                img={expenseTrackerFirebase[1]}
                link=""
                github="https://github.com/williamcaseylucas/expense_tracker_firebase"
                setOpenModal={setOpenModal}
                setImages={setImages}
                images={expenseTrackerFirebase}
              />
            </div>
            {/* Featured Kyndryl - Carousel*/}
            <div className="col-span-12">
              <FeaturedProject
                type="Featured Project"
                title="Admin Dashboard - Kyndryl Internship - Full Stack (Nextjs, Redux, Redux Query, Azure Functions, Azure Pipeline CI/CD)"
                summary="CloudCents is a SAAS solution that takes credentials for a company's Azure subscription and runs diagnostics on the usage of the most expensive resources in Azure (virtual machines, bastions, storage, app services, application gateways). During this process, Azure functions are filtering through the Azure API and are sending a new JSON object to the frontend so that relevant information can be parsed efficiently. This project made use of NextJS, Redux and Redux Query for state management and cacheing API calls, and allowed the user to add a subscription, select it as the one to view diagnostics on, view general statistics from the overview page, and then click into a specific resource from the table to see why the resource should be modified. The client can also implement these suggesstions by clicking into a resource and clicking the button 'scale up', 'scale down', 'start', or 'stop'. If Kyndryl were to implement all of the suggestions made via this application, the company would drive down Azure costs by 72%. "
                img={cloudCents[6]}
                link=""
                github=""
                setOpenModal={setOpenModal}
                setImages={setImages}
                images={cloudCents}
              />
            </div>
            {/* Memories App */}
            <div className="md:col-span-6 col-span-12 mb-10">
              <Project
                type="Project"
                title="Memories App - Full Stack (MERN)"
                summary="This project utilizes ReactJS and Redux on the frontend, and MongoDB through Express.js, Node.js, and Mongoose on the backend. This app allows the user to submit memories with an image attached that then displays on the side panel with an indication of how long ago the submission was made using Javascipts Date class."
                img={memoriesImages[2]}
                link=""
                github="https://github.com/williamcaseylucas/memories-full-stack"
                setOpenModal={setOpenModal}
                setImages={setImages}
                images={memoriesImages}
              />
            </div>
            {/* Realtor Site */}
            <div className="md:col-span-6 col-span-12 mb-10">
              <Project
                type="Project"
                title="Realtor Site - (HTML, CSS, Bootstrap, Django)"
                summary="This application renders specific html components using Django on the frontend, and then stores realtors and listings via PostgreSQL and Django-REST Framework in the backend. During development, I created a Docker container to hold the PostgreSQL database and PGAdmin for visualization within the docker container."
                img={djangoRealtorImages[0]}
                link=""
                github="https://github.com/williamcaseylucas/realtor-website-django"
                setOpenModal={setOpenModal}
                setImages={setImages}
                images={djangoRealtorImages}
              />
            </div>
            {/* Deep learning - Featured */}
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
            {/* Machine Learning - Landscape */}
            <div className="md:col-span-6 col-span-12 mb-10">
              <Project
                type="Project"
                title="Machine Learning - Landscape Image Classification"
                summary="Preprocessed 4,000 images and applied unsupervised and supervised techniques to achieve an accuracy of 70% (KMeans, Gaussian Mixture Model, DB-Scan, Silhouette Coefficient, Calinski Score)"
                img={machineLearningProject}
                link="https://www.youtube.com/watch?v=rz7OoKlQDd8"
                github=""
              />
            </div>
            {/* 2D Tower Defense */}
            <div className="md:col-span-6 col-span-12 mb-10">
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
            {/* Stats Report */}
            <div className="col-span-12 mb-10">
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

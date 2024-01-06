import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { project_config } from "@/project_info";

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
            if (setOpenModal) {
              setImages(images);
              setOpenModal(true);
            }
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
          {openModal && <Modal setOpenModal={setOpenModal} images={images} />}
          <AnimatedText
            text="Current Projects"
            className="lg:!text-7xl sm:!text-6xl !text-4xl mb-8 sm:mb-16"
          />
          {/* Projects */}
          <div className="grid grid-cols-12 lg:gap-24 lg:gap-y-32 lg:gap-x-8 md:gap-y-24 gap-x-0">
            {project_config.map((item, idx) => {
              if (item.type === "Project") {
                return (
                  <div key={idx} className="md:col-span-6 col-span-12 mb-10">
                    {item.images != null ? (
                      <Project
                        {...item}
                        setOpenModal={setOpenModal}
                        setImages={setImages}
                      />
                    ) : (
                      <Project {...item} />
                    )}
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="col-span-12">
                    {item.images != null ? (
                      <FeaturedProject
                        {...item}
                        setOpenModal={setOpenModal}
                        setImages={setImages}
                      />
                    ) : (
                      <FeaturedProject {...item} />
                    )}
                  </div>
                );
              }
            })}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;

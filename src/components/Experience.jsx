import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        transition={{ duration: 1, type: "spring", damping: 7 }}
      >
        <h3 className="font-bold capitalize text-2xl">
          {position}&nbsp;
          <a
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize inline"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // Start of target to hit end of container
    // center of target element should be aligned with top of viewport
    offset: ["start center", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-4xl mb-16  md:text-6xl md:mb-32 lg:text-8xl w-full text-center">
        Experience
      </h2>

      {/*  */}
      <div ref={ref} className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          transition={{ duration: 1, type: "spring", damping: 7 }}
          className="absolute left-[20px] md:left-[30px] lg:left-9 md:w-[4px] top-1 w-[2px]  h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start">
          <Details
            position="Software Engineer"
            companyLink="www.kyndryl.com"
            company="Kyndryl"
            time="Summer 2023"
            address="Austin TX"
            work="Developed a counter app using Terraform to provision an EC2 instance, API Gateway, Lambda function, IAM rules, and CloudWatch logs in the cloud. I connected it with GCP's BigQuery and Dockerized a self-hosted runner for Github Actions. This demonstrated cloud hybrid solutions for implementing full stack web applications with a CI/CD pipeline. \
  Presented a presentation on API Gateway equivalents across major cloud providers listing cost, feature, and use-case differences to employees in the Cloud division."
          />
          <Details
            position="Teaching Assistant for CS 4641/7641 Machine Learning"
            companyLink="https://mahdi-roozbahani.github.io/CS46417641-spring2022/"
            company="the Georgia Institute of Technology"
            time="Jan 2023 - Present"
            address="Atlanta GA"
            work="Explain and demonstrate methods for implementing and applying Machine Learning (ML) concepts and models to data. \
  Review students ML projects and provide constructive feedback. \
  Host online office hours weekly. \
  Assist students through mega threads using edstem."
          />
          <Details
            position="Georgia Tech Research - Vertically Integrated Project – Experimental Flights"
            companyLink="https://www.vip.gatech.edu/teams/vvm"
            company="the Georgia Institute of Technology"
            time="Fall 2022 - Fall 2023"
            address="Atlanta GA"
            work="Contributed to the development of a drone delivery system for the delivery of small packages on the Georgia Tech campus as part of a Vertically Integrated Project (VIP) on Experimental Flights."
          />
          <Details
            position="Teaching Assistant for CS 1331 Intro to Object Oriented Programming'"
            companyLink="https://cs1331.gitlab.io/syllabus.html"
            company="the Georgia Institute of Technology"
            time="Spring 2022"
            address="Atlanta GA"
            work="Thoroughly explained and clarified how to conceptualize object-oriented concepts/principles for CS 1331 students – Intro to Object Oriented Programming. \
  Wrote custom tests using Junit and Reflection API to autograde HW assignments. \
  Graded HW assignments and tests weekly and monthly, respectively. \
  Held in-person office hours and online office hours weekly. \
  Answered questions raised on Piazza.."
          />
          <Details
            position="Georgia Tech Research - Augmented/Virtual Reality Web-book"
            companyLink="https://sites.gatech.edu/augmentedenvironments/"
            company="the Georgia Institute of Technology"
            time="Fall 2021"
            address="Atlanta GA"
            work="Incorporated AR and VR elements into interactive web-based project. \
  Implement 2D/3D elements into a digital book using VUE.js and TypeScript.js. \
  Collaborated with faculty and PhD students weekly to accomplish project goals."
          />
          <Details
            position="Software Engineer (Open Source)- Marta Army LLC"
            companyLink="https://www.martaarmy.org/"
            company="Marta ARMY"
            time="Summer 2021"
            address="Atlanta GA"
            work="Implemented interactive card in map UI that displays real-time transit information from Marta's catalog using React.js."
          />
          <Details
            position="Web Content Analyst"
            companyLink="https://www.lionbridge.com/join-our-team/"
            company="Microsoft (via Lionbridge)"
            time="Summer 2020 - Spring 2023"
            address="Boston, MA"
            work="Analyzed various web pages and determined which would satisfy the users intent best. Also analyzed meeting notes and emails to determine whether tasks were accurately flagged by Machine Learning models as completed or not."
          />
          <Details
            position="Private Math Tutor"
            companyLink=""
            company="Education United"
            time="Spring 2020"
            address="Philadelphia, PA"
            work="Worked as a tutor that taught pre-algebra, algebra I, algebra II, pre-calculus, trigonometry, and calculus. Taught per-calculus class during Summer 2020 with mandatory weekly attendance and grades."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

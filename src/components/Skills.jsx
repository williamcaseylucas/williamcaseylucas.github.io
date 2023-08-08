import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full full-semibold sm:bg-dark sm:text-light text-xs sm:py-2 sm:px-4 sm:text-sm md:py-1.5 md:px-3 md:text-base lg:py-3 lg:px-6 shadow-dark cursor-pointer absolute sm:dark:text-dark sm:dark:bg-light font-bold text-dark dark:text-white"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-6xl md:text-8xl mt-32 md:mt-64 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-[50vh] sm:h-[60vh] lg:h-[80vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark sm:bg-circularLight sm:dark:bg-circularDark md:bg-circularLight md:dark:bg-circularDark lg:bg-circularLight lg:dark:bg-circularDark mt-20">
        <motion.div
          className="flex items-center justify-center rounded-full full-semibold bg-dark text-light p-2 sm:p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="HTML" x="-20vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-9vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="20vw" y="-15vw" />
        <Skill name="Azure" x="15vw" y="-12vw" />
        <Skill name="AWS" x="32vw" y="-5vw" />
        <Skill name="MongoDB" x="0vw" y="-20vw" />
        <Skill name="Docker" x="-25vw" y="-18vw" />
        <Skill name="CI/CD Pipeline" x="-30vw" y="5vw" />
        <Skill name="Python" x="-20vw" y="10vw" />
        <Skill name="Machine Learning" x="27vw" y="15vw" />
        <Skill name="Java" x="5vw" y="19vw" />
        <Skill name="Firebase" x="-15vw" y="20vw" />
        <Skill name="Figma" x="15vw" y="0vw" />
        <Skill name="Terraform" x="-30vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skills;

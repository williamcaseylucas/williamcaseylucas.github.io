import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <img
        className="rounded-full w-96 h-96 object-cover m-3 p-3"
        src="/assets/headshot.jpg"
        alt=""
      />
      <h1 className="text-4xl dark:text-white md:test-7xl mb-1 md:mb-3 font-bold">
        William Runyon
      </h1>
      <p className="text-base md:test-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <div className="text-sm max-w-xl mb-6 font-bold">
        <p>
          My name is William Runyon and I am a candidate for a Bachelor of
          Science in Computer Science at the Georgia Institute of Technology (GA
          Tech) in Atlanta, GA. I have a strong academic background, being a
          Dean's List and Faculty Honors student and earning a GPA of 4.0. Prior
          to attending GA Tech, I graduated as valedictorian of my high school
          class in May 2019.
        </p>
        <br />
        <p>
          I have a diverse range of experience in the field of computer science,
          including working on various projects and participating in research at
          GA Tech. Some highlights of my experience include collaborating with a
          team to create a 2D "Tower Defense" game using JavaFX and design
          patterns, constructing and developing a Convolutional Neural Network
          to classify Hiragana characters with PyTorch, and contributing to the
          development of a drone delivery system at GA Tech. In addition, I have
          also gained practical experience by contributing to the Marta ARMY,
          LLC website and developing a COVID-19 web-based tracker and a Facebook
          Messenger clone.
        </p>
        <br />
        <p>
          Outside of my studies and work, I have also been involved in research
          at GA Tech's Augmented Environments Lab, where I have incorporated AR
          and VR elements into interactive web-based projects. In my free time,
          I enjoy staying up to date with the latest developments in the field
          of computer science and exploring new technologies. I am expected to
          graduate in the Fall of 2023 and am eager to apply my knowledge and
          skills to real-world challenges. I am interested in working as a full
          stack web developer and a machine learning engineer.
        </p>
      </div>
    </div>
  );
}

export default Intro;

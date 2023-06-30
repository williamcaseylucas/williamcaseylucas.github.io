import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4xl dark:text-white md:test-7xl mb-1 md:mb-3 font-bold">
        William
      </h1>
      <p className="text-base md:test-xl mb-3 font-medium">
        Software Engineer & Web Developer
      </p>
      <p className="text-sm max-w-xl mb-6 font-bold">This is my bio</p>
    </div>
  );
}

export default Intro;

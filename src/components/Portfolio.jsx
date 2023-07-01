import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../data/portfolio";
import Title from "./Title";

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* <div className="w-full md:w-3/8 md:pl-20">
      </div> */}
      <div className="md:flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="col-span-full">
          <Title>Portfolio</Title>
        </div>
        {portfolio.map((project) => (
          <PortfolioItem
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;

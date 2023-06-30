import React from "react";
import time from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

function Timeline() {
  return (
    <div>
      {/* For the section */}
      <div className="flex flex-col md:flex-row justify-center my-20">
        {/* For each item */}
        <div className="w-full md:w-7/12">
          <Title>Timeline</Title>
          {time.map((item) => (
            <TimelineItem
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;

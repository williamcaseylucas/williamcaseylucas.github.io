import React from "react";

function PortfolioItem({ title, imgUrl, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener"
      className="border-2 dark:border-white border-stone-900 rounded-md overflow-hidden"
    >
      <img
        src={imgUrl}
        alt="portfolio"
        className="w-full h-36 md:h-48 cursor-pointer object-cover"
      />
      <div className="w-full p-4">
        <h3 className="text-lg dark:text-white md:text-xl mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex dark:text-white flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block dark:border-white px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default PortfolioItem;

import React, { useState, useEffect } from "react";
import { checkScrolled } from "../utils";

export default function TableOfContents({ articleSections }: any) {
  const [scrolledArticle, setScrolledArticle] = useState(false);
  
  useEffect(() => {
    setScrolledArticle(checkScrolled(85));
  });

  return (
    <div
      className={
        scrolledArticle
          ? "xl:flex fixed hidden w-60 top-0 items-start justify-center left-0 h-full  ease-in-out duration-500"
          : "xl:flex absolute hidden w-60 top-25 items-start justify-center left-0 h-full ease-in-out duration-500"
      }
    >
      <div
        className={"xl:flex flex-col hidden bg-slate-100 text-slate-500 border border-slate-300 font-semibold h-fit w-full mt-72 p-5 ml-5 rounded-md ease-in-out transition-all duration-500 dark:bg-slate-700 dark:text-slate-400 dark:border-slate-500"}
      >
        <h1 className={"mb-2 text-black dark:text-slate-200"}>
          Table of Contents
        </h1>
        <a
          className={"hover:cursor-pointer mb-2 hover:text-black dark:hover:text-slate-200"}
          href={`#top`}
        >
          - To Top
        </a>
        {articleSections &&
          articleSections.map((heading: any, index: number) => {
            return (
              <a
                className={"hover:cursor-pointer mb-2 hover:text-black dark:hover:text-slate-200"}
                href={`#${heading}`}
                key={index}
              >
                - {heading}
              </a>
            );
          })}
        <a
          className={"hover:cursor-pointer mb-2 hover:text-black dark:hover:text-slate-200"}
          href={`#bottom`}
        >
          - To Bottom
        </a>
      </div>
    </div>
  );
}

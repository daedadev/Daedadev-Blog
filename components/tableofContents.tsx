import React, { useState, useEffect } from "react";
import { checkScrolled } from "../utils";

export default function TableOfContents({ articleSections }: any) {
  const [scrolledArticle, setScrolledArticle] = useState(false);
  let boool = false
  
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
        className={
          boool
            ? "xl:flex flex-col hidden bg-slate-700 text-slate-400 border border-slate-500 font-semibold h-fit w-full mt-72 p-5 ml-5 rounded-md ease-in-out duration-500 "
            : "xl:flex flex-col hidden bg-slate-100 text-slate-500 border border-slate-300 font-semibold h-fit w-full mt-72 p-5 ml-5 rounded-md ease-in-out duration-500"
        }
      >
        <h1 className={boool ? "mb-2 text-slate-200" : "mb-2 text-black"}>
          Table of Contents
        </h1>
        <a
          className={
            boool
              ? "hover:cursor-pointer mb-2 hover:text-slate-200"
              : "hover:cursor-pointer mb-2 hover:text-black"
          }
          href={`#top`}
        >
          - To Top
        </a>
        {articleSections &&
          articleSections.map((heading: any, index: number) => {
            return (
              <a
                className={
                  boool
                    ? "hover:cursor-pointer mb-2 hover:text-slate-200"
                    : "hover:cursor-pointer mb-2 hover:text-black"
                }
                href={`#${heading}`}
                key={index}
              >
                - {heading}
              </a>
            );
          })}
        <a
          className={
            boool
              ? "hover:cursor-pointer mb-2 hover:text-slate-200"
              : "hover:cursor-pointer mb-2 hover:text-black"
          }
          href={`#bottom`}
        >
          - To Bottom
        </a>
      </div>
    </div>
  );
}

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useGlobal } from "../context/globalContext";
import handleScroll, { checkScrolled } from "../utils";

export default function Header() {
  const [scrollCount, setScrollCount] = useState(0);
  const [scrolledHeader, setScrolledHeader] = useState(false);
  const {setDarkMode, darkMode} = useGlobal();

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    setScrolledHeader(checkScrolled(scrollCount));
    return () => window.removeEventListener("scroll", updateScroll);
  });

  function updateScroll() {
    // Scroll function from handleScroll.js
    setScrollCount(handleScroll());
  }

  return (
    <div
      className={
        scrolledHeader
          ? "sticky top-0 left-0 flex w-full items-center justify-center h-24 transition-all bg-slate-300 dark:bg-gray-800"
          : "sticky top-0 left-0 flex w-full items-center justify-center h-24 transition-all bg-slate-200 dark:bg-gray-700"
      }
    >
      <div className="flex flex-row items-center justify-between w-11/12 xl:w-1280 sm:w-11/12">
        <Link href={"/"}>
          <a className="font-semibold text-xl text-slate-900 dark:text-slate-100 ">
            DaedaDev
          </a>
        </Link>
        <div className="flex flex-row">
          <label className="flex w-16 pt-1 pb-1 rounded-3xl hover:cursor-pointer bg-slate-500 dark:bg-slate-300">
            <input
              type="checkbox"
              className="hidden hover:cursor-pointer"
              onClick={() => {setDarkMode(!darkMode)}}
            ></input>
            <div className={"rounded-xl transition-all duration-300 ml-1 h-4 w-4 bg-slate-200 dark:bg-slate-800 " + (darkMode ? 'translate-x-10' : '')} />
          </label>
          <h1 className="ml-5 text-black dark:text-white">Dark Mode</h1>
        </div>
      </div>
    </div>
  );
}

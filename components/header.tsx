import Link from "next/link";
import React, { useState, useEffect } from "react";
import handleScroll, { checkScrolled } from "../utils";

export default function Header() {
  let boool = false;
  const [scrollCount, setScrollCount] = useState(0);
  const [scrolledHeader, setScrolledHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    setScrolledHeader(checkScrolled(scrollCount));
    return () => window.removeEventListener("scroll", updateScroll);
  });

  function updateScroll() {
    // Scroll function from handleScroll.js
    setScrollCount(handleScroll());
  }

  if (boool) {
    return (
      <div
        className={
          scrolledHeader
            ? "sticky top-0 left-0 flex w-full items-center justify-center bg-gray-800 h-24 transition-all"
            : "sticky top-0 left-0 flex w-full items-center justify-center bg-gray-700 h-24 transition-all"
        }
      >
        <div className="flex flex-row items-center justify-between w-11/12 xl:w-1280 sm:w-11/12">
          <Link href={"/"}>
            <a className="text-slate-100 font-semibold text-xl">DaedaDev</a>
          </Link>
          <div className="flex flex-row">
            <label className="flex w-16 pt-1 pb-1 bg-slate-300 rounded-3xl hover:cursor-pointer">
              <input
                type="checkbox"
                className="hidden hover:cursor-pointer"
                onClick={() => boool = true}
              ></input>
              <div className="bg-slate-800 rounded-xl transition-all ml-1 h-4 w-4 translate-x-10" />
            </label>
            <h1 className="ml-5 text-white">Dark Mode</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        scrolledHeader
          ? "sticky top-0 left-0 flex w-full items-center justify-center bg-slate-300 h-24 transition-all"
          : "sticky top-0 left-0 flex w-full items-center justify-center bg-slate-200 h-24 transition-all"
      }
    >
      <div className="flex flex-row items-center justify-between w-11/12 xl:w-1280 sm:w-11/12">
        <Link href={"/"}>
          <a className="text-slate-900 font-semibold text-xl">DaedaDev</a>
        </Link>
        <div className="flex flex-row">
          <label className="flex w-16 pt-1 pb-1 bg-slate-500 rounded-3xl hover:cursor-pointer">
            <input
              type="checkbox"
              className="hidden hover:cursor-pointer"
              onClick={() => boool = true}
            ></input>
            <div className="bg-slate-200 rounded-xl transition-all ml-1 h-4 w-4" />
          </label>
          <h1 className="ml-5 text-black">Dark Mode</h1>
        </div>
      </div>
    </div>
  );
}

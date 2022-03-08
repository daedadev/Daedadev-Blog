import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useGlobal } from "../context/globalContext";

export default function Header() {
  const { darkMode, toggleDarkMode } = useGlobal();
  const [scrollCount, setScrollCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (scrollCount > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (window.scrollY / MaxHeight) * 100;

    console.log(document.documentElement.clientHeight);
    setScrollCount(ScrollPercent);
  };

  if (darkMode) {
    return (
      <div
        className={
          scrolled
            ? "sticky top-0 left-0 flex w-full items-center justify-center bg-gray-800 h-24 transition-all"
            : "sticky top-0 left-0 flex w-full items-center justify-center bg-gray-700 h-24 transition-all"
        }
      >
        <div className="flex flex-row items-center justify-between w-1280">
          <Link href={"/"}>
            <a className="text-slate-100">Blog</a>
          </Link>
        </div>
        <div className="flex flex-row">
          <label className="flex w-16 pt-1 pb-1 bg-slate-300 rounded-3xl hover:cursor-pointer">
            <input
              type="checkbox"
              className="hidden hover:cursor-pointer"
              onClick={toggleDarkMode}
            ></input>
            <div className="bg-slate-800 rounded-xl transition-all ml-1 h-4 w-4 translate-x-10" />
          </label>
          <h1 className="ml-5 text-white">Dark Mode</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      className={
        scrolled
          ? "sticky top-0 left-0 flex w-full items-center justify-center bg-slate-300 h-24 transition-all"
          : "sticky top-0 left-0 flex w-full items-center justify-center bg-slate-200 h-24 transition-all"
      }
    >
      <div className="flex flex-row items-center justify-between w-1280">
        <Link href={"/"}>
          <a className="text-slate-900">Blog</a>
        </Link>
      </div>
      <div className="flex flex-row">
        <label className="flex w-16 pt-1 pb-1 bg-slate-500 rounded-3xl hover:cursor-pointer">
          <input
            type="checkbox"
            className="hidden hover:cursor-pointer"
            onClick={toggleDarkMode}
          ></input>
          <div className="bg-slate-200 rounded-xl transition-all ml-1 h-4 w-4" />
        </label>
        <h1 className="ml-5 text-black">Dark Mode</h1>
      </div>
    </div>
  );
}

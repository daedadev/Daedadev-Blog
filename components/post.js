import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useGlobal } from "../context/globalContext";

export default function Post({ post }) {
  const { darkMode, toggleDarkMode } = useGlobal();

  return (
    <section
      className={
        darkMode
          ? "flex flex-col xl:w-1/3 w-11/12 lg:w-2/3 bg-slate-400 justify-center items-center h-fit mt-10 rounded-md border border-slate-200 lg:p-3 lg:m-10"
          : "flex flex-col xl:w-1/3 w-11/12 lg:w-2/3 bg-slate-100 justify-center items-center h-fit mt-10 rounded-md border border-slate-300 lg:p-3 lg:m-10"
      }
    >
      <div className="flex flex-col w-full items-center justify center">
        <img
          alt={`Image for ` + post.frontmatter.slug}
          className="rounded-md w-11/12 mt-5"
          src={post.frontmatter.cover_image}
        ></img>
        <h1 className="font-semibold">{post.frontmatter.title}</h1>
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <h3 className="m-2">{post.frontmatter.excerpt}</h3>
        <Link href={`/blog/${post.slug}`}>
          <a
            className={
              darkMode
                ? "flex w-fit p-1 text-slate-200 rounded-md bg-slate-800 m-2"
                : "flex w-fit p-1 text-slate-100 rounded-md bg-gray-500 m-2"
            }
          >
            Read Article
          </a>
        </Link>
      </div>
    </section>
  );
}

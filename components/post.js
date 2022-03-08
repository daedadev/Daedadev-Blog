import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { useGlobal } from "../context/globalContext";

export default function Post({ post }) {
  const { darkMode, toggleDarkMode } = useGlobal();

  return (
    <section
      className={
        darkMode
          ? "flex flex-col w-1/3 bg-slate-400 h-96 mt-10 rounded-md border border-slate-200 p-3 m-10"
          : "flex flex-col w-1/3 bg-slate-100 h-96 mt-10 rounded-md border border-slate-300 p-3 m-10"
      }
    >
      <div>
        <img
          alt={`Image for ` + post.frontmatter.slug}
          className="rounded-md"
          src={post.frontmatter.cover_image}
        ></img>
        <h1 className="font-semibold">{post.frontmatter.title}</h1>
      </div>
      <div className="flex flex-col justify-between h-full">
        <h3>{post.frontmatter.excerpt}</h3>
        <Link href={`/blog/${post.slug}`}>
          <a
            className={
              darkMode
                ? "flex w-fit p-1 text-slate-200 rounded-md bg-slate-800"
                : "flex w-fit p-1 text-slate-100 rounded-md bg-gray-500"
            }
          >
            Read Article
          </a>
        </Link>
      </div>
    </section>
  );
}

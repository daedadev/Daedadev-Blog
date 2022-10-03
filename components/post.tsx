import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function Post({ post }: any) {
  return (
    <section
      className={"flex flex-col xl:w-1/3 w-11/12 lg:w-2/3 border justify-center items-center h-fit mt-10 rounded-md transition-all duration-500 lg:p-3 lg:m-10 shadow-lg bg-slate-100 border-slate-300 dark:bg-slate-400 dark:border-slate-600 "}
    >
      <div className="flex flex-col w-full items-center justify center">
        <img
          alt={`Image for ` + post.frontmatter.slug}
          className="rounded-md w-11/12 mt-5 xl:m-0 xl:w-full"
          src={post.frontmatter.cover_image}
        ></img>
        <h1 className="text-left w-full pl-2 font-semibold mt-2 text-lg">
          {post.frontmatter.title}
        </h1>
      </div>
      <div className="flex flex-col justify-between w-full h-full">
        <h3 className="m-2 xl:h-32">{post.frontmatter.excerpt}</h3>
        <h1 className="font-semibold ml-2 mr-2 pl-2 bg-slate-300">
          Posted {post.frontmatter.date}
        </h1>
        <Link href={`/blog/${post.slug}`}>
          <a
            className={"flex w-fit p-1 rounded-md m-2 mt-5 transition-all duration-500 text-black bg-slate-300 hover:bg-slate-500 hover:text-white dark:hover:bg-slate-800 dark:hover:text-slate-200 dark:text-slate-300 dark:bg-slate-700"}
          >
            Read Article
          </a>
        </Link>
      </div>
    </section>
  );
}

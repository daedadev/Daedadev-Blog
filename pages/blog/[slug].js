import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { useGlobal } from "../../context/globalContext";
const hljs = require("highlight.js");

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt },
  slug,
  content,
}) {
  const { darkMode, toggleDarkMode } = useGlobal();

  marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function (code) {
      return hljs.highlightAuto(code, ["html", "javascript"]).value;
    },
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={
          darkMode
            ? "flex flex-col items-center min-h-screen bg-slate-600 pb-20"
            : "flex flex-col items-center min-h-screen bg-white pb-20"
        }
      >
        <section className="flex flex-row flex-wrap justify-center w-748">
          <div>
            <h1 className="text-5xl mt-10 mb-5 ">{title}</h1>
            <div
              className={
                darkMode
                  ? "bg-slate-700 text-slate-300 mb-5 pl-5"
                  : "bg-slate-300 text-slate-800 mb-5 pl-5"
              }
            >
              Posted on {date}
            </div>
            <img className="rounded-md" src={cover_image}></img>
          </div>
          <div
            id={darkMode ? "markdown-dark" : "markdown-light"}
            className="flex flex-col"
          >
            <div
              id="markdown"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </section>
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content, excerpt } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      excerpt,
      content,
    },
  };
}

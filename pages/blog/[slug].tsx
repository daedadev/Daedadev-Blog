import React, { useState, useContext, useEffect } from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Link from "next/link";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Header from "../../components/header";
import handleScroll from "../../utils";
import TableOfContents from "../../components/tableofContents";
import { useGlobal } from "../../context/globalContext";
const hljs = require("highlight.js");

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt, sections },
  slug,
  content,
}: any) {
  const [scrollCount, setScrollCount] = useState(0);
  const [tableContents, setTableContents] = useState([]);
  const {setDarkMode, darkMode} = useGlobal();

  marked.setOptions({
    langPrefix: "hljs language-",
    highlight: function (code) {
      return hljs.highlightAuto(code, ["html", "javascript"]).value;
    },
  });

  useEffect(() => {
    setTableContents(sections.split("/"));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  });

  function updateScroll() {
    // Scroll function from handleScroll.js
    setScrollCount(handleScroll());
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <meta name="author" content="Daniel Moore" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/MmDNs0b.png"
        />
      </Head>
      <div
        className={"sticky top-0 left-0 transition-all bg-white dark:bg-slate-600 "
        }
      >
        <Header />
        <div
          className={"bg-slate-600 h-1 z-0 dark:bg-slate-400"}
          style={{ width: `${scrollCount}%` }}
        ></div>
      </div>
      <section
        className={"flex flex-row justify-center min-h-screen bg-white pb-20 transition-all dark:bg-slate-600 "}
      >
        <TableOfContents articleSections={tableContents} />
        <a className="top"></a>
        <section className="flex flex-row flex-wrap justify-center w-11/12 lg:w-748">
          <div>
            <h1
              className={"text-5xl mt-10 mb-5 text-black dark:text-slate-100"}
            >
              {title}
            </h1>
            <div
              className="text-slate-800 bg-slate-300 mb-5 pl-5 transition-all dark:bg-slate-700 dark:text-slate-300"
            >
              Posted on {date}
            </div>
            <img className="rounded-md" src={cover_image}></img>
            <Link href="/" passHref>
              <button
                className={"w-52  rounded-md mt-10  transition-all bg-slate-300 text-black hover:bg-slate-500 hover:text-white dark:bg-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 dark:text-slate-300"}
              >
                Back
              </button>
            </Link>
          </div>
          <div
            id={darkMode ? "markdown-dark" : "markdown-light"}
            className="flex flex-row  transition-all w-full"
          >
            <div
              className="w-full"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
          <div className="w-full">
            <a className="bottom"></a>
            <Link href="#top" passHref>
              <button
                className={"w-52 rounded-md mt-10 transition-all bg-slate-300 text-black hover:bg-slate-500 hover:text-white dark:text-slate-300 dark:bg-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200 "}
              >
                To Top
              </button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
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

export const getStaticProps: GetStaticProps = ({ params: { slug } }: any) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content, excerpt } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
      excerpt,
    },
  };
}

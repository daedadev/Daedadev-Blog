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
const hljs = require("highlight.js");

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt, sections },
  slug,
  content,
}: any) {
  const [scrollCount, setScrollCount] = useState(0);
  const [tableContents, setTableContents] = useState([]);
  let boool = false;

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
        className={
          boool
            ? "sticky top-0 left-0 bg-slate-600 transition-all"
            : "sticky top-0 left-0 bg-white transition-all"
        }
      >
        <Header />
        <div
          className={
            boool ? "bg-slate-400 h-1 z-0 " : "bg-slate-600 h-1 z-0"
          }
          style={{ width: `${scrollCount}%` }}
        ></div>
      </div>
      <section
        className={
          boool
            ? "flex flex-row justify-center min-h-screen bg-slate-600 pb-20 transition-all"
            : "flex flex-row justify-center min-h-screen bg-white pb-20 transition-all"
        }
      >
        <TableOfContents articleSections={tableContents} />
        <a className="top"></a>
        <section className="flex flex-row flex-wrap justify-center w-11/12 lg:w-748">
          <div>
            <h1
              className={
                boool
                  ? "text-5xl mt-10 mb-5 text-slate-100"
                  : "text-5xl mt-10 mb-5 text-black"
              }
            >
              {title}
            </h1>
            <div
              className={
                boool
                  ? "bg-slate-700 text-slate-300 mb-5 pl-5 transition-all"
                  : "bg-slate-300 text-slate-800 mb-5 pl-5 transition-all"
              }
            >
              Posted on {date}
            </div>
            <img className="rounded-md" src={cover_image}></img>
            <Link href="/" passHref>
              <button
                className={
                  boool
                    ? "w-52 bg-slate-700 rounded-md mt-10 text-slate-300 hover:bg-slate-800 hover:text-slate-200 transition-all"
                    : "w-52 bg-slate-300 rounded-md mt-10 text-black hover:bg-slate-500 hover:text-white transition-all"
                }
              >
                Back
              </button>
            </Link>
          </div>
          <div
            id={boool ? "markdown-dark" : "markdown-light"}
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
                className={
                  boool
                    ? "w-52 bg-slate-700 rounded-md mt-10 text-slate-300 hover:bg-slate-800 hover:text-slate-200 transition-all"
                    : "w-52 bg-slate-300 rounded-md mt-10 text-black hover:bg-slate-500 hover:text-white transition-all"
                }
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

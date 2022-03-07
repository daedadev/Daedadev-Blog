import React from "react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { marked } from "marked";

export default function PostPage({
  frontmatter: { title, date, cover_image, excerpt },
  slug,
  content,
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col items-center min-h-screen bg-slate-600">
        <section className="flex flex-row flex-wrap justify-center w-748">
          <div>
            <Link href="/">
              <a>Go Back</a>
            </Link>
          </div>
          <div>
            <h1>{title}</h1>
            <div>Posted on {date}</div>
            <img src={cover_image}></img>
          </div>
          <div className="flex flex-col pl-20 pr-20">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
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

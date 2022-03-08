import Head from "next/head";
import Link from "next/link";
import Post from "../components/post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { useGlobal } from "../context/globalContext";

export default function Home({ posts }) {
  const { darkMode, toggleDarkMode } = useGlobal();

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Main Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={
          darkMode
            ? "flex flex-col items-center min-h-screen bg-slate-600 pb-20"
            : "flex flex-col items-center min-h-screen bg-white pb-20"
        }
      >
        <section className="flex flex-row flex-wrap justify-center w-1280">
          {posts.map((post, index) => {
            return <Post key={index} post={post} />;
          })}
        </section>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return {
    props: {
      posts,
    },
  };
}

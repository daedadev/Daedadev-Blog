import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Post from "../components/post";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/header";

interface IStaticProps {
  posts: IPosts[]
}

export default function Home({ posts }: IStaticProps) {
  return (
    <>
      <Head>
        <title>Daedadev Blog</title>
        <meta name="description" content="Home Page" />
        <meta property="og:type" content="Website" />
        <meta
          name="image"
          property="og:image"
          content="https://i.imgur.com/MmDNs0b.png"
        />
        <meta name="author" content="Daniel Moore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section
        className={"flex flex-col items-center min-h-screen pb-20 bg-white dark:bg-slate-600 transition-all duration-500"
        }
      >
        <section className="flex flex-col lg:flex-row flex-wrap justify-center items-center w-full xl:w-1280">
          {posts.map((post: any, index: number) => {
            return <Post key={index} post={post} />;
          })}
          <section
            className={
              "flex flex-col xl:w-1/3 w-11/12 lg:w-2/3  justify-center items-center h-fit mt-10 rounded-md  lg:p-3 lg:m-10"
            }
          ></section>
        </section>
      </section>
    </>
  );
}

export interface IPosts {
  slug: string;
  frontmatter: {
    [key: string]: string;
  }
}

export const getStaticProps: GetStaticProps = async () => {
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
      posts: posts.sort((a, b) => { 
        const aDate = new Date(a.frontmatter.date);
        const bDate = new Date(b.frontmatter.date);

        return bDate.getTime() - aDate.getTime()
      })
    },
  };
}

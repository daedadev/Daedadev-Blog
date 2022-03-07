import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function Post({ post }) {
  return (
    <section className="flex flex-col w-1/3 bg-white h-96 mt-10 rounded-md p-3 m-10">
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
          <a className="flex w-fit p-1 text-white rounded-md bg-orange-600">
            Read More
          </a>
        </Link>
      </div>
    </section>
  );
}

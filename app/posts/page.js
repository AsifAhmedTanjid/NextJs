import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";
import React from "react";

export default async function posts() {
  const posts = await getAllPosts();
  //   console.log(posts);

  return (
    <>
      <div>post</div>
      <ul>
        {posts.map((post) => (
          <li className="mt-4" key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

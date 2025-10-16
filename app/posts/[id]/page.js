import getPost from "@/lib/getPost";
import React from "react";

export default async function postPage({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div className="mt-6 ">
      <h2 className="mb-4 font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

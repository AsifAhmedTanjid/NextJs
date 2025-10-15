import Link from "next/link";
import React from "react";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      description: "sjddddddddddddddd dsaaaaaaaaaaaaaaaa",
    },
    {
      id: 2,
      title: "blog 2",
      description: "bbbbbbbbghghhhhhhhhhhh",
    },
  ];
  return (
    <div>
      <div>Blog page</div>
      <ul>
        {blogs.map((blog) => (
          <li className="m-5" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

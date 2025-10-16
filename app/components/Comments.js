import React from "react";

export default async function Comments({ commentsPromise }) {
  const comments = await commentsPromise;
  return (
    <div>
      <div className="mt-10">
        <h1>comments: </h1>
        <ul>
          {comments.map((comment) => (
            <li className="border-b-2 bg-green-100 p-2" key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

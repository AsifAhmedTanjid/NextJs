import Link from "next/link";
import React from "react";

const Aboutlayout = ({ children }) => {
  return (
    <div>
      <hr />
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
          <li>
            <Link href="/about/helloi">404</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Aboutlayout;

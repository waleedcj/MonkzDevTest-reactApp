import React from "react";
import WOW from "wowjs";
import { Link } from "react-router-dom";

const Pages = () => {
  return (
    <div className="page section">
      <div className="main-wrapper page">
        <main>
          <div className="wrapper">
            <Link className="ga2 button" to="/Education">
              1. Education
            </Link>
            <Link className="ga2 button" to="/courseDetails">
              2. Course Details
            </Link>
            <Link className="ga2 button" to="/courseLecture">
              3. Course Lecture
            </Link>
            <Link className=" ga2 button" to="/blog">
              4 .Blog
            </Link>
            <Link className="ga2 button" to="/article">
              5. Article
            </Link>
            <Link className="ga2 button" to="/modalChoose">
              6. Swap
            </Link>
            <Link className="ga2 button" to="/characters">
              7. Characters
            </Link>
            <Link className="ga2 button" to="/shuhari">
              8. Shuhari
            </Link>
            <Link className="ga2 button" to="/chi">
              9. CHI
            </Link>
            <Link className="ga2 button" to="/items">
              10. Items
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pages;

"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Sidebar = () => {
  const [Theme, setTheme] = useState("dark");

  useEffect(() => {
    console.log(`🚀 ~ file: Sidebar.tsx:12 ~ Sidebar ~ Theme:`, Theme);
    const htmlElement = document.querySelector("html");
    // htmlElement?.dataset.theme = Theme;
    htmlElement && htmlElement.setAttribute("data-theme", Theme);
  }, [Theme]);

  return (
    <nav
      className="min-h-[90vh] flex flex-col justify-between items-center fixed"
      id="sideNav"
    >
      <div></div>
      <div>
        <Link className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="block lg:hidden">Debojyoti Dey</span>
          <span className="d-none d-lg-block">
            <div className="avatar online">
              <div className="w-24 rounded-full">
                <img
                  className="img-fluid img-profile rounded-circle mx-auto mb-2 "
                  src="/profile.jpg"
                  alt=""
                />
              </div>
            </div>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="flex flex-col items-center">
            <li className="py-2">
              <Link className="nav-link js-scroll-trigger" href="#about">
                About
              </Link>
            </li>
            <li className="py-2">
              <Link className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </Link>
            </li>
            <li className="py-2">
              <Link className="nav-link js-scroll-trigger" href="#education">
                Education
              </Link>
            </li>
            <li className="py-2">
              <Link className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </Link>
            </li>
            <li className="py-2">
              <Link className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="">
        {/* <button className="social-icon bg-gray-100 hover:bg-transparent hover:shadow-lg rounded-full text-black flex justify-center items-center"></button> */}
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onClick={() => {
              setTheme(Theme === "light" ? "dark" : "light");
            }}
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </nav>
  );
};

export default Sidebar;

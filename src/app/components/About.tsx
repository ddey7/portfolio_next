"use client";

import React from "react";
import Typed from "typed.js";

const About = () => {
  const el = React.useRef(null);
  const profession = React.useRef(null);

  React.useEffect(() => {
    const nametyped = new Typed(el.current, {
      strings: ["Debojyoti Dey", "Ripon Dey"],
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    const professiontyped = new Typed(profession.current, {
      strings: ["Full Stack Developer", "Software Engineer"],
      typeSpeed: 50,
      loop: true,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      nametyped.destroy();
      professiontyped.destroy();
    };
  }, []);

  const SocialMedia = [
    {
      icon: "fab fa-linkedin-in",
      name: "linkedin",
      link: "https://www.linkedin.com/in/deydebojyoti/",
    },
    {
      icon: "fab fa-github",
      name: "github",
      link: "https://github.com/ddey7",
    },
    {
      icon: "fab fa-twitter",
      name: "twitter",
      link: "https://twitter.com/d_dey76",
    },
  ];

  return (
    <section className="min-h-screen flex items-center px-6" id="about">
      <div className="resume-section-content">
        {/* <h1 className="mb-0">
          Debojyoti
          <span className="text-primary" ref={el}>
            Dey
          </span>
        </h1> */}

        <h1 className="font-bold text-5xl py-3 h-[60px]" ref={el}></h1>
        <p className="py-3 h-[48px]" ref={profession}></p>
        <div className="subheading mb-5">
          <p> Chaitanyanagar, Malua, Dist: Karimganj, Pin: 788806</p>
          <div className="flex gap-3 mt-2">
            <a
              href="mailto:deyripon123@gmail.com"
              className="badge badge-neutral py-3 flex items-center"
            >
              deyripon123@gmail.com
            </a>
            <a
              href="https://drive.google.com/file/d/1hPTE3NAXIf8Tm4L4ph6DGd0pBrNh-veU/view?usp=sharing"
              className="badge badge-ghost badge-outline py-3 flex items-center"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Full Stack Developer | Studying B.Tech from BVEC, Karimganj{" "} */}

        <div className="social-icons flex gap-3 p-4">
          {SocialMedia?.map((item, index) => (
            <a
              className="social-icon px-4 py-3 bg-gray-100 hover:bg-transparent hover:shadow-lg hover:text-white rounded-full text-black "
              href={item.link}
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Skills = () => {
  return (
    <section className=" min-h-screen flex items-center" id="skills">
      <div className="resume-section-content">
        <h2 className="mb-5 text-3xl font-bold">Skills</h2>
        <div className="subheading mb-3">Programming Languages & Tools</div>
        <ul className="list-inline dev-icons flex gap-3">
          <li className="list-inline-item">
            <i className="fab fa-html5"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-css3-alt"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-js-square"></i>
          </li>

          <li className="list-inline-item">
            <i className="fab fa-react"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-node-js"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-sass"></i>
          </li>

          <li className="list-inline-item">
            <i className="fab fa-wordpress"></i>
          </li>

          <li className="list-inline-item">
            <i className="fab fa-npm"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-git"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-github"></i>
          </li>
          <li className="list-inline-item">
            <i className="fab fa-bootstrap"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-database"></i>
          </li>
          <li className="list-inline-item">
            <i className="fa fa-terminal"></i>
          </li>
          <li className="list-inline-item ">
            <img src="/aws.svg" alt="aws icon" width="20" height="20" />
          </li>
          <li className="list-inline-item">
            <img src="/jenkins.svg" alt="jenkins icon" width="20" height="20" />
          </li>
        </ul>
        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Mobile-First, Responsive Design
          </li>
          <li>
            <span className="fa-li">
              <i className="fas fa-check"></i>
            </span>
            Cross Browser Testing & Debugging
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;

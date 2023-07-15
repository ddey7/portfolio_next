import React from "react";

const Experience = () => {
  const ExperienceArray = [];

  return (
    <section
      className="resume-section min-h-screen flex items-center"
      id="experience"
    >
      <div className="px-6">
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Full Stack Developer</h3>
            <div className="subheading mb-3">Freelance</div>
            <p>
              Working as a Full Stack Developer and worked with the team on some
              exciting Projects.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">April 2022 - Present</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Software Developer</h3>
            <div className="subheading mb-3">Wixyco India</div>
            <p>
              Working as a Software Developer and worked with the team on some
              exciting Projects.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">September 2020 - April 2022</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Web Developer Intern</h3>
            <div className="subheading mb-3">Web.Com India</div>
            <p>
              Worked and developed a project titled "Building Permission of
              Nagaon District" for Municipality Board, <br /> Nagaon, Assam for
              effective permission allowance to builders.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">January 2020 - February 2020</span>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0">Hardware & Networking Internship</h3>
            <div className="subheading mb-3">Datacom IT Solution</div>
            <p>
              Worked as a Hardware and Networking Operator and learned about the
              key elements of Hardware and Network.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">June 2019 - July 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

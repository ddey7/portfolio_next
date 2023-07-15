import React from "react";

const Educations = () => {
  return (
    <section className="min-h-screen flex items-center" id="education">
      <div className="px-6">
        <h2 className="text-3xl font-bold mb-3">Education</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="flex-grow-1">
            <h3 className="mb-0 text-xl font-semibold">
              Barak Valley Engineering College
            </h3>
            <div className="subheading mb-1">Karimganj, Assam</div>

            <div className="subheading mb-3">Bachelor of Engineering</div>
            <div>Computer Science Engineering</div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2020 - Present</span>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="flex-grow-1">
            <h3 className="mb-0 text-xl font-semibold">Nowgong Polytechnic</h3>
            <div className="subheading mb-3">Diploma in Engineering</div>
            <div>Computer Engineering</div>
          </div>
          <div className="flex-shrink-0">
            <span className="text-primary">August 2017 - August 2020</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;

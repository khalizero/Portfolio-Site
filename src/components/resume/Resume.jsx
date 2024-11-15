import React from "react";
import "./Resume.css";
import ResumeBox from "./ResumeBox";

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section_title" data-aos="zoom-in">
        Resume
      </h2>
      <span className="section_subtitle" data-aos="zoom-in">
        My personal journey
      </span>

      <div className="resume_container container grid">
        <ResumeBox
          heading="Education"
          iconClass="graduation-cap"
          qualification={[
            {
              title: "Bachelor In Computer Science",
              location: "Virtual University, Lahore",
              calender: "Present",
            },
            {
              title: "Intermediate",
              location: "Degree College, M.B.DIN",
              calender: "2020 - 2022",
            },
            {
              title: "Matriculation",
              location: "Govt High School, M.B.DIN",
              calender: "2007 - 2019",
            },
          ]}
        />

        <ResumeBox
          heading="Work"
          iconClass="briefcase-alt"
          qualification={[
            {
              title: "MERN Stack Developer",
              location: "Business Solutions And Services - Lahore",
              calender: "January 2022 - Present",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Resume;

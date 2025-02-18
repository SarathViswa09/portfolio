import React from "react";
import resumePDF from "../assets/Sarath.pdf";

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <a href={resumePDF} download="Sarath.pdf" className="resume-link">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

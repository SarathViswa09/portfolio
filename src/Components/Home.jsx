import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>Check out my work and resume below.</p>
      <a 
        href="https://www.linkedin.com/in/sarath-chandra-viswanadh-nagadevara-1b7765194/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="linkedin-link"
      >
        <FaLinkedin size={40} /> LinkedIn
      </a>
    </div>
  );
};

export default Home;

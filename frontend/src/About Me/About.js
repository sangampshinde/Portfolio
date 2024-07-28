import React from 'react';
import "./About.css";
import {useNavigate} from "react-router-dom"

function About() {

  const navigate =useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };


  return (
    <div className="container">
      {/* Name with Animation */}
      <div className="header">
        <h1 className="name">Sangam Shinde</h1>
        <p className="profession">Full Stack Developer</p>
      </div>

      {/* Skills Section */}
      <div className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {/* Replace these with your actual skills */}
          <span className="skill">JavaScript</span>
          <span className="skill">React</span>
          <span className="skill">Angular</span>
          <span className="skill">Node.js</span>
          <span className="skill">CSS</span>
          <span className="skill">HTML</span>
          <span className="skill">Express</span>
          <span className="skill">MongoDB</span>
          <span className="skill">Tailwind CSS</span>
          <span className="skill">RESTful API's</span>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:sangampshinde@gmail.com">sangampshinde@gmail.com</a></p>
          <p>Phone: <a href="tel:(+91)9823448966">(+91)9823448966 </a></p>
        </div>
      </div>

      
    

      {/* Resume Button */}
      <div className="resume-button-container">
        <a href="/sangam_shinde_resume.pdf" download className="btn btn__primary">Download Resume</a>
      </div>


      {/* Back button */}
      <div className="back-button-container">
        <button onClick={handleBackClick} className="btn btn__secondary">Back to Portfolio</button>
      </div>

      
    </div>

  );
}

export default About;

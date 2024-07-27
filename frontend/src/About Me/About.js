import React from 'react';
import "./About.css";

function About() {
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
        <form className="contact-form">
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-input" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-input" rows="4"></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </div>

      {/* Resume Button */}
      <div className="resume-button-container">
        <a href="../../public/sangam_shinde_resume.pdf" download className="btn btn__primary">Download Resume</a>
      </div>
    </div>
  );
}

export default About;

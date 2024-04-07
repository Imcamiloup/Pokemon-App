// About.jsx
import React from 'react';
import './About.css';
import image from "../../assets/me.jpg";

const About = () => {
  return (

    <div className="about-container">
      <h2 className="about-title">Luis Gómez R.</h2>
      <img src= {image} alt="Luis Gómez" className="about-image" />
      <p className="about-description">
      I am a mathematics student in my last semesters and a
passionate Full Stack developer. My background in
mathematics has given me a solid foundation in logic and
mathematical skills, which I apply effectively in problem
solving and solution development.
effectively in problem solving and developing creative
solutions.
</p>
<p className="about-description">
As a Full Stack developer, I have experience in frontend
development using HTML, CSS and JavaScript, as well as
using frameworks such as React.js and Angular. On the
backend, I can create RESTful APIs with Node.js and Express,
and work with databases such as MongoDB and SQL.
</p>
<p className="about-description">
In addition to my technical skills, I possess soft skills such as
effective communication, teamwork and ability to learn
quickly. I am motivated to grow professionally, collaborate
with others, and apply my logical and mathematical skills in
developing innovative web solutions.
</p>
<p className="about-description">
I am excited for the opportunity to combine my passion for
mathematics and web development. I am ready to face
challenges, learn from mentors and contribute to the success
of a dynamic team.
      </p>
    </div>
  );
}

export default About;

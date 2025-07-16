import '../styles/About.css';
import Html from  "../assets/HTML.webp"
import Css from "../assets/css.png"
import JavaScript from "../assets/JavaScript.png"
import Bootstrap from "../assets/Bootstrap.png"
import TypeScript from "../assets/typescript.webp"
import React from "../assets/React.png"
import Vite from "../assets/Vite.png"
import Git from "../assets/Git.png"
import Github from "../assets/Github.png"
import Responsive from "../assets/Responsive.png"
import Figma from "../assets/figma.webp"

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          Hello! I'm <strong>Zakariyo</strong>, a Frontend Developer from Tashkent. I'm interested in creating web applications, portfolio sites, and modern user interfaces.
        </p>

        <div className="skills">
          <h3>My knowledge</h3>
          <ul className="skill-list">
            <li><img src={Html} alt="html" /> HTML</li>
            <li><img src={Css} alt="css" /> CSS</li>
            <li><img src={JavaScript} alt="JavaScript" />JavaScript</li>
            <li><img src={Bootstrap} alt="Bootstrap" />Bootstrap</li>
            <li><img src={TypeScript} alt="TypeScript" /> TypeScript</li>
            <li> <img src={React} alt="React" />React</li>
            <li> <img src={Vite} alt="Vite" />Vite</li>
            <li> <img src={Git} alt="Git" />Git</li>
            <li> <img src={Github} alt="GitHub" />GitHub</li>
            <li><img src={Responsive} alt="Design" /> Responsive design</li>
            <li><img src={Figma} alt="FIGMA" /> Figma</li>
          </ul>
        </div>

        <div className="experience">
          <h3>Experience</h3>
          <p>
           I have gained experience in portfolio and business sites, CRUD applications, and personal projects. With each project, I strive to solve problems, bring designs to life, and increase speed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

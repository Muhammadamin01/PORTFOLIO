import '../styles/About.css';

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
           <a href=""> <li><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/html-512.png" alt="html" /> HTML</li></a>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="css" /> CSS</li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="html" />JavaScript</li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024  " alt="html" />Bootstrap</li>
            <li><img src="https://w7.pngwing.com/pngs/74/362/png-transparent-typescript-plain-logo-icon-thumbnail.png" alt="html" /> TypeScript</li>
            <li> <img src="https://www.logo.wine/a/logo/React_(web_framework)/React_(web_framework)-Logo.wine.svg" alt="React" />React</li>
            <li> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1200px-Vitejs-logo.svg.png" alt="Vite" />Vite</li>
            <li> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png" alt="Git" />Git</li>
            <li> <img src="https://img.icons8.com/m_outlined/512/github.png" alt="GitHub" />GitHub</li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Responsive_Web_Design_Logo.svg/1024px-Responsive_Web_Design_Logo.svg.png" alt="Design" /> Responsive design</li>
            <li><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="FIGMA" /> Figma</li>
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

import '../styles/Project.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-alt">
      <h2 className="section-title">🚀 My Portfolio Projects</h2>

      <div className="cards">

        <div className="project-card-alt">
          <div className="card-body">
            <h3>Task Manager</h3>
            <p>To-do list app: has the function of writing tasks, deleting them, and marking them as completed.</p>
            <div className="tech-used">
              <span>React</span>
              <span>CSS</span>
              <span>LocalStorage</span>
            </div>
            <div className="card-actions">
              <a href="C:\Users\user\Desktop\Новая папка (2)\sertifikat-proekt">🔗 Demo</a>
              <a href="#">💻 GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card-alt">
          <div className="card-body">
            <h3>Weather Forecast</h3>
            <p>Get weather information by city name. Powered by OpenWeatherMap API.</p>
            <div className="tech-used">
              <span>React</span>
              <span>API</span>
              <span>JavaScript</span>
            </div>
            <div className="card-actions">
              <a href="#">🔗 Demo</a>
              <a href="#">💻 GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card-alt">
          <div className="card-body">
            <h3>Portfolio Web</h3>
            <p>Responsive portfolio site - has animations, page transitions, and a contact form.</p>
            <div className="tech-used">
              <span>React</span>
              <span>CSS Animations</span>
              <span>EmailJS</span>
            </div>
            <div className="card-actions">
              <a href="#">🔗 Demo</a>
              <a href="#">💻 GitHub</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

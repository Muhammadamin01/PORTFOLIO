import { motion } from "framer-motion";
import "../styles/Skills.css";

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 90 },
  { name: "JavaScript", percent: 70 },
  { name: "TypeScript", percent: 99 },
  { name: "React", percent: 80 },
  { name: "Bootstrap", percent: 100 },
  { name: "Git & GitHub", percent: 80 },
  { name: "Figma", percent: 100 },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-bar"
            key={index}
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.percent}%` }}
            transition={{ duration: 1.2, delay: index * 0.1 }}
          >
            <span>{skill.name}</span>
            <motion.div className="skill-fill">
              <span>{skill.percent}%</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

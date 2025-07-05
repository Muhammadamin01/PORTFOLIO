import "../styles/Home.css";
import myPhoto from "../assets/my-photo.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="overlay" />

      <div className="home-container">
        {/* Left side: text */}
        <motion.div
          className="home-text"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <h1>Hello, I am Zakariyo</h1>
          <h2>Frontend Developer | React & TypeScript</h2>
          <p className="bio">
            Hello, I'm Zakariyo. I'm a young and passionate frontend
            developer. My main focus is on making user interfaces beautiful,
            fast and interactive. I love working with React, TypeScript, CSS and
            I'm always looking to learn new technologies.{" "}
          </p>
          <a href="#contact" className="home-btn">
            write to me
          </a>
        </motion.div>

        <motion.div
          className="home-photo"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <img src={myPhoto} alt="My profile" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

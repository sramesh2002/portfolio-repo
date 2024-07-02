import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import steamSS from '../assets/gameSearch.png';
import droneSS from '../assets/drone.png';
import shortnerSS from '../assets/shortner.png';
import healthSS from '../assets/home.png';

const projects = [
  {
    title: 'Steam Game Search',
    description: 'Developed a web app for searching and managing favorite Steam games.',
    imageUrl: steamSS,
    codeUrl: 'https://github.com/sramesh2002/CS411_Final_Project',
  },
  {
    title: 'URL Shortener',
    description: 'Implemented a URL shortener using Python and Django.',
    imageUrl: shortnerSS,
    codeUrl: 'https://github.com/sramesh2002/urlshortner',
  },
  {
    title: 'Patient Health Predictor',
    description: 'Developed a web app to predict future health risks of individuals.',
    imageUrl: healthSS,
    codeUrl: 'https://github.com/sramesh2002/Patient-Health-Predictor',
  },
  {
    title: 'Building Inspection Drone',
    description: 'Engineered a drone for surface inspections using LiDAR technology.',
    imageUrl: droneSS,
    codeUrl: 'https://github.com/ScottyB55/StackInspectors',
  },
];

const Projects = () => {
  const [animate, setAnimate] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [inView]);

  return (
    <section id="projects" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project" key={index}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-link">View Code</a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

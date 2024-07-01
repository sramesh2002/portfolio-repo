import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2.</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

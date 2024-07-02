import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import downloadIcon from '../assets/download-solid.svg';

const About = () => {
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
    <section id="about" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Me</h2>
        <p>Hello! I'm Sreedhar Ramesh, a software developer with a solid foundation in computer science and engineering. 
          I recently completed my Master's in Computer Science from the University of Illinois Urbana-Champaign, where I deepened my knowledge in AI, database systems, and cloud computing.
          I also hold a Bachelor's in Computer Engineering from North Carolina State University.
          I'm passionate about leveraging technology to solve real-world problems and constantly seek opportunities to learn and grow in the ever-evolving field of software development.
          </p>
          <a
          href="/path_to_your_resume.pdf"
          className="download-button"
          download="Sreedhar_Ramesh_Resume.pdf"
        >
          <img src={downloadIcon} alt="Resume" />
          Download Resume
        </a>
      </motion.div>
    </section>
  );
};

export default About;

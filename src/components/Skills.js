import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
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
    <section id="skills" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Skills</h2>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Machine Learning</li>
          <li>Data Science</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;

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
        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>Java</li>
              <li>MATLAB</li>
              <li>MySQL</li>
              <li>PySpark</li>
              <li>Python</li>
              <li>R</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Libraries and Tools</h3>
            <ul>
              <li>BeautifulSoup</li>
              <li>Django</li>
              <li>Docker</li>
              <li>Git</li>
              <li>Numpy</li>
              <li>Node</li>
              <li>Pandas</li>
              <li>React</li>
              <li>TensorFlow</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Cloud Technologies</h3>
            <ul>
              <li>AWS (Aurora, DynamoDB, EC2, Elasticache, Glue, Lambda)</li>
              <li>GCP (MySQL)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

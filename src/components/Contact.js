import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
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
    <section id="contact" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-profile">your-profile</a></p>
      </motion.div>
    </section>
  );
};

export default Contact;

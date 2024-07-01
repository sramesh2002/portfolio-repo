import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
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
    <footer ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={animate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <p>© 2024 Your Name. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;

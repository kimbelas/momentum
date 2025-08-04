import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './FutureSection.css';

const FutureSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut'
      }
    }
  };

  const particleVariants = {
    animate: {
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="future-section" data-section="Future">
      <div className="particles-container">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            animate="animate"
            variants={particleVariants}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 10}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      <motion.div 
        ref={ref}
        className="content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <h2>Your Future Starts Now</h2>
        <p>Take the first step towards extraordinary</p>
        <Link to="/contact" className="cta">Get Started</Link>
      </motion.div>
    </section>
  );
};

export default FutureSection;
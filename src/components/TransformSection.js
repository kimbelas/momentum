import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './TransformSection.css';

const TransformSection = () => {
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="transform" className="transform-section" data-section="Transform">
      <motion.div 
        className="floating-element"
        animate="animate"
        variants={floatingVariants}
      />
      
      <motion.div 
        ref={ref}
        className="content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <h2>Transform Ideas Into Reality</h2>
        <p>Where creativity meets possibility</p>
        <Link to="/services" className="cta">Explore More</Link>
      </motion.div>
    </section>
  );
};

export default TransformSection;
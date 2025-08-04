import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './HeroSection.css';

const HeroSection = () => {
  const parallaxRef = useRef([]);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      parallaxRef.current.forEach((el, index) => {
        if (el) {
          const speed = (index + 1) * 20;
          el.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  return (
    <section className="hero-section" data-section="Hero">
      <div 
        className="parallax-element"
        ref={el => parallaxRef.current[0] = el}
        style={{ top: '10%', left: '10%' }}
      />
      <div 
        className="parallax-element"
        ref={el => parallaxRef.current[1] = el}
        style={{ bottom: '20%', right: '15%' }}
      />
      
      <motion.div 
        ref={ref}
        className="content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <h2>Scroll to Discover Your Potential</h2>
        <p>A journey through innovation, one viewport at a time</p>
        <a href="#transform" className="cta">Begin Journey</a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
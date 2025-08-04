import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ScrollIndicator.css';

const ScrollIndicator = ({ sections = null }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [detectedSections, setDetectedSections] = useState([]);
  const [isOnLightBg, setIsOnLightBg] = useState(false);

  useEffect(() => {
    const detectSections = () => {
      const sectionElements = document.querySelectorAll('section');
      const sectionData = Array.from(sectionElements).map((section, index) => ({
        element: section,
        index,
        name: section.getAttribute('data-section') || `Section ${index + 1}`
      }));
      setDetectedSections(sectionData);
    };

    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSectionIndex(index);
          
          // Check if current section has light background
          const bgColor = window.getComputedStyle(section).backgroundColor;
          const isLight = checkIfLightBackground(bgColor);
          setIsOnLightBg(isLight);
        }
      });
    };

    const checkIfLightBackground = (bgColor) => {
      // Parse RGB values
      const rgb = bgColor.match(/\d+/g);
      if (rgb && rgb.length >= 3) {
        // Calculate luminance
        const luminance = (0.299 * parseInt(rgb[0]) + 0.587 * parseInt(rgb[1]) + 0.114 * parseInt(rgb[2])) / 255;
        return luminance > 0.5;
      }
      return false;
    };

    detectSections();
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (index) => {
    const sectionElements = document.querySelectorAll('section');
    if (sectionElements[index]) {
      sectionElements[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Only show if there are multiple sections
  if (detectedSections.length <= 1) {
    return null;
  }

  return (
    <nav 
      className={`scroll-indicator ${isOnLightBg ? 'on-light' : ''}`} 
      aria-label="Section navigation"
    >
      {detectedSections.map((section, index) => (
        <motion.div
          key={index}
          className={`scroll-dot ${activeSectionIndex === index ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          tabIndex={0}
          role="button"
          aria-label={`Go to ${section.name}`}
          onKeyPress={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              scrollToSection(index);
            }
          }}
        />
      ))}
    </nav>
  );
};

export default ScrollIndicator;
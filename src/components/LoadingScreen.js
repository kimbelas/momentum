import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div 
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="loading-content">
        <motion.div
          className="loading-logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="loading-text">Momentum</h1>
        </motion.div>
        
        <motion.div 
          className="loading-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="loading-dots">
            <motion.span
              className="dot"
              animate={{ 
                y: [0, -20, 0],
                background: ["#667eea", "#764ba2", "#f093fb", "#4facfe", "#667eea"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0
              }}
            />
            <motion.span
              className="dot"
              animate={{ 
                y: [0, -20, 0],
                background: ["#764ba2", "#f093fb", "#4facfe", "#667eea", "#764ba2"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            <motion.span
              className="dot"
              animate={{ 
                y: [0, -20, 0],
                background: ["#f093fb", "#4facfe", "#667eea", "#764ba2", "#f093fb"]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
            />
          </div>
        </motion.div>
        
        <motion.p
          className="loading-tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Transforming Digital Experiences
        </motion.p>
      </div>
      
      <motion.div
        className="loading-progress"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
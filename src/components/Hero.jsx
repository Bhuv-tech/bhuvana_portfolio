import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.4
      }
    },
  };

  return (
    <section id="home" className="hero">
      <div className="hero-glow"></div>
      <motion.div 
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.h2 variants={itemVariants} className="hero-subtitle">Hello, I'm</motion.h2>
          <motion.h1 variants={itemVariants} className="hero-title">
            Bhuvaneshwari Mohan
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-description">
            AI Systems Engineer and B.Tech graduate in Artificial Intelligence & Data Science.
            I build production-grade Generative AI systems, Retrieval-Augmented Generation (RAG) pipelines,
            real-time inference services, and scalable machine learning applications.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-cta">
            <a href="#projects" className="btn btn-primary">Explore Projects</a>
            <a href="#contact" className="btn btn-outline">Let's Talk</a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-image-container"
          variants={imageVariants}
        >
          <div className="hero-image-wrapper">
            <motion.div 
              className="hero-image-border"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            />
            <motion.img 
              src="/assets/projects/bhuvi.jpeg" 
              alt="Bhuvaneshwari Mohan" 
              className="hero-image"
              animate={{ y: [0, -12, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 6, 
                ease: "easeInOut" 
              }}
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'; // Fallback profile
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

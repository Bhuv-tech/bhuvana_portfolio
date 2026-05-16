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

  return (
    <section id="home" className="hero">
      <div className="hero-glow"></div>
      <motion.div 
        className="container hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
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
      </motion.div>
    </section>
  );
};

export default Hero;

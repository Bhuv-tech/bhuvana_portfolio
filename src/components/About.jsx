import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="about container">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="section-title"
      >
        <h2 className="gradient-text">About Me</h2>
        <div className="underline"></div>
      </motion.div>

      <div className="about-grid">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="about-content"
        >
          <p>
            B.Tech graduate in <strong>Artificial Intelligence & Data Science</strong> from
            St. Joseph College of Engineering, focused on building production-grade AI systems
            and intelligent backend architectures.
          </p>

          <p>
            My work centers around Generative AI, Retrieval-Augmented Generation (RAG), real-time
            inference systems, and scalable machine learning applications. I enjoy designing
            solutions that combine analytical thinking, system architecture, and practical AI
            deployment.
          </p>

          <p>
            Recently, I presented research at ICRREDM 2026 on facial-expression-driven intent
            inference for assistive communication systems, exploring the intersection of deep
            learning and context-aware AI.
          </p>

          <div className="education-list">
            <h3>Education</h3>
            <div className="edu-item">
              <h4>B.Tech in Artificial Intelligence & Data Science</h4>
              <p>St. Joseph College of Engineering (2022 – 2026)</p>
              <span className="edu-meta">CGPA: 8.03 / 10.0</span>
            </div>
            <div className="edu-item">
              <h4>Higher Secondary Education (Class XII)</h4>
              <p>Bosco Academy Matriculation Higher Secondary School (2021)</p>
              <span className="edu-meta">Percentage: 79.96%</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { 
              opacity: 1, 
              x: 0,
              transition: { duration: 0.6, delay: 0.2 }
            }
          }}
          className="about-stats glass"
        >
          <div className="stat-card">
            <span className="stat-number">5+</span>
            <span className="stat-label">AI Systems Built</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">Real-Time</span>
            <span className="stat-label">AI Applications</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">1</span>
            <span className="stat-label">Conference Research Paper</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

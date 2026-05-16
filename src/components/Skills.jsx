import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'LLM & Generative AI',
    skills: ['LangChain', 'Retrieval-Augmented Generation (RAG)', 'ChromaDB', 'Gemini API', 'Ollama', 'Prompt Engineering']
  },
  {
    title: 'Machine Learning & Deep Learning',
    skills: ['Scikit-learn', 'TensorFlow', 'CNN', 'LSTM', 'XGBoost', 'Prophet']
  },
  {
    title: 'Backend & Frameworks',
    skills: ['FastAPI', 'Django', 'Flask', 'Rasa', 'Streamlit', 'React']
  },
  {
    title: 'Databases, Tools & Visualization',
    skills: ['PostgreSQL', 'Git', 'Pandas', 'Plotly', 'Chart.js']
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section id="skills" className="skills container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2 className="gradient-text">Technical Expertise</h2>
        <div className="underline"></div>
      </motion.div>
      
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className="skill-category glass"
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: 'rgba(0, 242, 255, 0.3)' }}
          >
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill, sIndex) => (
                <span key={sIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;

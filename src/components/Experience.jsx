import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
  {
    company: 'Atandra Energy Pvt. Ltd.',
    role: 'Software Department Intern',
    period: '01/2026 – 04/2026',
    desc: [
      'Developed a Historical Billing Prediction System for revenue forecasting.',
      'Implemented a fallback intelligence layer for sparse filter combinations.',
      'Built a Flask backend for real-time inference with glassmorphism Plotly dashboards.'
    ]
  },
  {
    company: 'SalesQueen Software Solutions',
    role: 'Data Analysis Intern',
    period: '07/2025 – 07/2025',
    desc: [
      'Performed EDA on business datasets using Pandas, Matplotlib, and Seaborn.',
      'Designed interactive dashboards with KPI cards and performance metrics.',
      'Applied data cleaning techniques to transform raw records into structured reports.'
    ]
  },
  {
    company: 'HETA Eduversity (OPC) Pvt. Ltd.',
    role: 'Full Stack Development Intern',
    period: '08/2024 – 09/2024',
    desc: [
      'Built web components using full-stack Python frameworks.',
      'Contributed to feature development across UI and server-side modules.',
      'Applied REST principles and Django-based development practices.'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        <h2 className="gradient-text">Professional Journey</h2>
        <div className="underline"></div>
      </motion.div>
      
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content glass">
              <span className="exp-period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <ul>
                {exp.desc.map((item, iIndex) => (
                  <li key={iIndex}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

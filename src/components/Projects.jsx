import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';

const projectsData = [
  {
    title: 'Smart Expense Tracker with ML Prediction',
    tech: 'Python, Django, Scikit-learn, Chart.js, SQLite, Gunicorn, Render',
    image: '/assets/projects/expense-tracker.png',
    desc: [
      'Developed a full-stack Django expense management app with user authentication and ML-based prediction.',
      'Built an analytics dashboard with Chart.js for category-wise expense visualization.'
    ],
    tag: 'Full-Stack'
  },
  {
    title: 'EduTrack - Student Performance Analyzer',
    tech: 'Python, Streamlit, Pandas, Matplotlib, Seaborn',
    image: '/assets/projects/edutrack.png',
    desc: [
      'Designed a wellness scoring system aggregating IQ, study habits, and motivation.',
      'Delivered dual-chart visualizations with personalized recommendations.'
    ],
    tag: 'Analytics'
  },
  {
    title: 'Ironlift - Anemia Severity Prediction',
    tech: 'Python, Scikit-learn, KNIME, Streamlit',
    image: '/assets/projects/ironlift.png',
    desc: [
      'Built a clinical tool predicting anemia severity using Random Forest Classifier.',
      'Engineered WHO-aligned rule-based thresholds for severity classification.'
    ],
    tag: 'Healthcare AI'
  },
  {
    title: 'RAG-Powered CRM Analytics Chatbot',
    tech: 'Python, LangChain, ChromaDB, FastAPI, PostgreSQL, Gemini API',
    image: '/assets/projects/crm-chatbot.png',
    desc: [
      'Architected a Text-to-SQL pipeline for natural language business queries.',
      'Built a hybrid RAG retrieval layer with intent-aware re-ranking.'
    ],
    tag: 'GenAI'
  },
  {
    title: 'AI Meeting Minutes Generator (MoM)',
    tech: 'Python, Sarvam AI, Gemini API, Streamlit, ReportLab, WASAPI',
    image: '/assets/projects/meeting-minutes.png',
    desc: [
      'Built an audio-to-document pipeline supporting real-time transcription.',
      'Designed a hallucination-controlled prompt layer for structured Action Items.'
    ],
    tag: 'GenAI'
  },
  {
    title: 'Energy Consumption Forecasting System',
    tech: 'Python, Prophet, LightGBM, XGBoost, LSTM, Transformer, Plotly',
    image: '/assets/projects/energy-forecast.png',
    desc: [
      'Benchmarking platform comparing five forecasting models on hourly energy data.',
      'Engineered cyclical time encodings to capture temporal patterns.'
    ],
    tag: 'Forecasting'
  },
  {
    title: 'Facial Intent Recognition System',
    tech: 'Python, FastAPI, React, CNN (FER-2013), Ollama, SQLite, WebSockets',
    image: '/assets/projects/facial-intent.png',
    desc: [
      'Trained a CNN achieving 64% accuracy for real-time emotional signal analysis.',
      'Zero-data-retention architecture for edge-only processing.'
    ],
    tag: 'Computer Vision'
  },
  {
    title: 'Rasa-Based PDF QA Chatbot',
    tech: 'Python, Rasa, pypdfplumber, BM25, TF-IDF, Ollama, Streamlit',
    image: '/assets/projects/rasa-chatbot.png',
    desc: [
      'Document QA combining Rasa dialogue with hybrid BM25 + TF-IDF retrieval.',
      'Implemented relevance thresholds to detect and prevent hallucinations.'
    ],
    tag: 'Document AI'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="projects container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        <h2 className="gradient-text">Featured Projects</h2>
        <div className="underline"></div>
        <p className="section-subtitle">Hover over cards to see details</p>
      </motion.div>
      
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;

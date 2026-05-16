import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ handleShuffle, project, position, isFront }) => {
  const [showDetails, setShowDetails] = useState(false);
  const dragRef = useRef(0);

  // Position-based styles
  const getZIndex = () => {
    if (position === "front") return 10;
    if (position === "middle") return 5;
    return 0;
  };

  const getRotation = () => {
    if (position === "front") return -6;
    if (position === "middle") return 0;
    return 6;
  };

  const getX = () => {
    if (position === "front") return "0%";
    if (position === "middle") return "20%";
    return "40%";
  };

  const getOpacity = () => {
    if (position === "front") return 1;
    if (position === "middle") return 0.8;
    return 0.6;
  };

  const handleCardClick = () => {
    if (isFront) {
      setShowDetails(!showDetails);
    }
  };

  return (
    <motion.div
      style={{
        zIndex: getZIndex(),
        opacity: getOpacity(),
        cursor: isFront ? (showDetails ? 'pointer' : 'grab') : 'default'
      }}
      animate={{
        rotate: getRotation(),
        x: getX(),
        scale: isFront ? 1 : 0.95
      }}
      drag={isFront && !showDetails}
      dragElastic={0.35}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      onDragStart={(e) => {
        dragRef.current = e.clientX;
      }}
      onDragEnd={(e) => {
        if (dragRef.current - e.clientX > 100) {
          handleShuffle();
          setShowDetails(false);
        }
        dragRef.current = 0;
      }}
      onClick={handleCardClick}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`project-card-stack glass ${isFront ? 'is-front' : ''} ${showDetails ? 'show-details' : ''}`}
    >
      <div className="card-inner">
        {/* Front Face: Image Only */}
        <div className="card-face card-front">
          <div className="project-image-wrapper">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image-stack" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'; // Fallback
              }}
            />
            <div className="project-tag-stack">{project.tag}</div>
          </div>
          <div className="project-title-preview">
            <h3>{project.title}</h3>
            <p className="click-hint">Click to see details</p>
          </div>
        </div>

        {/* Back Face / Details Overlay: Full Info */}
        <AnimatePresence>
          {showDetails && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="card-details-overlay"
            >
              <h3>{project.title}</h3>
              <ul className="project-desc-stack">
                {project.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="project-tech-stack">
                {project.tech.split(', ').map((t, i) => (
                  <span key={i} className="tech-tag-stack">{t}</span>
                ))}
              </div>
              <button 
                className="btn btn-primary close-details"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowDetails(false);
                }}
              >
                Back to View
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const cardRef = useRef(null);

  // Motion values for mouse position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Springs for smooth movement
  const rotateX = useSpring(useTransform(y, [-150, 150], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-150, 150], [-15, 15]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current || showDetails) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate coordinates relative to card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = (e) => {
    // Only toggle on tap/click
    setShowDetails(!showDetails);
    // Reset tilt
    x.set(0);
    y.set(0);
  };

  return (
    <div 
      style={{ perspective: 1000 }} 
      className="project-card-container"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
        style={{
          rotateX: showDetails ? 0 : rotateX,
          rotateY: showDetails ? 0 : rotateY,
          transformStyle: "preserve-3d",
          cursor: 'pointer'
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
        className={`project-card glass ${showDetails ? 'show-details' : ''}`}
      >
        <div className="card-inner" style={{ transform: "translateZ(30px)" }}>
          {/* Front Face: Image & Title */}
          <div className="project-image-wrapper">
            <img 
              src={project.image} 
              alt={project.title} 
              className="project-image" 
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'; // Fallback
              }}
            />
            <div className="project-tag" style={{ transform: "translateZ(40px)" }}>{project.tag}</div>
            <div className="project-title-preview">
              <h3>{project.title}</h3>
              <span className="mobile-hint">Click / Tap to view details</span>
            </div>
          </div>

          {/* Details Overlay */}
          <div className="card-details-hover">
            <div className="hover-content">
              <h3>{project.title}</h3>
              <ul className="project-desc">
                {project.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="project-tech">
                {project.tech.split(', ').map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>
              <span className="mobile-hint close-hint">Click / Tap to close</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

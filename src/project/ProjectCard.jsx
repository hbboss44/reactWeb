import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

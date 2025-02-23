import React from "react";
import { motion } from "framer-motion";
// import "../styles/skills.css";
import htmlLogo from "../Images/html-5 (2).png";
import cssLogo from "../Images/css-3 (1).png";
import jsLogo from "../Images/js.png";
import reactLogo from "../Images/react (1).png";
import bootstrap from "../Images/bootstrap.png"
import SkillProp from "./SkillProp";
import "../project/skills.css"


const Skills = () => {
    const skills = [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: jsLogo },
      { name: "React", logo: reactLogo },
      { name: "Bootstrap", logo: bootstrap },
    ];

  return (
    <section className="skills-container">
      <h2 className="skills-title">My Skills & Expertise</h2>
      <p className="skills-intro">Here are the technologies I work with:</p>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* <SkillProp imgSource={skill.logo} imgAlternate={skill.name} className="skill-logo"/>
            <SkillProp text={skill.name} className="skill-name"/> */}
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

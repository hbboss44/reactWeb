import React, { useEffect, useState } from "react";
import "../project/homepage.css";
import '../project/home.css'
import { motion } from "framer-motion";
import profileImage from "../Images/image.png";
import { Link } from "react-router-dom";
import { ripples } from "ldrs";

const HomePage = () => {
  ripples.register()
  let [load,setload]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setload(false)
 }, 3000);
  })
  return (
    <>
    {
      load?<div className='center-ripples'><l-ripples
      size="150"
      speed="2"
      color="#1a202c"
      ></l-ripples></div>:
      <section className="hero-container">
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="highlight">Ade-Sulaiman Habibullahi</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          Front-end Developer | React Enthusiast
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="btn primary"><Link to="/contact">Hire Me</Link></button>
          <button className="btn secondary"><Link to="/resume">View Resume</Link></button>
        </motion.div>
      </div>
      <motion.div 
        className="pendulum-container"
        initial={{ rotate: -30 }}
        animate={{ rotate: 30 }}
        transition={{ 
          repeat: Infinity, 
          repeatType: "reverse", 
          duration: 2, 
          ease: "easeInOut" 
        }}
      >
        <div className="pendulum"></div>
      </motion.div>
    </section>

    }
    
    </>
  );
};

export default HomePage;

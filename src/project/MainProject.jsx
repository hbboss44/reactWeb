import React from "react";
import Slider from "react-slick";
import ProjectCard from "../project/UseableProject";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import '../project/mainproject.css'
import realEstateProject from "../Images/pro 1.png"
import personalProject from "../Images/project2.png"
import gokadaClone from "../Images/gokada 1.png"
import passwordGenerator from '../Images/passwordGenerator.png'

const MainProject = () => {
    const projectsData = [
        {
          title: "Real Estate Platform",
          description: "A user-friendly website to explore, buy, and rent properties with ease. ",
          image:realEstateProject,
          link: "https://rea-lestate-website.onrender.com",
        },
        {
          title: "My Personal Website",
          description: "A sleek and professional online space showcasing my work, skills, and journey. 🚀",
          image: personalProject,
          link: "https://hbportfolio.onrender.com",
        },
        {
          title: " Gokada Clone Website",
          description: "A sleek and responsive Gokada clone for seamless ride-hailing. 🚀",
          image: gokadaClone,
          link: " https://hbboss44.github.io/Gokadaclone/",
        },
        {
          title: " Password Generator",
          description: "A simple tool to generate strong, random passwords for better security.",
          image: passwordGenerator,
          link: "https://hb-passwordgenerator.onrender.com/",
        },
      ];
      
      // Custom Previous Button
      const PrevArrow = ({ onClick }) => (
        <button className="slider-arrow prev" onClick={onClick}>
          <FaArrowLeft />
        </button>
      );
      
      // Custom Next Button
      const NextArrow = ({ onClick }) => (
        <button className="slider-arrow next" onClick={onClick}>
          <FaArrowRight />
        </button>
      );
      
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 4000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="projects-container">
      <h2>My Projects</h2>
      <Slider {...settings} className="projects-slider">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Slider>
    </section>
  );
};

export default MainProject;

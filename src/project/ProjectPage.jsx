import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import ProjectCard from "../project/ProjectCard";
import file from "../project/Projects.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../styles/projects.css"; // External CSS file

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log(file);
    
    axios.get(file)
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} image={project.image} />
        ))}
        <><h1>Hello</h1></>
      </Slider>
    </section>
  );
};

export default Projects;

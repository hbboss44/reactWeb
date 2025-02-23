import { useEffect, useState } from "react";
import Slider from "react-slick"
import ProjectCard from "../project/ProjectCard.jsx";
import projectsData from "../project/Projects.json"; // Import JSON file
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import "../styles/projects.css"; // External CSS

const Projects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     setProjects(projectsData); // Load data from JSON
//   });

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024, 
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 768, 
//         settings: { slidesToShow: 1 },
//       },
//     ],
//     prevArrow: <button className="prev-btn">‹</button>,
//     nextArrow: <button className="next-btn">›</button>,
//   };

  return (
    // <section className="projects-section">
    //   <h2 className="section-title">My Projects</h2>
    //   <p className="section-description">
    //     Here are some of the projects I've worked on.
    //   </p>
    //   <Slider {...settings} className="projects-slider">
    //     {projects.map((project) => (
    //       <ProjectCard key={project.id} {...project} />,
    //       <ProjectCard/>
    //     ))}
    //   </Slider>
    // </section>
    <>
        <h1>hwllo world</h1>
    </>
  );
};

export default Projects;

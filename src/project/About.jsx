import React from "react";
import "../project/about.css";
import cv from "../project/cv 25.pdf"

const About = () => {
  return (
    <section className="about-container">
      <h2>About Me</h2>
      <p>
      Hey there! I'm Ade-Sulaiman Habibullahi, a frontend web developer with a passion for turning ideas into seamless, visually appealing digital experiences. For me, web development isn't just about writing code—it's about creating something that feels intuitive, engaging, and enjoyable to use.

I work with HTML, CSS and JavaScript to bring designs to life, ensuring they're not just functional but also aesthetically pleasing. Whether it's crafting clean, minimalistic interfaces or building dynamic, interactive layouts, I love the challenge of making the web both beautiful and efficient.<br/><br/> My expertise extends to frameworks like React, and Bootstrap, helping me build responsive and high-performance applications that adapt to the ever-evolving digital landscape.

Beyond the technical side, I'm constantly learning and exploring new ways to improve my craft. Staying updated with industry trends, optimizing performance, and making websites more accessible—these are things I genuinely care about. I believe great web experiences should feel effortless, and I put a lot of thought into ensuring users feel that way when interacting with what I build.

<br/><br/> My journey has been shaped by my upbringing in a close-knit family, where I learned to value experiences over possessions. That mindset reflects in my work—I strive to create experiences that truly matter, ones that leave a lasting impression.

At the core of it all, I love what I do. Every project is an opportunity to innovate, solve problems, and create something meaningful. And that's what keeps me going—one line of code at a time.
      </p>
      <a href={cv} download className="btn primary">Download CV</a>
    </section>
  );
};

export default About;

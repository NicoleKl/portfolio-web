import React from "react";
import ProjectCard from "./ProjectCard";
import './css/Projects.css'

const Projects = () => {
    const myProjects = [{
            link: "https://forecastweatherhere.netlify.app/",
            name: "Weather App",
            description: "Weather forecast in your city (use search or your location)",
            technologies: ["React", "MaterialUI", "APIs"],
            image: process.env.PUBLIC_URL + './images/weatherApp-img.jpeg',
            gitHub: "https://github.com/NicoleKl/weather-app"
        },
        {
            link: "https://infinitygalleryhere.netlify.app/",
            name: "Infinity Gallery",
            description: "Photo gallery with endless scroll",
            technologies: ["React"],
            image: process.env.PUBLIC_URL + './images/gallery-img.jpg',
            gitHub: "https://github.com/NicoleKl/infinityScrollGallery"

        },
        {
            link: "https://snakegamehere.netlify.app",
            name: "Classic Snake Game",
            description: "Childhood memories come alive",
            technologies: ["HTML", "SCSS", "JavaScript"],
            image: process.env.PUBLIC_URL + './images/snakeGame-img.jpg',
            gitHub: "https://github.com/NicoleKl/snakeGame"
        },
    ]
  return (
      <a id="projects" className="section projectsSection">
        <div className="container">
            <h1 className="projectsSection_header">
            Projects
            </h1>
              <div className="projectsGrid">
                  {myProjects.map((project, i) => {
                      return (<ProjectCard
                          key={i}
                          link={project.link}
                          image={project.image}
                          name={project.name}
                          description={project.description}
                          technologies={project.technologies}
                          gitHub={project.gitHub}
                      />)
                  })}
            </div>
            
        </div>
    </a>
  );
};

export default Projects;
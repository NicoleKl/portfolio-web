import React from "react";
import ProjectCard from "./ProjectCard";
import './css/Projects.css'

const Projects = () => {
    const myProjects = [{
            link: "https://original-snake-game.netlify.app",
            name: "Classic snake 2d game",
            description: "Childhood memories come alive",
            technologies: ["HTML", "SCSS", "JavaScript"],
            image: process.env.PUBLIC_URL + './images/snakeGame-img.jpg',
        },
        {
            link: "https://gallery-with-infinite-scroll.netlify.app",
            name: "Infinite Scroll Gallery",
            description: "Scroll endlessly looking at the photos",
            technologies: ["React"],
            image: process.env.PUBLIC_URL + './images/gallery-img.jpg',

        }
    ]
  return (
      <div id="projects" className="section projectsSection">
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
                      />)
                  })}
            </div>
            
        </div>
    </div>
  );
};

export default Projects;
import React from "react";
import './css/ProjectCard.css'

const ProjectCard = ({link, image, name, description, technologies}) => {

  return (
    <a className=" projectCard" href={link} target="_blank">
      <div className="projectCard_imageContainer">
        <img className="projectCard_image" src={image} />
      </div>

      <div className="projectCard_textContainer">
        <h3 className="projectCard_name">{name}</h3>
        <p className="projectCard_desc">{description}</p>
        <p className="projectCard_tech" >
          {technologies.map((tech, i) => {
            return <span key={i}>#{tech} </span>;
          })}
        </p>

        <div className="projectCard_buttonsContainer">
          <a className="projectCard_button viewBtn" href={link} target="_blank">View</a>
          <a className="projectCard_button githubBtn" href={link} target="_blank">GitHub</a>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
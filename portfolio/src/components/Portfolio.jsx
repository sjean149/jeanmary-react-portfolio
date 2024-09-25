import React from "react";
import profile from "../images/profile.jpg";
import skycast from '../images/skycast.png'
import techblog from '../images/tech-blog.png';
import notetaker from '../images/expressthoughts.png'
import rebooked from '../images/rebooked.png'

function Portfolio() {
  const projects = [
    {
      title: "Rebooked",
      image: rebooked,
      deployedUrl: "https://rebooked-68bf.onrender.com/",
      githubUrl: "https://github.com/mbdrag3/ReBooked.git",
    },
    {
      title: "Pet Tinder",
      image: "https://thumbs.dreamstime.com/b/group-pets-23770942.jpg",
      deployedUrl: "https://tendr-va9s.onrender.com/",
      githubUrl: "https://github.com/sjean149/PetTinder-Group-Project2.git",
    },
    {
      title: "SkyCast",
      image: skycast,
      deployedUrl: "https://tendr-va9s.onrender.com/",
      githubUrl: "https://github.com/sjean149/PetTinder-Group-Project2.git",
    },
    {
      title: "ExpressThoughts",
      image: notetaker,
      deployedUrl: "https://note-taker-wypp.onrender.com/",
      githubUrl: "https://github.com/sjean149/PetTinder-Group-Project2.git",
    },
    
    {
      title: "Tech-blog",
      image: techblog,
      deployedUrl: "https://tech-blog-18ft.onrender.com/",
      githubUrl: "https://github.com/sjean149/tech-blog.git",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <a
              href={project.deployedUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={project.image} alt={project.title} />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Projectss } from "@/constants";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 md:py-20">
        My Projects
      </h1>
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10">
        {Projectss.map((project)=>(
            <ProjectCard src={project.src} title={project.title} description={project.desc} key={project.title} href={project.href}/>

        ))}

      </div>
    </div>
  );
};

export default Projects;

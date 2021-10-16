import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="grid grid-cols-12 gap-10">
      {projects.map((project, idx) => (
        <Project key={idx} project={project} />
      ))}
    </div>
  );
};

export default Projects;

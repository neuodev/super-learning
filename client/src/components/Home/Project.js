import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

const Project = ({ project }) => {
  return (
    <Link
      to={project.to}
      className="col-span-4 border shadow-lg rounded-md cursor-pointer"
    >
      <div className="h-52 border-b w-full overflow-hidden">
        <img
          src={project.src}
          className="inline-block object-cover"
          alt={project.name}
        />
      </div>
      <div className="py-4 px-2">
        <h1 className=" mb-1 text-lg font-semibold text-gray-800 truncate">
          {project.name}
        </h1>

        <ul className="flex items-center justify-start">
          {project.tags.map((tag, idx) => (
            <li
              className="mr-3 text-xs font-light uppercase bg-gray-200 px-2 py-1 rounded-2xl"
              key={idx}
              data-for={"main" + idx}
              data-tip={tag.tip}
              data-iscapture="true"
            >
              <ReactTooltip
                id={"main" + idx}
                place={"top"}
                type={"info"}
                effect={"solid"}
                multiline={true}
              />
              {tag.tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Project;

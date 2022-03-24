import React from "react";
import "./AllProjects.scss";
import CardProject from "../CardProjects/CardProject";

const AllProjects = ({ data }) => {
  const allProjects = data.map((project) => {
    return (
      <CardProject
        key={project.id}
        image={project.image}
        title={project.title}
        description={project.description}
        linkLive={project.liveSite}
        linkGit={project.gitHub}
      />
    );
  });
  return <div className="project-container">{allProjects}</div>;
};

export default AllProjects;

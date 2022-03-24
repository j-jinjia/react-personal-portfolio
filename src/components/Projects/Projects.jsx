import AllProjects from "../AllProjects/AllProjects";
import "./Projects.scss";
import myProjects from "../../data/data";
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__heading">Projects</h2>
      <p>My projects</p>
      <AllProjects data={myProjects} />
    </section>
  );
};

export default Projects;

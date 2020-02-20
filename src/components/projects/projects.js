import React from "react";
import Project from './project/project';
import './projects.scss';

const Projects = ({ projectsData }) => {
  let isReverse = true;
  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <h1 className="projects__header__title">My projects</h1>
      </div>
      <div className="projects__content">
        {projectsData.map(project => {
          isReverse = !isReverse;
          return <Project  key={project.id} title={project.title} description={project.description} isReverse={isReverse} live={project.live} github={project.github}/>
        })}
      </div>
    </section>
  )
}

export default Projects

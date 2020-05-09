import React from 'react';
import style from './projects.module.scss';
import Project from '../project/project';

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="inner-container">
        <div className="section__content">
          <div className={style.projects}>
            <div className="heading">Projects.</div>
            <Project />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
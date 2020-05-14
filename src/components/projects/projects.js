import React from 'react';
import style from './projects.module.scss';
import Project from '../project/project';

const Projects = () => {
  return (
    <div id="projects">
      <div className="inner-container">
        <div>
          <div className={style.projects}>
            <div className="heading">Projects.</div>
            <Project even={0 % 2 === 0} />
            <Project even={1 % 2 === 0} />
            <Project even={2 % 2 === 0} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
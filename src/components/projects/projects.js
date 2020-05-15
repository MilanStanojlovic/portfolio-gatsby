import React from 'react';
import style from './projects.module.scss';
import Project from '../project/project';
import { useStaticQuery, graphql } from 'gatsby'

const Projects = () => {
  const data = useStaticQuery(graphql`
    query{
      allProjectsJson {
        edges {
          node {
            id
            web
            title
            technologies
            image
            imageAlt
            github
            description
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges.map((project, index) => {
    return (
      <Project key={project.node.id}
        even={index}
        title={project.node.title}
        description={project.node.description}
        image={project.node.image}
        imageAlt={project.node.imageAlt}
        technologies={project.node.technologies}
        github={project.node.github}
        web={project.node.web}
      />
    )
  })
  return (
    <div id="projects">
      <div className="inner-container">
        <div>
          <div className={style.projects}>
            <div className="heading">Projects.</div>
            {/* <Project even={0 % 2 === 0} /> */}
            {projects}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
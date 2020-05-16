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
        even={index % 2 === 0}
        title={project.node.title}
        description={project.node.description}
        image={project.node.image}
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
            { projects }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
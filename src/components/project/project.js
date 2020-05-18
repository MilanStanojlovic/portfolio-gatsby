import React from 'react';
import style from './project.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Project = ({ even, title, image, description, technologies, github, web }) => {

  const tech = technologies.map((technology, index) => {
    return <li className="text" key={index}>{technology}</li>
  })
  return (
    <div className={even ? style.projectFlip : style.project}>
      <div className={even ? style.projectFlip__image : style.project__image} style={{ backgroundImage: `url(${image})` }}></div>
      <div className={even ? style.projectFlip__title : style.project__title}><h2 className="heading__secondary">{title}</h2></div>
      <div className={even ? style.projectFlip__description : style.project__description}><p className="text">{description}</p></div>
      <div className={even ? style.projectFlip__technologies : style.project__technologies}>
        <ul className={style.list}>
          {tech}
        </ul>
      </div>
      <div className={even ? style.projectFlip__links : style.project__links}>
        <a href={github} aria-label={`${title} github`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
        </a>
        <a href={web} aria-label={`${title} website`} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faExternalLinkAlt} size="2x" className="icon" />
        </a>
      </div>
    </div>
  )
}

export default Project

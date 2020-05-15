import React from 'react';
import style from './project.module.scss';

const Project = ({ even, title, image, imageAlt, description, technologies, github, web }) => {
  return (
    <div className={even ? style.projectFlip : style.project}>
      <div className={even ? style.projectFlip__image : style.project__image}><img src={image} style={{ width: "100%" }} alt={imageAlt}></img></div>
      <div className={even ? style.projectFlip__title : style.project__title}>{title}</div>
      <div className={even ? style.projectFlip__description : style.project__description}>{description}</div>
      <div className={even ? style.projectFlip__technologies : style.project__technologies}>{technologies}</div>
      <div className={even ? style.projectFlip__links : style.project__links}>{github} {web}</div>
    </div>
  )
}

export default Project

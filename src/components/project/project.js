import React from 'react';
import style from './project.module.scss';

const Project = ({ even }) => {
  return (
    <div className={even ? style.projectFlip : style.project}>
      <div className={even ? style.projectFlip__image : style.project__image}>img</div>
      <div className={even ? style.projectFlip__title : style.project__title}>Title</div>
      <div className={even ? style.projectFlip__description : style.project__description}>Descrip</div>
      <div className={even ? style.projectFlip__technologies : style.project__technologies}>Tech</div>
      <div className={even ? style.projectFlip__links : style.project__links}>github web</div>
    </div>
  )
}

export default Project

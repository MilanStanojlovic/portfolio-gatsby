import React from 'react';
import style from './project.module.scss';

const Project = () => {
  return (
    <div className={style.project}>
      <div className={[style.project__image, 'text'].join(' ')}>img</div>
      <div className={[style.project__title, 'text'].join(' ')}>Title</div>
      <div className={[style.project__description, 'text'].join(' ')}>Descrip</div>
      <div className={[style.project__technologies, 'text'].join(' ')}>Tech</div>
      <div className={[style.project__links, 'text'].join(' ')}>github web</div>
    </div>
  )
}

export default Project

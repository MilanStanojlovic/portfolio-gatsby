import React from 'react';
import style from './about.module.scss';

const About = () => {
  return (
    <div className="section" id="about">
      <div className="inner-container">
        <div className="section__content">
          <div className={style.about__text}>
            <div className="heading__main">
              About.
            </div>
            <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
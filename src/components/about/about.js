import React from 'react';
import style from './about.module.scss';

const About = () => {
  return (
    <div className={[style.about, 'section'].join(' ')}>
      About
    </div>
  )
}

export default About